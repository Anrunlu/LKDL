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

  const { resultList, errors } = parse(data);

  if (errors.length > 0) {
    res.send({
      code: 4000,
      data: {},
      error: errors.length,
      message: errors,
    });
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

app.listen(SERVER_PORT, () => {
  console.log(`Server is running on port ${SERVER_PORT}`);
});
