// Generated from LKDL.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import LKDLListener from "./LKDLListener.js";
// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class LKDLParser extends Parser {
	public static readonly ADDYUAN = 1;
	public static readonly DELYUAN = 2;
	public static readonly NEWLINE = 3;
	public static readonly LINECOMMENT = 4;
	public static readonly BLOCKCOMMENT = 5;
	public static readonly ASSIGN = 6;
	public static readonly EQ = 7;
	public static readonly ATTR = 8;
	public static readonly ADD = 9;
	public static readonly SUB = 10;
	public static readonly COMMA = 11;
	public static readonly OPEN_BRACKET = 12;
	public static readonly CLOSE_BRACKET = 13;
	public static readonly OPEN_PAREN = 14;
	public static readonly CLOSE_PAREN = 15;
	public static readonly ADDEQ = 16;
	public static readonly DELEQ = 17;
	public static readonly RULEDEF = 18;
	public static readonly ISA = 19;
	public static readonly HAS = 20;
	public static readonly ALL = 21;
	public static readonly INT = 22;
	public static readonly FLOAT = 23;
	public static readonly ID = 24;
	public static readonly WS = 25;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_prog = 0;
	public static readonly RULE_stat = 1;
	public static readonly RULE_searchStat = 2;
	public static readonly RULE_cudStat = 3;
	public static readonly RULE_searchExpr = 4;
	public static readonly RULE_relExprList = 5;
	public static readonly RULE_relExprSequnce = 6;
	public static readonly RULE_relExpr = 7;
	public static readonly RULE_relAttrList = 8;
	public static readonly RULE_relAttr = 9;
	public static readonly RULE_yuanList = 10;
	public static readonly literalNames: (string | null)[] = [ null, "'\\u5143+='", 
                                                            "'\\u5143-='", 
                                                            null, null, 
                                                            null, "'='", 
                                                            "'=='", "'.'", 
                                                            "'+'", "'-'", 
                                                            null, null, 
                                                            null, null, 
                                                            null, "'+='", 
                                                            "'-='", "':='" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "ADDYUAN", 
                                                             "DELYUAN", 
                                                             "NEWLINE", 
                                                             "LINECOMMENT", 
                                                             "BLOCKCOMMENT", 
                                                             "ASSIGN", "EQ", 
                                                             "ATTR", "ADD", 
                                                             "SUB", "COMMA", 
                                                             "OPEN_BRACKET", 
                                                             "CLOSE_BRACKET", 
                                                             "OPEN_PAREN", 
                                                             "CLOSE_PAREN", 
                                                             "ADDEQ", "DELEQ", 
                                                             "RULEDEF", 
                                                             "ISA", "HAS", 
                                                             "ALL", "INT", 
                                                             "FLOAT", "ID", 
                                                             "WS" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"prog", "stat", "searchStat", "cudStat", "searchExpr", "relExprList", 
		"relExprSequnce", "relExpr", "relAttrList", "relAttr", "yuanList",
	];
	public get grammarFileName(): string { return "LKDL.g4"; }
	public get literalNames(): (string | null)[] { return LKDLParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return LKDLParser.symbolicNames; }
	public get ruleNames(): string[] { return LKDLParser.ruleNames; }
	public get serializedATN(): number[] { return LKDLParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, LKDLParser._ATN, LKDLParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public prog(): ProgContext {
		let localctx: ProgContext = new ProgContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, LKDLParser.RULE_prog);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 25;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 16793606) !== 0)) {
				{
				{
				this.state = 22;
				this.stat();
				}
				}
				this.state = 27;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 28;
			this.match(LKDLParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public stat(): StatContext {
		let localctx: StatContext = new StatContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, LKDLParser.RULE_stat);
		try {
			this.state = 36;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 30;
				this.searchStat();
				this.state = 31;
				this.match(LKDLParser.NEWLINE);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 33;
				this.cudStat();
				this.state = 34;
				this.match(LKDLParser.NEWLINE);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public searchStat(): SearchStatContext {
		let localctx: SearchStatContext = new SearchStatContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, LKDLParser.RULE_searchStat);
		try {
			this.state = 51;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 38;
				this.searchExpr();
				this.state = 39;
				this.match(LKDLParser.ATTR);
				this.state = 40;
				this.match(LKDLParser.ALL);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 42;
				this.searchExpr();
				this.state = 43;
				this.match(LKDLParser.ATTR);
				this.state = 44;
				this.match(LKDLParser.HAS);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 46;
				this.searchExpr();
				this.state = 47;
				this.match(LKDLParser.ATTR);
				this.state = 48;
				this.match(LKDLParser.ISA);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 50;
				this.searchExpr();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public cudStat(): CudStatContext {
		let localctx: CudStatContext = new CudStatContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, LKDLParser.RULE_cudStat);
		try {
			this.state = 69;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				localctx = new AddYuanRelContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 53;
				(localctx as AddYuanRelContext)._lhs = this.searchExpr();
				this.state = 54;
				this.match(LKDLParser.ADDEQ);
				this.state = 55;
				(localctx as AddYuanRelContext)._rhs = this.searchExpr();
				}
				break;
			case 2:
				localctx = new DelYuanRelContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 57;
				(localctx as DelYuanRelContext)._lhs = this.searchExpr();
				this.state = 58;
				this.match(LKDLParser.DELEQ);
				this.state = 59;
				(localctx as DelYuanRelContext)._rhs = this.searchExpr();
				}
				break;
			case 3:
				localctx = new UpdateYuanRelContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 61;
				(localctx as UpdateYuanRelContext)._lhs = this.searchExpr();
				this.state = 62;
				this.match(LKDLParser.ASSIGN);
				this.state = 63;
				(localctx as UpdateYuanRelContext)._rhs = this.searchExpr();
				}
				break;
			case 4:
				localctx = new AddYuanContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 65;
				this.match(LKDLParser.ADDYUAN);
				this.state = 66;
				this.yuanList();
				}
				break;
			case 5:
				localctx = new DelYuanContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 67;
				this.match(LKDLParser.DELYUAN);
				this.state = 68;
				this.yuanList();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public searchExpr(): SearchExprContext {
		let localctx: SearchExprContext = new SearchExprContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, LKDLParser.RULE_searchExpr);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 71;
			this.yuanList();
			this.state = 74;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				{
				this.state = 72;
				this.match(LKDLParser.ATTR);
				this.state = 73;
				this.relExprList();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public relExprList(): RelExprListContext {
		let localctx: RelExprListContext = new RelExprListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, LKDLParser.RULE_relExprList);
		let _la: number;
		try {
			this.state = 88;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 21:
			case 24:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 76;
				this.relExprSequnce();
				}
				break;
			case 14:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 77;
				this.match(LKDLParser.OPEN_PAREN);
				this.state = 78;
				this.relExprSequnce();
				this.state = 83;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===11) {
					{
					{
					this.state = 79;
					this.match(LKDLParser.COMMA);
					this.state = 80;
					this.relExprSequnce();
					}
					}
					this.state = 85;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 86;
				this.match(LKDLParser.CLOSE_PAREN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public relExprSequnce(): RelExprSequnceContext {
		let localctx: RelExprSequnceContext = new RelExprSequnceContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, LKDLParser.RULE_relExprSequnce);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 90;
			this.relExpr();
			this.state = 95;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 7, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 91;
					this.match(LKDLParser.ATTR);
					this.state = 92;
					this.relExpr();
					}
					}
				}
				this.state = 97;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 7, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public relExpr(): RelExprContext {
		let localctx: RelExprContext = new RelExprContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, LKDLParser.RULE_relExpr);
		let _la: number;
		try {
			this.state = 106;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 21:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 98;
				localctx._lhs = this.match(LKDLParser.ALL);
				this.state = 100;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===12) {
					{
					this.state = 99;
					localctx._rhs = this.relAttrList();
					}
				}

				}
				break;
			case 24:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 102;
				localctx._lhs = this.match(LKDLParser.ID);
				this.state = 104;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===12) {
					{
					this.state = 103;
					localctx._rhs = this.relAttrList();
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public relAttrList(): RelAttrListContext {
		let localctx: RelAttrListContext = new RelAttrListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, LKDLParser.RULE_relAttrList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 108;
			this.match(LKDLParser.OPEN_BRACKET);
			this.state = 109;
			this.relAttr();
			this.state = 114;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===11) {
				{
				{
				this.state = 110;
				this.match(LKDLParser.COMMA);
				this.state = 111;
				this.relAttr();
				}
				}
				this.state = 116;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 117;
			this.match(LKDLParser.CLOSE_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public relAttr(): RelAttrContext {
		let localctx: RelAttrContext = new RelAttrContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, LKDLParser.RULE_relAttr);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 119;
			localctx._lhs = this.match(LKDLParser.ID);
			this.state = 122;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 6:
				{
				this.state = 120;
				localctx._op = this.match(LKDLParser.ASSIGN);
				}
				break;
			case 7:
				{
				this.state = 121;
				localctx._op = this.match(LKDLParser.EQ);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 124;
			localctx._rhs = this._input.LT(1);
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 29360128) !== 0))) {
			    localctx._rhs = this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public yuanList(): YuanListContext {
		let localctx: YuanListContext = new YuanListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, LKDLParser.RULE_yuanList);
		let _la: number;
		try {
			this.state = 137;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 24:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 126;
				this.match(LKDLParser.ID);
				}
				break;
			case 14:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 127;
				this.match(LKDLParser.OPEN_PAREN);
				this.state = 128;
				this.match(LKDLParser.ID);
				this.state = 133;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===11) {
					{
					{
					this.state = 129;
					this.match(LKDLParser.COMMA);
					this.state = 130;
					this.match(LKDLParser.ID);
					}
					}
					this.state = 135;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 136;
				this.match(LKDLParser.CLOSE_PAREN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public static readonly _serializedATN: number[] = [4,1,25,140,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,1,0,5,0,24,8,0,10,0,12,0,27,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,
	3,1,37,8,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,52,8,
	2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,70,
	8,3,1,4,1,4,1,4,3,4,75,8,4,1,5,1,5,1,5,1,5,1,5,5,5,82,8,5,10,5,12,5,85,
	9,5,1,5,1,5,3,5,89,8,5,1,6,1,6,1,6,5,6,94,8,6,10,6,12,6,97,9,6,1,7,1,7,
	3,7,101,8,7,1,7,1,7,3,7,105,8,7,3,7,107,8,7,1,8,1,8,1,8,1,8,5,8,113,8,8,
	10,8,12,8,116,9,8,1,8,1,8,1,9,1,9,1,9,3,9,123,8,9,1,9,1,9,1,10,1,10,1,10,
	1,10,1,10,5,10,132,8,10,10,10,12,10,135,9,10,1,10,3,10,138,8,10,1,10,0,
	0,11,0,2,4,6,8,10,12,14,16,18,20,0,1,1,0,22,24,148,0,25,1,0,0,0,2,36,1,
	0,0,0,4,51,1,0,0,0,6,69,1,0,0,0,8,71,1,0,0,0,10,88,1,0,0,0,12,90,1,0,0,
	0,14,106,1,0,0,0,16,108,1,0,0,0,18,119,1,0,0,0,20,137,1,0,0,0,22,24,3,2,
	1,0,23,22,1,0,0,0,24,27,1,0,0,0,25,23,1,0,0,0,25,26,1,0,0,0,26,28,1,0,0,
	0,27,25,1,0,0,0,28,29,5,0,0,1,29,1,1,0,0,0,30,31,3,4,2,0,31,32,5,3,0,0,
	32,37,1,0,0,0,33,34,3,6,3,0,34,35,5,3,0,0,35,37,1,0,0,0,36,30,1,0,0,0,36,
	33,1,0,0,0,37,3,1,0,0,0,38,39,3,8,4,0,39,40,5,8,0,0,40,41,5,21,0,0,41,52,
	1,0,0,0,42,43,3,8,4,0,43,44,5,8,0,0,44,45,5,20,0,0,45,52,1,0,0,0,46,47,
	3,8,4,0,47,48,5,8,0,0,48,49,5,19,0,0,49,52,1,0,0,0,50,52,3,8,4,0,51,38,
	1,0,0,0,51,42,1,0,0,0,51,46,1,0,0,0,51,50,1,0,0,0,52,5,1,0,0,0,53,54,3,
	8,4,0,54,55,5,16,0,0,55,56,3,8,4,0,56,70,1,0,0,0,57,58,3,8,4,0,58,59,5,
	17,0,0,59,60,3,8,4,0,60,70,1,0,0,0,61,62,3,8,4,0,62,63,5,6,0,0,63,64,3,
	8,4,0,64,70,1,0,0,0,65,66,5,1,0,0,66,70,3,20,10,0,67,68,5,2,0,0,68,70,3,
	20,10,0,69,53,1,0,0,0,69,57,1,0,0,0,69,61,1,0,0,0,69,65,1,0,0,0,69,67,1,
	0,0,0,70,7,1,0,0,0,71,74,3,20,10,0,72,73,5,8,0,0,73,75,3,10,5,0,74,72,1,
	0,0,0,74,75,1,0,0,0,75,9,1,0,0,0,76,89,3,12,6,0,77,78,5,14,0,0,78,83,3,
	12,6,0,79,80,5,11,0,0,80,82,3,12,6,0,81,79,1,0,0,0,82,85,1,0,0,0,83,81,
	1,0,0,0,83,84,1,0,0,0,84,86,1,0,0,0,85,83,1,0,0,0,86,87,5,15,0,0,87,89,
	1,0,0,0,88,76,1,0,0,0,88,77,1,0,0,0,89,11,1,0,0,0,90,95,3,14,7,0,91,92,
	5,8,0,0,92,94,3,14,7,0,93,91,1,0,0,0,94,97,1,0,0,0,95,93,1,0,0,0,95,96,
	1,0,0,0,96,13,1,0,0,0,97,95,1,0,0,0,98,100,5,21,0,0,99,101,3,16,8,0,100,
	99,1,0,0,0,100,101,1,0,0,0,101,107,1,0,0,0,102,104,5,24,0,0,103,105,3,16,
	8,0,104,103,1,0,0,0,104,105,1,0,0,0,105,107,1,0,0,0,106,98,1,0,0,0,106,
	102,1,0,0,0,107,15,1,0,0,0,108,109,5,12,0,0,109,114,3,18,9,0,110,111,5,
	11,0,0,111,113,3,18,9,0,112,110,1,0,0,0,113,116,1,0,0,0,114,112,1,0,0,0,
	114,115,1,0,0,0,115,117,1,0,0,0,116,114,1,0,0,0,117,118,5,13,0,0,118,17,
	1,0,0,0,119,122,5,24,0,0,120,123,5,6,0,0,121,123,5,7,0,0,122,120,1,0,0,
	0,122,121,1,0,0,0,123,124,1,0,0,0,124,125,7,0,0,0,125,19,1,0,0,0,126,138,
	5,24,0,0,127,128,5,14,0,0,128,133,5,24,0,0,129,130,5,11,0,0,130,132,5,24,
	0,0,131,129,1,0,0,0,132,135,1,0,0,0,133,131,1,0,0,0,133,134,1,0,0,0,134,
	136,1,0,0,0,135,133,1,0,0,0,136,138,5,15,0,0,137,126,1,0,0,0,137,127,1,
	0,0,0,138,21,1,0,0,0,15,25,36,51,69,74,83,88,95,100,104,106,114,122,133,
	137];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!LKDLParser.__ATN) {
			LKDLParser.__ATN = new ATNDeserializer().deserialize(LKDLParser._serializedATN);
		}

		return LKDLParser.__ATN;
	}


	static DecisionsToDFA = LKDLParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class ProgContext extends ParserRuleContext {
	constructor(parser?: LKDLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EOF(): TerminalNode {
		return this.getToken(LKDLParser.EOF, 0);
	}
	public stat_list(): StatContext[] {
		return this.getTypedRuleContexts(StatContext) as StatContext[];
	}
	public stat(i: number): StatContext {
		return this.getTypedRuleContext(StatContext, i) as StatContext;
	}
    public get ruleIndex(): number {
    	return LKDLParser.RULE_prog;
	}
	public enterRule(listener: LKDLListener): void {
	    if(listener.enterProg) {
	 		listener.enterProg(this);
		}
	}
	public exitRule(listener: LKDLListener): void {
	    if(listener.exitProg) {
	 		listener.exitProg(this);
		}
	}
}


export class StatContext extends ParserRuleContext {
	constructor(parser?: LKDLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public searchStat(): SearchStatContext {
		return this.getTypedRuleContext(SearchStatContext, 0) as SearchStatContext;
	}
	public NEWLINE(): TerminalNode {
		return this.getToken(LKDLParser.NEWLINE, 0);
	}
	public cudStat(): CudStatContext {
		return this.getTypedRuleContext(CudStatContext, 0) as CudStatContext;
	}
    public get ruleIndex(): number {
    	return LKDLParser.RULE_stat;
	}
	public enterRule(listener: LKDLListener): void {
	    if(listener.enterStat) {
	 		listener.enterStat(this);
		}
	}
	public exitRule(listener: LKDLListener): void {
	    if(listener.exitStat) {
	 		listener.exitStat(this);
		}
	}
}


export class SearchStatContext extends ParserRuleContext {
	constructor(parser?: LKDLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public searchExpr(): SearchExprContext {
		return this.getTypedRuleContext(SearchExprContext, 0) as SearchExprContext;
	}
	public ATTR(): TerminalNode {
		return this.getToken(LKDLParser.ATTR, 0);
	}
	public ALL(): TerminalNode {
		return this.getToken(LKDLParser.ALL, 0);
	}
	public HAS(): TerminalNode {
		return this.getToken(LKDLParser.HAS, 0);
	}
	public ISA(): TerminalNode {
		return this.getToken(LKDLParser.ISA, 0);
	}
    public get ruleIndex(): number {
    	return LKDLParser.RULE_searchStat;
	}
	public enterRule(listener: LKDLListener): void {
	    if(listener.enterSearchStat) {
	 		listener.enterSearchStat(this);
		}
	}
	public exitRule(listener: LKDLListener): void {
	    if(listener.exitSearchStat) {
	 		listener.exitSearchStat(this);
		}
	}
}


export class CudStatContext extends ParserRuleContext {
	constructor(parser?: LKDLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return LKDLParser.RULE_cudStat;
	}
	public copyFrom(ctx: CudStatContext): void {
		super.copyFrom(ctx);
	}
}
export class DelYuanContext extends CudStatContext {
	constructor(parser: LKDLParser, ctx: CudStatContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DELYUAN(): TerminalNode {
		return this.getToken(LKDLParser.DELYUAN, 0);
	}
	public yuanList(): YuanListContext {
		return this.getTypedRuleContext(YuanListContext, 0) as YuanListContext;
	}
	public enterRule(listener: LKDLListener): void {
	    if(listener.enterDelYuan) {
	 		listener.enterDelYuan(this);
		}
	}
	public exitRule(listener: LKDLListener): void {
	    if(listener.exitDelYuan) {
	 		listener.exitDelYuan(this);
		}
	}
}
export class AddYuanContext extends CudStatContext {
	constructor(parser: LKDLParser, ctx: CudStatContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ADDYUAN(): TerminalNode {
		return this.getToken(LKDLParser.ADDYUAN, 0);
	}
	public yuanList(): YuanListContext {
		return this.getTypedRuleContext(YuanListContext, 0) as YuanListContext;
	}
	public enterRule(listener: LKDLListener): void {
	    if(listener.enterAddYuan) {
	 		listener.enterAddYuan(this);
		}
	}
	public exitRule(listener: LKDLListener): void {
	    if(listener.exitAddYuan) {
	 		listener.exitAddYuan(this);
		}
	}
}
export class AddYuanRelContext extends CudStatContext {
	public _lhs!: SearchExprContext;
	public _rhs!: SearchExprContext;
	constructor(parser: LKDLParser, ctx: CudStatContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ADDEQ(): TerminalNode {
		return this.getToken(LKDLParser.ADDEQ, 0);
	}
	public searchExpr_list(): SearchExprContext[] {
		return this.getTypedRuleContexts(SearchExprContext) as SearchExprContext[];
	}
	public searchExpr(i: number): SearchExprContext {
		return this.getTypedRuleContext(SearchExprContext, i) as SearchExprContext;
	}
	public enterRule(listener: LKDLListener): void {
	    if(listener.enterAddYuanRel) {
	 		listener.enterAddYuanRel(this);
		}
	}
	public exitRule(listener: LKDLListener): void {
	    if(listener.exitAddYuanRel) {
	 		listener.exitAddYuanRel(this);
		}
	}
}
export class DelYuanRelContext extends CudStatContext {
	public _lhs!: SearchExprContext;
	public _rhs!: SearchExprContext;
	constructor(parser: LKDLParser, ctx: CudStatContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DELEQ(): TerminalNode {
		return this.getToken(LKDLParser.DELEQ, 0);
	}
	public searchExpr_list(): SearchExprContext[] {
		return this.getTypedRuleContexts(SearchExprContext) as SearchExprContext[];
	}
	public searchExpr(i: number): SearchExprContext {
		return this.getTypedRuleContext(SearchExprContext, i) as SearchExprContext;
	}
	public enterRule(listener: LKDLListener): void {
	    if(listener.enterDelYuanRel) {
	 		listener.enterDelYuanRel(this);
		}
	}
	public exitRule(listener: LKDLListener): void {
	    if(listener.exitDelYuanRel) {
	 		listener.exitDelYuanRel(this);
		}
	}
}
export class UpdateYuanRelContext extends CudStatContext {
	public _lhs!: SearchExprContext;
	public _rhs!: SearchExprContext;
	constructor(parser: LKDLParser, ctx: CudStatContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ASSIGN(): TerminalNode {
		return this.getToken(LKDLParser.ASSIGN, 0);
	}
	public searchExpr_list(): SearchExprContext[] {
		return this.getTypedRuleContexts(SearchExprContext) as SearchExprContext[];
	}
	public searchExpr(i: number): SearchExprContext {
		return this.getTypedRuleContext(SearchExprContext, i) as SearchExprContext;
	}
	public enterRule(listener: LKDLListener): void {
	    if(listener.enterUpdateYuanRel) {
	 		listener.enterUpdateYuanRel(this);
		}
	}
	public exitRule(listener: LKDLListener): void {
	    if(listener.exitUpdateYuanRel) {
	 		listener.exitUpdateYuanRel(this);
		}
	}
}


export class SearchExprContext extends ParserRuleContext {
	constructor(parser?: LKDLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public yuanList(): YuanListContext {
		return this.getTypedRuleContext(YuanListContext, 0) as YuanListContext;
	}
	public ATTR(): TerminalNode {
		return this.getToken(LKDLParser.ATTR, 0);
	}
	public relExprList(): RelExprListContext {
		return this.getTypedRuleContext(RelExprListContext, 0) as RelExprListContext;
	}
    public get ruleIndex(): number {
    	return LKDLParser.RULE_searchExpr;
	}
	public enterRule(listener: LKDLListener): void {
	    if(listener.enterSearchExpr) {
	 		listener.enterSearchExpr(this);
		}
	}
	public exitRule(listener: LKDLListener): void {
	    if(listener.exitSearchExpr) {
	 		listener.exitSearchExpr(this);
		}
	}
}


export class RelExprListContext extends ParserRuleContext {
	constructor(parser?: LKDLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public relExprSequnce_list(): RelExprSequnceContext[] {
		return this.getTypedRuleContexts(RelExprSequnceContext) as RelExprSequnceContext[];
	}
	public relExprSequnce(i: number): RelExprSequnceContext {
		return this.getTypedRuleContext(RelExprSequnceContext, i) as RelExprSequnceContext;
	}
	public OPEN_PAREN(): TerminalNode {
		return this.getToken(LKDLParser.OPEN_PAREN, 0);
	}
	public CLOSE_PAREN(): TerminalNode {
		return this.getToken(LKDLParser.CLOSE_PAREN, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(LKDLParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(LKDLParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return LKDLParser.RULE_relExprList;
	}
	public enterRule(listener: LKDLListener): void {
	    if(listener.enterRelExprList) {
	 		listener.enterRelExprList(this);
		}
	}
	public exitRule(listener: LKDLListener): void {
	    if(listener.exitRelExprList) {
	 		listener.exitRelExprList(this);
		}
	}
}


export class RelExprSequnceContext extends ParserRuleContext {
	constructor(parser?: LKDLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public relExpr_list(): RelExprContext[] {
		return this.getTypedRuleContexts(RelExprContext) as RelExprContext[];
	}
	public relExpr(i: number): RelExprContext {
		return this.getTypedRuleContext(RelExprContext, i) as RelExprContext;
	}
	public ATTR_list(): TerminalNode[] {
	    	return this.getTokens(LKDLParser.ATTR);
	}
	public ATTR(i: number): TerminalNode {
		return this.getToken(LKDLParser.ATTR, i);
	}
    public get ruleIndex(): number {
    	return LKDLParser.RULE_relExprSequnce;
	}
	public enterRule(listener: LKDLListener): void {
	    if(listener.enterRelExprSequnce) {
	 		listener.enterRelExprSequnce(this);
		}
	}
	public exitRule(listener: LKDLListener): void {
	    if(listener.exitRelExprSequnce) {
	 		listener.exitRelExprSequnce(this);
		}
	}
}


export class RelExprContext extends ParserRuleContext {
	public _lhs!: Token;
	public _rhs!: RelAttrListContext;
	constructor(parser?: LKDLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ALL(): TerminalNode {
		return this.getToken(LKDLParser.ALL, 0);
	}
	public relAttrList(): RelAttrListContext {
		return this.getTypedRuleContext(RelAttrListContext, 0) as RelAttrListContext;
	}
	public ID(): TerminalNode {
		return this.getToken(LKDLParser.ID, 0);
	}
    public get ruleIndex(): number {
    	return LKDLParser.RULE_relExpr;
	}
	public enterRule(listener: LKDLListener): void {
	    if(listener.enterRelExpr) {
	 		listener.enterRelExpr(this);
		}
	}
	public exitRule(listener: LKDLListener): void {
	    if(listener.exitRelExpr) {
	 		listener.exitRelExpr(this);
		}
	}
}


export class RelAttrListContext extends ParserRuleContext {
	constructor(parser?: LKDLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OPEN_BRACKET(): TerminalNode {
		return this.getToken(LKDLParser.OPEN_BRACKET, 0);
	}
	public relAttr_list(): RelAttrContext[] {
		return this.getTypedRuleContexts(RelAttrContext) as RelAttrContext[];
	}
	public relAttr(i: number): RelAttrContext {
		return this.getTypedRuleContext(RelAttrContext, i) as RelAttrContext;
	}
	public CLOSE_BRACKET(): TerminalNode {
		return this.getToken(LKDLParser.CLOSE_BRACKET, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(LKDLParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(LKDLParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return LKDLParser.RULE_relAttrList;
	}
	public enterRule(listener: LKDLListener): void {
	    if(listener.enterRelAttrList) {
	 		listener.enterRelAttrList(this);
		}
	}
	public exitRule(listener: LKDLListener): void {
	    if(listener.exitRelAttrList) {
	 		listener.exitRelAttrList(this);
		}
	}
}


export class RelAttrContext extends ParserRuleContext {
	public _lhs!: Token;
	public _op!: Token;
	public _rhs!: Token;
	constructor(parser?: LKDLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID_list(): TerminalNode[] {
	    	return this.getTokens(LKDLParser.ID);
	}
	public ID(i: number): TerminalNode {
		return this.getToken(LKDLParser.ID, i);
	}
	public INT(): TerminalNode {
		return this.getToken(LKDLParser.INT, 0);
	}
	public FLOAT(): TerminalNode {
		return this.getToken(LKDLParser.FLOAT, 0);
	}
	public ASSIGN(): TerminalNode {
		return this.getToken(LKDLParser.ASSIGN, 0);
	}
	public EQ(): TerminalNode {
		return this.getToken(LKDLParser.EQ, 0);
	}
    public get ruleIndex(): number {
    	return LKDLParser.RULE_relAttr;
	}
	public enterRule(listener: LKDLListener): void {
	    if(listener.enterRelAttr) {
	 		listener.enterRelAttr(this);
		}
	}
	public exitRule(listener: LKDLListener): void {
	    if(listener.exitRelAttr) {
	 		listener.exitRelAttr(this);
		}
	}
}


export class YuanListContext extends ParserRuleContext {
	constructor(parser?: LKDLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID_list(): TerminalNode[] {
	    	return this.getTokens(LKDLParser.ID);
	}
	public ID(i: number): TerminalNode {
		return this.getToken(LKDLParser.ID, i);
	}
	public OPEN_PAREN(): TerminalNode {
		return this.getToken(LKDLParser.OPEN_PAREN, 0);
	}
	public CLOSE_PAREN(): TerminalNode {
		return this.getToken(LKDLParser.CLOSE_PAREN, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(LKDLParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(LKDLParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return LKDLParser.RULE_yuanList;
	}
	public enterRule(listener: LKDLListener): void {
	    if(listener.enterYuanList) {
	 		listener.enterYuanList(this);
		}
	}
	public exitRule(listener: LKDLListener): void {
	    if(listener.exitYuanList) {
	 		listener.exitYuanList(this);
		}
	}
}
