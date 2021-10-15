import { Express } from "express";

export default (app: Express) => {
  app.get("/", (req, res) => {
    res.send("");
  });

  app.use((req, res, next) => {
    res.status(404).json({ error: "not found" });
  });
};
