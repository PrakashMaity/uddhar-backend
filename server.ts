import dotenv from "dotenv";
import App from "./src/app";
import IndexRoute from "./src/routes/index.route";
dotenv.config();

const app = new App([new IndexRoute()]);

app.listen();
