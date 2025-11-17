## LKDL Syntax Description

## Add Yuan (Entity)

### Syntax

`(yuan|y) += (yuan, [...yuan]);`

When there is only one `yuan`, the parentheses `()` can be omitted.

> Note
>
>   - The LKDL language **does not distinguish** between full-width and half-width symbols, but using half-width symbols in operations is recommended.
>   - The LKDL language is **case-insensitive**.
>   - Every LKDL statement must end with a `;`.

### Syntax Examples

`yuan += ZhangSan;`

`y += ZhangSan;`

`yuan += (ZhangSan, LiSi);`

`yuan += (ZhangSan, LiSi);`

### Syntax Parsing

```js
// yuan += (ZhangSan, LiSi, WangWu);
{
  op: "addYuan",
  data: [
    {
      yuan: "ZhangSan",
      op: "add",
    }, {
      yuan: "LiSi",
      op: "add",
    }, {
      yuan: "WangWu",
      op: "add",
    }
  ],
}
```

## Delete Yuan (Entity)

### Syntax

`(yuan|y) -= (yuan, [...yuan]);`

### Syntax Examples

`yuan -= ZhangSan;`

`y -= ZhangSan;`

`yuan -= (ZhangSan, LiSi);`

### Syntax Parsing

```js
// yuan -= (ZhangSan, LiSi, WangWu);
{
  op: "delYuan",
  data: [
    {
      yuan: "ZhangSan",
      op: "del",
    }, {
      yuan: "LiSi",
      op: "del",
    }, {
      yuan: "WangWu",
      op: "del",
    }
  ],
}
```

## Add Multi-ary Tuple

### Syntax

`(yuan, [...yuan]).(relName[relAttrList], [...relName[relAttrList]]) += (yuan, [...yuan])`

### Syntax Examples

`ZhangSan.friend += LiSi;`

`ZhangSan.friend[degree=1] += LiSi;`

`(ZhangSan, LiSi).friend += (LiSi, WangWu);`

`(ZhangSan, LiSi).(friend, fellowVillager) += (LiSi, WangWu);`

`(ZhangSan, LiSi).(friend[degree=1], fellowVillager[degree=1]) += (LiSi, WangWu);`

### Syntax Parsing

```js
// ZhangSan.friend[degree=1] += (LiSi, WangWu);
{
  op: "addTuple",
  data: [
    {
      head: "ZhangSan",
      rel: "friend",
      tail: "LiSi",
      op: "add",
      relAttrList: [
        {
          attr: "degree",
          val: "1",
          op: "=",
        }
      ],
    }, {
      head: "ZhangSan",
      rel: "friend",
      tail: "WangWu",
      op: "add",
      relAttrList: [
        {
          attr: "degree",
          val: "1",
          op: "=",
        }
      ],
    }
  ],
}
```

## Delete Multi-ary Tuple

### Syntax

`(yuan, [...yuan]).(relName, [...relName]) -= (yuan, [...yuan])`

### Syntax Examples

`ZhangSan.friend -= LiSi;`

`ZhangSan.friend -= LiSi;`

`(ZhangSan, LiSi).friend -= (LiSi, WangWu);`

`(ZhangSan, LiSi).(friend, fellowVillager) -= (LiSi, WangWu);`

### Syntax Parsing

```js
// ZhangSan.friend -= (LiSi, WangWu);
{
  op: "delTuple",
  data: [
    {
      head: "ZhangSan",
      rel: "friend",
      tail: "LiSi",
      op: "del",
      relAttrList: [],
    }, {
      head: "ZhangSan",
      rel: "friend",
      tail: "WangWu",
      op: "del",
      relAttrList: [],
    }
  ],
}
```

## Add Semantic Q\&A Rule

### Syntax

`(rule|rule) += NLText| ruleHead | [ruleBodyAlias] := ruleBody;`

`NLText` is mandatory, represents the natural language text of the rule, and must be wrapped in a pair of backticks **\`\`**.

`ruleHead` is mandatory, represents the rule head text, and must be wrapped in a pair of backticks **\`\`**.

`ruleBodyAlias` is optional, represents the rule body alias.

`ruleBody` is mandatory, represents the rule body.

### Syntax Examples

`` rule +=`Who is the musician called “Yuesheng”?`|`The (musician) called (Yuesheng) is (C)`|:=C.profession==B&&C.title==A;  ``

### Syntax Parsing

```js
// rule += `Who is the musician called “Yuesheng”?`|`The (musician) called (Yuesheng) is (C)`|:=C.profession==B&&C.title==A;
{
  op: "addQARule",
  data: {
    op: "addQARule",
    ruleNLText: "Who is the musician called “Yuesheng”?",
    ruleHead: "The (musician) called (Yuesheng) is (C)",
    ruleBody: "C.profession==B&&C.title==A",
  },
}
```

## Delete Semantic Q\&A Rule

### Syntax

`(rule|rule) -= NLText| ruleHead | [ruleBodyAlias] := ruleBody;`

### Syntax Examples

`` rule -=`Who is the musician called “Yuesheng”?`|`The (musician) called (Yuesheng) is (C)`|:=C.profession==B&&C.title==A;  ``

### Syntax Parsing

```js
// rule -= `Who is the musician called “Yuesheng”?`|`The (musician) called (Yuesheng) is (C)`|:=C.profession==B&&C.title==A;
{
  op: "delQARule",
  data: {
    op: "delQARule",
    ruleNLText: "Who is the musician called “Yuesheng”?",
    ruleHead: "The (musician) called (Yuesheng) is (C)",
    ruleBody: "C.profession==B&&C.title==A",
  },
}
```

## Add Relational Entity Rule

### Syntax

`(rule|rule) += ruleHead1 | ruleHead2 := ruleBody;`

`ruleHead1` is mandatory, represents Rule Head Type One text.

`ruleHead2` is mandatory, represents Rule Head Type Two text, must be wrapped in a pair of backticks **\`\`**, and must be in natural language form containing (variables).

`ruleBodyAlias` is optional, represents the rule body alias.

`ruleBody` is mandatory, represents the rule body.

### Syntax Examples

``rule += A.fellowVillager==B | `(A)'s fellow villager is (B)` |:=A.hometown==C&&B.hometown==C;``

### Syntax Parsing

```js
// rule += A.fellowVillager==B | `(A)'s fellow villager is (B)` |:=A.hometown==C&&B.hometown==C;
{
  op: "addRule",
  data: {
    op: "addRule",
    ruleNLText: "A.fellowVillager==B",
    ruleHead: "(A)'s fellow villager is (B)",
    ruleBody: "A.hometown==C&&B.hometown==C",
  },
}
```

## Delete Relational Entity Rule

### Syntax

`(rule|rule) -= ruleHead1 | ruleHead2 := ruleBody;`

### Syntax Examples

``rule -= A.fellowVillager==B | `(A)'s fellow villager is (B)` |:=A.hometown==C&&B.hometown==C;``

### Syntax Parsing

```js
// rule -= A.fellowVillager==B | `(A)'s fellow villager is (B)` |:=A.hometown==C&&B.hometown==C;
{
  op: "delRule",
  data: {
    op: "delRule",
    ruleNLText: "A.fellowVillager==B",
    ruleHead: "(A)'s fellow villager is (B)",
    ruleBody: "A.hometown==C&&B.hometown==C",
  },
}
```

## Add Abstract Entity Rule

### Syntax

`(rule|rule) += NLText | ruleHead := ruleBody;`

### Syntax Examples

`rule += Student | Student :=(name, gender, studentID, grade, college);`

### Syntax Parsing

```js
// rule += Student | Student :=(name, gender, studentID, grade, college);
{
  op: "addAbsRule",
  data: {
    op: "addAbsRule",
    ruleNLText: "Student",
    ruleHead: "Student",
    ruleBody: "name,gender,studentID,grade,college",
  },
}
```

## Delete Abstract Entity Rule

### Syntax

`(rule|rule) -= NLText | ruleHead := ruleBody;`

### Syntax Examples

`rule -= Student | Student :=(name, gender, studentID, grade, college);`

### Syntax Parsing

```js
// rule -= Student | Student :=(name, gender, studentID, grade, college);
{
  op: "delAbsRule",
  data: {
    op: "delAbsRule",
    ruleNLText: "Student",
    ruleHead: "Student",
    ruleBody: "name,gender,studentID,grade,college",
  },
}
```

## Basic Query

### Syntax

`((yuan, [...yuan]) | VAR).(relName[relAttrList], [...relName[relAttrList]]) == ((yuan, [...yuan]) | VAR)`

> Note
>
>   - This syntax form is referred to as `searchExpr` in the following text.

### Syntax Examples

`ZhangSan.friend == $A;` This statement will output the result set represented by `$A`.

> Note
>
>   - In LKDL, all identifiers starting with `$` are considered variables (VAR).
>   - VAR is only valid in query statements.

`$A.friend == ZhangSan;`

`ZhangSan.(friend, fellowVillager) == $A;`

`(ZhangSan, LiSi).friend == $A`

### Syntax Parsing

```js
// ZhangSan.friend == $A;
{
  op: "search",
  data: [
    {
      head: "ZhangSan",
      rel: "friend",
      tail: "$A",
      relAttrList: [],
    }
  ],
}

// ZhangSan.(friend, fellowVillager) == $A;
{
  op: "search",
  data: [
    {
      head: "ZhangSan",
      rel: "friend",
      tail: "$A",
      relAttrList: [],
    }, {
      head: "ZhangSan",
      rel: "fellowVillager",
      tail: "$A",
      relAttrList: [],
    }
  ],
}

// (ZhangSan, LiSi).friend == $A;
{
  op: "search",
  data: [
    {
      head: "ZhangSan",
      rel: "friend",
      tail: "$A",
      relAttrList: [],
    }, {
      head: "LiSi",
      rel: "friend",
      tail: "$A",
      relAttrList: [],
    }
  ],
}
```

## has Query

The `has` query operates on the Yuan (Entity), retrieving and returning the set of all **relation names** associated with that Yuan.

For example, assuming the following tuple data exists:

```js
(ZhangSan friend LiSi)
(ZhangSan nationality China)
(ZhangSan alumnus WangWu)
```

Executing a `has` query on Yuan `ZhangSan` yields the result `[friend, nationality, alumnus]`.

### Syntax

`(yuan, [...yuan]).has == VAR;`

### Syntax Examples

`ZhangSan.has == $A;`

`(ZhangSan, LiSi).has == $A;`

### Syntax Parsing

```js
// ZhangSan.has == $A;
{
  op: "search",
  data: [
    {
      head: "ZhangSan",
      rel: "has",
      tail: "$A",
      relAttrList: [],
    }
  ],
}
```

## all Query

The `all` query operates on the Yuan (Entity), retrieving and returning the set of **all direct relationships** associated with that Yuan.

For example, assuming the following tuple data exists:

```js
(ZhangSan friend LiSi)
(ZhangSan nationality China)
(ZhangSan alumnus WangWu)
(LiSi fellowVillager ZhangSan)
(ZhaoLiu friend ZhangSan)
```

Executing an `all` query on Yuan `ZhangSan` yields the result `[(ZhangSan friend LiSi), (ZhangSan nationality China), (ZhangSan alumnus WangWu)]`.

### Syntax

`(yuan, [...yuan]).all == VAR;`

### Syntax Examples

`ZhangSan.all == $A;`

`(ZhangSan, LiSi).all == $A;`

### Syntax Parsing

```js
// ZhangSan.all == $A;
{
  op: "search",
  data: [
    {
      head: "ZhangSan",
      rel: "all",
      tail: "$A",
      relAttrList: [],
    }
  ],
}
```

## isa Query

// TODO: Functionality description pending

### Syntax

`(yuan, [...yuan]).isa == VAR;`

### Syntax Examples

`ZhangSan.isa == $A;`

`(ZhangSan, LiSi).isa == $A;`

### Syntax Parsing

```js
// ZhangSan.isa == $A;
{
  op: "search",
  data: [
    {
      head: "ZhangSan",
      rel: "isa",
      tail: "$A",
      relAttrList: [],
    }
  ],
}
```

## Inference Query

### Syntax

`(infer|infer) { searchExpr* --- conditionExpr*};`

### Syntax Examples

```
infer {
  LuoxiaTown.id == $A1
  GujingTown.id == $A2
  HehuaTown.id == $A3
  HuanxiTown.id == $A4
  ZiweiTown.id == $A5
  LuoxiaTown.has[degree==0] == WoodPagoda
  $B1.has[degree==1] == WoodPagoda
  $B1.id == 1
  $B2.has[degree==1] == WoodPagoda
  $B2.id == 4
  ---
  |$A1-$A2|>=2;
  |$A1-$A3|>=2;
  |$A4-$A5|>=2;
  |$A5-$A2|>=2;
  |$A5-$A3|>=2;
  $A1!=1;
  $A1!=4;
  maxnums=5;
 };
```

> Note
>
>   - `maxnums` is a mandatory field.

### Syntax Parsing

```js
// The parsing result for the example syntax above
{
  op: "infer",
  data: {
    tuples: [
      {
        head: "LuoxiaTown",
        rel: "id",
        tail: "$A1",
        relAttrList: [],
      }, {
        head: "GujingTown",
        rel: "id",
        tail: "$A2",
        relAttrList: [],
      }, {
        head: "HehuaTown",
        rel: "id",
        tail: "$A3",
        relAttrList: [],
      }, {
        head: "HuanxiTown",
        rel: "id",
        tail: "$A4",
        relAttrList: [],
      }, {
        head: "ZiweiTown",
        rel: "id",
        tail: "$A5",
        relAttrList: [],
      }, {
        head: "LuoxiaTown",
        rel: "has",
        tail: "WoodPagoda",
        relAttrList: [
          {
            attr: "degree",
            val: "0",
            op: "==",
          }
        ],
      }, {
        head: "$B1",
        rel: "has",
        tail: "WoodPagoda",
        relAttrList: [
          {
            attr: "degree",
            val: "1",
            op: "==",
          }
        ],
      }, {
        head: "$B1",
        rel: "id",
        tail: "1",
        relAttrList: [],
      }, {
        head: "$B2",
        rel: "has",
        tail: "WoodPagoda",
        relAttrList: [
          {
            attr: "degree",
            val: "1",
            op: "==",
          }
        ],
      }, {
        head: "$B2",
        rel: "id",
        tail: "4",
        relAttrList: [],
      }
    ],
    conditions: [ "|$A1-$A2|>=2", "|$A1-$A3|>=2", "|$A4-$A5|>=2",
      "|$A5-$A2|>=2", "|$A5-$A3|>=2", "$A1!=1", "$A1!=4"
    ],
    varnums: 5, // The number of variables in conditions
    maxnums: 5
  },
}
```

## Semantic Q\&A

### Syntax

``qa `(ruleNLText|ruleHead)`;``

### Syntax Examples

``qa `Who is the musician called “Yuesheng”?`;``

``qa `The (musician) called (Yuesheng) is (C)`;``

### Syntax Parsing

```js
// ? `Who is the musician called “Yuesheng”?`;
{
  op: "qa",
  data: {
    op: "rule-search",
    ruleNLText: "Who is the musician called “Yuesheng”?",
  },
}

// ? `The (musician) called (Yuesheng) is (C)`;
{
  op: "qa",
  data: {
    op: "rule-search",
    ruleNLText: "The (musician) called (Yuesheng) is (C)",
  },
}
```

## Path Query

### Syntax

`yuan -> yuan;`

### Syntax Examples

`ZhangSan->WangWu;`

### Syntax Parsing

```js
// ZhangSan->WangWu;
{
  op: "pathSearch",
  data: {
    head: "ZhangSan",
    rel: "->",
    tail: "WangWu",
  },
}
```