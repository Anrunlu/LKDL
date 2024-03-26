import LKDLParser, {
  AddAbsRuleContext,
  AddRuleContext,
  AddTupleContext,
  AddYuanContext,
  DelAbsRuleContext,
  DelRuleContext,
  DelTupleContext,
  DelYuanContext,
  RelAttrContext,
  RelAttrListContext,
  RelExprContext,
  RelExprListContext,
  RelExprSequnceContext,
  SearchExprContext,
  SearchStatContext,
  YuanListContext,
} from "./parser/LKDLParser";
import LKDLListener from "./parser/LKDLListener";
import { parseSearchExprToSearchSequnce } from "./utils/my-parser";
import { parseSequnceToExcuteFormat } from "./utils/op-rule";
import { runCudYuan, runCudTuple, runSearch } from "./excutor";
import { OP } from "./const";

export class MyTreeWalker extends LKDLListener {
  // 退出 yuanList（元列表） 时，将 yuanList 存入 ctx 中
  exitYuanList = (ctx: YuanListContext) => {
    const yuanList: any = [];

    ctx.getTokens(LKDLParser.ID).forEach((id) => {
      yuanList.push(id.getText());
    });

    (ctx as any)["myYuanList"] = yuanList;
  };

  // 退出 relAttr（关系属性）
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

  // 退出 exitRelAttrList（关系属性列表）
  exitRelAttrList = (ctx: RelAttrListContext) => {
    const relAttrList: any = [];

    ctx.relAttr_list().forEach((relAttr) => {
      relAttrList.push((relAttr as any)["myRelAttr"]);
    });

    (ctx as any)["myRelAttrList"] = relAttrList;
  };

  // 退出 relExpr（关系表达式）
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

  // 退出 relExprSequnce（关系表达式序列）
  exitRelExprSequnce = (ctx: RelExprSequnceContext) => {
    const relExprSequnce: any = [];

    ctx.relExpr_list().forEach((relExpr) => {
      relExprSequnce.push((relExpr as any)["myRelExpr"]);
    });

    (ctx as any)["myRelExprSequnce"] = relExprSequnce;
  };

  // 退出 relExprList（关系表达式列表）
  exitRelExprList = (ctx: RelExprListContext) => {
    const relExprList: any = [];

    ctx.relExprSequnce_list().forEach((relExprSequnce) => {
      relExprList.push((relExprSequnce as any)["myRelExprSequnce"]);
    });

    (ctx as any)["myRelExprList"] = relExprList;
  };

  // 退出 searchExpr（搜索表达式）
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

  // 添加多元组
  exitAddTuple = (ctx: AddTupleContext) => {
    const head = (ctx.searchExpr(0) as any)["mySearchExpr"];
    const tail = (ctx.searchExpr(1) as any)["mySearchExpr"];

    const lhsSearchSequnce = parseSearchExprToSearchSequnce(head);
    const rhsSearchSequnce = parseSearchExprToSearchSequnce(tail);

    const res = parseSequnceToExcuteFormat(
      lhsSearchSequnce,
      rhsSearchSequnce,
      OP.ADD
    );

    (ctx as any)["myAddYuanRel"] = res;

    runCudTuple(res);
  };

  // 删除多元组
  exitDelTuple = (ctx: DelTupleContext) => {
    const head = (ctx.searchExpr(0) as any)["mySearchExpr"];
    const tail = (ctx.searchExpr(1) as any)["mySearchExpr"];

    const lhsSearchSequnce = parseSearchExprToSearchSequnce(head);
    const rhsSearchSequnce = parseSearchExprToSearchSequnce(tail);

    const res = parseSequnceToExcuteFormat(
      lhsSearchSequnce,
      rhsSearchSequnce,
      OP.DEL
    );

    (ctx as any)["myDelYuanRel"] = res;

    runCudTuple(res);
  };

  // 退出 addYuan （添加元）
  exitAddYuan = (ctx: AddYuanContext) => {
    const yuanList = (ctx.yuanList() as any)["myYuanList"];

    runCudYuan(yuanList, OP.ADD);
  };

  // 退出 delYuan （删除元）
  exitDelYuan = (ctx: DelYuanContext) => {
    const yuanList = (ctx.yuanList() as any)["myYuanList"];

    runCudYuan(yuanList, OP.DEL);
  };

  exitSearchStat = (ctx: SearchStatContext) => {
    const head = (ctx.searchExpr(0) as any)["mySearchExpr"];
    const tail = (ctx.searchExpr(1) as any)["mySearchExpr"];

    const lhsSearchSequnce = parseSearchExprToSearchSequnce(head);
    const rhsSearchSequnce = parseSearchExprToSearchSequnce(tail);

    const res = parseSequnceToExcuteFormat(
      lhsSearchSequnce,
      rhsSearchSequnce,
      OP.GET
    );

    runSearch(res);
  };

  // 添加规则
  exitAddRule = (ctx: AddRuleContext) => {
    const ruleNLText = ctx._nltext.text.replace(/`/g, "");
    const ruleHead = ctx._ruleHead.text.replace(/`/g, "");
    const ruleBody = ctx
      .searchStat_list()
      .map((searchStat) => {
        return searchStat.getText();
      })
      .join("&&");

    const result = {
      op: OP.ADD,
      ruleNLText,
      ruleHead,
      ruleBody,
    };

    console.log(result);
  };

  // 删除规则
  exitDelRule = (ctx: DelRuleContext) => {
    const ruleNLText = ctx._nltext.text.replace(/`/g, "");
    const ruleHead = ctx._ruleHead.text.replace(/`/g, "");
    const ruleBody = ctx
      .searchStat_list()
      .map((searchStat) => {
        return searchStat.getText();
      })
      .join("&&");

    const result = {
      op: OP.DEL,
      ruleNLText,
      ruleHead,
      ruleBody,
    };

    console.log(result);
  };

  // 添加抽象规则
  exitAddAbsRule = (ctx: AddAbsRuleContext) => {
    const ruleNLText = ctx._nltext.text.replace(/`/g, "");
    const ruleHead = ctx._ruleHead.text.replace(/`/g, "");

    const ruleBody = ctx
      .yuanList()
      .ID_list()
      .map((id) => {
        return id.getText();
      })
      .join(",");

    const result = {
      op: OP.ADD,
      ruleNLText,
      ruleHead,
      ruleBody,
    };

    console.log(result);
  };

  exitDelAbsRule = (ctx: DelAbsRuleContext) => {
    const ruleNLText = ctx._nltext.text.replace(/`/g, "");
    const ruleHead = ctx._ruleHead.text.replace(/`/g, "");

    const ruleBody = ctx
      .yuanList()
      .ID_list()
      .map((id) => {
        return id.getText();
      })
      .join(",");

    const result = {
      op: OP.DEL,
      ruleNLText,
      ruleHead,
      ruleBody,
    };
  };
}
