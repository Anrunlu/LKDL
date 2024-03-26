import * as readline from "readline";
import { CharStream, CommonTokenStream, ParseTreeWalker } from "antlr4";
import { MyTreeWalker } from "./walker";
import LKDLLexer from "./parser/LKDLLexer";
import LKDLParser from "./parser/LKDLParser";

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
const input = `(张三, 李四).朋友 == $A;`;
// const input =
//   "r +=`被称为“乐圣”的音乐家是谁？`|`被称为(乐圣)的(音乐家)是(C)`|:=C.职业==B&&C.称号==A;";
// const input = `规则 -= 学生 | 学生 :=（姓名，性别，学号，年级，学院）；`;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "lkdl> ",
});

function waitForInput() {
  rl.question("lkdl>", (input) => {
    const chars = new CharStream(input);
    const lexer = new LKDLLexer(chars);
    const tokens = new CommonTokenStream(lexer);
    const parser = new LKDLParser(tokens);
    const tree = parser.prog();
    const resultList: any = [];

    const walker = new MyTreeWalker();
    ParseTreeWalker.DEFAULT.walk(walker, tree);

    console.log(resultList);

    if (input.toLowerCase() === "exit") {
      rl.close();
    } else {
      waitForInput();
    }
  });
}

waitForInput();
