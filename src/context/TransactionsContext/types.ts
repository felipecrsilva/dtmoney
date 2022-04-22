import { ReactNode, Dispatch } from 'react';

interface Transaction {
  id: string;
  title: string;
  type: string;
  amount: number;
  category: string;
  createdAt: string;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction(transaction: TransactionInput): Promise<void>;
  setTransactions: Dispatch<React.SetStateAction<Transaction[]>>;
}

export type {
  Transaction,
  TransactionInput,
  TransactionsProviderProps,
  TransactionsContextData,
};
