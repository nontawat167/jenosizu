import express from "express";
import cors from "cors";
import routes from "./routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

routes(app);

const PORT = process.env.PORT || 3080;
app.listen(PORT, () => console.log(`listen on port ${PORT}`));
