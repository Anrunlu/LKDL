import { OP, VAR_PREFIX } from "./const";

// 添加删除元
export function runCudYuan(yuanList: [], op: OP) {
  const result: any = [];

  yuanList.forEach((yuan: any) => {
    const res = {
      yuan,
      op: op,
    };
    result.push(res);
  });

  console.dir(result, { depth: Infinity });
}

// 添加删除多元组
export function runCudTuple(excuteFormatData: any) {
  const tripleList = excuteFormatData.tripleList;
  const resultSequnce = excuteFormatData.resultSequnce;

  const result: any = [];

  // 创建变量集合
  const varObj: any = {};
  excuteFormatData.varSet.forEach((item: any) => {
    varObj[item] = [];
  });

  // TODO:顺序执行 tripleList 中 op 为 get 的三元组，获取相关变量的值

  // 从 resultSequnce 搜索可以直接赋值的变量
  resultSequnce.forEach((res: any) => {
    // 如果右操作数不是变量，
    if (!res[2].startsWith(VAR_PREFIX)) {
      // 将右操作数赋值给左操作数
      varObj[res[0]].push(res[2]);
    }
  });

  // 遍历元组列表并根据 op 执行相关操作
  tripleList.forEach((tripleObj: any, index: any) => {
    // 如果是 set 操作（增加和删除）
    if (tripleObj.op === OP.ADD || tripleObj.op === OP.DEL) {
      // 如果 head 和 relName 均不是变量，从 varObj 中获取对应的 tail 值
      if (
        !tripleObj.head.startsWith(VAR_PREFIX) &&
        !tripleObj.rel.relName.startsWith(VAR_PREFIX)
      ) {
        const head = tripleObj.head;
        const rel = tripleObj.rel.relName;
        const tail = varObj[tripleObj.tail];

        // 如果 tail 为数组，进行笛卡尔积操作
        if (Array.isArray(tail)) {
          tail.forEach((item: any) => {
            const res = {
              head,
              rel,
              tail: item,
              op: tripleObj.op,
              relAttrList: tripleObj.rel.relAttrList,
            };
            result.push(res);
          });
        }

        // TODO:数据库操作
        // console.log(head, rel, tripleObj.op, tail);
      }
    }
  });

  console.dir(result, { depth: Infinity });
}

// 查询
export function runSearch(excuteFormatData: any) {
  const tripleList = excuteFormatData.tripleList;
  const resultSequnce = excuteFormatData.resultSequnce;

  const resultTmp: any = [];

  // 遍历元组列表，得到三元组
  tripleList.forEach((tripleObj: any, index: any) => {
    const head = tripleObj.head;
    const rel = tripleObj.rel.relName;
    const tail = tripleObj.tail;

    const res = {
      head,
      rel,
      tail,
      relAttrList: tripleObj.rel.relAttrList,
      isYuan: tripleObj.isYuan ? true : false,
      isTerminal: tripleObj.isTerminal ? true : false,
    };
    resultTmp.push(res);
  });

  // 根据 resultSequnce 中的结果，替换变量
  resultSequnce.forEach((res: any) => {
    resultTmp.forEach((item: any) => {
      if (item.head === res[0]) {
        item.head = res[2];
      }
      if (item.tail === res[0]) {
        item.tail = res[2];
      }
    });
  });

  // 删除 result 中是终端节点且是元的节点
  const result = resultTmp.filter(
    (res: any) => !(res.isTerminal && res.isYuan)
  );

  // console.log(resultSequnce);
  // console.dir(result, { depth: Infinity });

  return result;
}
