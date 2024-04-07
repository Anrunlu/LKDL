# LKDL 语法描述

## 增加元

### 语法

`(元|y) += (yuan, [...yuan]);`

当只有一个 `yuan` 时,`()` 可省略。

> 注意
>
> - LKDL 语言**不区分**全角和半角符号，但推荐在操作中使用半角符号。
> - LKDL 语言**大小写不敏感**。
> - LKDL 语言每条语句必须以`;`结束。

### 语法举例

`元 += 张三;`

`y += 张三;`

`元 += (张三, 李四);`

`元 += （张三， 李四）;`

### 语法解析

```js
// 元 += (张三, 李四, 王五);
{
  op: "addYuan",
  data: [
    {
      yuan: "张三",
      op: "add",
    }, {
      yuan: "李四",
      op: "add",
    }, {
      yuan: "王五",
      op: "add",
    }
  ],
}
```

## 删除元

### 语法

`(元|y) -= (yuan, [...yuan]);`

### 语法举例

`元 -= 张三;`

`y -= 张三;`

`元 -= (张三, 李四);`

### 语法解析

```js
// 元 -= (张三, 李四, 王五);
{
  op: "delYuan",
  data: [
    {
      yuan: "张三",
      op: "del",
    }, {
      yuan: "李四",
      op: "del",
    }, {
      yuan: "王五",
      op: "del",
    }
  ],
}
```

## 增加多元组

### 语法

`(yuan, [...yuan]).(relName[relAttrList], [...relName[relAttrList]]) += (yuan, [...yuan])`

### 语法举例

`张三.朋友 += 李四;`

`张三.朋友[程度=1] += 李四;`

`(张三, 李四).朋友 += (李四, 王五);`

`(张三, 李四).(朋友, 老乡) += (李四, 王五);`

`(张三, 李四).(朋友[程度=1], 老乡[程度=1]) += (李四, 王五);`

### 语法解析

```js
// 张三.朋友[程度=1] += (李四, 王五);
{
  op: "addTuple",
  data: [
    {
      head: "张三",
      rel: "朋友",
      tail: "李四",
      op: "add",
      relAttrList: [
        {
          attr: "程度",
          val: "1",
          op: "=",
        }
      ],
    }, {
      head: "张三",
      rel: "朋友",
      tail: "王五",
      op: "add",
      relAttrList: [
        {
          attr: "程度",
          val: "1",
          op: "=",
        }
      ],
    }
  ],
}
```

## 删除多元组

### 语法

`(yuan, [...yuan]).(relName, [...relName]) -= (yuan, [...yuan])`

### 语法举例

`张三.朋友 -= 李四;`

`张三.朋友 -= 李四;`

`(张三, 李四).朋友 -= (李四, 王五);`

`(张三, 李四).(朋友, 老乡) -= (李四, 王五);`

### 语法解析

```js
// 张三.朋友 -= (李四, 王五);
{
  op: "delTuple",
  data: [
    {
      head: "张三",
      rel: "朋友",
      tail: "李四",
      op: "del",
      relAttrList: [],
    }, {
      head: "张三",
      rel: "朋友",
      tail: "王五",
      op: "del",
      relAttrList: [],
    }
  ],
}
```

## 添加语义问答类规则

### 语法

`(规则|rule|r) += NLText| ruleHead | [ruleBodyAlias] := ruleBody;  `

`NLText`必填，表示规则头文本，需使用一对反引号 **``** 包裹。

`ruleHead`必填，表示规则头文本，需使用一对反引号 **``** 包裹。

`ruleBodyAlias`可选，表示规则体别名。

`ruleBody`必填，表示规则体。

### 语法举例

`` r +=`被称为“乐圣”的音乐家是谁？`|`被称为(乐圣)的(音乐家)是(C)`|:=C.职业==B&&C.称号==A;  ``

### 语法解析

```js
// r += `被称为“乐圣”的音乐家是谁？`|`被称为(乐圣)的(音乐家)是(C)`|:=C.职业==B&&C.称号==A;
{
  op: "addQARule",
  data: {
    op: "addQARule",
    ruleNLText: "被称为“乐圣”的音乐家是谁？",
    ruleHead: "被称为(乐圣)的(音乐家)是(C)",
    ruleBody: "C.职业==B&&C.称号==A",
  },
}
```

## 删除语义问答类规则

### 语法

`(规则|rule|r) -= NLText| ruleHead | [ruleBodyAlias] := ruleBody;  `

### 语法举例

`` r -=`被称为“乐圣”的音乐家是谁？`|`被称为(乐圣)的(音乐家)是(C)`|:=C.职业==B&&C.称号==A;  ``

### 语法解析

```js
// r -= `被称为“乐圣”的音乐家是谁？`|`被称为(乐圣)的(音乐家)是(C)`|:=C.职业==B&&C.称号==A;
{
  op: "delQARule",
  data: {
    op: "delQARule",
    ruleNLText: "被称为“乐圣”的音乐家是谁？",
    ruleHead: "被称为(乐圣)的(音乐家)是(C)",
    ruleBody: "C.职业==B&&C.称号==A",
  },
}
```

## 添加关系实体规则

### 语法

`(规则|rule|r) += ruleHead1 | ruleHead2 := ruleBody;`

`ruleHead1`必填，表示规则头文本类型一。

`ruleHead2`必填，表示规则头文本类型二，需使用一对反引号 **``** 包裹，必须为包含(变量)的自然语言形式。

`ruleBodyAlias`可选，表示规则体别名。

`ruleBody`必填，表示规则体。

### 语法举例

`` 规则 += A.老乡==B | `(A)老乡是(B)` |:=A.籍贯==C&&B.籍贯==C; ``

### 语法解析

```js
// 规则 += A.老乡==B | `(A)老乡是(B)` |:=A.籍贯==C&&B.籍贯==C;
{
  op: "addRule",
  data: {
    op: "addRule",
    ruleNLText: "A.老乡==B",
    ruleHead: "(A)老乡是(B)",
    ruleBody: "A.老乡==B&&A.籍贯==C&&B.籍贯==C",
  },
}
```

## 删除关系实体规则

### 语法

`(规则|rule|r) -= ruleHead1 | ruleHead2 := ruleBody;`

### 语法举例

`` 规则 += A.老乡==B | `(A)老乡是(B)` |:=A.籍贯==C&&B.籍贯==C; ``

### 语法解析

```js
// 规则 -= A.老乡==B | `(A)老乡是(B)` |:=A.籍贯==C&&B.籍贯==C;
{
  op: "delRule",
  data: {
    op: "delRule",
    ruleNLText: "A.老乡==B",
    ruleHead: "(A)老乡是(B)",
    ruleBody: "A.老乡==B&&A.籍贯==C&&B.籍贯==C",
  },
}
```

## 添加抽象实体规则

### 语法

`(规则|rule|r) += NLText | ruleHead := ruleBody;`

### 语法举例

`规则 += 学生 | 学生 :=(姓名, 性别, 学号, 年级, 学院);`

### 语法解析

```js
// 规则 += 学生 | 学生 :=（姓名，性别，学号，年级，学院）;
{
  op: "addAbsRule",
  data: {
    op: "addAbsRule",
    ruleNLText: "学生",
    ruleHead: "学生",
    ruleBody: "姓名,性别,学号,年级,学院",
  },
}
```

## 删除抽象实体规则

### 语法

`(规则|rule|r) -= NLText | ruleHead := ruleBody;`

### 语法举例

`规则 -= 学生 | 学生 :=(姓名, 性别, 学号, 年级, 学院);`

### 语法解析

```js
// 规则 -= 学生 | 学生 :=（姓名，性别，学号，年级，学院）;
{
  op: "delAbsRule",
  data: {
    op: "delAbsRule",
    ruleNLText: "学生",
    ruleHead: "学生",
    ruleBody: "姓名,性别,学号,年级,学院",
  },
}
```

## 基本查询

### 语法

`((yuan, [...yuan]) | VAR).(relName[relAttrList], [...relName[relAttrList]]) == ((yuan, [...yuan]) | VAR)`

> 注意
>
> - 在下文中将这种语法形式称为 `searchExpr`。

### 语法举例

`张三.朋友 == $A;` 这条语句将输出 `$A` 所代表的结果集合。

> 注意
>
> - 在 LKDL 中，一切以 `$` 开头的标识都将被视为变量(VAR)。
> - VAR 仅在查询语句中有效。

`$A.朋友 == 张三;`

`张三.(朋友, 老乡) == $A;`

`(张三, 李四).朋友 == $A`

### 语法解析

```js
// 张三.朋友 == $A;
{
  op: "search",
  data: [
    {
      head: "张三",
      rel: "朋友",
      tail: "$A",
      relAttrList: [],
    }
  ],
}

// 张三.(朋友, 老乡) == $A;
{
  op: "search",
  data: [
    {
      head: "张三",
      rel: "朋友",
      tail: "$A",
      relAttrList: [],
    }, {
      head: "张三",
      rel: "老乡",
      tail: "$A",
      relAttrList: [],
    }
  ],
}

// (张三, 李四).朋友 == $A;
{
  op: "search",
  data: [
    {
      head: "张三",
      rel: "朋友",
      tail: "$A",
      relAttrList: [],
    }, {
      head: "李四",
      rel: "朋友",
      tail: "$A",
      relAttrList: [],
    }
  ],
}
```

## has 查询

has 查询作用在元本体上，表示查询并返回该元本体所关联的所有**关系名称**的集合。

例如，假设存在以下三元组数据：

```js
(张三 朋友 李四)
(张三 国籍 中国)
(张三 校友 王五)
```

对元本体 `张三` 执行 has 查询得到的结果为 `[朋友, 国籍, 校友]`。

### 语法

`(yuan, [...yuan]).has == VAR;`

### 语法举例

`张三.has == $A;`

`(张三, 李四).has == $A;`

### 语法解析

```js
// 张三.has == $A;
{
  op: "search",
  data: [
    {
      head: "张三",
      rel: "has",
      tail: "$A",
      relAttrList: [],
    }
  ],
}
```

## all 查询

all 查询作用在元本体上，表示查询并返回该元本体所关联的**所有直接关系**的集合。

例如，假设存在以下三元组数据：

```js
(张三 朋友 李四)
(张三 国籍 中国)
(张三 校友 王五)
(李四 老乡 张三)
(赵六 朋友 张三)
```

对元本体 `张三` 执行 all 查询得到的结果为 `[(张三 朋友 李四), (张三 国籍 中国), (张三 校友 王五)]`。

### 语法

`(yuan, [...yuan]).all == VAR;`

### 语法举例

`张三.all == $A;`

`(张三, 李四).all == $A;`

### 语法解析

```js
// 张三.all == $A;
{
  op: "search",
  data: [
    {
      head: "张三",
      rel: "all",
      tail: "$A",
      relAttrList: [],
    }
  ],
}
```

## isa 查询

// TODO:作用待描述

### 语法

`(yuan, [...yuan]).isa == VAR;`

### 语法举例

`张三.isa == $A;`

`(张三, 李四).isa == $A;`

### 语法解析

```js
// 张三.isa == $A;
{
  op: "search",
  data: [
    {
      head: "张三",
      rel: "isa",
      tail: "$A",
      relAttrList: [],
    }
  ],
}
```

## 推理查询

### 语法

`(推理|infer) { searchExpr* --- conditionExpr*};`

### 语法举例

```
infer {
  落霞镇.编号 == $A1
  古井镇.编号 == $A2
  荷花镇.编号 == $A3
  浣溪镇.编号 == $A4
  紫薇镇.编号 == $A5
  落霞镇.有[程度==0] == 木塔
  $B1.有[程度==1] == 木塔
  $B1.编号 == 1
  $B2.有[程度==1] == 木塔
  $B2.编号 == 4
  ---
  |$A1-$A2|>=2;
  |$A1-$A3|>=2;
  |$A4-$A5|>=2;
  |$A5-$A2|>=2;
  |$A5-$A3|>=2;
  $A1!=1;
  $A1!=4;
 };
```

### 语法解析

```js
// 上方的语法举例的内容的解析结果如下
{
  op: "infer",
  data: {
    tuples: [
      {
        head: "落霞镇",
        rel: "编号",
        tail: "$A1",
        relAttrList: [],
      }, {
        head: "古井镇",
        rel: "编号",
        tail: "$A2",
        relAttrList: [],
      }, {
        head: "荷花镇",
        rel: "编号",
        tail: "$A3",
        relAttrList: [],
      }, {
        head: "浣溪镇",
        rel: "编号",
        tail: "$A4",
        relAttrList: [],
      }, {
        head: "紫薇镇",
        rel: "编号",
        tail: "$A5",
        relAttrList: [],
      }, {
        head: "落霞镇",
        rel: "有",
        tail: "木塔",
        relAttrList: [
          {
            attr: "程度",
            val: "0",
            op: "==",
          }
        ],
      }, {
        head: "$B1",
        rel: "有",
        tail: "木塔",
        relAttrList: [
          {
            attr: "程度",
            val: "1",
            op: "==",
          }
        ],
      }, {
        head: "$B1",
        rel: "编号",
        tail: "1",
        relAttrList: [],
      }, {
        head: "$B2",
        rel: "有",
        tail: "木塔",
        relAttrList: [
          {
            attr: "程度",
            val: "1",
            op: "==",
          }
        ],
      }, {
        head: "$B2",
        rel: "编号",
        tail: "4",
        relAttrList: [],
      }
    ],
    conditions: [ "|$A1-$A2|>=2", "|$A1-$A3|>=2", "|$A4-$A5|>=2",
      "|$A5-$A2|>=2", "|$A5-$A3|>=2", "$A1!=1", "$A1!=4"
    ],
    round: 5, // conditions 变量的个数
  },
}
```

## 语义问答

### 语法

`` ? `(ruleNLText|ruleHead)`;  ``

### 语法举例

`` ? `被称为“乐圣”的音乐家是谁？`;  ``

`` ? `被称为（乐圣）的（音乐家）是（C）`;  ``

### 语法解析

```js
// ? `被称为“乐圣”的音乐家是谁？`;
{
  op: "qa",
  data: {
    op: "rule-search",
    ruleNLText: "被称为“乐圣”的音乐家是谁？",
  },
}

// ? `被称为（乐圣）的（音乐家）是（C）`;
{
  op: "qa",
  data: {
    op: "rule-search",
    ruleNLText: "被称为（乐圣）的（音乐家）是（C）",
  },
}
```

## 路径查询

### 语法

`yuan -> yuan;`

### 语法举例

`张三->王五;`

### 语法解析

```js
// 张三->王五;
{
  op: "pathSearch",
  data: {
    head: "张三",
    rel: "->",
    tail: "李四",
  },
}
```
