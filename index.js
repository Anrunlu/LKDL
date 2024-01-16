"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const antlr4_1 = require("antlr4");
const LKDLLexer_1 = __importDefault(require("./parser/LKDLLexer"));
const LKDLParser_1 = __importDefault(require("./parser/LKDLParser"));
const LKDLListener_1 = __importDefault(require("./parser/LKDLListener"));
const input = `元+=张三;
元+=(中国, 山东);
张三.朋友 += 李四;
张三.朋友[程度=0.8, 时间=2024年01月14日09:43:33] += 李四;
(张三, 李四).朋友.朋友[程度=0.1] += (王五, 赵六);
李四.(小学, "初中()"[距离="10公里()"]) += 实验中学;`;
const chars = new antlr4_1.CharStream(input);
const lexer = new LKDLLexer_1.default(chars);
const tokens = new antlr4_1.CommonTokenStream(lexer);
const parser = new LKDLParser_1.default(tokens);
const tree = parser.prog();
class MyTreeWalker extends LKDLListener_1.default {
    constructor() {
        super(...arguments);
        this.exitRelExpr = (ctx) => {
            var _a, _b;
            const attrList = [];
            (_a = ctx
                .relAttrList()) === null || _a === void 0 ? void 0 : _a.relAttr_list().forEach((relAttr) => {
                attrList.push(relAttr["myRelAttr"]);
            });
            const relNode = {
                rel: (_b = ctx.ID()) === null || _b === void 0 ? void 0 : _b.getText(),
                attr: attrList,
            };
            if (!ctx.parentCtx["myRelList"]) {
                ctx.parentCtx["myRelList"] = [];
            }
            ctx.parentCtx["myRelList"].push(relNode);
        };
        this.exitRelAttr = (ctx) => {
            const attr = ctx._lhs.text;
            const value = ctx._rhs.text;
            const relAttr = {
                attr,
                value,
            };
            ctx["myRelAttr"] = relAttr;
        };
        this.exitAddYuanRel = (ctx) => {
            const heads = ctx
                .yuanList(0)
                .getTokens(LKDLParser_1.default.ID)
                .map((id) => id.getText());
            const tails = ctx
                .yuanList(1)
                .getTokens(LKDLParser_1.default.ID)
                .map((id) => id.getText());
            const res = {
                heads,
                tails,
                op: "+=",
                relList: ctx.relExprList()["myRelList"],
            };
            console.dir(res, { depth: 5 });
        };
        this.exitDelYuanRel = (ctx) => {
            const heads = ctx
                .yuanList(0)
                .getTokens(LKDLParser_1.default.ID)
                .map((id) => id.getText());
            const tails = ctx
                .yuanList(1)
                .getTokens(LKDLParser_1.default.ID)
                .map((id) => id.getText());
            const res = {
                heads,
                tails,
                op: "-=",
                relList: ctx.relExprList()["myRelList"],
            };
            console.dir(res, { depth: 5 });
        };
    }
}
const walker = new MyTreeWalker();
antlr4_1.ParseTreeWalker.DEFAULT.walk(walker, tree);
