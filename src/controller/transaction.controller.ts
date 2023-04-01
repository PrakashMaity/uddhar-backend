import { NextFunction, Request, Response } from "express";
import TransactionService from "../services/transcaction.service";

class TransactionController {
  public transactionService = new TransactionService()
  public addTransaction = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userData = await this.transactionService.addTransaction(req.body)

      res.status(200).json({ data: userData, message: "User added Successfully" });
    } catch (error) {
      next(error);
    }
  };


}

export default TransactionController;
