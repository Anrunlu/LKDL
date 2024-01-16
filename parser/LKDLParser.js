"use strict";
// Generated from LKDL.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
Object.defineProperty(exports, "__esModule", { value: true });
exports.YuanListContext = exports.RelAttrContext = exports.RelAttrListContext = exports.RelExprContext = exports.RelExprListContext = exports.UpdateYuanRelContext = exports.DelYuanRelContext = exports.AddYuanRelContext = exports.RelYuanCudExprContext = exports.AddYuanContext = exports.DelYuanContext = exports.NoRelYuanCudExprContext = exports.CudYuanStatContext = exports.SearchYuanHasContext = exports.HasSearchExprContext = exports.SearchYuanIsaContext = exports.IsaSearchExprContext = exports.SearchYuanRelContext = exports.RelYuanSearchExprContext = exports.SearchYuanContext = exports.NoRelYuanSearchExprContext = exports.SearchStatContext = exports.StatContext = exports.ProgContext = void 0;
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
            this.state = 44;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 1, this._ctx)) {
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
            this.state = 50;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 2, this._ctx)) {
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
    noRelYuanSearchExpr() {
        let localctx = new NoRelYuanSearchExprContext(this, this._ctx, this.state);
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
    relYuanSearchExpr() {
        let localctx = new RelYuanSearchExprContext(this, this._ctx, this.state);
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
    isaSearchExpr() {
        let localctx = new IsaSearchExprContext(this, this._ctx, this.state);
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
    hasSearchExpr() {
        let localctx = new HasSearchExprContext(this, this._ctx, this.state);
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
        this.enterRule(localctx, 18, LKDLParser.RULE_relYuanCudExpr);
        try {
            this.state = 94;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 5, this._ctx)) {
                case 1:
                    localctx = new AddYuanRelContext(this, localctx);
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 76;
                        localctx._lhs = this.yuanList();
                        this.state = 77;
                        this.match(LKDLParser.ATTR);
                        this.state = 78;
                        this.relExprList();
                        this.state = 79;
                        this.match(LKDLParser.ADDEQ);
                        this.state = 80;
                        localctx._rhs = this.yuanList();
                    }
                    break;
                case 2:
                    localctx = new DelYuanRelContext(this, localctx);
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 82;
                        localctx._lhs = this.yuanList();
                        this.state = 83;
                        this.match(LKDLParser.ATTR);
                        this.state = 84;
                        this.relExprList();
                        this.state = 85;
                        this.match(LKDLParser.DELEQ);
                        this.state = 86;
                        localctx._rhs = this.yuanList();
                    }
                    break;
                case 3:
                    localctx = new UpdateYuanRelContext(this, localctx);
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 88;
                        localctx._lhs = this.yuanList();
                        this.state = 89;
                        this.match(LKDLParser.ATTR);
                        this.state = 90;
                        this.relExprList();
                        this.state = 91;
                        this.match(LKDLParser.ASSIGN);
                        this.state = 92;
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
    relExprList() {
        let localctx = new RelExprListContext(this, this._ctx, this.state);
        this.enterRule(localctx, 20, LKDLParser.RULE_relExprList);
        let _la;
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
                        while (_la === 11) {
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
    relExpr(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let localctx = new RelExprContext(this, this._ctx, _parentState);
        let _prevctx = localctx;
        let _startState = 22;
        this.enterRecursionRule(localctx, 22, LKDLParser.RULE_relExpr, _p);
        try {
            let _alt;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 116;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 8, this._ctx)) {
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
                while (_alt !== 2 && _alt !== antlr4_1.ATN.INVALID_ALT_NUMBER) {
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
            this.unrollRecursionContexts(_parentctx);
        }
        return localctx;
    }
    // @RuleVersion(0)
    relAttrList() {
        let localctx = new RelAttrListContext(this, this._ctx, this.state);
        this.enterRule(localctx, 24, LKDLParser.RULE_relAttrList);
        let _la;
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
                while (_la === 11) {
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
        this.enterRule(localctx, 26, LKDLParser.RULE_relAttr);
        let _la;
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
                        throw new antlr4_1.NoViableAltException(this);
                }
                this.state = 142;
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
        this.enterRule(localctx, 28, LKDLParser.RULE_yuanList);
        let _la;
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
                        while (_la === 11) {
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
    sempred(localctx, ruleIndex, predIndex) {
        switch (ruleIndex) {
            case 11:
                return this.relExpr_sempred(localctx, predIndex);
        }
        return true;
    }
    relExpr_sempred(localctx, predIndex) {
        switch (predIndex) {
            case 0:
                return this.precpred(this._ctx, 4);
        }
        return true;
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
LKDLParser.RULE_noRelYuanSearchExpr = 3;
LKDLParser.RULE_relYuanSearchExpr = 4;
LKDLParser.RULE_isaSearchExpr = 5;
LKDLParser.RULE_hasSearchExpr = 6;
LKDLParser.RULE_cudYuanStat = 7;
LKDLParser.RULE_noRelYuanCudExpr = 8;
LKDLParser.RULE_relYuanCudExpr = 9;
LKDLParser.RULE_relExprList = 10;
LKDLParser.RULE_relExpr = 11;
LKDLParser.RULE_relAttrList = 12;
LKDLParser.RULE_relAttr = 13;
LKDLParser.RULE_yuanList = 14;
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
    "prog", "stat", "searchStat", "noRelYuanSearchExpr", "relYuanSearchExpr",
    "isaSearchExpr", "hasSearchExpr", "cudYuanStat", "noRelYuanCudExpr", "relYuanCudExpr",
    "relExprList", "relExpr", "relAttrList", "relAttr", "yuanList",
];
LKDLParser._serializedATN = [4, 1, 25, 158, 2, 0, 7, 0, 2,
    1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4, 2, 5, 7, 5, 2, 6, 7, 6, 2, 7, 7, 7, 2, 8, 7, 8, 2, 9, 7, 9, 2,
    10, 7, 10, 2, 11, 7, 11, 2, 12, 7, 12, 2, 13, 7, 13, 2, 14, 7, 14, 1, 0, 5, 0, 32, 8, 0, 10, 0, 12,
    0, 35, 9, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 45, 8, 1, 1, 2, 1, 2, 1, 2, 1, 2, 3, 2,
    51, 8, 2, 1, 3, 1, 3, 1, 4, 1, 4, 1, 4, 1, 4, 1, 5, 1, 5, 1, 5, 1, 5, 1, 6, 1, 6, 1, 6, 1, 6, 1, 7, 1, 7,
    3, 7, 69, 8, 7, 1, 8, 1, 8, 1, 8, 1, 8, 3, 8, 75, 8, 8, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1,
    9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 3, 9, 95, 8, 9, 1, 10, 1, 10, 1, 10, 1, 10, 1,
    10, 5, 10, 102, 8, 10, 10, 10, 12, 10, 105, 9, 10, 1, 10, 1, 10, 3, 10, 109, 8, 10, 1, 11, 1, 11,
    1, 11, 1, 11, 1, 11, 1, 11, 3, 11, 117, 8, 11, 1, 11, 1, 11, 1, 11, 5, 11, 122, 8, 11, 10, 11, 12,
    11, 125, 9, 11, 1, 12, 1, 12, 1, 12, 1, 12, 5, 12, 131, 8, 12, 10, 12, 12, 12, 134, 9, 12, 1, 12,
    1, 12, 1, 13, 1, 13, 1, 13, 3, 13, 141, 8, 13, 1, 13, 1, 13, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 5,
    14, 150, 8, 14, 10, 14, 12, 14, 153, 9, 14, 1, 14, 3, 14, 156, 8, 14, 1, 14, 0, 1, 22, 15, 0, 2,
    4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 0, 1, 1, 0, 22, 24, 160, 0, 33, 1, 0, 0, 0, 2, 44,
    1, 0, 0, 0, 4, 50, 1, 0, 0, 0, 6, 52, 1, 0, 0, 0, 8, 54, 1, 0, 0, 0, 10, 58, 1, 0, 0, 0, 12, 62, 1, 0,
    0, 0, 14, 68, 1, 0, 0, 0, 16, 74, 1, 0, 0, 0, 18, 94, 1, 0, 0, 0, 20, 108, 1, 0, 0, 0, 22, 116, 1, 0,
    0, 0, 24, 126, 1, 0, 0, 0, 26, 137, 1, 0, 0, 0, 28, 155, 1, 0, 0, 0, 30, 32, 3, 2, 1, 0, 31, 30, 1,
    0, 0, 0, 32, 35, 1, 0, 0, 0, 33, 31, 1, 0, 0, 0, 33, 34, 1, 0, 0, 0, 34, 36, 1, 0, 0, 0, 35, 33, 1, 0,
    0, 0, 36, 37, 5, 0, 0, 1, 37, 1, 1, 0, 0, 0, 38, 39, 3, 4, 2, 0, 39, 40, 5, 3, 0, 0, 40, 45, 1, 0, 0,
    0, 41, 42, 3, 14, 7, 0, 42, 43, 5, 3, 0, 0, 43, 45, 1, 0, 0, 0, 44, 38, 1, 0, 0, 0, 44, 41, 1, 0, 0,
    0, 45, 3, 1, 0, 0, 0, 46, 51, 3, 6, 3, 0, 47, 51, 3, 8, 4, 0, 48, 51, 3, 10, 5, 0, 49, 51, 3, 12, 6,
    0, 50, 46, 1, 0, 0, 0, 50, 47, 1, 0, 0, 0, 50, 48, 1, 0, 0, 0, 50, 49, 1, 0, 0, 0, 51, 5, 1, 0, 0, 0,
    52, 53, 3, 28, 14, 0, 53, 7, 1, 0, 0, 0, 54, 55, 3, 28, 14, 0, 55, 56, 5, 8, 0, 0, 56, 57, 3, 20, 10,
    0, 57, 9, 1, 0, 0, 0, 58, 59, 3, 28, 14, 0, 59, 60, 5, 8, 0, 0, 60, 61, 5, 19, 0, 0, 61, 11, 1, 0, 0,
    0, 62, 63, 3, 28, 14, 0, 63, 64, 5, 8, 0, 0, 64, 65, 5, 20, 0, 0, 65, 13, 1, 0, 0, 0, 66, 69, 3, 16,
    8, 0, 67, 69, 3, 18, 9, 0, 68, 66, 1, 0, 0, 0, 68, 67, 1, 0, 0, 0, 69, 15, 1, 0, 0, 0, 70, 71, 5, 1,
    0, 0, 71, 75, 3, 28, 14, 0, 72, 73, 5, 2, 0, 0, 73, 75, 3, 28, 14, 0, 74, 70, 1, 0, 0, 0, 74, 72, 1,
    0, 0, 0, 75, 17, 1, 0, 0, 0, 76, 77, 3, 28, 14, 0, 77, 78, 5, 8, 0, 0, 78, 79, 3, 20, 10, 0, 79, 80,
    5, 16, 0, 0, 80, 81, 3, 28, 14, 0, 81, 95, 1, 0, 0, 0, 82, 83, 3, 28, 14, 0, 83, 84, 5, 8, 0, 0, 84,
    85, 3, 20, 10, 0, 85, 86, 5, 17, 0, 0, 86, 87, 3, 28, 14, 0, 87, 95, 1, 0, 0, 0, 88, 89, 3, 28, 14,
    0, 89, 90, 5, 8, 0, 0, 90, 91, 3, 20, 10, 0, 91, 92, 5, 6, 0, 0, 92, 93, 3, 28, 14, 0, 93, 95, 1, 0,
    0, 0, 94, 76, 1, 0, 0, 0, 94, 82, 1, 0, 0, 0, 94, 88, 1, 0, 0, 0, 95, 19, 1, 0, 0, 0, 96, 109, 3, 22,
    11, 0, 97, 98, 5, 14, 0, 0, 98, 103, 3, 22, 11, 0, 99, 100, 5, 11, 0, 0, 100, 102, 3, 22, 11, 0,
    101, 99, 1, 0, 0, 0, 102, 105, 1, 0, 0, 0, 103, 101, 1, 0, 0, 0, 103, 104, 1, 0, 0, 0, 104, 106,
    1, 0, 0, 0, 105, 103, 1, 0, 0, 0, 106, 107, 5, 15, 0, 0, 107, 109, 1, 0, 0, 0, 108, 96, 1, 0, 0, 0,
    108, 97, 1, 0, 0, 0, 109, 21, 1, 0, 0, 0, 110, 111, 6, 11, -1, 0, 111, 112, 5, 21, 0, 0, 112, 117,
    3, 24, 12, 0, 113, 114, 5, 24, 0, 0, 114, 117, 3, 24, 12, 0, 115, 117, 5, 24, 0, 0, 116, 110, 1,
    0, 0, 0, 116, 113, 1, 0, 0, 0, 116, 115, 1, 0, 0, 0, 117, 123, 1, 0, 0, 0, 118, 119, 10, 4, 0, 0,
    119, 120, 5, 8, 0, 0, 120, 122, 3, 22, 11, 0, 121, 118, 1, 0, 0, 0, 122, 125, 1, 0, 0, 0, 123, 121,
    1, 0, 0, 0, 123, 124, 1, 0, 0, 0, 124, 23, 1, 0, 0, 0, 125, 123, 1, 0, 0, 0, 126, 127, 5, 12, 0, 0,
    127, 132, 3, 26, 13, 0, 128, 129, 5, 11, 0, 0, 129, 131, 3, 26, 13, 0, 130, 128, 1, 0, 0, 0, 131,
    134, 1, 0, 0, 0, 132, 130, 1, 0, 0, 0, 132, 133, 1, 0, 0, 0, 133, 135, 1, 0, 0, 0, 134, 132, 1, 0,
    0, 0, 135, 136, 5, 13, 0, 0, 136, 25, 1, 0, 0, 0, 137, 140, 5, 24, 0, 0, 138, 141, 5, 6, 0, 0, 139,
    141, 5, 7, 0, 0, 140, 138, 1, 0, 0, 0, 140, 139, 1, 0, 0, 0, 141, 142, 1, 0, 0, 0, 142, 143, 7, 0,
    0, 0, 143, 27, 1, 0, 0, 0, 144, 156, 5, 24, 0, 0, 145, 146, 5, 14, 0, 0, 146, 151, 5, 24, 0, 0, 147,
    148, 5, 11, 0, 0, 148, 150, 5, 24, 0, 0, 149, 147, 1, 0, 0, 0, 150, 153, 1, 0, 0, 0, 151, 149, 1,
    0, 0, 0, 151, 152, 1, 0, 0, 0, 152, 154, 1, 0, 0, 0, 153, 151, 1, 0, 0, 0, 154, 156, 5, 15, 0, 0,
    155, 144, 1, 0, 0, 0, 155, 145, 1, 0, 0, 0, 156, 29, 1, 0, 0, 0, 14, 33, 44, 50, 68, 74, 94, 103,
    108, 116, 123, 132, 140, 151, 155];
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
    cudYuanStat() {
        return this.getTypedRuleContext(CudYuanStatContext, 0);
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
    noRelYuanSearchExpr() {
        return this.getTypedRuleContext(NoRelYuanSearchExprContext, 0);
    }
    relYuanSearchExpr() {
        return this.getTypedRuleContext(RelYuanSearchExprContext, 0);
    }
    isaSearchExpr() {
        return this.getTypedRuleContext(IsaSearchExprContext, 0);
    }
    hasSearchExpr() {
        return this.getTypedRuleContext(HasSearchExprContext, 0);
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
class NoRelYuanSearchExprContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    get ruleIndex() {
        return LKDLParser.RULE_noRelYuanSearchExpr;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.NoRelYuanSearchExprContext = NoRelYuanSearchExprContext;
class SearchYuanContext extends NoRelYuanSearchExprContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    yuanList() {
        return this.getTypedRuleContext(YuanListContext, 0);
    }
    enterRule(listener) {
        if (listener.enterSearchYuan) {
            listener.enterSearchYuan(this);
        }
    }
    exitRule(listener) {
        if (listener.exitSearchYuan) {
            listener.exitSearchYuan(this);
        }
    }
}
exports.SearchYuanContext = SearchYuanContext;
class RelYuanSearchExprContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    get ruleIndex() {
        return LKDLParser.RULE_relYuanSearchExpr;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.RelYuanSearchExprContext = RelYuanSearchExprContext;
class SearchYuanRelContext extends RelYuanSearchExprContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
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
    enterRule(listener) {
        if (listener.enterSearchYuanRel) {
            listener.enterSearchYuanRel(this);
        }
    }
    exitRule(listener) {
        if (listener.exitSearchYuanRel) {
            listener.exitSearchYuanRel(this);
        }
    }
}
exports.SearchYuanRelContext = SearchYuanRelContext;
class IsaSearchExprContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    get ruleIndex() {
        return LKDLParser.RULE_isaSearchExpr;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.IsaSearchExprContext = IsaSearchExprContext;
class SearchYuanIsaContext extends IsaSearchExprContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    yuanList() {
        return this.getTypedRuleContext(YuanListContext, 0);
    }
    ATTR() {
        return this.getToken(LKDLParser.ATTR, 0);
    }
    ISA() {
        return this.getToken(LKDLParser.ISA, 0);
    }
    enterRule(listener) {
        if (listener.enterSearchYuanIsa) {
            listener.enterSearchYuanIsa(this);
        }
    }
    exitRule(listener) {
        if (listener.exitSearchYuanIsa) {
            listener.exitSearchYuanIsa(this);
        }
    }
}
exports.SearchYuanIsaContext = SearchYuanIsaContext;
class HasSearchExprContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    get ruleIndex() {
        return LKDLParser.RULE_hasSearchExpr;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.HasSearchExprContext = HasSearchExprContext;
class SearchYuanHasContext extends HasSearchExprContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    yuanList() {
        return this.getTypedRuleContext(YuanListContext, 0);
    }
    ATTR() {
        return this.getToken(LKDLParser.ATTR, 0);
    }
    HAS() {
        return this.getToken(LKDLParser.HAS, 0);
    }
    enterRule(listener) {
        if (listener.enterSearchYuanHas) {
            listener.enterSearchYuanHas(this);
        }
    }
    exitRule(listener) {
        if (listener.exitSearchYuanHas) {
            listener.exitSearchYuanHas(this);
        }
    }
}
exports.SearchYuanHasContext = SearchYuanHasContext;
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
    relExprList() {
        return this.getTypedRuleContext(RelExprListContext, 0);
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
    relExprList() {
        return this.getTypedRuleContext(RelExprListContext, 0);
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
    relExprList() {
        return this.getTypedRuleContext(RelExprListContext, 0);
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
class RelExprListContext extends antlr4_1.ParserRuleContext {
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
    relExpr_list() {
        return this.getTypedRuleContexts(RelExprContext);
    }
    relExpr(i) {
        return this.getTypedRuleContext(RelExprContext, i);
    }
    ATTR() {
        return this.getToken(LKDLParser.ATTR, 0);
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
