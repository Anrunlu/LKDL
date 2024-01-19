// Generated from LKDL.g4 by ANTLR 4.13.1

import {ParseTreeListener} from "antlr4";


import { ProgContext } from "./LKDLParser";
import { StatContext } from "./LKDLParser";
import { SearchStatContext } from "./LKDLParser";
import { AddYuanRelContext } from "./LKDLParser";
import { DelYuanRelContext } from "./LKDLParser";
import { UpdateYuanRelContext } from "./LKDLParser";
import { AddYuanContext } from "./LKDLParser";
import { DelYuanContext } from "./LKDLParser";
import { SearchExprContext } from "./LKDLParser";
import { RelExprListContext } from "./LKDLParser";
import { RelExprSequnceContext } from "./LKDLParser";
import { RelExprContext } from "./LKDLParser";
import { RelAttrListContext } from "./LKDLParser";
import { RelAttrContext } from "./LKDLParser";
import { YuanListContext } from "./LKDLParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `LKDLParser`.
 */
export default class LKDLListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `LKDLParser.prog`.
	 * @param ctx the parse tree
	 */
	enterProg?: (ctx: ProgContext) => void;
	/**
	 * Exit a parse tree produced by `LKDLParser.prog`.
	 * @param ctx the parse tree
	 */
	exitProg?: (ctx: ProgContext) => void;
	/**
	 * Enter a parse tree produced by `LKDLParser.stat`.
	 * @param ctx the parse tree
	 */
	enterStat?: (ctx: StatContext) => void;
	/**
	 * Exit a parse tree produced by `LKDLParser.stat`.
	 * @param ctx the parse tree
	 */
	exitStat?: (ctx: StatContext) => void;
	/**
	 * Enter a parse tree produced by `LKDLParser.searchStat`.
	 * @param ctx the parse tree
	 */
	enterSearchStat?: (ctx: SearchStatContext) => void;
	/**
	 * Exit a parse tree produced by `LKDLParser.searchStat`.
	 * @param ctx the parse tree
	 */
	exitSearchStat?: (ctx: SearchStatContext) => void;
	/**
	 * Enter a parse tree produced by the `addYuanRel`
	 * labeled alternative in `LKDLParser.cudStat`.
	 * @param ctx the parse tree
	 */
	enterAddYuanRel?: (ctx: AddYuanRelContext) => void;
	/**
	 * Exit a parse tree produced by the `addYuanRel`
	 * labeled alternative in `LKDLParser.cudStat`.
	 * @param ctx the parse tree
	 */
	exitAddYuanRel?: (ctx: AddYuanRelContext) => void;
	/**
	 * Enter a parse tree produced by the `delYuanRel`
	 * labeled alternative in `LKDLParser.cudStat`.
	 * @param ctx the parse tree
	 */
	enterDelYuanRel?: (ctx: DelYuanRelContext) => void;
	/**
	 * Exit a parse tree produced by the `delYuanRel`
	 * labeled alternative in `LKDLParser.cudStat`.
	 * @param ctx the parse tree
	 */
	exitDelYuanRel?: (ctx: DelYuanRelContext) => void;
	/**
	 * Enter a parse tree produced by the `updateYuanRel`
	 * labeled alternative in `LKDLParser.cudStat`.
	 * @param ctx the parse tree
	 */
	enterUpdateYuanRel?: (ctx: UpdateYuanRelContext) => void;
	/**
	 * Exit a parse tree produced by the `updateYuanRel`
	 * labeled alternative in `LKDLParser.cudStat`.
	 * @param ctx the parse tree
	 */
	exitUpdateYuanRel?: (ctx: UpdateYuanRelContext) => void;
	/**
	 * Enter a parse tree produced by the `addYuan`
	 * labeled alternative in `LKDLParser.cudStat`.
	 * @param ctx the parse tree
	 */
	enterAddYuan?: (ctx: AddYuanContext) => void;
	/**
	 * Exit a parse tree produced by the `addYuan`
	 * labeled alternative in `LKDLParser.cudStat`.
	 * @param ctx the parse tree
	 */
	exitAddYuan?: (ctx: AddYuanContext) => void;
	/**
	 * Enter a parse tree produced by the `delYuan`
	 * labeled alternative in `LKDLParser.cudStat`.
	 * @param ctx the parse tree
	 */
	enterDelYuan?: (ctx: DelYuanContext) => void;
	/**
	 * Exit a parse tree produced by the `delYuan`
	 * labeled alternative in `LKDLParser.cudStat`.
	 * @param ctx the parse tree
	 */
	exitDelYuan?: (ctx: DelYuanContext) => void;
	/**
	 * Enter a parse tree produced by `LKDLParser.searchExpr`.
	 * @param ctx the parse tree
	 */
	enterSearchExpr?: (ctx: SearchExprContext) => void;
	/**
	 * Exit a parse tree produced by `LKDLParser.searchExpr`.
	 * @param ctx the parse tree
	 */
	exitSearchExpr?: (ctx: SearchExprContext) => void;
	/**
	 * Enter a parse tree produced by `LKDLParser.relExprList`.
	 * @param ctx the parse tree
	 */
	enterRelExprList?: (ctx: RelExprListContext) => void;
	/**
	 * Exit a parse tree produced by `LKDLParser.relExprList`.
	 * @param ctx the parse tree
	 */
	exitRelExprList?: (ctx: RelExprListContext) => void;
	/**
	 * Enter a parse tree produced by `LKDLParser.relExprSequnce`.
	 * @param ctx the parse tree
	 */
	enterRelExprSequnce?: (ctx: RelExprSequnceContext) => void;
	/**
	 * Exit a parse tree produced by `LKDLParser.relExprSequnce`.
	 * @param ctx the parse tree
	 */
	exitRelExprSequnce?: (ctx: RelExprSequnceContext) => void;
	/**
	 * Enter a parse tree produced by `LKDLParser.relExpr`.
	 * @param ctx the parse tree
	 */
	enterRelExpr?: (ctx: RelExprContext) => void;
	/**
	 * Exit a parse tree produced by `LKDLParser.relExpr`.
	 * @param ctx the parse tree
	 */
	exitRelExpr?: (ctx: RelExprContext) => void;
	/**
	 * Enter a parse tree produced by `LKDLParser.relAttrList`.
	 * @param ctx the parse tree
	 */
	enterRelAttrList?: (ctx: RelAttrListContext) => void;
	/**
	 * Exit a parse tree produced by `LKDLParser.relAttrList`.
	 * @param ctx the parse tree
	 */
	exitRelAttrList?: (ctx: RelAttrListContext) => void;
	/**
	 * Enter a parse tree produced by `LKDLParser.relAttr`.
	 * @param ctx the parse tree
	 */
	enterRelAttr?: (ctx: RelAttrContext) => void;
	/**
	 * Exit a parse tree produced by `LKDLParser.relAttr`.
	 * @param ctx the parse tree
	 */
	exitRelAttr?: (ctx: RelAttrContext) => void;
	/**
	 * Enter a parse tree produced by `LKDLParser.yuanList`.
	 * @param ctx the parse tree
	 */
	enterYuanList?: (ctx: YuanListContext) => void;
	/**
	 * Exit a parse tree produced by `LKDLParser.yuanList`.
	 * @param ctx the parse tree
	 */
	exitYuanList?: (ctx: YuanListContext) => void;
}

