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
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly YUAN = 3;
	public static readonly RULE = 4;
	public static readonly INFER = 5;
	public static readonly NEWLINE = 6;
	public static readonly LINECOMMENT = 7;
	public static readonly BLOCKCOMMENT = 8;
	public static readonly ASSIGN = 9;
	public static readonly EQ = 10;
	public static readonly AND = 11;
	public static readonly ATTR = 12;
	public static readonly ADD = 13;
	public static readonly SUB = 14;
	public static readonly COMMA = 15;
	public static readonly OPEN_BRACKET = 16;
	public static readonly CLOSE_BRACKET = 17;
	public static readonly OPEN_PAREN = 18;
	public static readonly CLOSE_PAREN = 19;
	public static readonly OPEN_BRACE = 20;
	public static readonly CLOSE_BRACE = 21;
	public static readonly ADDEQ = 22;
	public static readonly DELEQ = 23;
	public static readonly RULEDEF = 24;
	public static readonly ISA = 25;
	public static readonly HAS = 26;
	public static readonly ALL = 27;
	public static readonly ID = 28;
	public static readonly WS = 29;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_prog = 0;
	public static readonly RULE_stat = 1;
	public static readonly RULE_searchStat = 2;
	public static readonly RULE_cudStat = 3;
	public static readonly RULE_cudRuleStat = 4;
	public static readonly RULE_inferStat = 5;
	public static readonly RULE_searchExpr = 6;
	public static readonly RULE_relExprList = 7;
	public static readonly RULE_relExprSequnce = 8;
	public static readonly RULE_relExpr = 9;
	public static readonly RULE_relAttrList = 10;
	public static readonly RULE_relAttr = 11;
	public static readonly RULE_yuanList = 12;
	public static readonly literalNames: (string | null)[] = [ null, "'|'", 
                                                            "'---'", null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, "'='", 
                                                            "'=='", null, 
                                                            "'.'", "'+'", 
                                                            "'-'", null, 
                                                            null, null, 
                                                            null, null, 
                                                            "'{'", "'}'", 
                                                            "'+='", "'-='", 
                                                            "':='" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             null, "YUAN", 
                                                             "RULE", "INFER", 
                                                             "NEWLINE", 
                                                             "LINECOMMENT", 
                                                             "BLOCKCOMMENT", 
                                                             "ASSIGN", "EQ", 
                                                             "AND", "ATTR", 
                                                             "ADD", "SUB", 
                                                             "COMMA", "OPEN_BRACKET", 
                                                             "CLOSE_BRACKET", 
                                                             "OPEN_PAREN", 
                                                             "CLOSE_PAREN", 
                                                             "OPEN_BRACE", 
                                                             "CLOSE_BRACE", 
                                                             "ADDEQ", "DELEQ", 
                                                             "RULEDEF", 
                                                             "ISA", "HAS", 
                                                             "ALL", "ID", 
                                                             "WS" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"prog", "stat", "searchStat", "cudStat", "cudRuleStat", "inferStat", "searchExpr", 
		"relExprList", "relExprSequnce", "relExpr", "relAttrList", "relAttr", 
		"yuanList",
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
			this.state = 29;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 268697656) !== 0)) {
				{
				{
				this.state = 26;
				this.stat();
				}
				}
				this.state = 31;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 32;
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
		let _la: number;
		try {
			this.state = 53;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 34;
				this.searchStat();
				this.state = 39;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===11) {
					{
					{
					this.state = 35;
					this.match(LKDLParser.AND);
					this.state = 36;
					this.searchStat();
					}
					}
					this.state = 41;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 42;
				this.match(LKDLParser.NEWLINE);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 44;
				this.cudStat();
				this.state = 45;
				this.match(LKDLParser.NEWLINE);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 47;
				this.cudRuleStat();
				this.state = 48;
				this.match(LKDLParser.NEWLINE);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 50;
				this.inferStat();
				this.state = 51;
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
			this.state = 72;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 55;
				this.searchExpr();
				this.state = 56;
				this.match(LKDLParser.ATTR);
				this.state = 57;
				this.match(LKDLParser.ALL);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 59;
				this.searchExpr();
				this.state = 60;
				this.match(LKDLParser.ATTR);
				this.state = 61;
				this.match(LKDLParser.HAS);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 63;
				this.searchExpr();
				this.state = 64;
				this.match(LKDLParser.ATTR);
				this.state = 65;
				this.match(LKDLParser.ISA);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 67;
				localctx._lhs = this.searchExpr();
				this.state = 68;
				this.match(LKDLParser.EQ);
				this.state = 69;
				localctx._rhs = this.searchExpr();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 71;
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
			this.state = 92;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				localctx = new AddTupleContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 74;
				(localctx as AddTupleContext)._lhs = this.searchExpr();
				this.state = 75;
				this.match(LKDLParser.ADDEQ);
				this.state = 76;
				(localctx as AddTupleContext)._rhs = this.searchExpr();
				}
				break;
			case 2:
				localctx = new DelTupleContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 78;
				(localctx as DelTupleContext)._lhs = this.searchExpr();
				this.state = 79;
				this.match(LKDLParser.DELEQ);
				this.state = 80;
				(localctx as DelTupleContext)._rhs = this.searchExpr();
				}
				break;
			case 3:
				localctx = new UpdateTupleContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 82;
				(localctx as UpdateTupleContext)._lhs = this.searchExpr();
				this.state = 83;
				this.match(LKDLParser.ASSIGN);
				this.state = 84;
				(localctx as UpdateTupleContext)._rhs = this.searchExpr();
				}
				break;
			case 4:
				localctx = new AddYuanContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 86;
				this.match(LKDLParser.YUAN);
				this.state = 87;
				this.match(LKDLParser.ADDEQ);
				this.state = 88;
				this.yuanList();
				}
				break;
			case 5:
				localctx = new DelYuanContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 89;
				this.match(LKDLParser.YUAN);
				this.state = 90;
				this.match(LKDLParser.DELEQ);
				this.state = 91;
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
	public cudRuleStat(): CudRuleStatContext {
		let localctx: CudRuleStatContext = new CudRuleStatContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, LKDLParser.RULE_cudRuleStat);
		let _la: number;
		try {
			this.state = 144;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				localctx = new AddRuleContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 94;
				this.match(LKDLParser.RULE);
				this.state = 95;
				this.match(LKDLParser.ADDEQ);
				this.state = 96;
				(localctx as AddRuleContext)._nltext = this.match(LKDLParser.ID);
				this.state = 97;
				this.match(LKDLParser.T__0);
				this.state = 98;
				(localctx as AddRuleContext)._ruleHead = this.match(LKDLParser.ID);
				this.state = 99;
				this.match(LKDLParser.T__0);
				this.state = 101;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===18 || _la===28) {
					{
					this.state = 100;
					this.searchStat();
					}
				}

				this.state = 103;
				this.match(LKDLParser.RULEDEF);
				this.state = 104;
				this.searchStat();
				this.state = 109;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===11) {
					{
					{
					this.state = 105;
					this.match(LKDLParser.AND);
					this.state = 106;
					this.searchStat();
					}
					}
					this.state = 111;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case 2:
				localctx = new DelRuleContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 112;
				this.match(LKDLParser.RULE);
				this.state = 113;
				this.match(LKDLParser.DELEQ);
				this.state = 114;
				(localctx as DelRuleContext)._nltext = this.match(LKDLParser.ID);
				this.state = 115;
				this.match(LKDLParser.T__0);
				this.state = 116;
				(localctx as DelRuleContext)._ruleHead = this.match(LKDLParser.ID);
				this.state = 117;
				this.match(LKDLParser.T__0);
				this.state = 119;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===18 || _la===28) {
					{
					this.state = 118;
					this.searchStat();
					}
				}

				this.state = 121;
				this.match(LKDLParser.RULEDEF);
				this.state = 122;
				this.searchStat();
				this.state = 127;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===11) {
					{
					{
					this.state = 123;
					this.match(LKDLParser.AND);
					this.state = 124;
					this.searchStat();
					}
					}
					this.state = 129;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case 3:
				localctx = new AddAbsRuleContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 130;
				this.match(LKDLParser.RULE);
				this.state = 131;
				this.match(LKDLParser.ADDEQ);
				this.state = 132;
				(localctx as AddAbsRuleContext)._nltext = this.match(LKDLParser.ID);
				this.state = 133;
				this.match(LKDLParser.T__0);
				this.state = 134;
				(localctx as AddAbsRuleContext)._ruleHead = this.match(LKDLParser.ID);
				this.state = 135;
				this.match(LKDLParser.RULEDEF);
				this.state = 136;
				this.yuanList();
				}
				break;
			case 4:
				localctx = new DelAbsRuleContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 137;
				this.match(LKDLParser.RULE);
				this.state = 138;
				this.match(LKDLParser.DELEQ);
				this.state = 139;
				(localctx as DelAbsRuleContext)._nltext = this.match(LKDLParser.ID);
				this.state = 140;
				this.match(LKDLParser.T__0);
				this.state = 141;
				(localctx as DelAbsRuleContext)._ruleHead = this.match(LKDLParser.ID);
				this.state = 142;
				this.match(LKDLParser.RULEDEF);
				this.state = 143;
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
	public inferStat(): InferStatContext {
		let localctx: InferStatContext = new InferStatContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, LKDLParser.RULE_inferStat);
		let _la: number;
		try {
			let _alt: number;
			localctx = new InferContext(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 146;
			this.match(LKDLParser.INFER);
			this.state = 147;
			this.match(LKDLParser.OPEN_BRACE);
			this.state = 151;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===18 || _la===28) {
				{
				{
				this.state = 148;
				this.searchStat();
				}
				}
				this.state = 153;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 154;
			this.match(LKDLParser.T__1);
			this.state = 158;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 11, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 155;
					this.matchWildcard();
					}
					}
				}
				this.state = 160;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 11, this._ctx);
			}
			this.state = 161;
			this.match(LKDLParser.CLOSE_BRACE);
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
		this.enterRule(localctx, 12, LKDLParser.RULE_searchExpr);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 163;
			this.yuanList();
			this.state = 166;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				{
				this.state = 164;
				this.match(LKDLParser.ATTR);
				this.state = 165;
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
		this.enterRule(localctx, 14, LKDLParser.RULE_relExprList);
		let _la: number;
		try {
			this.state = 180;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 26:
			case 27:
			case 28:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 168;
				this.relExprSequnce();
				}
				break;
			case 18:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 169;
				this.match(LKDLParser.OPEN_PAREN);
				this.state = 170;
				this.relExprSequnce();
				this.state = 175;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===15) {
					{
					{
					this.state = 171;
					this.match(LKDLParser.COMMA);
					this.state = 172;
					this.relExprSequnce();
					}
					}
					this.state = 177;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 178;
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
		this.enterRule(localctx, 16, LKDLParser.RULE_relExprSequnce);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 182;
			this.relExpr();
			this.state = 187;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 15, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 183;
					this.match(LKDLParser.ATTR);
					this.state = 184;
					this.relExpr();
					}
					}
				}
				this.state = 189;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 15, this._ctx);
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
		this.enterRule(localctx, 18, LKDLParser.RULE_relExpr);
		let _la: number;
		try {
			this.state = 199;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 27:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 190;
				localctx._lhs = this.match(LKDLParser.ALL);
				this.state = 192;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===16) {
					{
					this.state = 191;
					localctx._rhs = this.relAttrList();
					}
				}

				}
				break;
			case 28:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 194;
				localctx._lhs = this.match(LKDLParser.ID);
				this.state = 196;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===16) {
					{
					this.state = 195;
					localctx._rhs = this.relAttrList();
					}
				}

				}
				break;
			case 26:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 198;
				localctx._lhs = this.match(LKDLParser.HAS);
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
		this.enterRule(localctx, 20, LKDLParser.RULE_relAttrList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 201;
			this.match(LKDLParser.OPEN_BRACKET);
			this.state = 202;
			this.relAttr();
			this.state = 207;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===15) {
				{
				{
				this.state = 203;
				this.match(LKDLParser.COMMA);
				this.state = 204;
				this.relAttr();
				}
				}
				this.state = 209;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 210;
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
		this.enterRule(localctx, 22, LKDLParser.RULE_relAttr);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 212;
			localctx._lhs = this.match(LKDLParser.ID);
			this.state = 215;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 9:
				{
				this.state = 213;
				localctx._op = this.match(LKDLParser.ASSIGN);
				}
				break;
			case 10:
				{
				this.state = 214;
				localctx._op = this.match(LKDLParser.EQ);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 217;
			localctx._rhs = this.match(LKDLParser.ID);
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
		this.enterRule(localctx, 24, LKDLParser.RULE_yuanList);
		let _la: number;
		try {
			this.state = 230;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 28:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 219;
				this.match(LKDLParser.ID);
				}
				break;
			case 18:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 220;
				this.match(LKDLParser.OPEN_PAREN);
				this.state = 221;
				this.match(LKDLParser.ID);
				this.state = 226;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===15) {
					{
					{
					this.state = 222;
					this.match(LKDLParser.COMMA);
					this.state = 223;
					this.match(LKDLParser.ID);
					}
					}
					this.state = 228;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 229;
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

	public static readonly _serializedATN: number[] = [4,1,29,233,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,1,0,5,0,28,8,0,10,0,12,0,31,9,0,1,0,1,0,1,1,
	1,1,1,1,5,1,38,8,1,10,1,12,1,41,9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
	1,1,1,1,3,1,54,8,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,
	1,2,1,2,1,2,1,2,3,2,73,8,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,
	1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,93,8,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,
	102,8,4,1,4,1,4,1,4,1,4,5,4,108,8,4,10,4,12,4,111,9,4,1,4,1,4,1,4,1,4,1,
	4,1,4,1,4,3,4,120,8,4,1,4,1,4,1,4,1,4,5,4,126,8,4,10,4,12,4,129,9,4,1,4,
	1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,145,8,4,1,5,1,5,
	1,5,5,5,150,8,5,10,5,12,5,153,9,5,1,5,1,5,5,5,157,8,5,10,5,12,5,160,9,5,
	1,5,1,5,1,6,1,6,1,6,3,6,167,8,6,1,7,1,7,1,7,1,7,1,7,5,7,174,8,7,10,7,12,
	7,177,9,7,1,7,1,7,3,7,181,8,7,1,8,1,8,1,8,5,8,186,8,8,10,8,12,8,189,9,8,
	1,9,1,9,3,9,193,8,9,1,9,1,9,3,9,197,8,9,1,9,3,9,200,8,9,1,10,1,10,1,10,
	1,10,5,10,206,8,10,10,10,12,10,209,9,10,1,10,1,10,1,11,1,11,1,11,3,11,216,
	8,11,1,11,1,11,1,12,1,12,1,12,1,12,1,12,5,12,225,8,12,10,12,12,12,228,9,
	12,1,12,3,12,231,8,12,1,12,1,158,0,13,0,2,4,6,8,10,12,14,16,18,20,22,24,
	0,0,253,0,29,1,0,0,0,2,53,1,0,0,0,4,72,1,0,0,0,6,92,1,0,0,0,8,144,1,0,0,
	0,10,146,1,0,0,0,12,163,1,0,0,0,14,180,1,0,0,0,16,182,1,0,0,0,18,199,1,
	0,0,0,20,201,1,0,0,0,22,212,1,0,0,0,24,230,1,0,0,0,26,28,3,2,1,0,27,26,
	1,0,0,0,28,31,1,0,0,0,29,27,1,0,0,0,29,30,1,0,0,0,30,32,1,0,0,0,31,29,1,
	0,0,0,32,33,5,0,0,1,33,1,1,0,0,0,34,39,3,4,2,0,35,36,5,11,0,0,36,38,3,4,
	2,0,37,35,1,0,0,0,38,41,1,0,0,0,39,37,1,0,0,0,39,40,1,0,0,0,40,42,1,0,0,
	0,41,39,1,0,0,0,42,43,5,6,0,0,43,54,1,0,0,0,44,45,3,6,3,0,45,46,5,6,0,0,
	46,54,1,0,0,0,47,48,3,8,4,0,48,49,5,6,0,0,49,54,1,0,0,0,50,51,3,10,5,0,
	51,52,5,6,0,0,52,54,1,0,0,0,53,34,1,0,0,0,53,44,1,0,0,0,53,47,1,0,0,0,53,
	50,1,0,0,0,54,3,1,0,0,0,55,56,3,12,6,0,56,57,5,12,0,0,57,58,5,27,0,0,58,
	73,1,0,0,0,59,60,3,12,6,0,60,61,5,12,0,0,61,62,5,26,0,0,62,73,1,0,0,0,63,
	64,3,12,6,0,64,65,5,12,0,0,65,66,5,25,0,0,66,73,1,0,0,0,67,68,3,12,6,0,
	68,69,5,10,0,0,69,70,3,12,6,0,70,73,1,0,0,0,71,73,3,12,6,0,72,55,1,0,0,
	0,72,59,1,0,0,0,72,63,1,0,0,0,72,67,1,0,0,0,72,71,1,0,0,0,73,5,1,0,0,0,
	74,75,3,12,6,0,75,76,5,22,0,0,76,77,3,12,6,0,77,93,1,0,0,0,78,79,3,12,6,
	0,79,80,5,23,0,0,80,81,3,12,6,0,81,93,1,0,0,0,82,83,3,12,6,0,83,84,5,9,
	0,0,84,85,3,12,6,0,85,93,1,0,0,0,86,87,5,3,0,0,87,88,5,22,0,0,88,93,3,24,
	12,0,89,90,5,3,0,0,90,91,5,23,0,0,91,93,3,24,12,0,92,74,1,0,0,0,92,78,1,
	0,0,0,92,82,1,0,0,0,92,86,1,0,0,0,92,89,1,0,0,0,93,7,1,0,0,0,94,95,5,4,
	0,0,95,96,5,22,0,0,96,97,5,28,0,0,97,98,5,1,0,0,98,99,5,28,0,0,99,101,5,
	1,0,0,100,102,3,4,2,0,101,100,1,0,0,0,101,102,1,0,0,0,102,103,1,0,0,0,103,
	104,5,24,0,0,104,109,3,4,2,0,105,106,5,11,0,0,106,108,3,4,2,0,107,105,1,
	0,0,0,108,111,1,0,0,0,109,107,1,0,0,0,109,110,1,0,0,0,110,145,1,0,0,0,111,
	109,1,0,0,0,112,113,5,4,0,0,113,114,5,23,0,0,114,115,5,28,0,0,115,116,5,
	1,0,0,116,117,5,28,0,0,117,119,5,1,0,0,118,120,3,4,2,0,119,118,1,0,0,0,
	119,120,1,0,0,0,120,121,1,0,0,0,121,122,5,24,0,0,122,127,3,4,2,0,123,124,
	5,11,0,0,124,126,3,4,2,0,125,123,1,0,0,0,126,129,1,0,0,0,127,125,1,0,0,
	0,127,128,1,0,0,0,128,145,1,0,0,0,129,127,1,0,0,0,130,131,5,4,0,0,131,132,
	5,22,0,0,132,133,5,28,0,0,133,134,5,1,0,0,134,135,5,28,0,0,135,136,5,24,
	0,0,136,145,3,24,12,0,137,138,5,4,0,0,138,139,5,23,0,0,139,140,5,28,0,0,
	140,141,5,1,0,0,141,142,5,28,0,0,142,143,5,24,0,0,143,145,3,24,12,0,144,
	94,1,0,0,0,144,112,1,0,0,0,144,130,1,0,0,0,144,137,1,0,0,0,145,9,1,0,0,
	0,146,147,5,5,0,0,147,151,5,20,0,0,148,150,3,4,2,0,149,148,1,0,0,0,150,
	153,1,0,0,0,151,149,1,0,0,0,151,152,1,0,0,0,152,154,1,0,0,0,153,151,1,0,
	0,0,154,158,5,2,0,0,155,157,9,0,0,0,156,155,1,0,0,0,157,160,1,0,0,0,158,
	159,1,0,0,0,158,156,1,0,0,0,159,161,1,0,0,0,160,158,1,0,0,0,161,162,5,21,
	0,0,162,11,1,0,0,0,163,166,3,24,12,0,164,165,5,12,0,0,165,167,3,14,7,0,
	166,164,1,0,0,0,166,167,1,0,0,0,167,13,1,0,0,0,168,181,3,16,8,0,169,170,
	5,18,0,0,170,175,3,16,8,0,171,172,5,15,0,0,172,174,3,16,8,0,173,171,1,0,
	0,0,174,177,1,0,0,0,175,173,1,0,0,0,175,176,1,0,0,0,176,178,1,0,0,0,177,
	175,1,0,0,0,178,179,5,19,0,0,179,181,1,0,0,0,180,168,1,0,0,0,180,169,1,
	0,0,0,181,15,1,0,0,0,182,187,3,18,9,0,183,184,5,12,0,0,184,186,3,18,9,0,
	185,183,1,0,0,0,186,189,1,0,0,0,187,185,1,0,0,0,187,188,1,0,0,0,188,17,
	1,0,0,0,189,187,1,0,0,0,190,192,5,27,0,0,191,193,3,20,10,0,192,191,1,0,
	0,0,192,193,1,0,0,0,193,200,1,0,0,0,194,196,5,28,0,0,195,197,3,20,10,0,
	196,195,1,0,0,0,196,197,1,0,0,0,197,200,1,0,0,0,198,200,5,26,0,0,199,190,
	1,0,0,0,199,194,1,0,0,0,199,198,1,0,0,0,200,19,1,0,0,0,201,202,5,16,0,0,
	202,207,3,22,11,0,203,204,5,15,0,0,204,206,3,22,11,0,205,203,1,0,0,0,206,
	209,1,0,0,0,207,205,1,0,0,0,207,208,1,0,0,0,208,210,1,0,0,0,209,207,1,0,
	0,0,210,211,5,17,0,0,211,21,1,0,0,0,212,215,5,28,0,0,213,216,5,9,0,0,214,
	216,5,10,0,0,215,213,1,0,0,0,215,214,1,0,0,0,216,217,1,0,0,0,217,218,5,
	28,0,0,218,23,1,0,0,0,219,231,5,28,0,0,220,221,5,18,0,0,221,226,5,28,0,
	0,222,223,5,15,0,0,223,225,5,28,0,0,224,222,1,0,0,0,225,228,1,0,0,0,226,
	224,1,0,0,0,226,227,1,0,0,0,227,229,1,0,0,0,228,226,1,0,0,0,229,231,5,19,
	0,0,230,219,1,0,0,0,230,220,1,0,0,0,231,25,1,0,0,0,23,29,39,53,72,92,101,
	109,119,127,144,151,158,166,175,180,187,192,196,199,207,215,226,230];

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
	public searchStat_list(): SearchStatContext[] {
		return this.getTypedRuleContexts(SearchStatContext) as SearchStatContext[];
	}
	public searchStat(i: number): SearchStatContext {
		return this.getTypedRuleContext(SearchStatContext, i) as SearchStatContext;
	}
	public NEWLINE(): TerminalNode {
		return this.getToken(LKDLParser.NEWLINE, 0);
	}
	public AND_list(): TerminalNode[] {
	    	return this.getTokens(LKDLParser.AND);
	}
	public AND(i: number): TerminalNode {
		return this.getToken(LKDLParser.AND, i);
	}
	public cudStat(): CudStatContext {
		return this.getTypedRuleContext(CudStatContext, 0) as CudStatContext;
	}
	public cudRuleStat(): CudRuleStatContext {
		return this.getTypedRuleContext(CudRuleStatContext, 0) as CudRuleStatContext;
	}
	public inferStat(): InferStatContext {
		return this.getTypedRuleContext(InferStatContext, 0) as InferStatContext;
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
	public _lhs!: SearchExprContext;
	public _rhs!: SearchExprContext;
	constructor(parser?: LKDLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public searchExpr_list(): SearchExprContext[] {
		return this.getTypedRuleContexts(SearchExprContext) as SearchExprContext[];
	}
	public searchExpr(i: number): SearchExprContext {
		return this.getTypedRuleContext(SearchExprContext, i) as SearchExprContext;
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
	public EQ(): TerminalNode {
		return this.getToken(LKDLParser.EQ, 0);
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
	public YUAN(): TerminalNode {
		return this.getToken(LKDLParser.YUAN, 0);
	}
	public DELEQ(): TerminalNode {
		return this.getToken(LKDLParser.DELEQ, 0);
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
export class DelTupleContext extends CudStatContext {
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
	    if(listener.enterDelTuple) {
	 		listener.enterDelTuple(this);
		}
	}
	public exitRule(listener: LKDLListener): void {
	    if(listener.exitDelTuple) {
	 		listener.exitDelTuple(this);
		}
	}
}
export class AddYuanContext extends CudStatContext {
	constructor(parser: LKDLParser, ctx: CudStatContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public YUAN(): TerminalNode {
		return this.getToken(LKDLParser.YUAN, 0);
	}
	public ADDEQ(): TerminalNode {
		return this.getToken(LKDLParser.ADDEQ, 0);
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
export class UpdateTupleContext extends CudStatContext {
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
	    if(listener.enterUpdateTuple) {
	 		listener.enterUpdateTuple(this);
		}
	}
	public exitRule(listener: LKDLListener): void {
	    if(listener.exitUpdateTuple) {
	 		listener.exitUpdateTuple(this);
		}
	}
}
export class AddTupleContext extends CudStatContext {
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
	    if(listener.enterAddTuple) {
	 		listener.enterAddTuple(this);
		}
	}
	public exitRule(listener: LKDLListener): void {
	    if(listener.exitAddTuple) {
	 		listener.exitAddTuple(this);
		}
	}
}


export class CudRuleStatContext extends ParserRuleContext {
	constructor(parser?: LKDLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return LKDLParser.RULE_cudRuleStat;
	}
	public copyFrom(ctx: CudRuleStatContext): void {
		super.copyFrom(ctx);
	}
}
export class AddRuleContext extends CudRuleStatContext {
	public _nltext!: Token;
	public _ruleHead!: Token;
	constructor(parser: LKDLParser, ctx: CudRuleStatContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public RULE(): TerminalNode {
		return this.getToken(LKDLParser.RULE, 0);
	}
	public ADDEQ(): TerminalNode {
		return this.getToken(LKDLParser.ADDEQ, 0);
	}
	public RULEDEF(): TerminalNode {
		return this.getToken(LKDLParser.RULEDEF, 0);
	}
	public searchStat_list(): SearchStatContext[] {
		return this.getTypedRuleContexts(SearchStatContext) as SearchStatContext[];
	}
	public searchStat(i: number): SearchStatContext {
		return this.getTypedRuleContext(SearchStatContext, i) as SearchStatContext;
	}
	public ID_list(): TerminalNode[] {
	    	return this.getTokens(LKDLParser.ID);
	}
	public ID(i: number): TerminalNode {
		return this.getToken(LKDLParser.ID, i);
	}
	public AND_list(): TerminalNode[] {
	    	return this.getTokens(LKDLParser.AND);
	}
	public AND(i: number): TerminalNode {
		return this.getToken(LKDLParser.AND, i);
	}
	public enterRule(listener: LKDLListener): void {
	    if(listener.enterAddRule) {
	 		listener.enterAddRule(this);
		}
	}
	public exitRule(listener: LKDLListener): void {
	    if(listener.exitAddRule) {
	 		listener.exitAddRule(this);
		}
	}
}
export class DelRuleContext extends CudRuleStatContext {
	public _nltext!: Token;
	public _ruleHead!: Token;
	constructor(parser: LKDLParser, ctx: CudRuleStatContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public RULE(): TerminalNode {
		return this.getToken(LKDLParser.RULE, 0);
	}
	public DELEQ(): TerminalNode {
		return this.getToken(LKDLParser.DELEQ, 0);
	}
	public RULEDEF(): TerminalNode {
		return this.getToken(LKDLParser.RULEDEF, 0);
	}
	public searchStat_list(): SearchStatContext[] {
		return this.getTypedRuleContexts(SearchStatContext) as SearchStatContext[];
	}
	public searchStat(i: number): SearchStatContext {
		return this.getTypedRuleContext(SearchStatContext, i) as SearchStatContext;
	}
	public ID_list(): TerminalNode[] {
	    	return this.getTokens(LKDLParser.ID);
	}
	public ID(i: number): TerminalNode {
		return this.getToken(LKDLParser.ID, i);
	}
	public AND_list(): TerminalNode[] {
	    	return this.getTokens(LKDLParser.AND);
	}
	public AND(i: number): TerminalNode {
		return this.getToken(LKDLParser.AND, i);
	}
	public enterRule(listener: LKDLListener): void {
	    if(listener.enterDelRule) {
	 		listener.enterDelRule(this);
		}
	}
	public exitRule(listener: LKDLListener): void {
	    if(listener.exitDelRule) {
	 		listener.exitDelRule(this);
		}
	}
}
export class DelAbsRuleContext extends CudRuleStatContext {
	public _nltext!: Token;
	public _ruleHead!: Token;
	constructor(parser: LKDLParser, ctx: CudRuleStatContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public RULE(): TerminalNode {
		return this.getToken(LKDLParser.RULE, 0);
	}
	public DELEQ(): TerminalNode {
		return this.getToken(LKDLParser.DELEQ, 0);
	}
	public RULEDEF(): TerminalNode {
		return this.getToken(LKDLParser.RULEDEF, 0);
	}
	public yuanList(): YuanListContext {
		return this.getTypedRuleContext(YuanListContext, 0) as YuanListContext;
	}
	public ID_list(): TerminalNode[] {
	    	return this.getTokens(LKDLParser.ID);
	}
	public ID(i: number): TerminalNode {
		return this.getToken(LKDLParser.ID, i);
	}
	public enterRule(listener: LKDLListener): void {
	    if(listener.enterDelAbsRule) {
	 		listener.enterDelAbsRule(this);
		}
	}
	public exitRule(listener: LKDLListener): void {
	    if(listener.exitDelAbsRule) {
	 		listener.exitDelAbsRule(this);
		}
	}
}
export class AddAbsRuleContext extends CudRuleStatContext {
	public _nltext!: Token;
	public _ruleHead!: Token;
	constructor(parser: LKDLParser, ctx: CudRuleStatContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public RULE(): TerminalNode {
		return this.getToken(LKDLParser.RULE, 0);
	}
	public ADDEQ(): TerminalNode {
		return this.getToken(LKDLParser.ADDEQ, 0);
	}
	public RULEDEF(): TerminalNode {
		return this.getToken(LKDLParser.RULEDEF, 0);
	}
	public yuanList(): YuanListContext {
		return this.getTypedRuleContext(YuanListContext, 0) as YuanListContext;
	}
	public ID_list(): TerminalNode[] {
	    	return this.getTokens(LKDLParser.ID);
	}
	public ID(i: number): TerminalNode {
		return this.getToken(LKDLParser.ID, i);
	}
	public enterRule(listener: LKDLListener): void {
	    if(listener.enterAddAbsRule) {
	 		listener.enterAddAbsRule(this);
		}
	}
	public exitRule(listener: LKDLListener): void {
	    if(listener.exitAddAbsRule) {
	 		listener.exitAddAbsRule(this);
		}
	}
}


export class InferStatContext extends ParserRuleContext {
	constructor(parser?: LKDLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return LKDLParser.RULE_inferStat;
	}
	public copyFrom(ctx: InferStatContext): void {
		super.copyFrom(ctx);
	}
}
export class InferContext extends InferStatContext {
	constructor(parser: LKDLParser, ctx: InferStatContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public INFER(): TerminalNode {
		return this.getToken(LKDLParser.INFER, 0);
	}
	public OPEN_BRACE(): TerminalNode {
		return this.getToken(LKDLParser.OPEN_BRACE, 0);
	}
	public CLOSE_BRACE(): TerminalNode {
		return this.getToken(LKDLParser.CLOSE_BRACE, 0);
	}
	public searchStat_list(): SearchStatContext[] {
		return this.getTypedRuleContexts(SearchStatContext) as SearchStatContext[];
	}
	public searchStat(i: number): SearchStatContext {
		return this.getTypedRuleContext(SearchStatContext, i) as SearchStatContext;
	}
	public enterRule(listener: LKDLListener): void {
	    if(listener.enterInfer) {
	 		listener.enterInfer(this);
		}
	}
	public exitRule(listener: LKDLListener): void {
	    if(listener.exitInfer) {
	 		listener.exitInfer(this);
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
	public HAS(): TerminalNode {
		return this.getToken(LKDLParser.HAS, 0);
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
