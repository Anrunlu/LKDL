import express from "express";
import { parse } from "../index";
import { http } from "./http";
import { SERVER_PORT } from "./config";
import cors from "cors";
const app = express();

app.use(express.json());

app.use(cors());

app.post("/parse", (req, res) => {
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

  console.dir(resultList, { depth: Infinity });

  if (errors.length > 0) {
    res.send({
      code: 4000,
      errors,
    });

    return;
  }

  http.post("/", { data: resultList }).then((response) => {
    const serverRes = response.data;

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
