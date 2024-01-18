import { CharStream, CommonTokenStream, ParseTreeWalker } from "antlr4";
import LKDLLexer from "./parser/LKDLLexer";
import LKDLParser, {
  AddYuanRelContext,
  DelYuanRelContext,
  RelAttrContext,
  RelExprContext,
  RelExprListContext,
} from "./parser/LKDLParser";
import LKDLListener from "./parser/LKDLListener";

const input = `张三.(朋友.同学, 老乡.同学.老乡[距离==1公里, 时间==10年]) += 李四;`;
const chars = new CharStream(input);
const lexer = new LKDLLexer(chars);
const tokens = new CommonTokenStream(lexer);
const parser = new LKDLParser(tokens);
const tree = parser.prog();

const relSequence: any = [];

class MyTreeWalker extends LKDLListener {
  exitRelExpr = (ctx: RelExprContext) => {
    const attrList: any = [];

    if (!(ctx.parentCtx as any)["myRelList"]) {
      (ctx.parentCtx as any)["myRelList"] = [];
    }

    // 如果 relExpr 右孩子是 ID，那么它一定是关系链的末尾
    if (ctx._rhs?.ID()) {
      ctx
        .relAttrList()
        ?.relAttr_list()
        .forEach((relAttr) => {
          console.log(111111111);

          attrList.push((relAttr as any)["myRelAttr"]);
        });

      const relNode = {
        rel: ctx._rhs?.ID().getText(),
        attr: attrList,
      };

      (ctx.parentCtx as any)["myRelList"].push(relNode);
    }

    console.log(ctx.relAttrList()?.relAttr_list());

    // 从下到上顺序添加左孩子
    if (ctx.children?.length === 3) {
      ctx
        .relAttrList()
        ?.relAttr_list()
        .forEach((relAttr) => {
          attrList.push((relAttr as any)["myRelAttr"]);
        });

      const relNode = {
        rel: ctx._lhs?.ID().getText(),
        attr: attrList,
      };

      (ctx.parentCtx as any)["myRelList"].push(relNode);
    }
  };

  exitRelExprList = (ctx: RelExprListContext) => {
    console.log((ctx as any)["myRelList"]);
  };

  // 退出 relAttr（关系属性） 时，将 relAttr 存入 ctx 中
  exitRelAttr = (ctx: RelAttrContext) => {
    const attr = ctx._lhs.text;
    const value = ctx._rhs.text;

    const relAttr = {
      attr,
      value,
    };

    (ctx as any)["myRelAttr"] = relAttr;
  };

  exitAddYuanRel = (ctx: AddYuanRelContext) => {
    const heads = ctx
      .yuanList(0)
      .getTokens(LKDLParser.ID)
      .map((id) => id.getText());
    const tails = ctx
      .yuanList(1)
      .getTokens(LKDLParser.ID)
      .map((id) => id.getText());

    const res = {
      heads,
      tails,
      op: "+=",
      relList: (ctx.relExprList() as any)["myRelList"],
    };

    // console.dir(res, { depth: 5 });
  };
}

const walker = new MyTreeWalker();
ParseTreeWalker.DEFAULT.walk(walker, tree);
