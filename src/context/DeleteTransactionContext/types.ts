import { ReactNode } from 'react';

interface Transaction {
  id: string;
  title: string;
  type: string;
  amount: number;
  category: string;
  createdAt: string;
}

interface DeleteTransactionProviderProps {
  children: ReactNode;
}

interface DeleteTransactionContextData {
  deleteTransaction(): Promise<void>;
  isDeleteTransactionModalOpen: boolean;
  handleOpenDeleteTransactionModal(transaction: Transaction): void;
  handleCloseDeleteTransactionModal(): void;
  selectedTransaction: Transaction | undefined;
}

export type {
  Transaction,
  DeleteTransactionProviderProps,
  DeleteTransactionContextData,
};
