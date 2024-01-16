import { CharStream, CommonTokenStream, ParseTreeWalker } from "antlr4";
import LKDLLexer from "./parser/LKDLLexer";
import LKDLParser, {
  AddYuanRelContext,
  DelYuanRelContext,
  RelAttrContext,
  RelExprContext,
} from "./parser/LKDLParser";
import LKDLListener from "./parser/LKDLListener";

const input = `元+=张三;
元+=(中国, 山东);
张三.朋友 += 李四;
张三.朋友[程度=0.8, 时间=2024年01月14日09:43:33] += 李四;
(张三, 李四).朋友.朋友[程度=0.1] += (王五, 赵六);
李四.(小学, "初中()"[距离="10公里()"]) += 实验中学;`;
const chars = new CharStream(input);
const lexer = new LKDLLexer(chars);
const tokens = new CommonTokenStream(lexer);
const parser = new LKDLParser(tokens);
const tree = parser.prog();

class MyTreeWalker extends LKDLListener {
  exitRelExpr = (ctx: RelExprContext) => {
    const attrList: any = [];

    ctx
      .relAttrList()
      ?.relAttr_list()
      .forEach((relAttr) => {
        attrList.push((relAttr as any)["myRelAttr"]);
      });

    const relNode = {
      rel: ctx.ID()?.getText(),
      attr: attrList,
    };

    if (!(ctx.parentCtx as any)["myRelList"]) {
      (ctx.parentCtx as any)["myRelList"] = [];
    }

    (ctx.parentCtx as any)["myRelList"].push(relNode);
  };

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

    console.dir(res, { depth: 5 });
  };

  exitDelYuanRel = (ctx: DelYuanRelContext) => {
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
      op: "-=",
      relList: (ctx.relExprList() as any)["myRelList"],
    };

    console.dir(res, { depth: 5 });
  };
}

const walker = new MyTreeWalker();
ParseTreeWalker.DEFAULT.walk(walker, tree);
