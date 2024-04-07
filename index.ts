import * as readline from "readline";
import { CharStream, CommonTokenStream, ParseTreeWalker } from "antlr4";
import LKDLLexer from "./parser/LKDLLexer";
import LKDLParser from "./parser/LKDLParser";
import { LKDLTreeWalker } from "./parser/Walker";
import LKDLErrorListener, { ILKDLError } from "./LKDLErrorListener";

// const input = `张三.(朋友.同学, 老乡.同学.老乡[距离==1公里, 时间==10年].老乡) += 李四.朋友;`;
// const input = `张三.老乡.朋友.同学 += 李四.朋友;`;
// const input = `张三.(朋友, 老乡) += (王五, 李四).(朋友.同学, 老乡.老乡)`;
// const input = `张三.朋友 += （李四，王五）;`;
// const input = `小王.朋友+=$2;`;
// const input = `张三.朋友.老乡.导演    -=   （李四，王五）;`;
// const input = `小王.(朋友,家人);`;
// const input = `小王.has;`;
// const input = "张三.朋友[程度=1, 时间=2024年03月22日] += 李四;";
// const input = `张三.（朋友，老乡）+=李四.朋友；`;
// const input = `张三.朋友 += (李四, 王五);`;
// const input = `张三.朋友 -= (李四, 王五);`;
// const input = `y += (张三, 李四, 王五);`;
// const input = `战狼.演员 == $A && $A.国籍 == 中国;`;
// const input = `张三.朋友==$A && $A.国籍==中国;`;
// const input = `(张三,李四).朋友==$A;`;
// const input = `infer {
//   落霞镇.编号 == $A1
//   古井镇.编号 == $A2
//   荷花镇.编号 == $A3
//   浣溪镇.编号 == $A4
//   紫薇镇.编号 == $A5
//   落霞镇.有[程度==0] == 木塔
//   $B1.有[程度==1] == 木塔
//   $B1.编号 == 1
//   $B2.有[程度==1] == 木塔
//   $B2.编号 == 4
//   ---
//   |$A1-$A2|>=2;
//   |$A1-$A3|>=2;
//   |$A4-$A5|>=2;
//   |$A5-$A2|>=2;
//   |$A5-$A3|>=2;
//   $A1!=1;
//   $A1!=4;
//   };`;
// const input =
//   "r +=`被称为“乐圣”的音乐家是谁？`|`被称为(乐圣)的(音乐家)是(C)`|:=C.职业==B&&C.称号==A;";
// const input = `规则 -= 学生 | 学生 :=（姓名，性别，学号，年级，学院）；`;

// const input = "?`被称为“乐圣”的音乐家是谁？`;";
// const input = "张三->李四;";

export function parse(input: string): { resultList: []; errors: ILKDLError[] } {
  const chars = new CharStream(input);
  const lexer = new LKDLLexer(chars);

  lexer.removeErrorListeners();

  const errorListener = new LKDLErrorListener();
  lexer.addErrorListener(errorListener);

  const tokens = new CommonTokenStream(lexer);

  const parser = new LKDLParser(tokens);
  parser.removeErrorListeners();
  parser.addErrorListener(errorListener);

  const tree = parser.prog();

  const walker = new LKDLTreeWalker();
  ParseTreeWalker.DEFAULT.walk(walker, tree);

  const resultList = walker.getResult();

  const errors = errorListener.getErrors();

  return { resultList, errors };
}

function interactiveTest() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "lkdl> ",
  });

  function waitForInput() {
    rl.question("lkdl>", (input) => {
      const result = parse(input);

      console.dir(result, { depth: Infinity });

      if (input.toLowerCase() === "exit") {
        rl.close();
      } else {
        waitForInput();
      }
    });
  }

  waitForInput();
}

// interactiveTest();
