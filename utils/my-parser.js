"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseSearchExprToSearchSequnce = void 0;
const searchStat = {
    yuanList: ["张三"],
    relExprList: [
        [
            { relName: "朋友", relAttrList: [] },
            { relName: "同学", relAttrList: [] },
        ],
        [
            { relName: "老乡", relAttrList: [] },
            { relName: "同学", relAttrList: [] },
            {
                relName: "老乡",
                relAttrList: [
                    { attr: "距离", val: "1公里", op: "==" },
                    { attr: "时间", val: "10年", op: "==" },
                ],
            },
            { relName: "老乡", relAttrList: [] },
        ],
    ],
};
function parseSearchExprToSearchSequnce(searchStat) {
    const searchSequnce = [];
    searchStat.yuanList.forEach((yuan, yuanIndex) => {
        const relExprList = searchStat.relExprList;
        relExprList.forEach((relExprSequnce, relExprSequnceIndex) => {
            const tripleSequnce = [];
            // 目标 triples 格式：
            // {head: "张三", rel: { relName: "朋友", relAttrList: [] }, tail: "$1", isTerminal: false, op: "get"}
            // {head: "$1", rel: { relName: "同学", relAttrList: [] }, tail: "$2", isTerminal: true, op: "set"}
            relExprSequnce.forEach((relExpr, relExprIndex) => {
                const varNameFirst = "$" +
                    ((yuanIndex + 1) * 100 +
                        (relExprSequnceIndex + 1) * 10 +
                        relExprIndex +
                        1);
                const varNameSecond = "$" +
                    ((yuanIndex + 1) * 100 +
                        (relExprSequnceIndex + 1) * 10 +
                        relExprIndex +
                        2);
                let triple;
                // 创建第一个 triple
                // 如果只有一个 relExpr
                if (relExprSequnce.length === 1) {
                    triple = {
                        head: yuan,
                        rel: relExpr,
                        tail: varNameFirst,
                        isTerminal: true,
                    };
                }
                else if (relExprIndex === 0) {
                    triple = {
                        head: yuan,
                        rel: relExpr,
                        tail: varNameSecond,
                        isTerminal: false,
                    };
                }
                // 如果不是最后一个 relExpr
                else if (relExprIndex !== relExprSequnce.length - 1) {
                    triple = {
                        head: varNameFirst,
                        rel: relExpr,
                        tail: varNameSecond,
                        isTerminal: false,
                    };
                }
                else {
                    triple = {
                        head: varNameFirst,
                        rel: relExpr,
                        tail: varNameSecond,
                        isTerminal: true,
                    };
                }
                tripleSequnce.push(triple);
            });
            searchSequnce.push(tripleSequnce);
        });
    });
    return searchSequnce;
}
exports.parseSearchExprToSearchSequnce = parseSearchExprToSearchSequnce;
// parseSearchExprToSearchSequnce(searchStat);
