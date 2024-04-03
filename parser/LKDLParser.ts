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
	public static readonly T__2 = 3;
	public static readonly YUAN = 4;
	public static readonly RULE = 5;
	public static readonly INFER = 6;
	public static readonly NEWLINE = 7;
	public static readonly LINECOMMENT = 8;
	public static readonly BLOCKCOMMENT = 9;
	public static readonly ASSIGN = 10;
	public static readonly EQ = 11;
	public static readonly AND = 12;
	public static readonly ATTR = 13;
	public static readonly ADD = 14;
	public static readonly SUB = 15;
	public static readonly COMMA = 16;
	public static readonly OPEN_BRACKET = 17;
	public static readonly CLOSE_BRACKET = 18;
	public static readonly OPEN_PAREN = 19;
	public static readonly CLOSE_PAREN = 20;
	public static readonly OPEN_BRACE = 21;
	public static readonly CLOSE_BRACE = 22;
	public static readonly ADDEQ = 23;
	public static readonly DELEQ = 24;
	public static readonly RULEDEF = 25;
	public static readonly QUESTION_MARK = 26;
	public static readonly ISA = 27;
	public static readonly HAS = 28;
	public static readonly ALL = 29;
	public static readonly ID = 30;
	public static readonly WS = 31;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_prog = 0;
	public static readonly RULE_stat = 1;
	public static readonly RULE_searchStat = 2;
	public static readonly RULE_cudStat = 3;
	public static readonly RULE_cudRuleStat = 4;
	public static readonly RULE_inferStat = 5;
	public static readonly RULE_qaStat = 6;
	public static readonly RULE_pathSearchStat = 7;
	public static readonly RULE_searchExpr = 8;
	public static readonly RULE_relExprList = 9;
	public static readonly RULE_relExprSequnce = 10;
	public static readonly RULE_relExpr = 11;
	public static readonly RULE_relAttrList = 12;
	public static readonly RULE_relAttr = 13;
	public static readonly RULE_yuanList = 14;
	public static readonly literalNames: (string | null)[] = [ null, "'|'", 
                                                            "'---'", "'->'", 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            "'='", "'=='", 
                                                            null, "'.'", 
                                                            "'+'", "'-'", 
                                                            null, null, 
                                                            null, null, 
                                                            null, "'{'", 
                                                            "'}'", "'+='", 
                                                            "'-='", "':='" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             null, null, 
                                                             "YUAN", "RULE", 
                                                             "INFER", "NEWLINE", 
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
                                                             "QUESTION_MARK", 
                                                             "ISA", "HAS", 
                                                             "ALL", "ID", 
                                                             "WS" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"prog", "stat", "searchStat", "cudStat", "cudRuleStat", "inferStat", "qaStat", 
		"pathSearchStat", "searchExpr", "relExprList", "relExprSequnce", "relExpr", 
		"relAttrList", "relAttr", "yuanList",
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
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1141375088) !== 0)) {
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
		let _la: number;
		try {
			this.state = 63;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 38;
				this.searchStat();
				this.state = 43;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===12) {
					{
					{
					this.state = 39;
					this.match(LKDLParser.AND);
					this.state = 40;
					this.searchStat();
					}
					}
					this.state = 45;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 46;
				this.match(LKDLParser.NEWLINE);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 48;
				this.cudStat();
				this.state = 49;
				this.match(LKDLParser.NEWLINE);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 51;
				this.cudRuleStat();
				this.state = 52;
				this.match(LKDLParser.NEWLINE);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 54;
				this.inferStat();
				this.state = 55;
				this.match(LKDLParser.NEWLINE);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 57;
				this.qaStat();
				this.state = 58;
				this.match(LKDLParser.NEWLINE);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 60;
				this.pathSearchStat();
				this.state = 61;
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
			this.state = 81;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 65;
				this.searchExpr();
				this.state = 66;
				this.match(LKDLParser.ATTR);
				this.state = 67;
				this.match(LKDLParser.ALL);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 69;
				this.searchExpr();
				this.state = 70;
				this.match(LKDLParser.ATTR);
				this.state = 71;
				this.match(LKDLParser.HAS);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 73;
				this.searchExpr();
				this.state = 74;
				this.match(LKDLParser.ATTR);
				this.state = 75;
				this.match(LKDLParser.ISA);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 77;
				localctx._lhs = this.searchExpr();
				this.state = 78;
				this.match(LKDLParser.EQ);
				this.state = 79;
				localctx._rhs = this.searchExpr();
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
			this.state = 101;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				localctx = new AddTupleContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 83;
				(localctx as AddTupleContext)._lhs = this.searchExpr();
				this.state = 84;
				this.match(LKDLParser.ADDEQ);
				this.state = 85;
				(localctx as AddTupleContext)._rhs = this.searchExpr();
				}
				break;
			case 2:
				localctx = new DelTupleContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 87;
				(localctx as DelTupleContext)._lhs = this.searchExpr();
				this.state = 88;
				this.match(LKDLParser.DELEQ);
				this.state = 89;
				(localctx as DelTupleContext)._rhs = this.searchExpr();
				}
				break;
			case 3:
				localctx = new UpdateTupleContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 91;
				(localctx as UpdateTupleContext)._lhs = this.searchExpr();
				this.state = 92;
				this.match(LKDLParser.ASSIGN);
				this.state = 93;
				(localctx as UpdateTupleContext)._rhs = this.searchExpr();
				}
				break;
			case 4:
				localctx = new AddYuanContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 95;
				this.match(LKDLParser.YUAN);
				this.state = 96;
				this.match(LKDLParser.ADDEQ);
				this.state = 97;
				this.yuanList();
				}
				break;
			case 5:
				localctx = new DelYuanContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 98;
				this.match(LKDLParser.YUAN);
				this.state = 99;
				this.match(LKDLParser.DELEQ);
				this.state = 100;
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
			this.state = 153;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				localctx = new AddRuleContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 103;
				this.match(LKDLParser.RULE);
				this.state = 104;
				this.match(LKDLParser.ADDEQ);
				this.state = 105;
				(localctx as AddRuleContext)._nltext = this.match(LKDLParser.ID);
				this.state = 106;
				this.match(LKDLParser.T__0);
				this.state = 107;
				(localctx as AddRuleContext)._ruleHead = this.match(LKDLParser.ID);
				this.state = 108;
				this.match(LKDLParser.T__0);
				this.state = 110;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===19 || _la===30) {
					{
					this.state = 109;
					this.searchStat();
					}
				}

				this.state = 112;
				this.match(LKDLParser.RULEDEF);
				this.state = 113;
				this.searchStat();
				this.state = 118;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===12) {
					{
					{
					this.state = 114;
					this.match(LKDLParser.AND);
					this.state = 115;
					this.searchStat();
					}
					}
					this.state = 120;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case 2:
				localctx = new DelRuleContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 121;
				this.match(LKDLParser.RULE);
				this.state = 122;
				this.match(LKDLParser.DELEQ);
				this.state = 123;
				(localctx as DelRuleContext)._nltext = this.match(LKDLParser.ID);
				this.state = 124;
				this.match(LKDLParser.T__0);
				this.state = 125;
				(localctx as DelRuleContext)._ruleHead = this.match(LKDLParser.ID);
				this.state = 126;
				this.match(LKDLParser.T__0);
				this.state = 128;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===19 || _la===30) {
					{
					this.state = 127;
					this.searchStat();
					}
				}

				this.state = 130;
				this.match(LKDLParser.RULEDEF);
				this.state = 131;
				this.searchStat();
				this.state = 136;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===12) {
					{
					{
					this.state = 132;
					this.match(LKDLParser.AND);
					this.state = 133;
					this.searchStat();
					}
					}
					this.state = 138;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case 3:
				localctx = new AddAbsRuleContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 139;
				this.match(LKDLParser.RULE);
				this.state = 140;
				this.match(LKDLParser.ADDEQ);
				this.state = 141;
				(localctx as AddAbsRuleContext)._nltext = this.match(LKDLParser.ID);
				this.state = 142;
				this.match(LKDLParser.T__0);
				this.state = 143;
				(localctx as AddAbsRuleContext)._ruleHead = this.match(LKDLParser.ID);
				this.state = 144;
				this.match(LKDLParser.RULEDEF);
				this.state = 145;
				this.yuanList();
				}
				break;
			case 4:
				localctx = new DelAbsRuleContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 146;
				this.match(LKDLParser.RULE);
				this.state = 147;
				this.match(LKDLParser.DELEQ);
				this.state = 148;
				(localctx as DelAbsRuleContext)._nltext = this.match(LKDLParser.ID);
				this.state = 149;
				this.match(LKDLParser.T__0);
				this.state = 150;
				(localctx as DelAbsRuleContext)._ruleHead = this.match(LKDLParser.ID);
				this.state = 151;
				this.match(LKDLParser.RULEDEF);
				this.state = 152;
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
			this.state = 155;
			this.match(LKDLParser.INFER);
			this.state = 156;
			this.match(LKDLParser.OPEN_BRACE);
			this.state = 160;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===19 || _la===30) {
				{
				{
				this.state = 157;
				this.searchStat();
				}
				}
				this.state = 162;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 163;
			this.match(LKDLParser.T__1);
			this.state = 167;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 11, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 164;
					this.matchWildcard();
					}
					}
				}
				this.state = 169;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 11, this._ctx);
			}
			this.state = 170;
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
	public qaStat(): QaStatContext {
		let localctx: QaStatContext = new QaStatContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, LKDLParser.RULE_qaStat);
		try {
			localctx = new QaContext(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 172;
			this.match(LKDLParser.QUESTION_MARK);
			this.state = 173;
			this.match(LKDLParser.ID);
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
	public pathSearchStat(): PathSearchStatContext {
		let localctx: PathSearchStatContext = new PathSearchStatContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, LKDLParser.RULE_pathSearchStat);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 175;
			this.match(LKDLParser.ID);
			this.state = 176;
			this.match(LKDLParser.T__2);
			this.state = 177;
			this.match(LKDLParser.ID);
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
		this.enterRule(localctx, 16, LKDLParser.RULE_searchExpr);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 179;
			this.yuanList();
			this.state = 182;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				{
				this.state = 180;
				this.match(LKDLParser.ATTR);
				this.state = 181;
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
		this.enterRule(localctx, 18, LKDLParser.RULE_relExprList);
		let _la: number;
		try {
			this.state = 196;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 28:
			case 29:
			case 30:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 184;
				this.relExprSequnce();
				}
				break;
			case 19:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 185;
				this.match(LKDLParser.OPEN_PAREN);
				this.state = 186;
				this.relExprSequnce();
				this.state = 191;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===16) {
					{
					{
					this.state = 187;
					this.match(LKDLParser.COMMA);
					this.state = 188;
					this.relExprSequnce();
					}
					}
					this.state = 193;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 194;
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
		this.enterRule(localctx, 20, LKDLParser.RULE_relExprSequnce);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 198;
			this.relExpr();
			this.state = 203;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 15, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 199;
					this.match(LKDLParser.ATTR);
					this.state = 200;
					this.relExpr();
					}
					}
				}
				this.state = 205;
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
		this.enterRule(localctx, 22, LKDLParser.RULE_relExpr);
		let _la: number;
		try {
			this.state = 215;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 29:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 206;
				localctx._lhs = this.match(LKDLParser.ALL);
				this.state = 208;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===17) {
					{
					this.state = 207;
					localctx._rhs = this.relAttrList();
					}
				}

				}
				break;
			case 30:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 210;
				localctx._lhs = this.match(LKDLParser.ID);
				this.state = 212;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===17) {
					{
					this.state = 211;
					localctx._rhs = this.relAttrList();
					}
				}

				}
				break;
			case 28:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 214;
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
		this.enterRule(localctx, 24, LKDLParser.RULE_relAttrList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 217;
			this.match(LKDLParser.OPEN_BRACKET);
			this.state = 218;
			this.relAttr();
			this.state = 223;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===16) {
				{
				{
				this.state = 219;
				this.match(LKDLParser.COMMA);
				this.state = 220;
				this.relAttr();
				}
				}
				this.state = 225;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 226;
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
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 228;
			localctx._lhs = this.match(LKDLParser.ID);
			this.state = 231;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 10:
				{
				this.state = 229;
				localctx._op = this.match(LKDLParser.ASSIGN);
				}
				break;
			case 11:
				{
				this.state = 230;
				localctx._op = this.match(LKDLParser.EQ);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 233;
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
		this.enterRule(localctx, 28, LKDLParser.RULE_yuanList);
		let _la: number;
		try {
			this.state = 246;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 30:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 235;
				this.match(LKDLParser.ID);
				}
				break;
			case 19:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 236;
				this.match(LKDLParser.OPEN_PAREN);
				this.state = 237;
				this.match(LKDLParser.ID);
				this.state = 242;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===16) {
					{
					{
					this.state = 238;
					this.match(LKDLParser.COMMA);
					this.state = 239;
					this.match(LKDLParser.ID);
					}
					}
					this.state = 244;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 245;
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

	public static readonly _serializedATN: number[] = [4,1,31,249,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,1,0,5,0,32,8,0,10,0,12,
	0,35,9,0,1,0,1,0,1,1,1,1,1,1,5,1,42,8,1,10,1,12,1,45,9,1,1,1,1,1,1,1,1,
	1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,64,8,1,1,2,1,
	2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,82,8,2,1,
	3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,
	3,102,8,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,111,8,4,1,4,1,4,1,4,1,4,5,4,117,
	8,4,10,4,12,4,120,9,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,129,8,4,1,4,1,4,1,
	4,1,4,5,4,135,8,4,10,4,12,4,138,9,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,
	1,4,1,4,1,4,1,4,1,4,3,4,154,8,4,1,5,1,5,1,5,5,5,159,8,5,10,5,12,5,162,9,
	5,1,5,1,5,5,5,166,8,5,10,5,12,5,169,9,5,1,5,1,5,1,6,1,6,1,6,1,7,1,7,1,7,
	1,7,1,8,1,8,1,8,3,8,183,8,8,1,9,1,9,1,9,1,9,1,9,5,9,190,8,9,10,9,12,9,193,
	9,9,1,9,1,9,3,9,197,8,9,1,10,1,10,1,10,5,10,202,8,10,10,10,12,10,205,9,
	10,1,11,1,11,3,11,209,8,11,1,11,1,11,3,11,213,8,11,1,11,3,11,216,8,11,1,
	12,1,12,1,12,1,12,5,12,222,8,12,10,12,12,12,225,9,12,1,12,1,12,1,13,1,13,
	1,13,3,13,232,8,13,1,13,1,13,1,14,1,14,1,14,1,14,1,14,5,14,241,8,14,10,
	14,12,14,244,9,14,1,14,3,14,247,8,14,1,14,1,167,0,15,0,2,4,6,8,10,12,14,
	16,18,20,22,24,26,28,0,0,268,0,33,1,0,0,0,2,63,1,0,0,0,4,81,1,0,0,0,6,101,
	1,0,0,0,8,153,1,0,0,0,10,155,1,0,0,0,12,172,1,0,0,0,14,175,1,0,0,0,16,179,
	1,0,0,0,18,196,1,0,0,0,20,198,1,0,0,0,22,215,1,0,0,0,24,217,1,0,0,0,26,
	228,1,0,0,0,28,246,1,0,0,0,30,32,3,2,1,0,31,30,1,0,0,0,32,35,1,0,0,0,33,
	31,1,0,0,0,33,34,1,0,0,0,34,36,1,0,0,0,35,33,1,0,0,0,36,37,5,0,0,1,37,1,
	1,0,0,0,38,43,3,4,2,0,39,40,5,12,0,0,40,42,3,4,2,0,41,39,1,0,0,0,42,45,
	1,0,0,0,43,41,1,0,0,0,43,44,1,0,0,0,44,46,1,0,0,0,45,43,1,0,0,0,46,47,5,
	7,0,0,47,64,1,0,0,0,48,49,3,6,3,0,49,50,5,7,0,0,50,64,1,0,0,0,51,52,3,8,
	4,0,52,53,5,7,0,0,53,64,1,0,0,0,54,55,3,10,5,0,55,56,5,7,0,0,56,64,1,0,
	0,0,57,58,3,12,6,0,58,59,5,7,0,0,59,64,1,0,0,0,60,61,3,14,7,0,61,62,5,7,
	0,0,62,64,1,0,0,0,63,38,1,0,0,0,63,48,1,0,0,0,63,51,1,0,0,0,63,54,1,0,0,
	0,63,57,1,0,0,0,63,60,1,0,0,0,64,3,1,0,0,0,65,66,3,16,8,0,66,67,5,13,0,
	0,67,68,5,29,0,0,68,82,1,0,0,0,69,70,3,16,8,0,70,71,5,13,0,0,71,72,5,28,
	0,0,72,82,1,0,0,0,73,74,3,16,8,0,74,75,5,13,0,0,75,76,5,27,0,0,76,82,1,
	0,0,0,77,78,3,16,8,0,78,79,5,11,0,0,79,80,3,16,8,0,80,82,1,0,0,0,81,65,
	1,0,0,0,81,69,1,0,0,0,81,73,1,0,0,0,81,77,1,0,0,0,82,5,1,0,0,0,83,84,3,
	16,8,0,84,85,5,23,0,0,85,86,3,16,8,0,86,102,1,0,0,0,87,88,3,16,8,0,88,89,
	5,24,0,0,89,90,3,16,8,0,90,102,1,0,0,0,91,92,3,16,8,0,92,93,5,10,0,0,93,
	94,3,16,8,0,94,102,1,0,0,0,95,96,5,4,0,0,96,97,5,23,0,0,97,102,3,28,14,
	0,98,99,5,4,0,0,99,100,5,24,0,0,100,102,3,28,14,0,101,83,1,0,0,0,101,87,
	1,0,0,0,101,91,1,0,0,0,101,95,1,0,0,0,101,98,1,0,0,0,102,7,1,0,0,0,103,
	104,5,5,0,0,104,105,5,23,0,0,105,106,5,30,0,0,106,107,5,1,0,0,107,108,5,
	30,0,0,108,110,5,1,0,0,109,111,3,4,2,0,110,109,1,0,0,0,110,111,1,0,0,0,
	111,112,1,0,0,0,112,113,5,25,0,0,113,118,3,4,2,0,114,115,5,12,0,0,115,117,
	3,4,2,0,116,114,1,0,0,0,117,120,1,0,0,0,118,116,1,0,0,0,118,119,1,0,0,0,
	119,154,1,0,0,0,120,118,1,0,0,0,121,122,5,5,0,0,122,123,5,24,0,0,123,124,
	5,30,0,0,124,125,5,1,0,0,125,126,5,30,0,0,126,128,5,1,0,0,127,129,3,4,2,
	0,128,127,1,0,0,0,128,129,1,0,0,0,129,130,1,0,0,0,130,131,5,25,0,0,131,
	136,3,4,2,0,132,133,5,12,0,0,133,135,3,4,2,0,134,132,1,0,0,0,135,138,1,
	0,0,0,136,134,1,0,0,0,136,137,1,0,0,0,137,154,1,0,0,0,138,136,1,0,0,0,139,
	140,5,5,0,0,140,141,5,23,0,0,141,142,5,30,0,0,142,143,5,1,0,0,143,144,5,
	30,0,0,144,145,5,25,0,0,145,154,3,28,14,0,146,147,5,5,0,0,147,148,5,24,
	0,0,148,149,5,30,0,0,149,150,5,1,0,0,150,151,5,30,0,0,151,152,5,25,0,0,
	152,154,3,28,14,0,153,103,1,0,0,0,153,121,1,0,0,0,153,139,1,0,0,0,153,146,
	1,0,0,0,154,9,1,0,0,0,155,156,5,6,0,0,156,160,5,21,0,0,157,159,3,4,2,0,
	158,157,1,0,0,0,159,162,1,0,0,0,160,158,1,0,0,0,160,161,1,0,0,0,161,163,
	1,0,0,0,162,160,1,0,0,0,163,167,5,2,0,0,164,166,9,0,0,0,165,164,1,0,0,0,
	166,169,1,0,0,0,167,168,1,0,0,0,167,165,1,0,0,0,168,170,1,0,0,0,169,167,
	1,0,0,0,170,171,5,22,0,0,171,11,1,0,0,0,172,173,5,26,0,0,173,174,5,30,0,
	0,174,13,1,0,0,0,175,176,5,30,0,0,176,177,5,3,0,0,177,178,5,30,0,0,178,
	15,1,0,0,0,179,182,3,28,14,0,180,181,5,13,0,0,181,183,3,18,9,0,182,180,
	1,0,0,0,182,183,1,0,0,0,183,17,1,0,0,0,184,197,3,20,10,0,185,186,5,19,0,
	0,186,191,3,20,10,0,187,188,5,16,0,0,188,190,3,20,10,0,189,187,1,0,0,0,
	190,193,1,0,0,0,191,189,1,0,0,0,191,192,1,0,0,0,192,194,1,0,0,0,193,191,
	1,0,0,0,194,195,5,20,0,0,195,197,1,0,0,0,196,184,1,0,0,0,196,185,1,0,0,
	0,197,19,1,0,0,0,198,203,3,22,11,0,199,200,5,13,0,0,200,202,3,22,11,0,201,
	199,1,0,0,0,202,205,1,0,0,0,203,201,1,0,0,0,203,204,1,0,0,0,204,21,1,0,
	0,0,205,203,1,0,0,0,206,208,5,29,0,0,207,209,3,24,12,0,208,207,1,0,0,0,
	208,209,1,0,0,0,209,216,1,0,0,0,210,212,5,30,0,0,211,213,3,24,12,0,212,
	211,1,0,0,0,212,213,1,0,0,0,213,216,1,0,0,0,214,216,5,28,0,0,215,206,1,
	0,0,0,215,210,1,0,0,0,215,214,1,0,0,0,216,23,1,0,0,0,217,218,5,17,0,0,218,
	223,3,26,13,0,219,220,5,16,0,0,220,222,3,26,13,0,221,219,1,0,0,0,222,225,
	1,0,0,0,223,221,1,0,0,0,223,224,1,0,0,0,224,226,1,0,0,0,225,223,1,0,0,0,
	226,227,5,18,0,0,227,25,1,0,0,0,228,231,5,30,0,0,229,232,5,10,0,0,230,232,
	5,11,0,0,231,229,1,0,0,0,231,230,1,0,0,0,232,233,1,0,0,0,233,234,5,30,0,
	0,234,27,1,0,0,0,235,247,5,30,0,0,236,237,5,19,0,0,237,242,5,30,0,0,238,
	239,5,16,0,0,239,241,5,30,0,0,240,238,1,0,0,0,241,244,1,0,0,0,242,240,1,
	0,0,0,242,243,1,0,0,0,243,245,1,0,0,0,244,242,1,0,0,0,245,247,5,20,0,0,
	246,235,1,0,0,0,246,236,1,0,0,0,247,29,1,0,0,0,23,33,43,63,81,101,110,118,
	128,136,153,160,167,182,191,196,203,208,212,215,223,231,242,246];

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
	public qaStat(): QaStatContext {
		return this.getTypedRuleContext(QaStatContext, 0) as QaStatContext;
	}
	public pathSearchStat(): PathSearchStatContext {
		return this.getTypedRuleContext(PathSearchStatContext, 0) as PathSearchStatContext;
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


export class QaStatContext extends ParserRuleContext {
	constructor(parser?: LKDLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return LKDLParser.RULE_qaStat;
	}
	public copyFrom(ctx: QaStatContext): void {
		super.copyFrom(ctx);
	}
}
export class QaContext extends QaStatContext {
	constructor(parser: LKDLParser, ctx: QaStatContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public QUESTION_MARK(): TerminalNode {
		return this.getToken(LKDLParser.QUESTION_MARK, 0);
	}
	public ID(): TerminalNode {
		return this.getToken(LKDLParser.ID, 0);
	}
	public enterRule(listener: LKDLListener): void {
	    if(listener.enterQa) {
	 		listener.enterQa(this);
		}
	}
	public exitRule(listener: LKDLListener): void {
	    if(listener.exitQa) {
	 		listener.exitQa(this);
		}
	}
}


export class PathSearchStatContext extends ParserRuleContext {
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
    public get ruleIndex(): number {
    	return LKDLParser.RULE_pathSearchStat;
	}
	public enterRule(listener: LKDLListener): void {
	    if(listener.enterPathSearchStat) {
	 		listener.enterPathSearchStat(this);
		}
	}
	public exitRule(listener: LKDLListener): void {
	    if(listener.exitPathSearchStat) {
	 		listener.exitPathSearchStat(this);
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
