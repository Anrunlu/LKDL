grammar LKDL;

prog: stat* EOF
	;

stat
	: searchStat (AND searchStat)* NEWLINE
	| cudStat NEWLINE
	| cudRuleStat NEWLINE
	| inferStat NEWLINE
	| qaStat NEWLINE
	| pathSearchStat NEWLINE
	;

searchStat
	: searchExpr ATTR ALL
	| searchExpr ATTR HAS
	| searchExpr ATTR ISA
	| lhs = searchExpr EQ rhs = searchExpr
	//	| searchExpr
	;

cudStat
	: lhs = searchExpr ADDEQ rhs = searchExpr	# addTuple
	| lhs = searchExpr DELEQ rhs = searchExpr	# delTuple
	| lhs = searchExpr ASSIGN rhs = searchExpr	# updateTuple
	| YUAN ADDEQ yuanList						# addYuan
	| YUAN DELEQ yuanList						# delYuan
	;

cudRuleStat
	: RULE ADDEQ nltext = ID '|' ruleHead = ID '|' searchStat? RULEDEF searchStat (
		AND searchStat
	)* # addRule
	| RULE DELEQ nltext = ID '|' ruleHead = ID '|' searchStat? RULEDEF searchStat (
		AND searchStat
	)*															# delRule
	| RULE ADDEQ nltext = ID '|' ruleHead = ID RULEDEF yuanList	# addAbsRule
	| RULE DELEQ nltext = ID '|' ruleHead = ID RULEDEF yuanList	# delAbsRule
	;

inferStat
	: INFER OPEN_BRACE searchStat* '---' .*? CLOSE_BRACE # infer
	;

qaStat: QUESTION_MARK ID # qa
	;

pathSearchStat: ID '->' ID
	;

searchExpr: yuanList (ATTR relExprList)?
	;

relExprList
	: relExprSequnce
	| OPEN_PAREN relExprSequnce (COMMA relExprSequnce)* CLOSE_PAREN
	;

// 关系序列，一棵广度优先的树
relExprSequnce: relExpr ( ATTR relExpr)*
	;

relExpr
	: lhs = ALL rhs = relAttrList?
	| lhs = ID rhs = relAttrList?
	| lhs = HAS
	;

relAttrList
	: OPEN_BRACKET relAttr (COMMA relAttr)* CLOSE_BRACKET
	;

relAttr
	: lhs = ID (op = ASSIGN | op = EQ) rhs = ID // 关系属性 op = ASSIGN 更新、添加 op = EQ 查询
	;

yuanList: ID | OPEN_PAREN ID ( COMMA ID)* CLOSE_PAREN
	;

YUAN: '元' | 'y'
	;
RULE: '规则' | 'rule' | 'r'
	;
INFER: '推理' | 'infer' | 'i'
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
AND: '&&' | 'and'
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
OPEN_BRACE: '{'
	;
CLOSE_BRACE: '}'
	;
ADDEQ: '+='
	;
DELEQ: '-='
	;
RULEDEF: ':='
	;
QUESTION_MARK: '?' | '？'
	;
ISA: [Ii][Ss][Aa]
	; // 不区分大小写的 'isa'
HAS: [Hh][Aa][Ss]
	; // 不区分大小写的 'has'
ALL: [Aa][Ll][Ll]
	; // 不区分大小写的 'all'

//INT: '0' | ([1-9] [0-9]*) ; FLOAT: [0-9]+ '.' [0-9]+ ; // 定义浮点数的词法规则

// 定义实体
fragment ENTITY
	: '`' ~[`/|]* '`'		// 用反引号包裹的字符串，不包括 ` |
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
		| '&'
		| '|'
		| ':'
		| '?'
		| '？'
	)
	;

fragment BACKTICK: '`'
	;

ID: ENTITY+
	;

WS: [ \t\r\n]+ -> skip
	;