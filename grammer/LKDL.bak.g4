grammar LKDL;

prog: stat* EOF
	;

stat: searchStat NEWLINE | cudYuanStat NEWLINE
	;

searchStat
	: noRelYuanSearchExpr
	| relYuanSearchExpr
	| isaSearchExpr
	| hasSearchExpr
	| allRelSearchExpr
	;

noRelYuanSearchExpr: yuanList # searchYuan
	;

relYuanSearchExpr: yuanList ATTR relExprList # searchYuanRel
	;

isaSearchExpr: yuanList ATTR ISA # searchYuanIsa
	;

hasSearchExpr: yuanList ATTR HAS # searchYuanHas
	;

allRelSearchExpr
	: yuanList ATTR ALL relAttrEqualList? # searchYuanAllRel
	;

cudYuanStat: noRelYuanCudExpr | relYuanCudExpr
	;

noRelYuanCudExpr
	: ADDYUAN yuanList	# addYuan
	| DELYUAN yuanList	# delYuan
	;

relYuanCudExpr
	: lhs = yuanList ATTR relExprList ADDEQ rhs = yuanList	# addYuanRel
	| lhs = yuanList ATTR relExprList DELEQ rhs = yuanList	# delYuanRel
	| lhs = yuanList ATTR relExprList ASSIGN rhs = yuanList	# updateYuanRel
	| yuanList ATTR ALL relAttrAssignList					# updateYuanRelAttr
	;

relExprList
	: relExpr
	| OPEN_PAREN relExpr ( COMMA relExpr)* CLOSE_PAREN
	;

relExpr
	: relExpr (ATTR relExpr) // 右递归，匹配链式关系
	| ID relAttrEqualList
	| ID relAttrAssignList
	| ID
	;

relAttrEqualList
	: OPEN_BRACKET relAttrEQ (COMMA relAttrEQ)* CLOSE_BRACKET
	;

relAttrAssignList
	: OPEN_BRACKET relAttrASSIGN (COMMA relAttrASSIGN)* CLOSE_BRACKET
	;

relAttrEQ
	: lhs = ID EQ rhs = (ID | INT | FLOAT) // 关系属性查询
	;

relAttrASSIGN
	: lhs = ID ASSIGN rhs = (ID | INT | FLOAT) // 关系属性更新、添加
	;

yuanList: ID | OPEN_PAREN ID ( COMMA ID)* CLOSE_PAREN
	;

ADDYUAN: '元+='
	;
DELYUAN: '元-='
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