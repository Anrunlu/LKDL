"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const antlr4_1 = require("antlr4");
const LKDLLexer_1 = __importDefault(require("./parser/LKDLLexer"));
const LKDLParser_1 = __importDefault(require("./parser/LKDLParser"));
const LKDLListener_1 = __importDefault(require("./parser/LKDLListener"));
const my_parser_1 = require("./utils/my-parser");
const op_rule_1 = require("./utils/op-rule");
// const input = `张三.(朋友.同学, 老乡.同学.老乡[距离==1公里, 时间==10年].老乡) += 李四.朋友;`;
// const input = `张三.老乡.朋友.同学 += 李四.朋友;`;
// TODO: 这个边界情况未处理，即 += 的右边是直接的元列表，不需要搜索的情况
const input = `张三.(朋友, 老乡) += 李四;`;
const chars = new antlr4_1.CharStream(input);
const lexer = new LKDLLexer_1.default(chars);
const tokens = new antlr4_1.CommonTokenStream(lexer);
const parser = new LKDLParser_1.default(tokens);
const tree = parser.prog();
class MyTreeWalker extends LKDLListener_1.default {
    constructor() {
        super(...arguments);
        // 退出 yuanList（元列表） 时，将 yuanList 存入 ctx 中
        this.exitYuanList = (ctx) => {
            const yuanList = [];
            ctx.getTokens(LKDLParser_1.default.ID).forEach((id) => {
                yuanList.push(id.getText());
            });
            ctx["myYuanList"] = yuanList;
        };
        // 退出 relAttr（关系属性） 时，将 relAttr 存入 ctx 中
        this.exitRelAttr = (ctx) => {
            const attr = ctx._lhs.text;
            const val = ctx._rhs.text;
            const op = ctx._op.text;
            const relAttr = {
                attr,
                val,
                op,
            };
            ctx["myRelAttr"] = relAttr;
        };
        // 退出 exitRelAttrList（关系属性列表） 时，将 relAttrList 存入 ctx 中
        this.exitRelAttrList = (ctx) => {
            const relAttrList = [];
            ctx.relAttr_list().forEach((relAttr) => {
                relAttrList.push(relAttr["myRelAttr"]);
            });
            ctx["myRelAttrList"] = relAttrList;
        };
        // 退出 relExpr（关系表达式） 时，将 relExpr 存入 ctx 中
        this.exitRelExpr = (ctx) => {
            // 第一个孩子一定是 relName（关系名）
            const relName = ctx._lhs.text;
            // 第二个孩子如果存在，则是 relAttrList（关系属性列表）
            const relAttrList = ctx._rhs ? ctx._rhs["myRelAttrList"] : [];
            const relExpr = {
                relName,
                relAttrList,
            };
            ctx["myRelExpr"] = relExpr;
        };
        // 退出 relExprSequnce（关系表达式序列） 时，将 relExprSequnce 存入 ctx 中
        this.exitRelExprSequnce = (ctx) => {
            const relExprSequnce = [];
            ctx.relExpr_list().forEach((relExpr) => {
                relExprSequnce.push(relExpr["myRelExpr"]);
            });
            ctx["myRelExprSequnce"] = relExprSequnce;
        };
        // 退出 relExprList（关系表达式列表） 时，将 relExprList 存入 ctx 中
        this.exitRelExprList = (ctx) => {
            const relExprList = [];
            ctx.relExprSequnce_list().forEach((relExprSequnce) => {
                relExprList.push(relExprSequnce["myRelExprSequnce"]);
            });
            ctx["myRelExprList"] = relExprList;
        };
        // 退出 searchExpr（搜索表达式） 时，将 searchExpr 存入 ctx 中
        this.exitSearchExpr = (ctx) => {
            const yuanList = ctx.yuanList()["myYuanList"];
            // relExprList 可能不存在
            const relExprList = ctx.relExprList()
                ? ctx.relExprList()["myRelExprList"]
                : [];
            const searchExpr = {
                yuanList,
                relExprList,
            };
            ctx["mySearchExpr"] = searchExpr;
        };
        this.exitAddYuanRel = (ctx) => {
            const head = ctx.searchExpr(0)["mySearchExpr"];
            const tail = ctx.searchExpr(1)["mySearchExpr"];
            const lhsSearchSequnce = (0, my_parser_1.parseSearchExprToSearchSequnce)(head);
            const rhsSearchSequnce = (0, my_parser_1.parseSearchExprToSearchSequnce)(tail);
            const res = (0, op_rule_1.addYuanRel)(lhsSearchSequnce, rhsSearchSequnce);
            ctx["myAddYuanRel"] = res;
            console.dir(res, { depth: Infinity });
        };
    }
}
const walker = new MyTreeWalker();
antlr4_1.ParseTreeWalker.DEFAULT.walk(walker, tree);
