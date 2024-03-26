// Generated from LKDL.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
import {
	ATN,
	ATNDeserializer,
	CharStream,
	DecisionState, DFA,
	Lexer,
	LexerATNSimulator,
	RuleContext,
	PredictionContextCache,
	Token
} from "antlr4";
export default class LKDLLexer extends Lexer {
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

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
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
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "YUAN", "RULE", "INFER", "NEWLINE", "LINECOMMENT", "BLOCKCOMMENT", 
		"ASSIGN", "EQ", "AND", "ATTR", "ADD", "SUB", "COMMA", "OPEN_BRACKET", 
		"CLOSE_BRACKET", "OPEN_PAREN", "CLOSE_PAREN", "OPEN_BRACE", "CLOSE_BRACE", 
		"ADDEQ", "DELEQ", "RULEDEF", "ISA", "HAS", "ALL", "ENTITY", "BACKTICK", 
		"ID", "WS",
	];


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(this, LKDLLexer._ATN, LKDLLexer.DecisionsToDFA, new PredictionContextCache());
	}

	public get grammarFileName(): string { return "LKDL.g4"; }

	public get literalNames(): (string | null)[] { return LKDLLexer.literalNames; }
	public get symbolicNames(): (string | null)[] { return LKDLLexer.symbolicNames; }
	public get ruleNames(): string[] { return LKDLLexer.ruleNames; }

	public get serializedATN(): number[] { return LKDLLexer._serializedATN; }

	public get channelNames(): string[] { return LKDLLexer.channelNames; }

	public get modeNames(): string[] { return LKDLLexer.modeNames; }

	public static readonly _serializedATN: number[] = [4,0,29,203,6,-1,2,0,
	7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,
	7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,
	16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,
	2,24,7,24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,1,
	0,1,0,1,1,1,1,1,1,1,1,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,79,8,3,1,
	4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,89,8,4,1,5,1,5,1,6,1,6,1,6,1,6,5,6,97,
	8,6,10,6,12,6,100,9,6,1,6,1,6,1,7,1,7,1,7,1,7,5,7,108,8,7,10,7,12,7,111,
	9,7,1,7,1,7,1,7,1,7,1,7,1,8,1,8,1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,10,3,
	10,128,8,10,1,11,1,11,1,12,1,12,1,13,1,13,1,14,1,14,1,15,1,15,1,16,1,16,
	1,17,1,17,1,18,1,18,1,19,1,19,1,20,1,20,1,21,1,21,1,21,1,22,1,22,1,22,1,
	23,1,23,1,23,1,24,1,24,1,24,1,24,1,25,1,25,1,25,1,25,1,26,1,26,1,26,1,26,
	1,27,1,27,5,27,173,8,27,10,27,12,27,176,9,27,1,27,1,27,1,27,5,27,181,8,
	27,10,27,12,27,184,9,27,1,27,1,27,3,27,188,8,27,1,28,1,28,1,29,4,29,193,
	8,29,11,29,12,29,194,1,30,4,30,198,8,30,11,30,12,30,199,1,30,1,30,1,109,
	0,31,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,25,13,27,
	14,29,15,31,16,33,17,35,18,37,19,39,20,41,21,43,22,45,23,47,24,49,25,51,
	26,53,27,55,0,57,0,59,28,61,29,1,0,17,2,0,121,121,20803,20803,2,0,59,59,
	65307,65307,2,0,10,10,13,13,2,0,44,44,65292,65292,2,0,91,91,12304,12304,
	2,0,93,93,12305,12305,2,0,40,40,65288,65288,2,0,41,41,65289,65289,2,0,73,
	73,105,105,2,0,83,83,115,115,2,0,65,65,97,97,2,0,72,72,104,104,2,0,76,76,
	108,108,2,0,96,96,124,124,4,0,9,10,13,13,32,32,34,34,14,0,9,10,13,13,32,
	32,38,38,40,47,58,59,61,61,91,91,93,93,124,124,12304,12305,65288,65289,
	65292,65292,65307,65307,3,0,9,10,13,13,32,32,213,0,1,1,0,0,0,0,3,1,0,0,
	0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,
	0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,
	0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,0,33,1,0,0,0,0,35,1,0,0,0,0,37,1,
	0,0,0,0,39,1,0,0,0,0,41,1,0,0,0,0,43,1,0,0,0,0,45,1,0,0,0,0,47,1,0,0,0,
	0,49,1,0,0,0,0,51,1,0,0,0,0,53,1,0,0,0,0,59,1,0,0,0,0,61,1,0,0,0,1,63,1,
	0,0,0,3,65,1,0,0,0,5,69,1,0,0,0,7,78,1,0,0,0,9,88,1,0,0,0,11,90,1,0,0,0,
	13,92,1,0,0,0,15,103,1,0,0,0,17,117,1,0,0,0,19,119,1,0,0,0,21,127,1,0,0,
	0,23,129,1,0,0,0,25,131,1,0,0,0,27,133,1,0,0,0,29,135,1,0,0,0,31,137,1,
	0,0,0,33,139,1,0,0,0,35,141,1,0,0,0,37,143,1,0,0,0,39,145,1,0,0,0,41,147,
	1,0,0,0,43,149,1,0,0,0,45,152,1,0,0,0,47,155,1,0,0,0,49,158,1,0,0,0,51,
	162,1,0,0,0,53,166,1,0,0,0,55,187,1,0,0,0,57,189,1,0,0,0,59,192,1,0,0,0,
	61,197,1,0,0,0,63,64,5,124,0,0,64,2,1,0,0,0,65,66,5,45,0,0,66,67,5,45,0,
	0,67,68,5,45,0,0,68,4,1,0,0,0,69,70,7,0,0,0,70,6,1,0,0,0,71,72,5,35268,
	0,0,72,79,5,21017,0,0,73,74,5,114,0,0,74,75,5,117,0,0,75,76,5,108,0,0,76,
	79,5,101,0,0,77,79,5,114,0,0,78,71,1,0,0,0,78,73,1,0,0,0,78,77,1,0,0,0,
	79,8,1,0,0,0,80,81,5,25512,0,0,81,89,5,29702,0,0,82,83,5,105,0,0,83,84,
	5,110,0,0,84,85,5,102,0,0,85,86,5,101,0,0,86,89,5,114,0,0,87,89,5,105,0,
	0,88,80,1,0,0,0,88,82,1,0,0,0,88,87,1,0,0,0,89,10,1,0,0,0,90,91,7,1,0,0,
	91,12,1,0,0,0,92,93,5,47,0,0,93,94,5,47,0,0,94,98,1,0,0,0,95,97,8,2,0,0,
	96,95,1,0,0,0,97,100,1,0,0,0,98,96,1,0,0,0,98,99,1,0,0,0,99,101,1,0,0,0,
	100,98,1,0,0,0,101,102,6,6,0,0,102,14,1,0,0,0,103,104,5,47,0,0,104,105,
	5,42,0,0,105,109,1,0,0,0,106,108,9,0,0,0,107,106,1,0,0,0,108,111,1,0,0,
	0,109,110,1,0,0,0,109,107,1,0,0,0,110,112,1,0,0,0,111,109,1,0,0,0,112,113,
	5,42,0,0,113,114,5,47,0,0,114,115,1,0,0,0,115,116,6,7,0,0,116,16,1,0,0,
	0,117,118,5,61,0,0,118,18,1,0,0,0,119,120,5,61,0,0,120,121,5,61,0,0,121,
	20,1,0,0,0,122,123,5,38,0,0,123,128,5,38,0,0,124,125,5,97,0,0,125,126,5,
	110,0,0,126,128,5,100,0,0,127,122,1,0,0,0,127,124,1,0,0,0,128,22,1,0,0,
	0,129,130,5,46,0,0,130,24,1,0,0,0,131,132,5,43,0,0,132,26,1,0,0,0,133,134,
	5,45,0,0,134,28,1,0,0,0,135,136,7,3,0,0,136,30,1,0,0,0,137,138,7,4,0,0,
	138,32,1,0,0,0,139,140,7,5,0,0,140,34,1,0,0,0,141,142,7,6,0,0,142,36,1,
	0,0,0,143,144,7,7,0,0,144,38,1,0,0,0,145,146,5,123,0,0,146,40,1,0,0,0,147,
	148,5,125,0,0,148,42,1,0,0,0,149,150,5,43,0,0,150,151,5,61,0,0,151,44,1,
	0,0,0,152,153,5,45,0,0,153,154,5,61,0,0,154,46,1,0,0,0,155,156,5,58,0,0,
	156,157,5,61,0,0,157,48,1,0,0,0,158,159,7,8,0,0,159,160,7,9,0,0,160,161,
	7,10,0,0,161,50,1,0,0,0,162,163,7,11,0,0,163,164,7,10,0,0,164,165,7,9,0,
	0,165,52,1,0,0,0,166,167,7,10,0,0,167,168,7,12,0,0,168,169,7,12,0,0,169,
	54,1,0,0,0,170,174,5,96,0,0,171,173,8,13,0,0,172,171,1,0,0,0,173,176,1,
	0,0,0,174,172,1,0,0,0,174,175,1,0,0,0,175,177,1,0,0,0,176,174,1,0,0,0,177,
	188,5,96,0,0,178,182,5,34,0,0,179,181,8,14,0,0,180,179,1,0,0,0,181,184,
	1,0,0,0,182,180,1,0,0,0,182,183,1,0,0,0,183,185,1,0,0,0,184,182,1,0,0,0,
	185,188,5,34,0,0,186,188,8,15,0,0,187,170,1,0,0,0,187,178,1,0,0,0,187,186,
	1,0,0,0,188,56,1,0,0,0,189,190,5,96,0,0,190,58,1,0,0,0,191,193,3,55,27,
	0,192,191,1,0,0,0,193,194,1,0,0,0,194,192,1,0,0,0,194,195,1,0,0,0,195,60,
	1,0,0,0,196,198,7,16,0,0,197,196,1,0,0,0,198,199,1,0,0,0,199,197,1,0,0,
	0,199,200,1,0,0,0,200,201,1,0,0,0,201,202,6,30,0,0,202,62,1,0,0,0,11,0,
	78,88,98,109,127,174,182,187,194,199,1,6,0,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!LKDLLexer.__ATN) {
			LKDLLexer.__ATN = new ATNDeserializer().deserialize(LKDLLexer._serializedATN);
		}

		return LKDLLexer.__ATN;
	}


	static DecisionsToDFA = LKDLLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}