"use strict";
// Generated from LKDL.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
Object.defineProperty(exports, "__esModule", { value: true });
exports.YuanListContext = exports.RelAttrContext = exports.RelAttrListContext = exports.RelExprContext = exports.RelExprSequnceContext = exports.RelExprListContext = exports.SearchExprContext = exports.UpdateYuanRelContext = exports.DelYuanRelContext = exports.AddYuanRelContext = exports.AddYuanContext = exports.DelYuanContext = exports.CudStatContext = exports.SearchStatContext = exports.StatContext = exports.ProgContext = void 0;
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
            this.state = 36;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 1, this._ctx)) {
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
    searchStat() {
        let localctx = new SearchStatContext(this, this._ctx, this.state);
        this.enterRule(localctx, 4, LKDLParser.RULE_searchStat);
        try {
            this.state = 51;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 2, this._ctx)) {
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
    cudStat() {
        let localctx = new CudStatContext(this, this._ctx, this.state);
        this.enterRule(localctx, 6, LKDLParser.RULE_cudStat);
        try {
            this.state = 69;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 3, this._ctx)) {
                case 1:
                    localctx = new AddYuanRelContext(this, localctx);
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 53;
                        localctx._lhs = this.searchExpr();
                        this.state = 54;
                        this.match(LKDLParser.ADDEQ);
                        this.state = 55;
                        localctx._rhs = this.searchExpr();
                    }
                    break;
                case 2:
                    localctx = new DelYuanRelContext(this, localctx);
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 57;
                        localctx._lhs = this.searchExpr();
                        this.state = 58;
                        this.match(LKDLParser.DELEQ);
                        this.state = 59;
                        localctx._rhs = this.searchExpr();
                    }
                    break;
                case 3:
                    localctx = new UpdateYuanRelContext(this, localctx);
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 61;
                        localctx._lhs = this.searchExpr();
                        this.state = 62;
                        this.match(LKDLParser.ASSIGN);
                        this.state = 63;
                        localctx._rhs = this.searchExpr();
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
    searchExpr() {
        let localctx = new SearchExprContext(this, this._ctx, this.state);
        this.enterRule(localctx, 8, LKDLParser.RULE_searchExpr);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 71;
                this.yuanList();
                this.state = 74;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 4, this._ctx)) {
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
    relExprList() {
        let localctx = new RelExprListContext(this, this._ctx, this.state);
        this.enterRule(localctx, 10, LKDLParser.RULE_relExprList);
        let _la;
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
                        while (_la === 11) {
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
    relExprSequnce() {
        let localctx = new RelExprSequnceContext(this, this._ctx, this.state);
        this.enterRule(localctx, 12, LKDLParser.RULE_relExprSequnce);
        try {
            let _alt;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 90;
                this.relExpr();
                this.state = 95;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 7, this._ctx);
                while (_alt !== 2 && _alt !== antlr4_1.ATN.INVALID_ALT_NUMBER) {
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
        this.enterRule(localctx, 14, LKDLParser.RULE_relExpr);
        let _la;
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
                        if (_la === 12) {
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
                        if (_la === 12) {
                            {
                                this.state = 103;
                                localctx._rhs = this.relAttrList();
                            }
                        }
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
    relAttrList() {
        let localctx = new RelAttrListContext(this, this._ctx, this.state);
        this.enterRule(localctx, 16, LKDLParser.RULE_relAttrList);
        let _la;
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
                while (_la === 11) {
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
                        throw new antlr4_1.NoViableAltException(this);
                }
                this.state = 124;
                localctx._rhs = this._input.LT(1);
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & 29360128) !== 0))) {
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
                        while (_la === 11) {
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
LKDLParser.ADDYUAN = 1;
LKDLParser.DELYUAN = 2;
LKDLParser.NEWLINE = 3;
LKDLParser.LINECOMMENT = 4;
LKDLParser.BLOCKCOMMENT = 5;
LKDLParser.ASSIGN = 6;
LKDLParser.EQ = 7;
LKDLParser.ATTR = 8;
LKDLParser.ADD = 9;
LKDLParser.SUB = 10;
LKDLParser.COMMA = 11;
LKDLParser.OPEN_BRACKET = 12;
LKDLParser.CLOSE_BRACKET = 13;
LKDLParser.OPEN_PAREN = 14;
LKDLParser.CLOSE_PAREN = 15;
LKDLParser.ADDEQ = 16;
LKDLParser.DELEQ = 17;
LKDLParser.RULEDEF = 18;
LKDLParser.ISA = 19;
LKDLParser.HAS = 20;
LKDLParser.ALL = 21;
LKDLParser.INT = 22;
LKDLParser.FLOAT = 23;
LKDLParser.ID = 24;
LKDLParser.WS = 25;
LKDLParser.EOF = antlr4_1.Token.EOF;
LKDLParser.RULE_prog = 0;
LKDLParser.RULE_stat = 1;
LKDLParser.RULE_searchStat = 2;
LKDLParser.RULE_cudStat = 3;
LKDLParser.RULE_searchExpr = 4;
LKDLParser.RULE_relExprList = 5;
LKDLParser.RULE_relExprSequnce = 6;
LKDLParser.RULE_relExpr = 7;
LKDLParser.RULE_relAttrList = 8;
LKDLParser.RULE_relAttr = 9;
LKDLParser.RULE_yuanList = 10;
LKDLParser.literalNames = [null, "'\\u5143+='",
    "'\\u5143-='",
    null, null,
    null, "'='",
    "'=='", "'.'",
    "'+'", "'-'",
    null, null,
    null, null,
    null, "'+='",
    "'-='", "':='"];
LKDLParser.symbolicNames = [null, "ADDYUAN",
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
    "WS"];
// tslint:disable:no-trailing-whitespace
LKDLParser.ruleNames = [
    "prog", "stat", "searchStat", "cudStat", "searchExpr", "relExprList",
    "relExprSequnce", "relExpr", "relAttrList", "relAttr", "yuanList",
];
LKDLParser._serializedATN = [4, 1, 25, 140, 2, 0, 7, 0, 2,
    1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4, 2, 5, 7, 5, 2, 6, 7, 6, 2, 7, 7, 7, 2, 8, 7, 8, 2, 9, 7, 9, 2,
    10, 7, 10, 1, 0, 5, 0, 24, 8, 0, 10, 0, 12, 0, 27, 9, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    3, 1, 37, 8, 1, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 3, 2, 52, 8,
    2, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 3, 3, 70,
    8, 3, 1, 4, 1, 4, 1, 4, 3, 4, 75, 8, 4, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 5, 5, 82, 8, 5, 10, 5, 12, 5, 85,
    9, 5, 1, 5, 1, 5, 3, 5, 89, 8, 5, 1, 6, 1, 6, 1, 6, 5, 6, 94, 8, 6, 10, 6, 12, 6, 97, 9, 6, 1, 7, 1, 7,
    3, 7, 101, 8, 7, 1, 7, 1, 7, 3, 7, 105, 8, 7, 3, 7, 107, 8, 7, 1, 8, 1, 8, 1, 8, 1, 8, 5, 8, 113, 8, 8,
    10, 8, 12, 8, 116, 9, 8, 1, 8, 1, 8, 1, 9, 1, 9, 1, 9, 3, 9, 123, 8, 9, 1, 9, 1, 9, 1, 10, 1, 10, 1, 10,
    1, 10, 1, 10, 5, 10, 132, 8, 10, 10, 10, 12, 10, 135, 9, 10, 1, 10, 3, 10, 138, 8, 10, 1, 10, 0,
    0, 11, 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 0, 1, 1, 0, 22, 24, 148, 0, 25, 1, 0, 0, 0, 2, 36, 1,
    0, 0, 0, 4, 51, 1, 0, 0, 0, 6, 69, 1, 0, 0, 0, 8, 71, 1, 0, 0, 0, 10, 88, 1, 0, 0, 0, 12, 90, 1, 0, 0,
    0, 14, 106, 1, 0, 0, 0, 16, 108, 1, 0, 0, 0, 18, 119, 1, 0, 0, 0, 20, 137, 1, 0, 0, 0, 22, 24, 3, 2,
    1, 0, 23, 22, 1, 0, 0, 0, 24, 27, 1, 0, 0, 0, 25, 23, 1, 0, 0, 0, 25, 26, 1, 0, 0, 0, 26, 28, 1, 0, 0,
    0, 27, 25, 1, 0, 0, 0, 28, 29, 5, 0, 0, 1, 29, 1, 1, 0, 0, 0, 30, 31, 3, 4, 2, 0, 31, 32, 5, 3, 0, 0,
    32, 37, 1, 0, 0, 0, 33, 34, 3, 6, 3, 0, 34, 35, 5, 3, 0, 0, 35, 37, 1, 0, 0, 0, 36, 30, 1, 0, 0, 0, 36,
    33, 1, 0, 0, 0, 37, 3, 1, 0, 0, 0, 38, 39, 3, 8, 4, 0, 39, 40, 5, 8, 0, 0, 40, 41, 5, 21, 0, 0, 41, 52,
    1, 0, 0, 0, 42, 43, 3, 8, 4, 0, 43, 44, 5, 8, 0, 0, 44, 45, 5, 20, 0, 0, 45, 52, 1, 0, 0, 0, 46, 47,
    3, 8, 4, 0, 47, 48, 5, 8, 0, 0, 48, 49, 5, 19, 0, 0, 49, 52, 1, 0, 0, 0, 50, 52, 3, 8, 4, 0, 51, 38,
    1, 0, 0, 0, 51, 42, 1, 0, 0, 0, 51, 46, 1, 0, 0, 0, 51, 50, 1, 0, 0, 0, 52, 5, 1, 0, 0, 0, 53, 54, 3,
    8, 4, 0, 54, 55, 5, 16, 0, 0, 55, 56, 3, 8, 4, 0, 56, 70, 1, 0, 0, 0, 57, 58, 3, 8, 4, 0, 58, 59, 5,
    17, 0, 0, 59, 60, 3, 8, 4, 0, 60, 70, 1, 0, 0, 0, 61, 62, 3, 8, 4, 0, 62, 63, 5, 6, 0, 0, 63, 64, 3,
    8, 4, 0, 64, 70, 1, 0, 0, 0, 65, 66, 5, 1, 0, 0, 66, 70, 3, 20, 10, 0, 67, 68, 5, 2, 0, 0, 68, 70, 3,
    20, 10, 0, 69, 53, 1, 0, 0, 0, 69, 57, 1, 0, 0, 0, 69, 61, 1, 0, 0, 0, 69, 65, 1, 0, 0, 0, 69, 67, 1,
    0, 0, 0, 70, 7, 1, 0, 0, 0, 71, 74, 3, 20, 10, 0, 72, 73, 5, 8, 0, 0, 73, 75, 3, 10, 5, 0, 74, 72, 1,
    0, 0, 0, 74, 75, 1, 0, 0, 0, 75, 9, 1, 0, 0, 0, 76, 89, 3, 12, 6, 0, 77, 78, 5, 14, 0, 0, 78, 83, 3,
    12, 6, 0, 79, 80, 5, 11, 0, 0, 80, 82, 3, 12, 6, 0, 81, 79, 1, 0, 0, 0, 82, 85, 1, 0, 0, 0, 83, 81,
    1, 0, 0, 0, 83, 84, 1, 0, 0, 0, 84, 86, 1, 0, 0, 0, 85, 83, 1, 0, 0, 0, 86, 87, 5, 15, 0, 0, 87, 89,
    1, 0, 0, 0, 88, 76, 1, 0, 0, 0, 88, 77, 1, 0, 0, 0, 89, 11, 1, 0, 0, 0, 90, 95, 3, 14, 7, 0, 91, 92,
    5, 8, 0, 0, 92, 94, 3, 14, 7, 0, 93, 91, 1, 0, 0, 0, 94, 97, 1, 0, 0, 0, 95, 93, 1, 0, 0, 0, 95, 96,
    1, 0, 0, 0, 96, 13, 1, 0, 0, 0, 97, 95, 1, 0, 0, 0, 98, 100, 5, 21, 0, 0, 99, 101, 3, 16, 8, 0, 100,
    99, 1, 0, 0, 0, 100, 101, 1, 0, 0, 0, 101, 107, 1, 0, 0, 0, 102, 104, 5, 24, 0, 0, 103, 105, 3, 16,
    8, 0, 104, 103, 1, 0, 0, 0, 104, 105, 1, 0, 0, 0, 105, 107, 1, 0, 0, 0, 106, 98, 1, 0, 0, 0, 106,
    102, 1, 0, 0, 0, 107, 15, 1, 0, 0, 0, 108, 109, 5, 12, 0, 0, 109, 114, 3, 18, 9, 0, 110, 111, 5,
    11, 0, 0, 111, 113, 3, 18, 9, 0, 112, 110, 1, 0, 0, 0, 113, 116, 1, 0, 0, 0, 114, 112, 1, 0, 0, 0,
    114, 115, 1, 0, 0, 0, 115, 117, 1, 0, 0, 0, 116, 114, 1, 0, 0, 0, 117, 118, 5, 13, 0, 0, 118, 17,
    1, 0, 0, 0, 119, 122, 5, 24, 0, 0, 120, 123, 5, 6, 0, 0, 121, 123, 5, 7, 0, 0, 122, 120, 1, 0, 0,
    0, 122, 121, 1, 0, 0, 0, 123, 124, 1, 0, 0, 0, 124, 125, 7, 0, 0, 0, 125, 19, 1, 0, 0, 0, 126, 138,
    5, 24, 0, 0, 127, 128, 5, 14, 0, 0, 128, 133, 5, 24, 0, 0, 129, 130, 5, 11, 0, 0, 130, 132, 5, 24,
    0, 0, 131, 129, 1, 0, 0, 0, 132, 135, 1, 0, 0, 0, 133, 131, 1, 0, 0, 0, 133, 134, 1, 0, 0, 0, 134,
    136, 1, 0, 0, 0, 135, 133, 1, 0, 0, 0, 136, 138, 5, 15, 0, 0, 137, 126, 1, 0, 0, 0, 137, 127, 1,
    0, 0, 0, 138, 21, 1, 0, 0, 0, 15, 25, 36, 51, 69, 74, 83, 88, 95, 100, 104, 106, 114, 122, 133,
    137];
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
    searchStat() {
        return this.getTypedRuleContext(SearchStatContext, 0);
    }
    NEWLINE() {
        return this.getToken(LKDLParser.NEWLINE, 0);
    }
    cudStat() {
        return this.getTypedRuleContext(CudStatContext, 0);
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
class SearchStatContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    searchExpr() {
        return this.getTypedRuleContext(SearchExprContext, 0);
    }
    ATTR() {
        return this.getToken(LKDLParser.ATTR, 0);
    }
    ALL() {
        return this.getToken(LKDLParser.ALL, 0);
    }
    HAS() {
        return this.getToken(LKDLParser.HAS, 0);
    }
    ISA() {
        return this.getToken(LKDLParser.ISA, 0);
    }
    get ruleIndex() {
        return LKDLParser.RULE_searchStat;
    }
    enterRule(listener) {
        if (listener.enterSearchStat) {
            listener.enterSearchStat(this);
        }
    }
    exitRule(listener) {
        if (listener.exitSearchStat) {
            listener.exitSearchStat(this);
        }
    }
}
exports.SearchStatContext = SearchStatContext;
class CudStatContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    get ruleIndex() {
        return LKDLParser.RULE_cudStat;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.CudStatContext = CudStatContext;
class DelYuanContext extends CudStatContext {
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
class AddYuanContext extends CudStatContext {
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
class AddYuanRelContext extends CudStatContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    ADDEQ() {
        return this.getToken(LKDLParser.ADDEQ, 0);
    }
    searchExpr_list() {
        return this.getTypedRuleContexts(SearchExprContext);
    }
    searchExpr(i) {
        return this.getTypedRuleContext(SearchExprContext, i);
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
class DelYuanRelContext extends CudStatContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    DELEQ() {
        return this.getToken(LKDLParser.DELEQ, 0);
    }
    searchExpr_list() {
        return this.getTypedRuleContexts(SearchExprContext);
    }
    searchExpr(i) {
        return this.getTypedRuleContext(SearchExprContext, i);
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
class UpdateYuanRelContext extends CudStatContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    ASSIGN() {
        return this.getToken(LKDLParser.ASSIGN, 0);
    }
    searchExpr_list() {
        return this.getTypedRuleContexts(SearchExprContext);
    }
    searchExpr(i) {
        return this.getTypedRuleContext(SearchExprContext, i);
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
class SearchExprContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    yuanList() {
        return this.getTypedRuleContext(YuanListContext, 0);
    }
    ATTR() {
        return this.getToken(LKDLParser.ATTR, 0);
    }
    relExprList() {
        return this.getTypedRuleContext(RelExprListContext, 0);
    }
    get ruleIndex() {
        return LKDLParser.RULE_searchExpr;
    }
    enterRule(listener) {
        if (listener.enterSearchExpr) {
            listener.enterSearchExpr(this);
        }
    }
    exitRule(listener) {
        if (listener.exitSearchExpr) {
            listener.exitSearchExpr(this);
        }
    }
}
exports.SearchExprContext = SearchExprContext;
class RelExprListContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    relExprSequnce_list() {
        return this.getTypedRuleContexts(RelExprSequnceContext);
    }
    relExprSequnce(i) {
        return this.getTypedRuleContext(RelExprSequnceContext, i);
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
        return LKDLParser.RULE_relExprList;
    }
    enterRule(listener) {
        if (listener.enterRelExprList) {
            listener.enterRelExprList(this);
        }
    }
    exitRule(listener) {
        if (listener.exitRelExprList) {
            listener.exitRelExprList(this);
        }
    }
}
exports.RelExprListContext = RelExprListContext;
class RelExprSequnceContext extends antlr4_1.ParserRuleContext {
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
    ATTR_list() {
        return this.getTokens(LKDLParser.ATTR);
    }
    ATTR(i) {
        return this.getToken(LKDLParser.ATTR, i);
    }
    get ruleIndex() {
        return LKDLParser.RULE_relExprSequnce;
    }
    enterRule(listener) {
        if (listener.enterRelExprSequnce) {
            listener.enterRelExprSequnce(this);
        }
    }
    exitRule(listener) {
        if (listener.exitRelExprSequnce) {
            listener.exitRelExprSequnce(this);
        }
    }
}
exports.RelExprSequnceContext = RelExprSequnceContext;
class RelExprContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    ALL() {
        return this.getToken(LKDLParser.ALL, 0);
    }
    relAttrList() {
        return this.getTypedRuleContext(RelAttrListContext, 0);
    }
    ID() {
        return this.getToken(LKDLParser.ID, 0);
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
    ASSIGN() {
        return this.getToken(LKDLParser.ASSIGN, 0);
    }
    EQ() {
        return this.getToken(LKDLParser.EQ, 0);
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
