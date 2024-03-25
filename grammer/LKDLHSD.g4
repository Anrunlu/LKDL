grammar LKDLHSD;

prog: stat* EOF
	;

stat: searchStat NEWLINE | cudStat NEWLINE
	;

searchStat
	: searchExpr ATTR ALL
	| searchExpr ATTR HAS
	| searchExpr ATTR ISA
	| searchExpr
	;




ADDYUAN: '元+=' | 'y+='
	;
DELYUAN: '元-=' | 'y-='
	;
ADDRULE: '规则+=' | 'rule+=' | 'r+='
	;
DELRULE: '规则-=' | 'rule-=' | 'r-='
	;
// 定义换行符
NEWLINE: ';' | '；'
	;
// 定义注释
LINECOMMENT: '//' ~[\r\n]* -> skip
	;
BLOCKCOMMENT: '/*' .*? '*/' -> skip
	;
ASSIGN: '='
	;
EQ: '=='
	;
ATTR: '.'
	;
ADD: '+'
	;
SUB: '-'
	;
COMMA: ',' | '，'
	;
OPEN_BRACKET: '[' | '【'
	;
CLOSE_BRACKET: ']' | '】'
	;
OPEN_PAREN: '(' | '（'
	;
CLOSE_PAREN: ')' | '）'
	;
ADDEQ: '+='
	;
DELEQ: '-='
	;
RULEDEF: ':='
	;
ISA: [Ii][Ss][Aa]
	; // 不区分大小写的 'isa'
HAS: [Hh][Aa][Ss]
	; // 不区分大小写的 'has'
ALL: [Aa][Ll][Ll]
	; // 不区分大小写的 'all'

INT: '0' | ([1-9] [0-9]*)
	;
FLOAT: [0-9]+ '.' [0-9]+
	; // 定义浮点数的词法规则

// 定义实体
fragment ENTITY
	: '`' ~[`]* '`'			// 用反引号包裹的字符串，不包括反引号
	| '"' ~[ \t\r\n"]* '"'	// 或者引号包裹的字符串
	| ~(
		' '
		| '\t'
		| '\r'
		| '\n'
		| ';'
		| '；'
		| '+'
		| '='
		| '*'
		| '/'
		| '.'
		| ','
		| '，'
		| '('
		| '（'
		| ')'
		| '）'
		| '-'
		| '['
		| '【'
		| ']'
		| '】'
	)
	;

fragment BACKTICK: '`'
	;

ID: ENTITY+
	;
WS: [ \t\r\n]+ -> skip
	;