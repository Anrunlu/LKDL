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

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
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
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"ENTITY", "BACKTICK", "ID", "INT", "FLOAT", "NEWLINE", "WS", "ASSIGN", 
		"ATTR", "ADD", "SUB", "COMMA", "OPEN_BRACKET", "CLOSE_BRACKET", "OPEN_PAREN", 
		"CLOSE_PAREN", "ADDEQ", "DELEQ", "RULEDEF", "RNAME", "ADDYUAN", "DELYUAN",
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

	public static readonly _serializedATN: number[] = [4,0,20,145,6,-1,2,0,
	7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,
	7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,
	16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,1,0,1,0,5,0,48,8,0,
	10,0,12,0,51,9,0,1,0,1,0,1,0,5,0,56,8,0,10,0,12,0,59,9,0,1,0,1,0,3,0,63,
	8,0,1,1,1,1,1,2,4,2,68,8,2,11,2,12,2,69,1,3,1,3,1,3,5,3,75,8,3,10,3,12,
	3,78,9,3,3,3,80,8,3,1,4,4,4,83,8,4,11,4,12,4,84,1,4,1,4,4,4,89,8,4,11,4,
	12,4,90,1,5,1,5,1,6,4,6,96,8,6,11,6,12,6,97,1,6,1,6,1,7,1,7,1,8,1,8,1,9,
	1,9,1,10,1,10,1,11,1,11,1,12,1,12,1,13,1,13,1,14,1,14,1,15,1,15,1,16,1,
	16,1,16,1,17,1,17,1,17,1,18,1,18,1,18,1,19,1,19,1,19,1,19,1,19,1,19,1,19,
	3,19,136,8,19,1,20,1,20,1,20,1,20,1,21,1,21,1,21,1,21,0,0,22,1,0,3,0,5,
	1,7,2,9,3,11,4,13,5,15,6,17,7,19,8,21,9,23,10,25,11,27,12,29,13,31,14,33,
	15,35,16,37,17,39,18,41,19,43,20,1,0,11,1,0,96,96,4,0,9,10,13,13,32,32,
	34,34,11,0,9,10,13,13,32,32,40,47,59,59,61,61,91,91,93,93,12304,12305,65288,
	65289,65292,65292,1,0,49,57,1,0,48,57,3,0,9,10,13,13,32,32,2,0,44,44,65292,
	65292,2,0,91,91,12304,12304,2,0,93,93,12305,12305,2,0,40,40,65288,65288,
	2,0,41,41,65289,65289,153,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,
	0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,
	23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,0,33,1,0,
	0,0,0,35,1,0,0,0,0,37,1,0,0,0,0,39,1,0,0,0,0,41,1,0,0,0,0,43,1,0,0,0,1,
	62,1,0,0,0,3,64,1,0,0,0,5,67,1,0,0,0,7,79,1,0,0,0,9,82,1,0,0,0,11,92,1,
	0,0,0,13,95,1,0,0,0,15,101,1,0,0,0,17,103,1,0,0,0,19,105,1,0,0,0,21,107,
	1,0,0,0,23,109,1,0,0,0,25,111,1,0,0,0,27,113,1,0,0,0,29,115,1,0,0,0,31,
	117,1,0,0,0,33,119,1,0,0,0,35,122,1,0,0,0,37,125,1,0,0,0,39,135,1,0,0,0,
	41,137,1,0,0,0,43,141,1,0,0,0,45,49,5,96,0,0,46,48,8,0,0,0,47,46,1,0,0,
	0,48,51,1,0,0,0,49,47,1,0,0,0,49,50,1,0,0,0,50,52,1,0,0,0,51,49,1,0,0,0,
	52,63,5,96,0,0,53,57,5,34,0,0,54,56,8,1,0,0,55,54,1,0,0,0,56,59,1,0,0,0,
	57,55,1,0,0,0,57,58,1,0,0,0,58,60,1,0,0,0,59,57,1,0,0,0,60,63,5,34,0,0,
	61,63,8,2,0,0,62,45,1,0,0,0,62,53,1,0,0,0,62,61,1,0,0,0,63,2,1,0,0,0,64,
	65,5,96,0,0,65,4,1,0,0,0,66,68,3,1,0,0,67,66,1,0,0,0,68,69,1,0,0,0,69,67,
	1,0,0,0,69,70,1,0,0,0,70,6,1,0,0,0,71,80,5,48,0,0,72,76,7,3,0,0,73,75,7,
	4,0,0,74,73,1,0,0,0,75,78,1,0,0,0,76,74,1,0,0,0,76,77,1,0,0,0,77,80,1,0,
	0,0,78,76,1,0,0,0,79,71,1,0,0,0,79,72,1,0,0,0,80,8,1,0,0,0,81,83,7,4,0,
	0,82,81,1,0,0,0,83,84,1,0,0,0,84,82,1,0,0,0,84,85,1,0,0,0,85,86,1,0,0,0,
	86,88,5,46,0,0,87,89,7,4,0,0,88,87,1,0,0,0,89,90,1,0,0,0,90,88,1,0,0,0,
	90,91,1,0,0,0,91,10,1,0,0,0,92,93,5,59,0,0,93,12,1,0,0,0,94,96,7,5,0,0,
	95,94,1,0,0,0,96,97,1,0,0,0,97,95,1,0,0,0,97,98,1,0,0,0,98,99,1,0,0,0,99,
	100,6,6,0,0,100,14,1,0,0,0,101,102,5,61,0,0,102,16,1,0,0,0,103,104,5,46,
	0,0,104,18,1,0,0,0,105,106,5,43,0,0,106,20,1,0,0,0,107,108,5,45,0,0,108,
	22,1,0,0,0,109,110,7,6,0,0,110,24,1,0,0,0,111,112,7,7,0,0,112,26,1,0,0,
	0,113,114,7,8,0,0,114,28,1,0,0,0,115,116,7,9,0,0,116,30,1,0,0,0,117,118,
	7,10,0,0,118,32,1,0,0,0,119,120,5,43,0,0,120,121,5,61,0,0,121,34,1,0,0,
	0,122,123,5,45,0,0,123,124,5,61,0,0,124,36,1,0,0,0,125,126,5,58,0,0,126,
	127,5,61,0,0,127,38,1,0,0,0,128,129,5,110,0,0,129,130,5,97,0,0,130,131,
	5,109,0,0,131,132,5,101,0,0,132,136,5,61,0,0,133,134,5,110,0,0,134,136,
	5,61,0,0,135,128,1,0,0,0,135,133,1,0,0,0,136,40,1,0,0,0,137,138,5,20803,
	0,0,138,139,5,43,0,0,139,140,5,61,0,0,140,42,1,0,0,0,141,142,5,20803,0,
	0,142,143,5,45,0,0,143,144,5,61,0,0,144,44,1,0,0,0,11,0,49,57,62,69,76,
	79,84,90,97,135,1,6,0,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!LKDLLexer.__ATN) {
			LKDLLexer.__ATN = new ATNDeserializer().deserialize(LKDLLexer._serializedATN);
		}

		return LKDLLexer.__ATN;
	}


	static DecisionsToDFA = LKDLLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}