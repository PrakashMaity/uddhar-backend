import dotenv from "dotenv";
import App from "./src/app";
import AuthRoute from "./src/routes/auth.route";
import IndexRoute from "./src/routes/index.route";
import TransactionRoute from "./src/routes/transaction.route";
dotenv.config();

const app = new App([new IndexRoute(),new AuthRoute(),new TransactionRoute()]);

app.listen();
