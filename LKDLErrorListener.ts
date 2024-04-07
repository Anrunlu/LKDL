import { ErrorListener, RecognitionException, Recognizer } from "antlr4";

export interface ILKDLError {
  startLineNumber: number;
  startColumn: number;
  endLineNumber: number;
  endColumn: number;
  message: string;
  code: string;
}

export default class LKDLErrorListener implements ErrorListener<any> {
  private errors: ILKDLError[] = [];
  syntaxError(
    recognizer: any,
    offendingSymbol: any,
    line: number,
    charPositionInLine: number,
    message: string,
    e: RecognitionException | undefined
  ): void {
    this.errors.push({
      startLineNumber: line,
      endLineNumber: line,
      startColumn: charPositionInLine,
      endColumn: charPositionInLine + 1,
      message,
      code: "1",
    });
  }

  getErrors(): ILKDLError[] {
    return this.errors;
  }

  pushError(error: ILKDLError) {
    this.errors.push(error);
  }
}
