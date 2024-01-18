import { CharStream, CommonTokenStream, ParseTreeWalker } from "antlr4";
import LKDLLexer from "./parser/LKDLLexer";
import LKDLParser, {
  AddYuanRelContext,
  DelYuanRelContext,
  RelAttrContext,
  RelAttrListContext,
  RelExprContext,
  RelExprListContext,
} from "./parser/LKDLParser";
import LKDLListener from "./parser/LKDLListener";

const input = `张三.(朋友.同学, 老乡.同学.老乡[距离==1公里, 时间==10年].老乡) += 李四;`;
const chars = new CharStream(input);
const lexer = new LKDLLexer(chars);
const tokens = new CommonTokenStream(lexer);
const parser = new LKDLParser(tokens);
const tree = parser.prog();

class MyTreeWalker extends LKDLListener {
  // 退出 relAttr（关系属性） 时，将 relAttr 存入 ctx 中
  exitRelAttr = (ctx: RelAttrContext) => {
    const attr = ctx._lhs.text;
    const val = ctx._rhs.text;

    const relAttr = {
      attr,
      val,
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
    // const relName = ctx.children && ctx.children[0].getText();
  };

  exitRelExprList = (ctx: RelExprListContext) => {};
}

const walker = new MyTreeWalker();
ParseTreeWalker.DEFAULT.walk(walker, tree);
