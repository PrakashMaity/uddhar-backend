import dotenv from "dotenv";
import App from "./src/app";
import AuthRoute from "./src/routes/auth.route";
import IndexRoute from "./src/routes/index.route";
dotenv.config();

const app = new App([new IndexRoute(),new AuthRoute()]);

app.listen();
