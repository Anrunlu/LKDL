import { CharStream, CommonTokenStream, ParseTreeWalker } from "antlr4";
import LKDLLexer from "./parser/LKDLLexer";
import LKDLParser, {
  AddYuanRelContext,
  RelAttrContext,
  RelAttrListContext,
  RelExprContext,
  RelExprListContext,
  RelExprSequnceContext,
  SearchExprContext,
  YuanListContext,
} from "./parser/LKDLParser";
import LKDLListener from "./parser/LKDLListener";

const input = `张三.(朋友.同学, 老乡.同学.老乡[距离==1公里, 时间==10年].老乡) += 李四.朋友;`;
const chars = new CharStream(input);
const lexer = new LKDLLexer(chars);
const tokens = new CommonTokenStream(lexer);
const parser = new LKDLParser(tokens);
const tree = parser.prog();

class MyTreeWalker extends LKDLListener {
  // 退出 yuanList（元列表） 时，将 yuanList 存入 ctx 中
  exitYuanList = (ctx: YuanListContext) => {
    const yuanList: any = [];

    ctx.getTokens(LKDLParser.ID).forEach((id) => {
      yuanList.push(id.getText());
    });

    (ctx as any)["myYuanList"] = yuanList;
  };

  // 退出 relAttr（关系属性） 时，将 relAttr 存入 ctx 中
  exitRelAttr = (ctx: RelAttrContext) => {
    const attr = ctx._lhs.text;
    const val = ctx._rhs.text;
    const op = ctx._op.text;

    const relAttr = {
      attr,
      val,
      op,
    };

    (ctx as any)["myRelAttr"] = relAttr;
  };

  // 退出 exitRelAttrList（关系属性列表） 时，将 relAttrList 存入 ctx 中
  exitRelAttrList = (ctx: RelAttrListContext) => {
    const relAttrList: any = [];

    ctx.relAttr_list().forEach((relAttr) => {
      relAttrList.push((relAttr as any)["myRelAttr"]);
    });

    (ctx as any)["myRelAttrList"] = relAttrList;
  };

  // 退出 relExpr（关系表达式） 时，将 relExpr 存入 ctx 中
  exitRelExpr = (ctx: RelExprContext) => {
    // 第一个孩子一定是 relName（关系名）
    const relName = ctx._lhs.text;

    // 第二个孩子如果存在，则是 relAttrList（关系属性列表）
    const relAttrList = ctx._rhs ? (ctx._rhs as any)["myRelAttrList"] : [];

    const relExpr = {
      relName,
      relAttrList,
    };

    (ctx as any)["myRelExpr"] = relExpr;
  };

  // 退出 relExprSequnce（关系表达式序列） 时，将 relExprSequnce 存入 ctx 中
  exitRelExprSequnce = (ctx: RelExprSequnceContext) => {
    const relExprSequnce: any = [];

    ctx.relExpr_list().forEach((relExpr) => {
      relExprSequnce.push((relExpr as any)["myRelExpr"]);
    });

    (ctx as any)["myRelExprSequnce"] = relExprSequnce;
  };

  // 退出 relExprList（关系表达式列表） 时，将 relExprList 存入 ctx 中
  exitRelExprList = (ctx: RelExprListContext) => {
    const relExprList: any = [];

    ctx.relExprSequnce_list().forEach((relExprSequnce) => {
      relExprList.push((relExprSequnce as any)["myRelExprSequnce"]);
    });

    (ctx as any)["myRelExprList"] = relExprList;
  };

  // 退出 searchExpr（搜索表达式） 时，将 searchExpr 存入 ctx 中
  exitSearchExpr = (ctx: SearchExprContext) => {
    const yuanList = (ctx.yuanList() as any)["myYuanList"];

    // relExprList 可能不存在
    const relExprList = ctx.relExprList()
      ? (ctx.relExprList() as any)["myRelExprList"]
      : [];

    const searchExpr = {
      yuanList,
      relExprList,
    };

    (ctx as any)["mySearchExpr"] = searchExpr;
  };

  exitAddYuanRel = (ctx: AddYuanRelContext) => {
    const head = (ctx.searchExpr(0) as any)["mySearchExpr"];
    const tail = (ctx.searchExpr(1) as any)["mySearchExpr"];
    const op = "+=";

    const addYuanRel = {
      head,
      tail,
      op,
    };

    (ctx as any)["myAddYuanRel"] = addYuanRel;

    console.dir(addYuanRel, { depth: Infinity });
  };
}

const walker = new MyTreeWalker();
ParseTreeWalker.DEFAULT.walk(walker, tree);
