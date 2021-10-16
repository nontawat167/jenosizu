import { Express } from "express";
import api from "./routes/api";

export default (app: Express) => {
  app.get("/", (req, res) => {
    res.send("");
  });

  app.use("/jenosize/api", api);

  app.use((req, res, next) => {
    res.status(404).json({ error: "not found" });
  });
};
