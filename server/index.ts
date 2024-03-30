import express from "express";
import { parse } from "../index";
import { http } from "./http";
const app = express();

app.use(express.json());

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

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
