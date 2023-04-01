import { Router } from "express";
import { Routes } from "../interface/routes.interface";
import TransactionController from "../controller/transaction.controller";

class TransactionRoute implements Routes {
  public path = "/transaction/";
  public router = Router();
  public transactionController = new TransactionController()

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}add`,this.transactionController.addTransaction);

  }
}

export default TransactionRoute;
