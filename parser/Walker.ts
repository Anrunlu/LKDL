import LKDLParser, {
  AddAbsRuleContext,
  AddQARuleContext,
  AddRuleContext,
  AddTupleContext,
  AddYuanContext,
  DelAbsRuleContext,
  DelQARuleContext,
  DelRuleContext,
  DelTupleContext,
  DelYuanContext,
  InferContext,
  PathSearchStatContext,
  QaContext,
  RelAttrContext,
  RelAttrListContext,
  RelExprContext,
  RelExprListContext,
  RelExprSequnceContext,
  SearchExprContext,
  SearchStatContext,
  YuanListContext,
} from "./LKDLParser";
import LKDLListener from "./LKDLListener";
import { parseSearchExprToSearchSequnce } from "../utils/my-parser";
import { parseSequnceToExcuteFormat } from "../utils/op-rule";
import { runCudYuan, runCudTuple, runSearch } from "./Runner";
import { OP } from "../const";
import LKDLErrorListener from "../LKDLErrorListener";

export class LKDLTreeWalker extends LKDLListener {
  // 保存解析结果
  private resultList: any = [];

  // 保存错误信息
  private errorListener: LKDLErrorListener | undefined;

  constructor(errorListener: LKDLErrorListener) {
    super();
    this.errorListener = errorListener;
  }

  // 获取结果
  getResult = () => {
    return this.resultList;
  };

  // 退出 yuanList（元列表） 时，将 yuanList 存入 ctx 中
  exitYuanList = (ctx: YuanListContext) => {
    const yuanList: string[] = [];

    ctx.getTokens(LKDLParser.ID).forEach((id) => {
      yuanList.push(id.getText().replace(/`/g, ""));
    });

    (ctx as any)["LKDLYuanList"] = yuanList;
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

    (ctx as any)["LKDLRelAttr"] = relAttr;
  };

  // 退出 exitRelAttrList（关系属性列表）
  exitRelAttrList = (ctx: RelAttrListContext) => {
    const relAttrList: any = [];

    ctx.relAttr_list().forEach((relAttr) => {
      relAttrList.push((relAttr as any)["LKDLRelAttr"]);
    });

    (ctx as any)["LKDLRelAttrList"] = relAttrList;
  };

  // 退出 relExpr（关系表达式）
  exitRelExpr = (ctx: RelExprContext) => {
    // 第一个孩子一定是 relName（关系名）
    const relName = ctx._lhs.text;

    // 第二个孩子如果存在，则是 relAttrList（关系属性列表）
    const relAttrList = ctx._rhs ? (ctx._rhs as any)["LKDLRelAttrList"] : [];

    const relExpr = {
      relName,
      relAttrList,
    };

    (ctx as any)["LKDLRelExpr"] = relExpr;
  };

  // 退出 relExprSequnce（关系表达式序列）
  exitRelExprSequnce = (ctx: RelExprSequnceContext) => {
    const relExprSequnce: any = [];

    ctx.relExpr_list().forEach((relExpr) => {
      relExprSequnce.push((relExpr as any)["LKDLRelExpr"]);
    });

    (ctx as any)["LKDLRelExprSequnce"] = relExprSequnce;
  };

  // 退出 relExprList（关系表达式列表）
  exitRelExprList = (ctx: RelExprListContext) => {
    const relExprList: any = [];

    ctx.relExprSequnce_list().forEach((relExprSequnce) => {
      relExprList.push((relExprSequnce as any)["LKDLRelExprSequnce"]);
    });

    (ctx as any)["LKDLRelExprList"] = relExprList;
  };

  // 退出 searchExpr（搜索表达式）
  exitSearchExpr = (ctx: SearchExprContext) => {
    const yuanList = (ctx.yuanList() as any)["LKDLYuanList"];

    // relExprList 可能不存在
    const relExprList = ctx.relExprList()
      ? (ctx.relExprList() as any)["LKDLRelExprList"]
      : [];

    const searchExpr = {
      yuanList,
      relExprList,
    };

    (ctx as any)["LKDLSearchExpr"] = searchExpr;
  };

  // 添加多元组
  exitAddTuple = (ctx: AddTupleContext) => {
    const head = (ctx.searchExpr(0) as any)["LKDLSearchExpr"];
    const tail = (ctx.searchExpr(1) as any)["LKDLSearchExpr"];

    const lhsSearchSequnce = parseSearchExprToSearchSequnce(head);
    const rhsSearchSequnce = parseSearchExprToSearchSequnce(tail);

    const res = parseSequnceToExcuteFormat(
      lhsSearchSequnce,
      rhsSearchSequnce,
      OP.ADD
    );

    (ctx as any)["LKDLAddYuanRel"] = res;

    const data = runCudTuple(res);

    const result = {
      op: "addTuple",
      data,
    };

    this.resultList.push(result);
  };

  // 删除多元组
  exitDelTuple = (ctx: DelTupleContext) => {
    const head = (ctx.searchExpr(0) as any)["LKDLSearchExpr"];
    const tail = (ctx.searchExpr(1) as any)["LKDLSearchExpr"];

    const lhsSearchSequnce = parseSearchExprToSearchSequnce(head);
    const rhsSearchSequnce = parseSearchExprToSearchSequnce(tail);

    const res = parseSequnceToExcuteFormat(
      lhsSearchSequnce,
      rhsSearchSequnce,
      OP.DEL
    );

    (ctx as any)["myDelYuanRel"] = res;

    const data = runCudTuple(res);

    const result = {
      op: "delTuple",
      data,
    };

    this.resultList.push(result);
  };

  // 退出 addYuan （添加元）
  exitAddYuan = (ctx: AddYuanContext) => {
    const yuanList = (ctx.yuanList() as any)["LKDLYuanList"];

    const data = runCudYuan(yuanList, OP.ADD);

    const result = {
      op: OP.ADD_YUAN,
      data,
    };

    this.resultList.push(result);
  };

  // 退出 delYuan （删除元）
  exitDelYuan = (ctx: DelYuanContext) => {
    const yuanList = (ctx.yuanList() as any)["LKDLYuanList"];

    const data = runCudYuan(yuanList, OP.DEL);

    const result = {
      op: OP.DEL_YUAN,
      data,
    };

    this.resultList.push(result);
  };

  exitSearchStat = (ctx: SearchStatContext) => {
    const head = (ctx.searchExpr(0) as any)["LKDLSearchExpr"];
    const tail = (ctx.searchExpr(1) as any)["LKDLSearchExpr"];

    const lhsSearchSequnce = parseSearchExprToSearchSequnce(head);
    const rhsSearchSequnce = parseSearchExprToSearchSequnce(tail);

    const res = parseSequnceToExcuteFormat(
      lhsSearchSequnce,
      rhsSearchSequnce,
      OP.GET
    );

    const data = runSearch(res);

    (ctx as any)["LKDLSearchStat"] = data;

    const parentCtxText = ctx.parentCtx?.getText();

    // 如果 parentCtxText 包含 "推理" 或 "infer" 或 "i" 或 "rule" 或 "规则"，则不添加到 result 中

    // FIXME：
    // 这里是为了避免执行器那边重复执行导致出问题的不优雅的处理方式，因为到最外层之后形成的解析结果是一个完整的列表，
    // 这个列表会包含一些嵌套的重复的语句（比如推理语句中会包含 searchExpr，本质上是语言设计时的问题，
    // 不过出于成本考虑暂时只能这样做）

    // 这种做法导致的结果：search 语句的 ID 中如果包含了下面这些关键字，则 search 语句的解析结果为空
    // 因此，目前的做法是尽量在数据中避免使用这些关键字

    if (
      parentCtxText?.includes("推理") ||
      parentCtxText?.includes("infer") ||
      parentCtxText?.includes("rule") ||
      parentCtxText?.includes("规则")
    ) {
      return;
    }

    const result = {
      op: OP.SEARCH,
      data,
    };

    this.resultList.push(result);
  };

  // 添加语义问答
  exitAddQARule = (ctx: AddQARuleContext) => {
    const ruleNLText = ctx._nltext.text.replace(/`/g, "");
    const ruleHead = ctx._ruleHead.text.replace(/`/g, "");
    const ruleBody = ctx
      .searchStat_list()
      .map((searchStat) => {
        return searchStat.getText();
      })
      .join("&&");

    const data = {
      op: OP.ADD_QA_RULE,
      ruleNLText,
      ruleHead,
      ruleBody,
    };

    const result = {
      op: OP.ADD_QA_RULE,
      data,
    };

    this.resultList.push(result);
  };

  // 删除语义问答
  exitDelQARule = (ctx: DelQARuleContext) => {
    const ruleNLText = ctx._nltext.text.replace(/`/g, "");
    const ruleHead = ctx._ruleHead.text.replace(/`/g, "");
    const ruleBody = ctx
      .searchStat_list()
      .map((searchStat) => {
        return searchStat.getText();
      })
      .join("&&");

    const data = {
      op: OP.DEL_QA_RULE,
      ruleNLText,
      ruleHead,
      ruleBody,
    };

    const result = {
      op: OP.DEL_QA_RULE,
      data,
    };

    this.resultList.push(result);
  };

  // 添加关系规则
  exitAddRule = (ctx: AddRuleContext) => {
    const ruleHead1 = ctx._ruleHead1.getText();
    const ruleHead2 = ctx._ruleHead2.text.replace(/`/g, "");
    const ruleBody = ctx
      .searchStat_list()
      // 除去第一个 searchStat（因为第一个是 ruleHead1）
      .slice(1)
      .map((searchStat) => {
        return searchStat.getText();
      })
      .join("&&");

    const data = {
      op: OP.ADD_RULE,
      ruleNLText: ruleHead1,
      ruleHead: ruleHead2,
      ruleBody,
    };

    const result = {
      op: OP.ADD_RULE,
      data,
    };

    this.resultList.push(result);
  };

  // 删除关系规则
  exitDelRule = (ctx: DelRuleContext) => {
    const ruleHead1 = ctx._ruleHead1.getText();
    const ruleHead2 = ctx._ruleHead2.text.replace(/`/g, "");
    const ruleBody = ctx
      .searchStat_list()
      // 除去第一个 searchStat（因为第一个是 ruleHead1）
      .slice(1)
      .map((searchStat) => {
        return searchStat.getText();
      })
      .join("&&");

    const data = {
      op: OP.DEL_RULE,
      ruleNLText: ruleHead1,
      ruleHead: ruleHead2,
      ruleBody,
    };

    const result = {
      op: OP.DEL_RULE,
      data,
    };

    this.resultList.push(result);
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

    const data = {
      op: OP.ADD_ABS_RULE,
      ruleNLText,
      ruleHead,
      ruleBody,
    };

    const result = {
      op: OP.ADD_ABS_RULE,
      data,
    };

    this.resultList.push(result);
  };

  // 删除抽象规则
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

    const data = {
      op: OP.DEL_ABS_RULE,
      ruleNLText,
      ruleHead,
      ruleBody,
    };

    const result = {
      op: OP.DEL_ABS_RULE,
      data,
    };

    this.resultList.push(result);
  };

  // 推理
  exitInfer = (ctx: InferContext) => {
    const data: any = {};
    const tuples: any = [];

    ctx.searchStat_list().forEach((searchStat) => {
      const s = (searchStat as any)["LKDLSearchStat"];
      tuples.push(...s);
    });

    data.tuples = tuples;

    // 匹配 conditionText，以 --- 为分隔符的后半部分
    const conditionText = ctx
      .getText()
      .split("---")[1]
      .trim()
      .replace(/}/g, "");

    const conditionArray = conditionText.split(";").filter((item) => item);

    // 从 conditionArray 中提取键为 maxnums 的值
    const maxnums = conditionArray
      .find((item) => item.includes("maxnums"))
      ?.split("=")[1]
      .trim();

    // 如果 maxnums 不存在，则报错
    if (!maxnums) {
      this.errorListener?.pushError({
        startLineNumber: ctx.start.line,
        startColumn: ctx.start.column,
        endLineNumber: ctx.start.line + 1,
        endColumn: ctx.start.column + 1,
        message: "请在 condition 中填写 maxnums 参数，如 maxnums=1;",
        code: "4000",
      });

      return;
    }

    // 删除 conditionArray 中的 maxnums
    conditionArray.splice(
      conditionArray.findIndex((item) => item.includes("maxnums")),
      1
    );

    data.conditions = conditionArray;
    data.maxnums = parseInt(maxnums || "0");

    // 统计所有 conditions 中的变量个数，使用 Set 去重
    const varSet = new Set();

    conditionArray.forEach((condition) => {
      // 匹配所有$开头的字母和数字
      const vars = condition.match(/\$[a-zA-Z0-9]+/g);

      if (vars) {
        vars.forEach((v) => {
          varSet.add(v);
        });
      }
    });

    data.varnums = varSet.size;

    const result = {
      op: OP.INFER,
      data,
    };

    this.resultList.push(result);
  };

  // 语义问答
  exitQa = (ctx: QaContext) => {
    const text = ctx.ID()?.getText().replace(/`/g, "");

    // 使用正则检测text中是否有()，如果有，则是 with rule_head 查询，否则是自然语言查询
    const reg = /\(.*\)/;
    const isWithRuleHead = reg.test(text);

    const data: any = {
      op: "rule-search",
    };

    if (isWithRuleHead) {
      data.ruleHead = text;
    } else {
      data.ruleNLText = text;
    }

    const result = {
      op: OP.QA,
      data,
    };

    this.resultList.push(result);
  };

  // 路径查询
  exitPathSearchStat = (ctx: PathSearchStatContext) => {
    const head = ctx.ID(0).getText();
    const tail = ctx.ID(1).getText();

    const data = {
      head,
      rel: "->",
      tail,
    };

    const result = {
      op: OP.PATH_SEARCH,
      data,
    };

    this.resultList.push(result);
  };
}
