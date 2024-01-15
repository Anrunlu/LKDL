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
	public static readonly ID = 1;
	public static readonly INT = 2;
	public static readonly FLOAT = 3;
	public static readonly NEWLINE = 4;
	public static readonly WS = 5;
	public static readonly ASSIGN = 6;
	public static readonly ATTR = 7;
	public static readonly ADD = 8;
	public static readonly SUB = 9;
	public static readonly COMMA = 10;
	public static readonly OPEN_BRACKET = 11;
	public static readonly CLOSE_BRACKET = 12;
	public static readonly OPEN_PAREN = 13;
	public static readonly CLOSE_PAREN = 14;
	public static readonly ADDEQ = 15;
	public static readonly DELEQ = 16;
	public static readonly RULEDEF = 17;
	public static readonly RNAME = 18;
	public static readonly ADDYUAN = 19;
	public static readonly DELYUAN = 20;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_prog = 0;
	public static readonly RULE_stat = 1;
	public static readonly RULE_cudYuanStat = 2;
	public static readonly RULE_noRelYuanCudExpr = 3;
	public static readonly RULE_relYuanCudExpr = 4;
	public static readonly RULE_relList = 5;
	public static readonly RULE_relExpr = 6;
	public static readonly RULE_relSequence = 7;
	public static readonly RULE_relAttrList = 8;
	public static readonly RULE_relAttr = 9;
	public static readonly RULE_yuanList = 10;
	public static readonly literalNames: (string | null)[] = [ null, null, 
                                                            null, null, 
                                                            "';'", null, 
                                                            "'='", "'.'", 
                                                            "'+'", "'-'", 
                                                            null, null, 
                                                            null, null, 
                                                            null, "'+='", 
                                                            "'-='", "':='", 
                                                            null, "'\\u5143+='", 
                                                            "'\\u5143-='" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "ID", 
                                                             "INT", "FLOAT", 
                                                             "NEWLINE", 
                                                             "WS", "ASSIGN", 
                                                             "ATTR", "ADD", 
                                                             "SUB", "COMMA", 
                                                             "OPEN_BRACKET", 
                                                             "CLOSE_BRACKET", 
                                                             "OPEN_PAREN", 
                                                             "CLOSE_PAREN", 
                                                             "ADDEQ", "DELEQ", 
                                                             "RULEDEF", 
                                                             "RNAME", "ADDYUAN", 
                                                             "DELYUAN" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"prog", "stat", "cudYuanStat", "noRelYuanCudExpr", "relYuanCudExpr", "relList", 
		"relExpr", "relSequence", "relAttrList", "relAttr", "yuanList",
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
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1581058) !== 0)) {
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
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 30;
			this.cudYuanStat();
			this.state = 31;
			this.match(LKDLParser.NEWLINE);
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
		this.enterRule(localctx, 4, LKDLParser.RULE_cudYuanStat);
		try {
			this.state = 35;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 19:
			case 20:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 33;
				this.noRelYuanCudExpr();
				}
				break;
			case 1:
			case 13:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 34;
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
		this.enterRule(localctx, 6, LKDLParser.RULE_noRelYuanCudExpr);
		try {
			this.state = 41;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 19:
				localctx = new AddYuanContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 37;
				this.match(LKDLParser.ADDYUAN);
				this.state = 38;
				this.yuanList();
				}
				break;
			case 20:
				localctx = new DelYuanContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 39;
				this.match(LKDLParser.DELYUAN);
				this.state = 40;
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
		this.enterRule(localctx, 8, LKDLParser.RULE_relYuanCudExpr);
		try {
			this.state = 61;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				localctx = new AddYuanRelContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 43;
				(localctx as AddYuanRelContext)._lhs = this.yuanList();
				this.state = 44;
				this.match(LKDLParser.ATTR);
				this.state = 45;
				this.relList();
				this.state = 46;
				this.match(LKDLParser.ADDEQ);
				this.state = 47;
				(localctx as AddYuanRelContext)._rhs = this.yuanList();
				}
				break;
			case 2:
				localctx = new DelYuanRelContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 49;
				(localctx as DelYuanRelContext)._lhs = this.yuanList();
				this.state = 50;
				this.match(LKDLParser.ATTR);
				this.state = 51;
				this.relList();
				this.state = 52;
				this.match(LKDLParser.DELEQ);
				this.state = 53;
				(localctx as DelYuanRelContext)._rhs = this.yuanList();
				}
				break;
			case 3:
				localctx = new UpdateYuanRelContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 55;
				(localctx as UpdateYuanRelContext)._lhs = this.yuanList();
				this.state = 56;
				this.match(LKDLParser.ATTR);
				this.state = 57;
				this.relList();
				this.state = 58;
				this.match(LKDLParser.ASSIGN);
				this.state = 59;
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
	public relList(): RelListContext {
		let localctx: RelListContext = new RelListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, LKDLParser.RULE_relList);
		let _la: number;
		try {
			this.state = 75;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 63;
				this.relExpr();
				}
				break;
			case 13:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 64;
				this.match(LKDLParser.OPEN_PAREN);
				this.state = 65;
				this.relExpr();
				this.state = 70;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===10) {
					{
					{
					this.state = 66;
					this.match(LKDLParser.COMMA);
					this.state = 67;
					this.relExpr();
					}
					}
					this.state = 72;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 73;
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
	public relExpr(): RelExprContext {
		let localctx: RelExprContext = new RelExprContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, LKDLParser.RULE_relExpr);
		let _la: number;
		try {
			this.state = 82;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 77;
				localctx._lhs = this.relSequence();
				this.state = 79;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===11) {
					{
					this.state = 78;
					localctx._rhs = this.relAttrList();
					}
				}

				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 81;
				localctx._lhs = this.relSequence();
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
	public relSequence(): RelSequenceContext {
		let localctx: RelSequenceContext = new RelSequenceContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, LKDLParser.RULE_relSequence);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 84;
			this.match(LKDLParser.ID);
			this.state = 89;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===7) {
				{
				{
				this.state = 85;
				this.match(LKDLParser.ATTR);
				this.state = 86;
				this.match(LKDLParser.ID);
				}
				}
				this.state = 91;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
	public relAttrList(): RelAttrListContext {
		let localctx: RelAttrListContext = new RelAttrListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, LKDLParser.RULE_relAttrList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 92;
			this.match(LKDLParser.OPEN_BRACKET);
			this.state = 93;
			this.relAttr();
			this.state = 98;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===10) {
				{
				{
				this.state = 94;
				this.match(LKDLParser.COMMA);
				this.state = 95;
				this.relAttr();
				}
				}
				this.state = 100;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 101;
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
			this.state = 103;
			localctx._lhs = this.match(LKDLParser.ID);
			this.state = 104;
			this.match(LKDLParser.ASSIGN);
			this.state = 105;
			localctx._rhs = this._input.LT(1);
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 14) !== 0))) {
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
			this.state = 118;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 107;
				this.match(LKDLParser.ID);
				}
				break;
			case 13:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 108;
				this.match(LKDLParser.OPEN_PAREN);
				this.state = 109;
				this.match(LKDLParser.ID);
				this.state = 114;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===10) {
					{
					{
					this.state = 110;
					this.match(LKDLParser.COMMA);
					this.state = 111;
					this.match(LKDLParser.ID);
					}
					}
					this.state = 116;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 117;
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

	public static readonly _serializedATN: number[] = [4,1,20,121,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,1,0,5,0,24,8,0,10,0,12,0,27,9,0,1,0,1,0,1,1,1,1,1,1,1,2,1,2,3,2,
	36,8,2,1,3,1,3,1,3,1,3,3,3,42,8,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,
	4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,62,8,4,1,5,1,5,1,5,1,5,1,5,5,5,69,
	8,5,10,5,12,5,72,9,5,1,5,1,5,3,5,76,8,5,1,6,1,6,3,6,80,8,6,1,6,3,6,83,8,
	6,1,7,1,7,1,7,5,7,88,8,7,10,7,12,7,91,9,7,1,8,1,8,1,8,1,8,5,8,97,8,8,10,
	8,12,8,100,9,8,1,8,1,8,1,9,1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,10,5,10,113,
	8,10,10,10,12,10,116,9,10,1,10,3,10,119,8,10,1,10,0,0,11,0,2,4,6,8,10,12,
	14,16,18,20,0,1,1,0,1,3,122,0,25,1,0,0,0,2,30,1,0,0,0,4,35,1,0,0,0,6,41,
	1,0,0,0,8,61,1,0,0,0,10,75,1,0,0,0,12,82,1,0,0,0,14,84,1,0,0,0,16,92,1,
	0,0,0,18,103,1,0,0,0,20,118,1,0,0,0,22,24,3,2,1,0,23,22,1,0,0,0,24,27,1,
	0,0,0,25,23,1,0,0,0,25,26,1,0,0,0,26,28,1,0,0,0,27,25,1,0,0,0,28,29,5,0,
	0,1,29,1,1,0,0,0,30,31,3,4,2,0,31,32,5,4,0,0,32,3,1,0,0,0,33,36,3,6,3,0,
	34,36,3,8,4,0,35,33,1,0,0,0,35,34,1,0,0,0,36,5,1,0,0,0,37,38,5,19,0,0,38,
	42,3,20,10,0,39,40,5,20,0,0,40,42,3,20,10,0,41,37,1,0,0,0,41,39,1,0,0,0,
	42,7,1,0,0,0,43,44,3,20,10,0,44,45,5,7,0,0,45,46,3,10,5,0,46,47,5,15,0,
	0,47,48,3,20,10,0,48,62,1,0,0,0,49,50,3,20,10,0,50,51,5,7,0,0,51,52,3,10,
	5,0,52,53,5,16,0,0,53,54,3,20,10,0,54,62,1,0,0,0,55,56,3,20,10,0,56,57,
	5,7,0,0,57,58,3,10,5,0,58,59,5,6,0,0,59,60,3,20,10,0,60,62,1,0,0,0,61,43,
	1,0,0,0,61,49,1,0,0,0,61,55,1,0,0,0,62,9,1,0,0,0,63,76,3,12,6,0,64,65,5,
	13,0,0,65,70,3,12,6,0,66,67,5,10,0,0,67,69,3,12,6,0,68,66,1,0,0,0,69,72,
	1,0,0,0,70,68,1,0,0,0,70,71,1,0,0,0,71,73,1,0,0,0,72,70,1,0,0,0,73,74,5,
	14,0,0,74,76,1,0,0,0,75,63,1,0,0,0,75,64,1,0,0,0,76,11,1,0,0,0,77,79,3,
	14,7,0,78,80,3,16,8,0,79,78,1,0,0,0,79,80,1,0,0,0,80,83,1,0,0,0,81,83,3,
	14,7,0,82,77,1,0,0,0,82,81,1,0,0,0,83,13,1,0,0,0,84,89,5,1,0,0,85,86,5,
	7,0,0,86,88,5,1,0,0,87,85,1,0,0,0,88,91,1,0,0,0,89,87,1,0,0,0,89,90,1,0,
	0,0,90,15,1,0,0,0,91,89,1,0,0,0,92,93,5,11,0,0,93,98,3,18,9,0,94,95,5,10,
	0,0,95,97,3,18,9,0,96,94,1,0,0,0,97,100,1,0,0,0,98,96,1,0,0,0,98,99,1,0,
	0,0,99,101,1,0,0,0,100,98,1,0,0,0,101,102,5,12,0,0,102,17,1,0,0,0,103,104,
	5,1,0,0,104,105,5,6,0,0,105,106,7,0,0,0,106,19,1,0,0,0,107,119,5,1,0,0,
	108,109,5,13,0,0,109,114,5,1,0,0,110,111,5,10,0,0,111,113,5,1,0,0,112,110,
	1,0,0,0,113,116,1,0,0,0,114,112,1,0,0,0,114,115,1,0,0,0,115,117,1,0,0,0,
	116,114,1,0,0,0,117,119,5,14,0,0,118,107,1,0,0,0,118,108,1,0,0,0,119,21,
	1,0,0,0,12,25,35,41,61,70,75,79,82,89,98,114,118];

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
	public cudYuanStat(): CudYuanStatContext {
		return this.getTypedRuleContext(CudYuanStatContext, 0) as CudYuanStatContext;
	}
	public NEWLINE(): TerminalNode {
		return this.getToken(LKDLParser.NEWLINE, 0);
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
	public relList(): RelListContext {
		return this.getTypedRuleContext(RelListContext, 0) as RelListContext;
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
	public relList(): RelListContext {
		return this.getTypedRuleContext(RelListContext, 0) as RelListContext;
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
	public relList(): RelListContext {
		return this.getTypedRuleContext(RelListContext, 0) as RelListContext;
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


export class RelListContext extends ParserRuleContext {
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
    	return LKDLParser.RULE_relList;
	}
	public enterRule(listener: LKDLListener): void {
	    if(listener.enterRelList) {
	 		listener.enterRelList(this);
		}
	}
	public exitRule(listener: LKDLListener): void {
	    if(listener.exitRelList) {
	 		listener.exitRelList(this);
		}
	}
}


export class RelExprContext extends ParserRuleContext {
	public _lhs!: RelSequenceContext;
	public _rhs!: RelAttrListContext;
	constructor(parser?: LKDLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public relSequence(): RelSequenceContext {
		return this.getTypedRuleContext(RelSequenceContext, 0) as RelSequenceContext;
	}
	public relAttrList(): RelAttrListContext {
		return this.getTypedRuleContext(RelAttrListContext, 0) as RelAttrListContext;
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


export class RelSequenceContext extends ParserRuleContext {
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
	public ATTR_list(): TerminalNode[] {
	    	return this.getTokens(LKDLParser.ATTR);
	}
	public ATTR(i: number): TerminalNode {
		return this.getToken(LKDLParser.ATTR, i);
	}
    public get ruleIndex(): number {
    	return LKDLParser.RULE_relSequence;
	}
	public enterRule(listener: LKDLListener): void {
	    if(listener.enterRelSequence) {
	 		listener.enterRelSequence(this);
		}
	}
	public exitRule(listener: LKDLListener): void {
	    if(listener.exitRelSequence) {
	 		listener.exitRelSequence(this);
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
	public _rhs!: Token;
	constructor(parser?: LKDLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ASSIGN(): TerminalNode {
		return this.getToken(LKDLParser.ASSIGN, 0);
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
