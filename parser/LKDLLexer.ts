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

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
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
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"ADDYUAN", "DELYUAN", "NEWLINE", "LINECOMMENT", "BLOCKCOMMENT", "ASSIGN", 
		"EQ", "ATTR", "ADD", "SUB", "COMMA", "OPEN_BRACKET", "CLOSE_BRACKET", 
		"OPEN_PAREN", "CLOSE_PAREN", "ADDEQ", "DELEQ", "RULEDEF", "ISA", "HAS", 
		"ALL", "INT", "FLOAT", "ENTITY", "BACKTICK", "ID", "WS",
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

	public static readonly _serializedATN: number[] = [4,0,25,186,6,-1,2,0,
	7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,
	7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,
	16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,
	2,24,7,24,2,25,7,25,2,26,7,26,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,2,1,2,1,
	3,1,3,1,3,1,3,5,3,70,8,3,10,3,12,3,73,9,3,1,3,1,3,1,4,1,4,1,4,1,4,5,4,81,
	8,4,10,4,12,4,84,9,4,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,6,1,6,1,6,1,7,1,7,1,
	8,1,8,1,9,1,9,1,10,1,10,1,11,1,11,1,12,1,12,1,13,1,13,1,14,1,14,1,15,1,
	15,1,15,1,16,1,16,1,16,1,17,1,17,1,17,1,18,1,18,1,18,1,18,1,19,1,19,1,19,
	1,19,1,20,1,20,1,20,1,20,1,21,1,21,1,21,5,21,136,8,21,10,21,12,21,139,9,
	21,3,21,141,8,21,1,22,4,22,144,8,22,11,22,12,22,145,1,22,1,22,4,22,150,
	8,22,11,22,12,22,151,1,23,1,23,5,23,156,8,23,10,23,12,23,159,9,23,1,23,
	1,23,1,23,5,23,164,8,23,10,23,12,23,167,9,23,1,23,1,23,3,23,171,8,23,1,
	24,1,24,1,25,4,25,176,8,25,11,25,12,25,177,1,26,4,26,181,8,26,11,26,12,
	26,182,1,26,1,26,1,82,0,27,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,
	21,11,23,12,25,13,27,14,29,15,31,16,33,17,35,18,37,19,39,20,41,21,43,22,
	45,23,47,0,49,0,51,24,53,25,1,0,18,2,0,59,59,65307,65307,2,0,10,10,13,13,
	2,0,44,44,65292,65292,2,0,91,91,12304,12304,2,0,93,93,12305,12305,2,0,40,
	40,65288,65288,2,0,41,41,65289,65289,2,0,73,73,105,105,2,0,83,83,115,115,
	2,0,65,65,97,97,2,0,72,72,104,104,2,0,76,76,108,108,1,0,49,57,1,0,48,57,
	1,0,96,96,4,0,9,10,13,13,32,32,34,34,12,0,9,10,13,13,32,32,40,47,59,59,
	61,61,91,91,93,93,12304,12305,65288,65289,65292,65292,65307,65307,3,0,9,
	10,13,13,32,32,195,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,
	1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,
	0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,
	1,0,0,0,0,33,1,0,0,0,0,35,1,0,0,0,0,37,1,0,0,0,0,39,1,0,0,0,0,41,1,0,0,
	0,0,43,1,0,0,0,0,45,1,0,0,0,0,51,1,0,0,0,0,53,1,0,0,0,1,55,1,0,0,0,3,59,
	1,0,0,0,5,63,1,0,0,0,7,65,1,0,0,0,9,76,1,0,0,0,11,90,1,0,0,0,13,92,1,0,
	0,0,15,95,1,0,0,0,17,97,1,0,0,0,19,99,1,0,0,0,21,101,1,0,0,0,23,103,1,0,
	0,0,25,105,1,0,0,0,27,107,1,0,0,0,29,109,1,0,0,0,31,111,1,0,0,0,33,114,
	1,0,0,0,35,117,1,0,0,0,37,120,1,0,0,0,39,124,1,0,0,0,41,128,1,0,0,0,43,
	140,1,0,0,0,45,143,1,0,0,0,47,170,1,0,0,0,49,172,1,0,0,0,51,175,1,0,0,0,
	53,180,1,0,0,0,55,56,5,20803,0,0,56,57,5,43,0,0,57,58,5,61,0,0,58,2,1,0,
	0,0,59,60,5,20803,0,0,60,61,5,45,0,0,61,62,5,61,0,0,62,4,1,0,0,0,63,64,
	7,0,0,0,64,6,1,0,0,0,65,66,5,47,0,0,66,67,5,47,0,0,67,71,1,0,0,0,68,70,
	8,1,0,0,69,68,1,0,0,0,70,73,1,0,0,0,71,69,1,0,0,0,71,72,1,0,0,0,72,74,1,
	0,0,0,73,71,1,0,0,0,74,75,6,3,0,0,75,8,1,0,0,0,76,77,5,47,0,0,77,78,5,42,
	0,0,78,82,1,0,0,0,79,81,9,0,0,0,80,79,1,0,0,0,81,84,1,0,0,0,82,83,1,0,0,
	0,82,80,1,0,0,0,83,85,1,0,0,0,84,82,1,0,0,0,85,86,5,42,0,0,86,87,5,47,0,
	0,87,88,1,0,0,0,88,89,6,4,0,0,89,10,1,0,0,0,90,91,5,61,0,0,91,12,1,0,0,
	0,92,93,5,61,0,0,93,94,5,61,0,0,94,14,1,0,0,0,95,96,5,46,0,0,96,16,1,0,
	0,0,97,98,5,43,0,0,98,18,1,0,0,0,99,100,5,45,0,0,100,20,1,0,0,0,101,102,
	7,2,0,0,102,22,1,0,0,0,103,104,7,3,0,0,104,24,1,0,0,0,105,106,7,4,0,0,106,
	26,1,0,0,0,107,108,7,5,0,0,108,28,1,0,0,0,109,110,7,6,0,0,110,30,1,0,0,
	0,111,112,5,43,0,0,112,113,5,61,0,0,113,32,1,0,0,0,114,115,5,45,0,0,115,
	116,5,61,0,0,116,34,1,0,0,0,117,118,5,58,0,0,118,119,5,61,0,0,119,36,1,
	0,0,0,120,121,7,7,0,0,121,122,7,8,0,0,122,123,7,9,0,0,123,38,1,0,0,0,124,
	125,7,10,0,0,125,126,7,9,0,0,126,127,7,8,0,0,127,40,1,0,0,0,128,129,7,9,
	0,0,129,130,7,11,0,0,130,131,7,11,0,0,131,42,1,0,0,0,132,141,5,48,0,0,133,
	137,7,12,0,0,134,136,7,13,0,0,135,134,1,0,0,0,136,139,1,0,0,0,137,135,1,
	0,0,0,137,138,1,0,0,0,138,141,1,0,0,0,139,137,1,0,0,0,140,132,1,0,0,0,140,
	133,1,0,0,0,141,44,1,0,0,0,142,144,7,13,0,0,143,142,1,0,0,0,144,145,1,0,
	0,0,145,143,1,0,0,0,145,146,1,0,0,0,146,147,1,0,0,0,147,149,5,46,0,0,148,
	150,7,13,0,0,149,148,1,0,0,0,150,151,1,0,0,0,151,149,1,0,0,0,151,152,1,
	0,0,0,152,46,1,0,0,0,153,157,5,96,0,0,154,156,8,14,0,0,155,154,1,0,0,0,
	156,159,1,0,0,0,157,155,1,0,0,0,157,158,1,0,0,0,158,160,1,0,0,0,159,157,
	1,0,0,0,160,171,5,96,0,0,161,165,5,34,0,0,162,164,8,15,0,0,163,162,1,0,
	0,0,164,167,1,0,0,0,165,163,1,0,0,0,165,166,1,0,0,0,166,168,1,0,0,0,167,
	165,1,0,0,0,168,171,5,34,0,0,169,171,8,16,0,0,170,153,1,0,0,0,170,161,1,
	0,0,0,170,169,1,0,0,0,171,48,1,0,0,0,172,173,5,96,0,0,173,50,1,0,0,0,174,
	176,3,47,23,0,175,174,1,0,0,0,176,177,1,0,0,0,177,175,1,0,0,0,177,178,1,
	0,0,0,178,52,1,0,0,0,179,181,7,17,0,0,180,179,1,0,0,0,181,182,1,0,0,0,182,
	180,1,0,0,0,182,183,1,0,0,0,183,184,1,0,0,0,184,185,6,26,0,0,185,54,1,0,
	0,0,12,0,71,82,137,140,145,151,157,165,170,177,182,1,6,0,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!LKDLLexer.__ATN) {
			LKDLLexer.__ATN = new ATNDeserializer().deserialize(LKDLLexer._serializedATN);
		}

		return LKDLLexer.__ATN;
	}


	static DecisionsToDFA = LKDLLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}