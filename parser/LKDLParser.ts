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
	public static readonly RULE_noRelYuanSearchExpr = 3;
	public static readonly RULE_relYuanSearchExpr = 4;
	public static readonly RULE_isaSearchExpr = 5;
	public static readonly RULE_hasSearchExpr = 6;
	public static readonly RULE_cudYuanStat = 7;
	public static readonly RULE_noRelYuanCudExpr = 8;
	public static readonly RULE_relYuanCudExpr = 9;
	public static readonly RULE_relExprList = 10;
	public static readonly RULE_relExpr = 11;
	public static readonly RULE_relAttrList = 12;
	public static readonly RULE_relAttr = 13;
	public static readonly RULE_yuanList = 14;
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
		"prog", "stat", "searchStat", "noRelYuanSearchExpr", "relYuanSearchExpr", 
		"isaSearchExpr", "hasSearchExpr", "cudYuanStat", "noRelYuanCudExpr", "relYuanCudExpr", 
		"relExprList", "relExpr", "relAttrList", "relAttr", "yuanList",
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
			this.state = 33;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 16793606) !== 0)) {
				{
				{
				this.state = 30;
				this.stat();
				}
				}
				this.state = 35;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 36;
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
			this.state = 44;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 38;
				this.searchStat();
				this.state = 39;
				this.match(LKDLParser.NEWLINE);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 41;
				this.cudYuanStat();
				this.state = 42;
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
			this.state = 50;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 46;
				this.noRelYuanSearchExpr();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 47;
				this.relYuanSearchExpr();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 48;
				this.isaSearchExpr();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 49;
				this.hasSearchExpr();
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
	public noRelYuanSearchExpr(): NoRelYuanSearchExprContext {
		let localctx: NoRelYuanSearchExprContext = new NoRelYuanSearchExprContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, LKDLParser.RULE_noRelYuanSearchExpr);
		try {
			localctx = new SearchYuanContext(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 52;
			this.yuanList();
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
	public relYuanSearchExpr(): RelYuanSearchExprContext {
		let localctx: RelYuanSearchExprContext = new RelYuanSearchExprContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, LKDLParser.RULE_relYuanSearchExpr);
		try {
			localctx = new SearchYuanRelContext(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 54;
			this.yuanList();
			this.state = 55;
			this.match(LKDLParser.ATTR);
			this.state = 56;
			this.relExprList();
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
	public isaSearchExpr(): IsaSearchExprContext {
		let localctx: IsaSearchExprContext = new IsaSearchExprContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, LKDLParser.RULE_isaSearchExpr);
		try {
			localctx = new SearchYuanIsaContext(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 58;
			this.yuanList();
			this.state = 59;
			this.match(LKDLParser.ATTR);
			this.state = 60;
			this.match(LKDLParser.ISA);
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
	public hasSearchExpr(): HasSearchExprContext {
		let localctx: HasSearchExprContext = new HasSearchExprContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, LKDLParser.RULE_hasSearchExpr);
		try {
			localctx = new SearchYuanHasContext(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 62;
			this.yuanList();
			this.state = 63;
			this.match(LKDLParser.ATTR);
			this.state = 64;
			this.match(LKDLParser.HAS);
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
	public cudYuanStat(): CudYuanStatContext {
		let localctx: CudYuanStatContext = new CudYuanStatContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, LKDLParser.RULE_cudYuanStat);
		try {
			this.state = 68;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 1:
			case 2:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 66;
				this.noRelYuanCudExpr();
				}
				break;
			case 14:
			case 24:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 67;
				this.relYuanCudExpr();
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
	public noRelYuanCudExpr(): NoRelYuanCudExprContext {
		let localctx: NoRelYuanCudExprContext = new NoRelYuanCudExprContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, LKDLParser.RULE_noRelYuanCudExpr);
		try {
			this.state = 74;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 1:
				localctx = new AddYuanContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 70;
				this.match(LKDLParser.ADDYUAN);
				this.state = 71;
				this.yuanList();
				}
				break;
			case 2:
				localctx = new DelYuanContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 72;
				this.match(LKDLParser.DELYUAN);
				this.state = 73;
				this.yuanList();
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
	public relYuanCudExpr(): RelYuanCudExprContext {
		let localctx: RelYuanCudExprContext = new RelYuanCudExprContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, LKDLParser.RULE_relYuanCudExpr);
		try {
			this.state = 94;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				localctx = new AddYuanRelContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 76;
				(localctx as AddYuanRelContext)._lhs = this.yuanList();
				this.state = 77;
				this.match(LKDLParser.ATTR);
				this.state = 78;
				this.relExprList();
				this.state = 79;
				this.match(LKDLParser.ADDEQ);
				this.state = 80;
				(localctx as AddYuanRelContext)._rhs = this.yuanList();
				}
				break;
			case 2:
				localctx = new DelYuanRelContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 82;
				(localctx as DelYuanRelContext)._lhs = this.yuanList();
				this.state = 83;
				this.match(LKDLParser.ATTR);
				this.state = 84;
				this.relExprList();
				this.state = 85;
				this.match(LKDLParser.DELEQ);
				this.state = 86;
				(localctx as DelYuanRelContext)._rhs = this.yuanList();
				}
				break;
			case 3:
				localctx = new UpdateYuanRelContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 88;
				(localctx as UpdateYuanRelContext)._lhs = this.yuanList();
				this.state = 89;
				this.match(LKDLParser.ATTR);
				this.state = 90;
				this.relExprList();
				this.state = 91;
				this.match(LKDLParser.ASSIGN);
				this.state = 92;
				(localctx as UpdateYuanRelContext)._rhs = this.yuanList();
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
	public relExprList(): RelExprListContext {
		let localctx: RelExprListContext = new RelExprListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, LKDLParser.RULE_relExprList);
		let _la: number;
		try {
			this.state = 108;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 21:
			case 24:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 96;
				this.relExpr(0);
				}
				break;
			case 14:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 97;
				this.match(LKDLParser.OPEN_PAREN);
				this.state = 98;
				this.relExpr(0);
				this.state = 103;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===11) {
					{
					{
					this.state = 99;
					this.match(LKDLParser.COMMA);
					this.state = 100;
					this.relExpr(0);
					}
					}
					this.state = 105;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 106;
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

	public relExpr(): RelExprContext;
	public relExpr(_p: number): RelExprContext;
	// @RuleVersion(0)
	public relExpr(_p?: number): RelExprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: RelExprContext = new RelExprContext(this, this._ctx, _parentState);
		let _prevctx: RelExprContext = localctx;
		let _startState: number = 22;
		this.enterRecursionRule(localctx, 22, LKDLParser.RULE_relExpr, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 116;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				{
				this.state = 111;
				this.match(LKDLParser.ALL);
				this.state = 112;
				this.relAttrList();
				}
				break;
			case 2:
				{
				this.state = 113;
				this.match(LKDLParser.ID);
				this.state = 114;
				this.relAttrList();
				}
				break;
			case 3:
				{
				this.state = 115;
				this.match(LKDLParser.ID);
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 123;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 9, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new RelExprContext(this, _parentctx, _parentState);
					this.pushNewRecursionContext(localctx, _startState, LKDLParser.RULE_relExpr);
					this.state = 118;
					if (!(this.precpred(this._ctx, 4))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
					}
					{
					this.state = 119;
					this.match(LKDLParser.ATTR);
					this.state = 120;
					this.relExpr(0);
					}
					}
					}
				}
				this.state = 125;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 9, this._ctx);
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
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public relAttrList(): RelAttrListContext {
		let localctx: RelAttrListContext = new RelAttrListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, LKDLParser.RULE_relAttrList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 126;
			this.match(LKDLParser.OPEN_BRACKET);
			this.state = 127;
			this.relAttr();
			this.state = 132;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===11) {
				{
				{
				this.state = 128;
				this.match(LKDLParser.COMMA);
				this.state = 129;
				this.relAttr();
				}
				}
				this.state = 134;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 135;
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
		this.enterRule(localctx, 26, LKDLParser.RULE_relAttr);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 137;
			localctx._lhs = this.match(LKDLParser.ID);
			this.state = 140;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 6:
				{
				this.state = 138;
				localctx._op = this.match(LKDLParser.ASSIGN);
				}
				break;
			case 7:
				{
				this.state = 139;
				localctx._op = this.match(LKDLParser.EQ);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 142;
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
		this.enterRule(localctx, 28, LKDLParser.RULE_yuanList);
		let _la: number;
		try {
			this.state = 155;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 24:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 144;
				this.match(LKDLParser.ID);
				}
				break;
			case 14:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 145;
				this.match(LKDLParser.OPEN_PAREN);
				this.state = 146;
				this.match(LKDLParser.ID);
				this.state = 151;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===11) {
					{
					{
					this.state = 147;
					this.match(LKDLParser.COMMA);
					this.state = 148;
					this.match(LKDLParser.ID);
					}
					}
					this.state = 153;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 154;
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

	public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 11:
			return this.relExpr_sempred(localctx as RelExprContext, predIndex);
		}
		return true;
	}
	private relExpr_sempred(localctx: RelExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 4);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,25,158,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,1,0,5,0,32,8,0,10,0,12,
	0,35,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,3,1,45,8,1,1,2,1,2,1,2,1,2,3,2,
	51,8,2,1,3,1,3,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,7,1,7,
	3,7,69,8,7,1,8,1,8,1,8,1,8,3,8,75,8,8,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,
	9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,3,9,95,8,9,1,10,1,10,1,10,1,10,1,
	10,5,10,102,8,10,10,10,12,10,105,9,10,1,10,1,10,3,10,109,8,10,1,11,1,11,
	1,11,1,11,1,11,1,11,3,11,117,8,11,1,11,1,11,1,11,5,11,122,8,11,10,11,12,
	11,125,9,11,1,12,1,12,1,12,1,12,5,12,131,8,12,10,12,12,12,134,9,12,1,12,
	1,12,1,13,1,13,1,13,3,13,141,8,13,1,13,1,13,1,14,1,14,1,14,1,14,1,14,5,
	14,150,8,14,10,14,12,14,153,9,14,1,14,3,14,156,8,14,1,14,0,1,22,15,0,2,
	4,6,8,10,12,14,16,18,20,22,24,26,28,0,1,1,0,22,24,160,0,33,1,0,0,0,2,44,
	1,0,0,0,4,50,1,0,0,0,6,52,1,0,0,0,8,54,1,0,0,0,10,58,1,0,0,0,12,62,1,0,
	0,0,14,68,1,0,0,0,16,74,1,0,0,0,18,94,1,0,0,0,20,108,1,0,0,0,22,116,1,0,
	0,0,24,126,1,0,0,0,26,137,1,0,0,0,28,155,1,0,0,0,30,32,3,2,1,0,31,30,1,
	0,0,0,32,35,1,0,0,0,33,31,1,0,0,0,33,34,1,0,0,0,34,36,1,0,0,0,35,33,1,0,
	0,0,36,37,5,0,0,1,37,1,1,0,0,0,38,39,3,4,2,0,39,40,5,3,0,0,40,45,1,0,0,
	0,41,42,3,14,7,0,42,43,5,3,0,0,43,45,1,0,0,0,44,38,1,0,0,0,44,41,1,0,0,
	0,45,3,1,0,0,0,46,51,3,6,3,0,47,51,3,8,4,0,48,51,3,10,5,0,49,51,3,12,6,
	0,50,46,1,0,0,0,50,47,1,0,0,0,50,48,1,0,0,0,50,49,1,0,0,0,51,5,1,0,0,0,
	52,53,3,28,14,0,53,7,1,0,0,0,54,55,3,28,14,0,55,56,5,8,0,0,56,57,3,20,10,
	0,57,9,1,0,0,0,58,59,3,28,14,0,59,60,5,8,0,0,60,61,5,19,0,0,61,11,1,0,0,
	0,62,63,3,28,14,0,63,64,5,8,0,0,64,65,5,20,0,0,65,13,1,0,0,0,66,69,3,16,
	8,0,67,69,3,18,9,0,68,66,1,0,0,0,68,67,1,0,0,0,69,15,1,0,0,0,70,71,5,1,
	0,0,71,75,3,28,14,0,72,73,5,2,0,0,73,75,3,28,14,0,74,70,1,0,0,0,74,72,1,
	0,0,0,75,17,1,0,0,0,76,77,3,28,14,0,77,78,5,8,0,0,78,79,3,20,10,0,79,80,
	5,16,0,0,80,81,3,28,14,0,81,95,1,0,0,0,82,83,3,28,14,0,83,84,5,8,0,0,84,
	85,3,20,10,0,85,86,5,17,0,0,86,87,3,28,14,0,87,95,1,0,0,0,88,89,3,28,14,
	0,89,90,5,8,0,0,90,91,3,20,10,0,91,92,5,6,0,0,92,93,3,28,14,0,93,95,1,0,
	0,0,94,76,1,0,0,0,94,82,1,0,0,0,94,88,1,0,0,0,95,19,1,0,0,0,96,109,3,22,
	11,0,97,98,5,14,0,0,98,103,3,22,11,0,99,100,5,11,0,0,100,102,3,22,11,0,
	101,99,1,0,0,0,102,105,1,0,0,0,103,101,1,0,0,0,103,104,1,0,0,0,104,106,
	1,0,0,0,105,103,1,0,0,0,106,107,5,15,0,0,107,109,1,0,0,0,108,96,1,0,0,0,
	108,97,1,0,0,0,109,21,1,0,0,0,110,111,6,11,-1,0,111,112,5,21,0,0,112,117,
	3,24,12,0,113,114,5,24,0,0,114,117,3,24,12,0,115,117,5,24,0,0,116,110,1,
	0,0,0,116,113,1,0,0,0,116,115,1,0,0,0,117,123,1,0,0,0,118,119,10,4,0,0,
	119,120,5,8,0,0,120,122,3,22,11,0,121,118,1,0,0,0,122,125,1,0,0,0,123,121,
	1,0,0,0,123,124,1,0,0,0,124,23,1,0,0,0,125,123,1,0,0,0,126,127,5,12,0,0,
	127,132,3,26,13,0,128,129,5,11,0,0,129,131,3,26,13,0,130,128,1,0,0,0,131,
	134,1,0,0,0,132,130,1,0,0,0,132,133,1,0,0,0,133,135,1,0,0,0,134,132,1,0,
	0,0,135,136,5,13,0,0,136,25,1,0,0,0,137,140,5,24,0,0,138,141,5,6,0,0,139,
	141,5,7,0,0,140,138,1,0,0,0,140,139,1,0,0,0,141,142,1,0,0,0,142,143,7,0,
	0,0,143,27,1,0,0,0,144,156,5,24,0,0,145,146,5,14,0,0,146,151,5,24,0,0,147,
	148,5,11,0,0,148,150,5,24,0,0,149,147,1,0,0,0,150,153,1,0,0,0,151,149,1,
	0,0,0,151,152,1,0,0,0,152,154,1,0,0,0,153,151,1,0,0,0,154,156,5,15,0,0,
	155,144,1,0,0,0,155,145,1,0,0,0,156,29,1,0,0,0,14,33,44,50,68,74,94,103,
	108,116,123,132,140,151,155];

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
	public cudYuanStat(): CudYuanStatContext {
		return this.getTypedRuleContext(CudYuanStatContext, 0) as CudYuanStatContext;
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
	public noRelYuanSearchExpr(): NoRelYuanSearchExprContext {
		return this.getTypedRuleContext(NoRelYuanSearchExprContext, 0) as NoRelYuanSearchExprContext;
	}
	public relYuanSearchExpr(): RelYuanSearchExprContext {
		return this.getTypedRuleContext(RelYuanSearchExprContext, 0) as RelYuanSearchExprContext;
	}
	public isaSearchExpr(): IsaSearchExprContext {
		return this.getTypedRuleContext(IsaSearchExprContext, 0) as IsaSearchExprContext;
	}
	public hasSearchExpr(): HasSearchExprContext {
		return this.getTypedRuleContext(HasSearchExprContext, 0) as HasSearchExprContext;
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


export class NoRelYuanSearchExprContext extends ParserRuleContext {
	constructor(parser?: LKDLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return LKDLParser.RULE_noRelYuanSearchExpr;
	}
	public copyFrom(ctx: NoRelYuanSearchExprContext): void {
		super.copyFrom(ctx);
	}
}
export class SearchYuanContext extends NoRelYuanSearchExprContext {
	constructor(parser: LKDLParser, ctx: NoRelYuanSearchExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public yuanList(): YuanListContext {
		return this.getTypedRuleContext(YuanListContext, 0) as YuanListContext;
	}
	public enterRule(listener: LKDLListener): void {
	    if(listener.enterSearchYuan) {
	 		listener.enterSearchYuan(this);
		}
	}
	public exitRule(listener: LKDLListener): void {
	    if(listener.exitSearchYuan) {
	 		listener.exitSearchYuan(this);
		}
	}
}


export class RelYuanSearchExprContext extends ParserRuleContext {
	constructor(parser?: LKDLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return LKDLParser.RULE_relYuanSearchExpr;
	}
	public copyFrom(ctx: RelYuanSearchExprContext): void {
		super.copyFrom(ctx);
	}
}
export class SearchYuanRelContext extends RelYuanSearchExprContext {
	constructor(parser: LKDLParser, ctx: RelYuanSearchExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
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
	public enterRule(listener: LKDLListener): void {
	    if(listener.enterSearchYuanRel) {
	 		listener.enterSearchYuanRel(this);
		}
	}
	public exitRule(listener: LKDLListener): void {
	    if(listener.exitSearchYuanRel) {
	 		listener.exitSearchYuanRel(this);
		}
	}
}


export class IsaSearchExprContext extends ParserRuleContext {
	constructor(parser?: LKDLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return LKDLParser.RULE_isaSearchExpr;
	}
	public copyFrom(ctx: IsaSearchExprContext): void {
		super.copyFrom(ctx);
	}
}
export class SearchYuanIsaContext extends IsaSearchExprContext {
	constructor(parser: LKDLParser, ctx: IsaSearchExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public yuanList(): YuanListContext {
		return this.getTypedRuleContext(YuanListContext, 0) as YuanListContext;
	}
	public ATTR(): TerminalNode {
		return this.getToken(LKDLParser.ATTR, 0);
	}
	public ISA(): TerminalNode {
		return this.getToken(LKDLParser.ISA, 0);
	}
	public enterRule(listener: LKDLListener): void {
	    if(listener.enterSearchYuanIsa) {
	 		listener.enterSearchYuanIsa(this);
		}
	}
	public exitRule(listener: LKDLListener): void {
	    if(listener.exitSearchYuanIsa) {
	 		listener.exitSearchYuanIsa(this);
		}
	}
}


export class HasSearchExprContext extends ParserRuleContext {
	constructor(parser?: LKDLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return LKDLParser.RULE_hasSearchExpr;
	}
	public copyFrom(ctx: HasSearchExprContext): void {
		super.copyFrom(ctx);
	}
}
export class SearchYuanHasContext extends HasSearchExprContext {
	constructor(parser: LKDLParser, ctx: HasSearchExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public yuanList(): YuanListContext {
		return this.getTypedRuleContext(YuanListContext, 0) as YuanListContext;
	}
	public ATTR(): TerminalNode {
		return this.getToken(LKDLParser.ATTR, 0);
	}
	public HAS(): TerminalNode {
		return this.getToken(LKDLParser.HAS, 0);
	}
	public enterRule(listener: LKDLListener): void {
	    if(listener.enterSearchYuanHas) {
	 		listener.enterSearchYuanHas(this);
		}
	}
	public exitRule(listener: LKDLListener): void {
	    if(listener.exitSearchYuanHas) {
	 		listener.exitSearchYuanHas(this);
		}
	}
}


export class CudYuanStatContext extends ParserRuleContext {
	constructor(parser?: LKDLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public noRelYuanCudExpr(): NoRelYuanCudExprContext {
		return this.getTypedRuleContext(NoRelYuanCudExprContext, 0) as NoRelYuanCudExprContext;
	}
	public relYuanCudExpr(): RelYuanCudExprContext {
		return this.getTypedRuleContext(RelYuanCudExprContext, 0) as RelYuanCudExprContext;
	}
    public get ruleIndex(): number {
    	return LKDLParser.RULE_cudYuanStat;
	}
	public enterRule(listener: LKDLListener): void {
	    if(listener.enterCudYuanStat) {
	 		listener.enterCudYuanStat(this);
		}
	}
	public exitRule(listener: LKDLListener): void {
	    if(listener.exitCudYuanStat) {
	 		listener.exitCudYuanStat(this);
		}
	}
}


export class NoRelYuanCudExprContext extends ParserRuleContext {
	constructor(parser?: LKDLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return LKDLParser.RULE_noRelYuanCudExpr;
	}
	public copyFrom(ctx: NoRelYuanCudExprContext): void {
		super.copyFrom(ctx);
	}
}
export class DelYuanContext extends NoRelYuanCudExprContext {
	constructor(parser: LKDLParser, ctx: NoRelYuanCudExprContext) {
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
export class AddYuanContext extends NoRelYuanCudExprContext {
	constructor(parser: LKDLParser, ctx: NoRelYuanCudExprContext) {
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


export class RelYuanCudExprContext extends ParserRuleContext {
	constructor(parser?: LKDLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return LKDLParser.RULE_relYuanCudExpr;
	}
	public copyFrom(ctx: RelYuanCudExprContext): void {
		super.copyFrom(ctx);
	}
}
export class AddYuanRelContext extends RelYuanCudExprContext {
	public _lhs!: YuanListContext;
	public _rhs!: YuanListContext;
	constructor(parser: LKDLParser, ctx: RelYuanCudExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ATTR(): TerminalNode {
		return this.getToken(LKDLParser.ATTR, 0);
	}
	public relExprList(): RelExprListContext {
		return this.getTypedRuleContext(RelExprListContext, 0) as RelExprListContext;
	}
	public ADDEQ(): TerminalNode {
		return this.getToken(LKDLParser.ADDEQ, 0);
	}
	public yuanList_list(): YuanListContext[] {
		return this.getTypedRuleContexts(YuanListContext) as YuanListContext[];
	}
	public yuanList(i: number): YuanListContext {
		return this.getTypedRuleContext(YuanListContext, i) as YuanListContext;
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
export class DelYuanRelContext extends RelYuanCudExprContext {
	public _lhs!: YuanListContext;
	public _rhs!: YuanListContext;
	constructor(parser: LKDLParser, ctx: RelYuanCudExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ATTR(): TerminalNode {
		return this.getToken(LKDLParser.ATTR, 0);
	}
	public relExprList(): RelExprListContext {
		return this.getTypedRuleContext(RelExprListContext, 0) as RelExprListContext;
	}
	public DELEQ(): TerminalNode {
		return this.getToken(LKDLParser.DELEQ, 0);
	}
	public yuanList_list(): YuanListContext[] {
		return this.getTypedRuleContexts(YuanListContext) as YuanListContext[];
	}
	public yuanList(i: number): YuanListContext {
		return this.getTypedRuleContext(YuanListContext, i) as YuanListContext;
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
export class UpdateYuanRelContext extends RelYuanCudExprContext {
	public _lhs!: YuanListContext;
	public _rhs!: YuanListContext;
	constructor(parser: LKDLParser, ctx: RelYuanCudExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ATTR(): TerminalNode {
		return this.getToken(LKDLParser.ATTR, 0);
	}
	public relExprList(): RelExprListContext {
		return this.getTypedRuleContext(RelExprListContext, 0) as RelExprListContext;
	}
	public ASSIGN(): TerminalNode {
		return this.getToken(LKDLParser.ASSIGN, 0);
	}
	public yuanList_list(): YuanListContext[] {
		return this.getTypedRuleContexts(YuanListContext) as YuanListContext[];
	}
	public yuanList(i: number): YuanListContext {
		return this.getTypedRuleContext(YuanListContext, i) as YuanListContext;
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


export class RelExprListContext extends ParserRuleContext {
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


export class RelExprContext extends ParserRuleContext {
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
	public relExpr_list(): RelExprContext[] {
		return this.getTypedRuleContexts(RelExprContext) as RelExprContext[];
	}
	public relExpr(i: number): RelExprContext {
		return this.getTypedRuleContext(RelExprContext, i) as RelExprContext;
	}
	public ATTR(): TerminalNode {
		return this.getToken(LKDLParser.ATTR, 0);
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
