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
  const resList = parse(data);

  http.post("/", { data: resList }).then((response) => {
    const serverRes = response.data;

    res.send({
      code: 2000,
      data: {
        serverRes,
        parserRes: resList,
      },
    });
  });
});

app.listen(SERVER_PORT, () => {
  console.log(`Server is running on port ${SERVER_PORT}`);
});
