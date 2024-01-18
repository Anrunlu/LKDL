"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const antlr4_1 = require("antlr4");
const LKDLLexer_1 = __importDefault(require("./parser/LKDLLexer"));
const LKDLParser_1 = __importDefault(require("./parser/LKDLParser"));
const LKDLListener_1 = __importDefault(require("./parser/LKDLListener"));
const input = `张三.(朋友.同学, 老乡.同学.老乡[距离==1公里, 时间==10年]) += 李四;`;
const chars = new antlr4_1.CharStream(input);
const lexer = new LKDLLexer_1.default(chars);
const tokens = new antlr4_1.CommonTokenStream(lexer);
const parser = new LKDLParser_1.default(tokens);
const tree = parser.prog();
const relSequence = [];
class MyTreeWalker extends LKDLListener_1.default {
    constructor() {
        super(...arguments);
        this.exitRelExpr = (ctx) => {
            var _a, _b, _c, _d, _e, _f, _g;
            const attrList = [];
            if (!ctx.parentCtx["myRelList"]) {
                ctx.parentCtx["myRelList"] = [];
            }
            // 如果 relExpr 右孩子是 ID，那么它一定是关系链的末尾
            if ((_a = ctx._rhs) === null || _a === void 0 ? void 0 : _a.ID()) {
                (_b = ctx
                    .relAttrList()) === null || _b === void 0 ? void 0 : _b.relAttr_list().forEach((relAttr) => {
                    console.log(111111111);
                    attrList.push(relAttr["myRelAttr"]);
                });
                const relNode = {
                    rel: (_c = ctx._rhs) === null || _c === void 0 ? void 0 : _c.ID().getText(),
                    attr: attrList,
                };
                ctx.parentCtx["myRelList"].push(relNode);
            }
            console.log((_d = ctx.relAttrList()) === null || _d === void 0 ? void 0 : _d.relAttr_list());
            // 从下到上顺序添加左孩子
            if (((_e = ctx.children) === null || _e === void 0 ? void 0 : _e.length) === 3) {
                (_f = ctx
                    .relAttrList()) === null || _f === void 0 ? void 0 : _f.relAttr_list().forEach((relAttr) => {
                    attrList.push(relAttr["myRelAttr"]);
                });
                const relNode = {
                    rel: (_g = ctx._lhs) === null || _g === void 0 ? void 0 : _g.ID().getText(),
                    attr: attrList,
                };
                ctx.parentCtx["myRelList"].push(relNode);
            }
        };
        this.exitRelExprList = (ctx) => {
            console.log(ctx["myRelList"]);
        };
        // 退出 relAttr（关系属性） 时，将 relAttr 存入 ctx 中
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
            // console.dir(res, { depth: 5 });
        };
    }
}
const walker = new MyTreeWalker();
antlr4_1.ParseTreeWalker.DEFAULT.walk(walker, tree);
