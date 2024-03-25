import { OP, VAR_PREFIX } from "../const";

const lhsSearchSequnce = [
  [
    {
      head: "张三",
      rel: { relName: "朋友", relAttrList: [] },
      tail: "$111",
      isTerminal: false,
    },
    {
      head: "$112",
      rel: { relName: "同学", relAttrList: [] },
      tail: "$113",
      isTerminal: true,
    },
  ],
  // [
  //   {
  //     head: "张三",
  //     rel: { relName: "老乡", relAttrList: [] },
  //     tail: "$121",
  //     isTerminal: false,
  //   },
  //   {
  //     head: "$122",
  //     rel: { relName: "同学", relAttrList: [] },
  //     tail: "$123",
  //     isTerminal: false,
  //   },
  //   {
  //     head: "$123",
  //     rel: {
  //       relName: "老乡",
  //       relAttrList: [
  //         { attr: "距离", val: "1公里", op: "==" },
  //         { attr: "时间", val: "10年", op: "==" },
  //       ],
  //     },
  //     tail: "$124",
  //     isTerminal: false,
  //   },
  //   {
  //     head: "$124",
  //     rel: { relName: "老乡", relAttrList: [] },
  //     tail: "$125",
  //     isTerminal: true,
  //   },
  // ],
];

const rhsSearchSequnce = [
  [
    {
      head: "李四",
      rel: { relName: "朋友", relAttrList: [] },
      tail: "$211",
      isTerminal: true,
    },
  ],
];

export function parseSequnceToExcuteFormat(
  lhsSearchSequnce: any,
  rhsSearchSequnce: any,
  op: string
) {
  // 所有变量
  const varSet = new Set();
  // 左边序列的终结变量集合
  const lhsTerminalVarSet = new Set();
  // 右边序列的终结变量集合
  const rhsTerminalVarSet = new Set();
  // 所有三元组
  const tripleList: any = [];
  // 运算结果序列
  const resultSequnce: any = [];

  lhsSearchSequnce.forEach((lhsTripleSequnce: any) => {
    lhsTripleSequnce.forEach((lhsTriple: any) => {
      if (lhsTriple.head.startsWith(VAR_PREFIX)) {
        varSet.add(lhsTriple.head);
      }

      if (lhsTriple.tail.startsWith(VAR_PREFIX)) {
        varSet.add(lhsTriple.tail);
      }

      if (lhsTriple.isTerminal) {
        lhsTerminalVarSet.add(lhsTriple.tail);
        // 追加 op 属性
        lhsTriple.op = op;
      } else {
        // 追加 op 属性为 "get"
        lhsTriple.op = OP.GET;
      }

      tripleList.push(lhsTriple);
    });
  });

  rhsSearchSequnce.forEach((rhsTripleSequnce: any) => {
    rhsTripleSequnce.forEach((rhsTriple: any) => {
      if (rhsTriple.head.startsWith(VAR_PREFIX)) {
        varSet.add(rhsTriple.head);
      }

      if (rhsTriple.tail.startsWith(VAR_PREFIX)) {
        varSet.add(rhsTriple.tail);
      }

      if (rhsTriple.isTerminal && rhsTriple.isYuan) {
        rhsTerminalVarSet.add(rhsTriple.head);
      } else if (rhsTriple.isTerminal) {
        rhsTerminalVarSet.add(rhsTriple.tail);
      }

      // 追加 op 属性为 "get"
      // 因为赋值操作的右边的语句一定是查询语句，所以一定是 get
      rhsTriple.op = OP.GET;

      tripleList.push(rhsTriple);
    });
  });

  // 运算序列为两个序列的笛卡尔积，运算符为 = (赋值)
  lhsTerminalVarSet.forEach((lhsTerminalVar: any) => {
    rhsTerminalVarSet.forEach((rhsTerminalVar: any) => {
      resultSequnce.push([lhsTerminalVar, "=", rhsTerminalVar]);
    });
  });

  return {
    varSet: Array.from(varSet),
    tripleList,
    resultSequnce,
  };
}

// addYuanRel(lhsSearchSequnce, rhsSearchSequnce);
