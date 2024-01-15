"use strict";
// Generated from LKDL.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
Object.defineProperty(exports, "__esModule", { value: true });
exports.YuanListContext = exports.RelAttrContext = exports.RelAttrListContext = exports.RelSequenceContext = exports.RelExprContext = exports.RelListContext = exports.UpdateYuanRelContext = exports.DelYuanRelContext = exports.AddYuanRelContext = exports.RelYuanCudExprContext = exports.AddYuanContext = exports.DelYuanContext = exports.NoRelYuanCudExprContext = exports.CudYuanStatContext = exports.StatContext = exports.ProgContext = void 0;
const antlr4_1 = require("antlr4");
class LKDLParser extends antlr4_1.Parser {
    get grammarFileName() { return "LKDL.g4"; }
    get literalNames() { return LKDLParser.literalNames; }
    get symbolicNames() { return LKDLParser.symbolicNames; }
    get ruleNames() { return LKDLParser.ruleNames; }
    get serializedATN() { return LKDLParser._serializedATN; }
    createFailedPredicateException(predicate, message) {
        return new antlr4_1.FailedPredicateException(this, predicate, message);
    }
    constructor(input) {
        super(input);
        this._interp = new antlr4_1.ParserATNSimulator(this, LKDLParser._ATN, LKDLParser.DecisionsToDFA, new antlr4_1.PredictionContextCache());
    }
    // @RuleVersion(0)
    prog() {
        let localctx = new ProgContext(this, this._ctx, this.state);
        this.enterRule(localctx, 0, LKDLParser.RULE_prog);
        let _la;
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
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    stat() {
        let localctx = new StatContext(this, this._ctx, this.state);
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
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    cudYuanStat() {
        let localctx = new CudYuanStatContext(this, this._ctx, this.state);
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
                    throw new antlr4_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    noRelYuanCudExpr() {
        let localctx = new NoRelYuanCudExprContext(this, this._ctx, this.state);
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
                    throw new antlr4_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    relYuanCudExpr() {
        let localctx = new RelYuanCudExprContext(this, this._ctx, this.state);
        this.enterRule(localctx, 8, LKDLParser.RULE_relYuanCudExpr);
        try {
            this.state = 61;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 3, this._ctx)) {
                case 1:
                    localctx = new AddYuanRelContext(this, localctx);
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 43;
                        localctx._lhs = this.yuanList();
                        this.state = 44;
                        this.match(LKDLParser.ATTR);
                        this.state = 45;
                        this.relList();
                        this.state = 46;
                        this.match(LKDLParser.ADDEQ);
                        this.state = 47;
                        localctx._rhs = this.yuanList();
                    }
                    break;
                case 2:
                    localctx = new DelYuanRelContext(this, localctx);
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 49;
                        localctx._lhs = this.yuanList();
                        this.state = 50;
                        this.match(LKDLParser.ATTR);
                        this.state = 51;
                        this.relList();
                        this.state = 52;
                        this.match(LKDLParser.DELEQ);
                        this.state = 53;
                        localctx._rhs = this.yuanList();
                    }
                    break;
                case 3:
                    localctx = new UpdateYuanRelContext(this, localctx);
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 55;
                        localctx._lhs = this.yuanList();
                        this.state = 56;
                        this.match(LKDLParser.ATTR);
                        this.state = 57;
                        this.relList();
                        this.state = 58;
                        this.match(LKDLParser.ASSIGN);
                        this.state = 59;
                        localctx._rhs = this.yuanList();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    relList() {
        let localctx = new RelListContext(this, this._ctx, this.state);
        this.enterRule(localctx, 10, LKDLParser.RULE_relList);
        let _la;
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
                        while (_la === 10) {
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
                    throw new antlr4_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    relExpr() {
        let localctx = new RelExprContext(this, this._ctx, this.state);
        this.enterRule(localctx, 12, LKDLParser.RULE_relExpr);
        let _la;
        try {
            this.state = 82;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 7, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 77;
                        localctx._lhs = this.relSequence();
                        this.state = 79;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === 11) {
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
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    relSequence() {
        let localctx = new RelSequenceContext(this, this._ctx, this.state);
        this.enterRule(localctx, 14, LKDLParser.RULE_relSequence);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 84;
                this.match(LKDLParser.ID);
                this.state = 89;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === 7) {
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
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    relAttrList() {
        let localctx = new RelAttrListContext(this, this._ctx, this.state);
        this.enterRule(localctx, 16, LKDLParser.RULE_relAttrList);
        let _la;
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
                while (_la === 10) {
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
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    relAttr() {
        let localctx = new RelAttrContext(this, this._ctx, this.state);
        this.enterRule(localctx, 18, LKDLParser.RULE_relAttr);
        let _la;
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
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & 14) !== 0))) {
                    localctx._rhs = this._errHandler.recoverInline(this);
                }
                else {
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    yuanList() {
        let localctx = new YuanListContext(this, this._ctx, this.state);
        this.enterRule(localctx, 20, LKDLParser.RULE_yuanList);
        let _la;
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
                        while (_la === 10) {
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
                    throw new antlr4_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    static get _ATN() {
        if (!LKDLParser.__ATN) {
            LKDLParser.__ATN = new antlr4_1.ATNDeserializer().deserialize(LKDLParser._serializedATN);
        }
        return LKDLParser.__ATN;
    }
}
LKDLParser.ID = 1;
LKDLParser.INT = 2;
LKDLParser.FLOAT = 3;
LKDLParser.NEWLINE = 4;
LKDLParser.WS = 5;
LKDLParser.ASSIGN = 6;
LKDLParser.ATTR = 7;
LKDLParser.ADD = 8;
LKDLParser.SUB = 9;
LKDLParser.COMMA = 10;
LKDLParser.OPEN_BRACKET = 11;
LKDLParser.CLOSE_BRACKET = 12;
LKDLParser.OPEN_PAREN = 13;
LKDLParser.CLOSE_PAREN = 14;
LKDLParser.ADDEQ = 15;
LKDLParser.DELEQ = 16;
LKDLParser.RULEDEF = 17;
LKDLParser.RNAME = 18;
LKDLParser.ADDYUAN = 19;
LKDLParser.DELYUAN = 20;
LKDLParser.EOF = antlr4_1.Token.EOF;
LKDLParser.RULE_prog = 0;
LKDLParser.RULE_stat = 1;
LKDLParser.RULE_cudYuanStat = 2;
LKDLParser.RULE_noRelYuanCudExpr = 3;
LKDLParser.RULE_relYuanCudExpr = 4;
LKDLParser.RULE_relList = 5;
LKDLParser.RULE_relExpr = 6;
LKDLParser.RULE_relSequence = 7;
LKDLParser.RULE_relAttrList = 8;
LKDLParser.RULE_relAttr = 9;
LKDLParser.RULE_yuanList = 10;
LKDLParser.literalNames = [null, null,
    null, null,
    "';'", null,
    "'='", "'.'",
    "'+'", "'-'",
    null, null,
    null, null,
    null, "'+='",
    "'-='", "':='",
    null, "'\\u5143+='",
    "'\\u5143-='"];
LKDLParser.symbolicNames = [null, "ID",
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
    "DELYUAN"];
// tslint:disable:no-trailing-whitespace
LKDLParser.ruleNames = [
    "prog", "stat", "cudYuanStat", "noRelYuanCudExpr", "relYuanCudExpr", "relList",
    "relExpr", "relSequence", "relAttrList", "relAttr", "yuanList",
];
LKDLParser._serializedATN = [4, 1, 20, 121, 2, 0, 7, 0, 2,
    1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4, 2, 5, 7, 5, 2, 6, 7, 6, 2, 7, 7, 7, 2, 8, 7, 8, 2, 9, 7, 9, 2,
    10, 7, 10, 1, 0, 5, 0, 24, 8, 0, 10, 0, 12, 0, 27, 9, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 3, 2,
    36, 8, 2, 1, 3, 1, 3, 1, 3, 1, 3, 3, 3, 42, 8, 3, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1,
    4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 3, 4, 62, 8, 4, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 5, 5, 69,
    8, 5, 10, 5, 12, 5, 72, 9, 5, 1, 5, 1, 5, 3, 5, 76, 8, 5, 1, 6, 1, 6, 3, 6, 80, 8, 6, 1, 6, 3, 6, 83, 8,
    6, 1, 7, 1, 7, 1, 7, 5, 7, 88, 8, 7, 10, 7, 12, 7, 91, 9, 7, 1, 8, 1, 8, 1, 8, 1, 8, 5, 8, 97, 8, 8, 10,
    8, 12, 8, 100, 9, 8, 1, 8, 1, 8, 1, 9, 1, 9, 1, 9, 1, 9, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 5, 10, 113,
    8, 10, 10, 10, 12, 10, 116, 9, 10, 1, 10, 3, 10, 119, 8, 10, 1, 10, 0, 0, 11, 0, 2, 4, 6, 8, 10, 12,
    14, 16, 18, 20, 0, 1, 1, 0, 1, 3, 122, 0, 25, 1, 0, 0, 0, 2, 30, 1, 0, 0, 0, 4, 35, 1, 0, 0, 0, 6, 41,
    1, 0, 0, 0, 8, 61, 1, 0, 0, 0, 10, 75, 1, 0, 0, 0, 12, 82, 1, 0, 0, 0, 14, 84, 1, 0, 0, 0, 16, 92, 1,
    0, 0, 0, 18, 103, 1, 0, 0, 0, 20, 118, 1, 0, 0, 0, 22, 24, 3, 2, 1, 0, 23, 22, 1, 0, 0, 0, 24, 27, 1,
    0, 0, 0, 25, 23, 1, 0, 0, 0, 25, 26, 1, 0, 0, 0, 26, 28, 1, 0, 0, 0, 27, 25, 1, 0, 0, 0, 28, 29, 5, 0,
    0, 1, 29, 1, 1, 0, 0, 0, 30, 31, 3, 4, 2, 0, 31, 32, 5, 4, 0, 0, 32, 3, 1, 0, 0, 0, 33, 36, 3, 6, 3, 0,
    34, 36, 3, 8, 4, 0, 35, 33, 1, 0, 0, 0, 35, 34, 1, 0, 0, 0, 36, 5, 1, 0, 0, 0, 37, 38, 5, 19, 0, 0, 38,
    42, 3, 20, 10, 0, 39, 40, 5, 20, 0, 0, 40, 42, 3, 20, 10, 0, 41, 37, 1, 0, 0, 0, 41, 39, 1, 0, 0, 0,
    42, 7, 1, 0, 0, 0, 43, 44, 3, 20, 10, 0, 44, 45, 5, 7, 0, 0, 45, 46, 3, 10, 5, 0, 46, 47, 5, 15, 0,
    0, 47, 48, 3, 20, 10, 0, 48, 62, 1, 0, 0, 0, 49, 50, 3, 20, 10, 0, 50, 51, 5, 7, 0, 0, 51, 52, 3, 10,
    5, 0, 52, 53, 5, 16, 0, 0, 53, 54, 3, 20, 10, 0, 54, 62, 1, 0, 0, 0, 55, 56, 3, 20, 10, 0, 56, 57,
    5, 7, 0, 0, 57, 58, 3, 10, 5, 0, 58, 59, 5, 6, 0, 0, 59, 60, 3, 20, 10, 0, 60, 62, 1, 0, 0, 0, 61, 43,
    1, 0, 0, 0, 61, 49, 1, 0, 0, 0, 61, 55, 1, 0, 0, 0, 62, 9, 1, 0, 0, 0, 63, 76, 3, 12, 6, 0, 64, 65, 5,
    13, 0, 0, 65, 70, 3, 12, 6, 0, 66, 67, 5, 10, 0, 0, 67, 69, 3, 12, 6, 0, 68, 66, 1, 0, 0, 0, 69, 72,
    1, 0, 0, 0, 70, 68, 1, 0, 0, 0, 70, 71, 1, 0, 0, 0, 71, 73, 1, 0, 0, 0, 72, 70, 1, 0, 0, 0, 73, 74, 5,
    14, 0, 0, 74, 76, 1, 0, 0, 0, 75, 63, 1, 0, 0, 0, 75, 64, 1, 0, 0, 0, 76, 11, 1, 0, 0, 0, 77, 79, 3,
    14, 7, 0, 78, 80, 3, 16, 8, 0, 79, 78, 1, 0, 0, 0, 79, 80, 1, 0, 0, 0, 80, 83, 1, 0, 0, 0, 81, 83, 3,
    14, 7, 0, 82, 77, 1, 0, 0, 0, 82, 81, 1, 0, 0, 0, 83, 13, 1, 0, 0, 0, 84, 89, 5, 1, 0, 0, 85, 86, 5,
    7, 0, 0, 86, 88, 5, 1, 0, 0, 87, 85, 1, 0, 0, 0, 88, 91, 1, 0, 0, 0, 89, 87, 1, 0, 0, 0, 89, 90, 1, 0,
    0, 0, 90, 15, 1, 0, 0, 0, 91, 89, 1, 0, 0, 0, 92, 93, 5, 11, 0, 0, 93, 98, 3, 18, 9, 0, 94, 95, 5, 10,
    0, 0, 95, 97, 3, 18, 9, 0, 96, 94, 1, 0, 0, 0, 97, 100, 1, 0, 0, 0, 98, 96, 1, 0, 0, 0, 98, 99, 1, 0,
    0, 0, 99, 101, 1, 0, 0, 0, 100, 98, 1, 0, 0, 0, 101, 102, 5, 12, 0, 0, 102, 17, 1, 0, 0, 0, 103, 104,
    5, 1, 0, 0, 104, 105, 5, 6, 0, 0, 105, 106, 7, 0, 0, 0, 106, 19, 1, 0, 0, 0, 107, 119, 5, 1, 0, 0,
    108, 109, 5, 13, 0, 0, 109, 114, 5, 1, 0, 0, 110, 111, 5, 10, 0, 0, 111, 113, 5, 1, 0, 0, 112, 110,
    1, 0, 0, 0, 113, 116, 1, 0, 0, 0, 114, 112, 1, 0, 0, 0, 114, 115, 1, 0, 0, 0, 115, 117, 1, 0, 0, 0,
    116, 114, 1, 0, 0, 0, 117, 119, 5, 14, 0, 0, 118, 107, 1, 0, 0, 0, 118, 108, 1, 0, 0, 0, 119, 21,
    1, 0, 0, 0, 12, 25, 35, 41, 61, 70, 75, 79, 82, 89, 98, 114, 118];
LKDLParser.DecisionsToDFA = LKDLParser._ATN.decisionToState.map((ds, index) => new antlr4_1.DFA(ds, index));
exports.default = LKDLParser;
class ProgContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    EOF() {
        return this.getToken(LKDLParser.EOF, 0);
    }
    stat_list() {
        return this.getTypedRuleContexts(StatContext);
    }
    stat(i) {
        return this.getTypedRuleContext(StatContext, i);
    }
    get ruleIndex() {
        return LKDLParser.RULE_prog;
    }
    enterRule(listener) {
        if (listener.enterProg) {
            listener.enterProg(this);
        }
    }
    exitRule(listener) {
        if (listener.exitProg) {
            listener.exitProg(this);
        }
    }
}
exports.ProgContext = ProgContext;
class StatContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    cudYuanStat() {
        return this.getTypedRuleContext(CudYuanStatContext, 0);
    }
    NEWLINE() {
        return this.getToken(LKDLParser.NEWLINE, 0);
    }
    get ruleIndex() {
        return LKDLParser.RULE_stat;
    }
    enterRule(listener) {
        if (listener.enterStat) {
            listener.enterStat(this);
        }
    }
    exitRule(listener) {
        if (listener.exitStat) {
            listener.exitStat(this);
        }
    }
}
exports.StatContext = StatContext;
class CudYuanStatContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    noRelYuanCudExpr() {
        return this.getTypedRuleContext(NoRelYuanCudExprContext, 0);
    }
    relYuanCudExpr() {
        return this.getTypedRuleContext(RelYuanCudExprContext, 0);
    }
    get ruleIndex() {
        return LKDLParser.RULE_cudYuanStat;
    }
    enterRule(listener) {
        if (listener.enterCudYuanStat) {
            listener.enterCudYuanStat(this);
        }
    }
    exitRule(listener) {
        if (listener.exitCudYuanStat) {
            listener.exitCudYuanStat(this);
        }
    }
}
exports.CudYuanStatContext = CudYuanStatContext;
class NoRelYuanCudExprContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    get ruleIndex() {
        return LKDLParser.RULE_noRelYuanCudExpr;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.NoRelYuanCudExprContext = NoRelYuanCudExprContext;
class DelYuanContext extends NoRelYuanCudExprContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    DELYUAN() {
        return this.getToken(LKDLParser.DELYUAN, 0);
    }
    yuanList() {
        return this.getTypedRuleContext(YuanListContext, 0);
    }
    enterRule(listener) {
        if (listener.enterDelYuan) {
            listener.enterDelYuan(this);
        }
    }
    exitRule(listener) {
        if (listener.exitDelYuan) {
            listener.exitDelYuan(this);
        }
    }
}
exports.DelYuanContext = DelYuanContext;
class AddYuanContext extends NoRelYuanCudExprContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    ADDYUAN() {
        return this.getToken(LKDLParser.ADDYUAN, 0);
    }
    yuanList() {
        return this.getTypedRuleContext(YuanListContext, 0);
    }
    enterRule(listener) {
        if (listener.enterAddYuan) {
            listener.enterAddYuan(this);
        }
    }
    exitRule(listener) {
        if (listener.exitAddYuan) {
            listener.exitAddYuan(this);
        }
    }
}
exports.AddYuanContext = AddYuanContext;
class RelYuanCudExprContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    get ruleIndex() {
        return LKDLParser.RULE_relYuanCudExpr;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.RelYuanCudExprContext = RelYuanCudExprContext;
class AddYuanRelContext extends RelYuanCudExprContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    ATTR() {
        return this.getToken(LKDLParser.ATTR, 0);
    }
    relList() {
        return this.getTypedRuleContext(RelListContext, 0);
    }
    ADDEQ() {
        return this.getToken(LKDLParser.ADDEQ, 0);
    }
    yuanList_list() {
        return this.getTypedRuleContexts(YuanListContext);
    }
    yuanList(i) {
        return this.getTypedRuleContext(YuanListContext, i);
    }
    enterRule(listener) {
        if (listener.enterAddYuanRel) {
            listener.enterAddYuanRel(this);
        }
    }
    exitRule(listener) {
        if (listener.exitAddYuanRel) {
            listener.exitAddYuanRel(this);
        }
    }
}
exports.AddYuanRelContext = AddYuanRelContext;
class DelYuanRelContext extends RelYuanCudExprContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    ATTR() {
        return this.getToken(LKDLParser.ATTR, 0);
    }
    relList() {
        return this.getTypedRuleContext(RelListContext, 0);
    }
    DELEQ() {
        return this.getToken(LKDLParser.DELEQ, 0);
    }
    yuanList_list() {
        return this.getTypedRuleContexts(YuanListContext);
    }
    yuanList(i) {
        return this.getTypedRuleContext(YuanListContext, i);
    }
    enterRule(listener) {
        if (listener.enterDelYuanRel) {
            listener.enterDelYuanRel(this);
        }
    }
    exitRule(listener) {
        if (listener.exitDelYuanRel) {
            listener.exitDelYuanRel(this);
        }
    }
}
exports.DelYuanRelContext = DelYuanRelContext;
class UpdateYuanRelContext extends RelYuanCudExprContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    ATTR() {
        return this.getToken(LKDLParser.ATTR, 0);
    }
    relList() {
        return this.getTypedRuleContext(RelListContext, 0);
    }
    ASSIGN() {
        return this.getToken(LKDLParser.ASSIGN, 0);
    }
    yuanList_list() {
        return this.getTypedRuleContexts(YuanListContext);
    }
    yuanList(i) {
        return this.getTypedRuleContext(YuanListContext, i);
    }
    enterRule(listener) {
        if (listener.enterUpdateYuanRel) {
            listener.enterUpdateYuanRel(this);
        }
    }
    exitRule(listener) {
        if (listener.exitUpdateYuanRel) {
            listener.exitUpdateYuanRel(this);
        }
    }
}
exports.UpdateYuanRelContext = UpdateYuanRelContext;
class RelListContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    relExpr_list() {
        return this.getTypedRuleContexts(RelExprContext);
    }
    relExpr(i) {
        return this.getTypedRuleContext(RelExprContext, i);
    }
    OPEN_PAREN() {
        return this.getToken(LKDLParser.OPEN_PAREN, 0);
    }
    CLOSE_PAREN() {
        return this.getToken(LKDLParser.CLOSE_PAREN, 0);
    }
    COMMA_list() {
        return this.getTokens(LKDLParser.COMMA);
    }
    COMMA(i) {
        return this.getToken(LKDLParser.COMMA, i);
    }
    get ruleIndex() {
        return LKDLParser.RULE_relList;
    }
    enterRule(listener) {
        if (listener.enterRelList) {
            listener.enterRelList(this);
        }
    }
    exitRule(listener) {
        if (listener.exitRelList) {
            listener.exitRelList(this);
        }
    }
}
exports.RelListContext = RelListContext;
class RelExprContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    relSequence() {
        return this.getTypedRuleContext(RelSequenceContext, 0);
    }
    relAttrList() {
        return this.getTypedRuleContext(RelAttrListContext, 0);
    }
    get ruleIndex() {
        return LKDLParser.RULE_relExpr;
    }
    enterRule(listener) {
        if (listener.enterRelExpr) {
            listener.enterRelExpr(this);
        }
    }
    exitRule(listener) {
        if (listener.exitRelExpr) {
            listener.exitRelExpr(this);
        }
    }
}
exports.RelExprContext = RelExprContext;
class RelSequenceContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    ID_list() {
        return this.getTokens(LKDLParser.ID);
    }
    ID(i) {
        return this.getToken(LKDLParser.ID, i);
    }
    ATTR_list() {
        return this.getTokens(LKDLParser.ATTR);
    }
    ATTR(i) {
        return this.getToken(LKDLParser.ATTR, i);
    }
    get ruleIndex() {
        return LKDLParser.RULE_relSequence;
    }
    enterRule(listener) {
        if (listener.enterRelSequence) {
            listener.enterRelSequence(this);
        }
    }
    exitRule(listener) {
        if (listener.exitRelSequence) {
            listener.exitRelSequence(this);
        }
    }
}
exports.RelSequenceContext = RelSequenceContext;
class RelAttrListContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    OPEN_BRACKET() {
        return this.getToken(LKDLParser.OPEN_BRACKET, 0);
    }
    relAttr_list() {
        return this.getTypedRuleContexts(RelAttrContext);
    }
    relAttr(i) {
        return this.getTypedRuleContext(RelAttrContext, i);
    }
    CLOSE_BRACKET() {
        return this.getToken(LKDLParser.CLOSE_BRACKET, 0);
    }
    COMMA_list() {
        return this.getTokens(LKDLParser.COMMA);
    }
    COMMA(i) {
        return this.getToken(LKDLParser.COMMA, i);
    }
    get ruleIndex() {
        return LKDLParser.RULE_relAttrList;
    }
    enterRule(listener) {
        if (listener.enterRelAttrList) {
            listener.enterRelAttrList(this);
        }
    }
    exitRule(listener) {
        if (listener.exitRelAttrList) {
            listener.exitRelAttrList(this);
        }
    }
}
exports.RelAttrListContext = RelAttrListContext;
class RelAttrContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    ASSIGN() {
        return this.getToken(LKDLParser.ASSIGN, 0);
    }
    ID_list() {
        return this.getTokens(LKDLParser.ID);
    }
    ID(i) {
        return this.getToken(LKDLParser.ID, i);
    }
    INT() {
        return this.getToken(LKDLParser.INT, 0);
    }
    FLOAT() {
        return this.getToken(LKDLParser.FLOAT, 0);
    }
    get ruleIndex() {
        return LKDLParser.RULE_relAttr;
    }
    enterRule(listener) {
        if (listener.enterRelAttr) {
            listener.enterRelAttr(this);
        }
    }
    exitRule(listener) {
        if (listener.exitRelAttr) {
            listener.exitRelAttr(this);
        }
    }
}
exports.RelAttrContext = RelAttrContext;
class YuanListContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    ID_list() {
        return this.getTokens(LKDLParser.ID);
    }
    ID(i) {
        return this.getToken(LKDLParser.ID, i);
    }
    OPEN_PAREN() {
        return this.getToken(LKDLParser.OPEN_PAREN, 0);
    }
    CLOSE_PAREN() {
        return this.getToken(LKDLParser.CLOSE_PAREN, 0);
    }
    COMMA_list() {
        return this.getTokens(LKDLParser.COMMA);
    }
    COMMA(i) {
        return this.getToken(LKDLParser.COMMA, i);
    }
    get ruleIndex() {
        return LKDLParser.RULE_yuanList;
    }
    enterRule(listener) {
        if (listener.enterYuanList) {
            listener.enterYuanList(this);
        }
    }
    exitRule(listener) {
        if (listener.exitYuanList) {
            listener.exitYuanList(this);
        }
    }
}
exports.YuanListContext = YuanListContext;
