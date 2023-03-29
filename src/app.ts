import { Routes } from "./interface/routes.interface";
import express from "express";
import dotenv from "dotenv";
import { connect, ConnectOptions } from "mongoose";
import { configData, dataBaseOption } from "./config/config";

dotenv.config();

class App {
  public app: express.Application;
  public port: string | number;

  constructor(routes: Routes[]) {
    this.app = express();
    this.port = 8080;
    this.connectToDatabase()
    this.initializeMiddlewares();
    this.initializeRoutes(routes);
  }

  private connectToDatabase() {
    connect(configData.MONGODB,{
      useNewUrlParser: true,
      useUnifiedTopology: true
    }as ConnectOptions);
  }

  private initializeMiddlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`=================================`);
      console.log(`🚀 App listening on the port 8080`);
      console.log(`=================================`);
    });
  }
  private initializeRoutes(routes: Routes[]) {
    routes.forEach((route) => {
      this.app.use("/", route.router);
    });
  }
}

export default App;
