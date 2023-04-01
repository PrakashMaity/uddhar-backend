import { model, Schema } from "mongoose";
import { TransactionInterface } from "../interface/transaction.interface";

const transactionSchema: Schema = new Schema({
    transactionMethod: String,
    userId:{ type: Schema.Types.ObjectId, ref: 'User' },
    transactionDetails: {
        type: [{
            transactionType: String,
            transactionBalance: String,
            transactionDate: Date,
            transactionCategory: String,
            description: String,
            attachment: String,
            repeatTransaction: Boolean,
            repeatTransactionStartDate: Date,
            repeatTransactionEndDate: Date,
        }],
        default:undefined
    }

});
const transactionModel = model<TransactionInterface & Document>("Transaction", transactionSchema);
export default transactionModel;