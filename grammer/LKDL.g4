grammar LKDL;

prog: stat* EOF;

stat: cudYuanStat NEWLINE;

cudYuanStat: noRelYuanCudExpr | relYuanCudExpr;

noRelYuanCudExpr:
	ADDYUAN yuanList	# addYuan
	| DELYUAN yuanList	# delYuan;

relYuanCudExpr:
	lhs = yuanList ATTR relList ADDEQ rhs = yuanList	# addYuanRel
	| lhs = yuanList ATTR relList DELEQ rhs = yuanList	# delYuanRel
	| lhs = yuanList ATTR relList ASSIGN rhs = yuanList	# updateYuanRel;

relList:
	relExpr
	| OPEN_PAREN relExpr ( COMMA relExpr)* CLOSE_PAREN;

relExpr:
	lhs = relSequence rhs = relAttrList?
	| lhs = relSequence;

relSequence: ID (ATTR ID)*;

relAttrList:
	OPEN_BRACKET relAttr (COMMA relAttr)* CLOSE_BRACKET;

relAttr: lhs = ID ASSIGN rhs = (ID | INT | FLOAT);

yuanList: ID | OPEN_PAREN ID ( COMMA ID)* CLOSE_PAREN;

// 定义实体
fragment ENTITY:
	'`' ~[`]* '`'			// 用反引号包裹的字符串，不包括反引号
	| '"' ~[ \t\r\n"]* '"'	// 或者引号包裹的字符串
	| ~(
		' '
		| '\t'
		| '\r'
		| '\n'
		| ';'
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
	);

fragment BACKTICK: '`';

ID:		ENTITY+;
INT:	'0' | ([1-9] [0-9]*);
FLOAT:	[0-9]+ '.' [0-9]+; // 定义浮点数的词法规则
// 定义换行符
NEWLINE:		';';
WS:				[ \t\r\n]+ -> skip;
ASSIGN:			'=';
ATTR:			'.';
ADD:			'+';
SUB:			'-';
COMMA:			',' | '，';
OPEN_BRACKET:	'[' | '【';
CLOSE_BRACKET:	']' | '】';
OPEN_PAREN:		'(' | '（';
CLOSE_PAREN:	')' | '）';
ADDEQ:			'+=';
DELEQ:			'-=';
RULEDEF:		':=';
RNAME:			'name=' | 'n=';
ADDYUAN:		'元+=';
DELYUAN:		'元-=';