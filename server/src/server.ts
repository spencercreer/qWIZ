import express, { Application } from "express";
import routes from "./routes";

const app: Application = express();
const PORT = 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`); // eslint-disable-line no-console
});
