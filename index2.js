"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const antlr4_1 = require("antlr4");
const LKDLLexer_1 = __importDefault(require("./parser/LKDLLexer"));
const LKDLParser_1 = __importDefault(require("./parser/LKDLParser"));
const LKDLListener_1 = __importDefault(require("./parser/LKDLListener"));
const input = `张三.(朋友.同学, 老乡.同学.老乡[距离==1公里, 时间==10年].老乡) += 李四;`;
const chars = new antlr4_1.CharStream(input);
const lexer = new LKDLLexer_1.default(chars);
const tokens = new antlr4_1.CommonTokenStream(lexer);
const parser = new LKDLParser_1.default(tokens);
const tree = parser.prog();
class MyTreeWalker extends LKDLListener_1.default {
    constructor() {
        super(...arguments);
        // 退出 relAttr（关系属性） 时，将 relAttr 存入 ctx 中
        this.exitRelAttr = (ctx) => {
            const attr = ctx._lhs.text;
            const val = ctx._rhs.text;
            const relAttr = {
                attr,
                val,
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
            // const relName = ctx.children && ctx.children[0].getText();
        };
        this.exitRelExprList = (ctx) => { };
    }
}
const walker = new MyTreeWalker();
antlr4_1.ParseTreeWalker.DEFAULT.walk(walker, tree);
