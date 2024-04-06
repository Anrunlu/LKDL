import express from "express";
import { parse } from "../index";
import { http } from "./http";
import { SERVER_PORT } from "./config";
import cors from "cors";
const app = express();

app.use(express.json());

app.use(cors());

app.post("/parse", (req, res) => {
  const step = req.query.step;
  const data = req.body.data;

  // 如果data不是字符串，返回错误
  if (typeof data !== "string") {
    res.send({
      code: 4000,
      errors: [
        {
          message: "data should be a string",
        },
      ],
    });

    return;
  }

  const { resultList, errors } = parse(data);

  if (errors.length > 0) {
    res.send({
      code: 4000,
      errors,
    });

    return;
  }

  if (step) {
    resultList.forEach((item: any) => {
      item.id = req.query.id;
      item.next = req.query.next;
    });
  }

  const payload: any = {
    data: resultList,
  };

  console.dir(payload, { depth: Infinity });

  http.post("/", payload).then((response) => {
    const serverRes = response.data;

    // 内容不存在
    if (serverRes.code == 4005) {
      res.send({
        code: 4005,
        errors: [
          {
            message: serverRes.message,
          },
        ],
      });

      return;
    }

    res.send({
      code: 2000,
      data: {
        serverRes,
        parserRes: resultList,
      },
    });
  });
});

app.get("/count", (req, res) => {
  http.get("/nums").then((response) => {
    const serverRes = response.data;

    res.send({
      code: 2000,
      data: {
        serverRes,
      },
    });
  });
});

app.get("/tupleList", (req, res) => {
  const page = req.query.page;
  const limit = req.query.limit;

  http.get(`/data_page?page=${page}&limit=${limit}`).then((response) => {
    const serverRes = response.data;

    res.send({
      code: 2000,
      data: {
        serverRes,
      },
    });
  });
});

app.get("/ruleList", (req, res) => {
  const page = req.query.page;
  const limit = req.query.limit;

  http.get(`/rule_page?page=${page}&limit=${limit}`).then((response) => {
    const serverRes = response.data;

    res.send({
      code: 2000,
      data: {
        serverRes,
      },
    });
  });
});

app.listen(SERVER_PORT, () => {
  console.log(`Server is running on port ${SERVER_PORT}`);
});
