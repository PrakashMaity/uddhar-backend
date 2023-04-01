import { HttpException } from "../exceptions/HttpException";
import { isEmpty } from "../utils/utils";
import transactionModel from "../models/transaction.model";
import { TransactionInterface } from "../interface/transaction.interface";

class TransactionService {
  public transaction = transactionModel

  public async addTransaction(userData: TransactionInterface): Promise<any> {
    if (isEmpty(userData)) throw new HttpException(400, 'userData is empty');
    const response = await this.transaction.create({
      ...userData
    })
    return response;
  }

}

export default TransactionService;
