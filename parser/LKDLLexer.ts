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

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
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
                                                            "'-='", "':='", 
                                                            "'qa'" ];
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
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "YUAN", "RULE", "INFER", "NEWLINE", "LINECOMMENT", 
		"BLOCKCOMMENT", "ASSIGN", "EQ", "AND", "ATTR", "ADD", "SUB", "COMMA", 
		"OPEN_BRACKET", "CLOSE_BRACKET", "OPEN_PAREN", "CLOSE_PAREN", "OPEN_BRACE", 
		"CLOSE_BRACE", "ADDEQ", "DELEQ", "RULEDEF", "QUESTION_MARK", "ISA", "HAS", 
		"ALL", "ENTITY", "BACKTICK", "ID", "WS",
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

	public static readonly _serializedATN: number[] = [4,0,31,211,6,-1,2,0,
	7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,
	7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,
	16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,
	2,24,7,24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,
	31,7,31,2,32,7,32,1,0,1,0,1,1,1,1,1,1,1,1,1,2,1,2,1,2,1,3,1,3,1,4,1,4,1,
	4,1,4,1,4,1,4,3,4,85,8,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,94,8,5,1,6,1,6,
	1,7,1,7,1,7,1,7,5,7,102,8,7,10,7,12,7,105,9,7,1,7,1,7,1,8,1,8,1,8,1,8,5,
	8,113,8,8,10,8,12,8,116,9,8,1,8,1,8,1,8,1,8,1,8,1,9,1,9,1,10,1,10,1,10,
	1,11,1,11,1,11,1,11,1,11,3,11,133,8,11,1,12,1,12,1,13,1,13,1,14,1,14,1,
	15,1,15,1,16,1,16,1,17,1,17,1,18,1,18,1,19,1,19,1,20,1,20,1,21,1,21,1,22,
	1,22,1,22,1,23,1,23,1,23,1,24,1,24,1,24,1,25,1,25,1,25,1,26,1,26,1,26,1,
	26,1,27,1,27,1,27,1,27,1,28,1,28,1,28,1,28,1,29,1,29,5,29,181,8,29,10,29,
	12,29,184,9,29,1,29,1,29,1,29,5,29,189,8,29,10,29,12,29,192,9,29,1,29,1,
	29,3,29,196,8,29,1,30,1,30,1,31,4,31,201,8,31,11,31,12,31,202,1,32,4,32,
	206,8,32,11,32,12,32,207,1,32,1,32,1,114,0,33,1,1,3,2,5,3,7,4,9,5,11,6,
	13,7,15,8,17,9,19,10,21,11,23,12,25,13,27,14,29,15,31,16,33,17,35,18,37,
	19,39,20,41,21,43,22,45,23,47,24,49,25,51,26,53,27,55,28,57,29,59,0,61,
	0,63,30,65,31,1,0,17,2,0,121,121,20803,20803,2,0,59,59,65307,65307,2,0,
	10,10,13,13,2,0,44,44,65292,65292,2,0,91,91,12304,12304,2,0,93,93,12305,
	12305,2,0,40,40,65288,65288,2,0,41,41,65289,65289,2,0,73,73,105,105,2,0,
	83,83,115,115,2,0,65,65,97,97,2,0,72,72,104,104,2,0,76,76,108,108,3,0,47,
	47,96,96,124,124,4,0,9,10,13,13,32,32,34,34,14,0,9,10,13,13,32,32,38,38,
	40,47,58,59,61,61,91,91,93,93,124,124,12304,12305,65288,65289,65292,65292,
	65307,65307,3,0,9,10,13,13,32,32,219,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,
	0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,
	0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,
	0,29,1,0,0,0,0,31,1,0,0,0,0,33,1,0,0,0,0,35,1,0,0,0,0,37,1,0,0,0,0,39,1,
	0,0,0,0,41,1,0,0,0,0,43,1,0,0,0,0,45,1,0,0,0,0,47,1,0,0,0,0,49,1,0,0,0,
	0,51,1,0,0,0,0,53,1,0,0,0,0,55,1,0,0,0,0,57,1,0,0,0,0,63,1,0,0,0,0,65,1,
	0,0,0,1,67,1,0,0,0,3,69,1,0,0,0,5,73,1,0,0,0,7,76,1,0,0,0,9,84,1,0,0,0,
	11,93,1,0,0,0,13,95,1,0,0,0,15,97,1,0,0,0,17,108,1,0,0,0,19,122,1,0,0,0,
	21,124,1,0,0,0,23,132,1,0,0,0,25,134,1,0,0,0,27,136,1,0,0,0,29,138,1,0,
	0,0,31,140,1,0,0,0,33,142,1,0,0,0,35,144,1,0,0,0,37,146,1,0,0,0,39,148,
	1,0,0,0,41,150,1,0,0,0,43,152,1,0,0,0,45,154,1,0,0,0,47,157,1,0,0,0,49,
	160,1,0,0,0,51,163,1,0,0,0,53,166,1,0,0,0,55,170,1,0,0,0,57,174,1,0,0,0,
	59,195,1,0,0,0,61,197,1,0,0,0,63,200,1,0,0,0,65,205,1,0,0,0,67,68,5,124,
	0,0,68,2,1,0,0,0,69,70,5,45,0,0,70,71,5,45,0,0,71,72,5,45,0,0,72,4,1,0,
	0,0,73,74,5,45,0,0,74,75,5,62,0,0,75,6,1,0,0,0,76,77,7,0,0,0,77,8,1,0,0,
	0,78,79,5,35268,0,0,79,85,5,21017,0,0,80,81,5,114,0,0,81,82,5,117,0,0,82,
	83,5,108,0,0,83,85,5,101,0,0,84,78,1,0,0,0,84,80,1,0,0,0,85,10,1,0,0,0,
	86,87,5,25512,0,0,87,94,5,29702,0,0,88,89,5,105,0,0,89,90,5,110,0,0,90,
	91,5,102,0,0,91,92,5,101,0,0,92,94,5,114,0,0,93,86,1,0,0,0,93,88,1,0,0,
	0,94,12,1,0,0,0,95,96,7,1,0,0,96,14,1,0,0,0,97,98,5,47,0,0,98,99,5,47,0,
	0,99,103,1,0,0,0,100,102,8,2,0,0,101,100,1,0,0,0,102,105,1,0,0,0,103,101,
	1,0,0,0,103,104,1,0,0,0,104,106,1,0,0,0,105,103,1,0,0,0,106,107,6,7,0,0,
	107,16,1,0,0,0,108,109,5,47,0,0,109,110,5,42,0,0,110,114,1,0,0,0,111,113,
	9,0,0,0,112,111,1,0,0,0,113,116,1,0,0,0,114,115,1,0,0,0,114,112,1,0,0,0,
	115,117,1,0,0,0,116,114,1,0,0,0,117,118,5,42,0,0,118,119,5,47,0,0,119,120,
	1,0,0,0,120,121,6,8,0,0,121,18,1,0,0,0,122,123,5,61,0,0,123,20,1,0,0,0,
	124,125,5,61,0,0,125,126,5,61,0,0,126,22,1,0,0,0,127,128,5,38,0,0,128,133,
	5,38,0,0,129,130,5,97,0,0,130,131,5,110,0,0,131,133,5,100,0,0,132,127,1,
	0,0,0,132,129,1,0,0,0,133,24,1,0,0,0,134,135,5,46,0,0,135,26,1,0,0,0,136,
	137,5,43,0,0,137,28,1,0,0,0,138,139,5,45,0,0,139,30,1,0,0,0,140,141,7,3,
	0,0,141,32,1,0,0,0,142,143,7,4,0,0,143,34,1,0,0,0,144,145,7,5,0,0,145,36,
	1,0,0,0,146,147,7,6,0,0,147,38,1,0,0,0,148,149,7,7,0,0,149,40,1,0,0,0,150,
	151,5,123,0,0,151,42,1,0,0,0,152,153,5,125,0,0,153,44,1,0,0,0,154,155,5,
	43,0,0,155,156,5,61,0,0,156,46,1,0,0,0,157,158,5,45,0,0,158,159,5,61,0,
	0,159,48,1,0,0,0,160,161,5,58,0,0,161,162,5,61,0,0,162,50,1,0,0,0,163,164,
	5,113,0,0,164,165,5,97,0,0,165,52,1,0,0,0,166,167,7,8,0,0,167,168,7,9,0,
	0,168,169,7,10,0,0,169,54,1,0,0,0,170,171,7,11,0,0,171,172,7,10,0,0,172,
	173,7,9,0,0,173,56,1,0,0,0,174,175,7,10,0,0,175,176,7,12,0,0,176,177,7,
	12,0,0,177,58,1,0,0,0,178,182,5,96,0,0,179,181,8,13,0,0,180,179,1,0,0,0,
	181,184,1,0,0,0,182,180,1,0,0,0,182,183,1,0,0,0,183,185,1,0,0,0,184,182,
	1,0,0,0,185,196,5,96,0,0,186,190,5,34,0,0,187,189,8,14,0,0,188,187,1,0,
	0,0,189,192,1,0,0,0,190,188,1,0,0,0,190,191,1,0,0,0,191,193,1,0,0,0,192,
	190,1,0,0,0,193,196,5,34,0,0,194,196,8,15,0,0,195,178,1,0,0,0,195,186,1,
	0,0,0,195,194,1,0,0,0,196,60,1,0,0,0,197,198,5,96,0,0,198,62,1,0,0,0,199,
	201,3,59,29,0,200,199,1,0,0,0,201,202,1,0,0,0,202,200,1,0,0,0,202,203,1,
	0,0,0,203,64,1,0,0,0,204,206,7,16,0,0,205,204,1,0,0,0,206,207,1,0,0,0,207,
	205,1,0,0,0,207,208,1,0,0,0,208,209,1,0,0,0,209,210,6,32,0,0,210,66,1,0,
	0,0,11,0,84,93,103,114,132,182,190,195,202,207,1,6,0,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!LKDLLexer.__ATN) {
			LKDLLexer.__ATN = new ATNDeserializer().deserialize(LKDLLexer._serializedATN);
		}

		return LKDLLexer.__ATN;
	}


	static DecisionsToDFA = LKDLLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}