export interface TransactionInterface {
    transactionMethod: string;
    transactionDetails: {
        transactionType?: string;
        transactionBalance?: string;
        transactionDate?: Date | null;
        transactionCategory?: string;
        description?: string;
        attachment?: string;
        repeatTransaction?: boolean;
        repeatTransactionStartDate?: Date | null;
        repeatTransactionEndDate?: Date | null;
    }[];
}