import { createContext, useState } from 'react';

import { api } from '../../services/api';
import { useTransactions } from '../TransactionsContext/hooks/useTransactions';

import {
  Transaction,
  DeleteTransactionContextData,
  DeleteTransactionProviderProps,
} from './types';

const DeleteTransactionContext = createContext<DeleteTransactionContextData>(
  {} as DeleteTransactionContextData,
);

function DeleteTransactionProvider({ children }: DeleteTransactionProviderProps) {
  const { transactions, setTransactions } = useTransactions();

  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | undefined>();
  const [isDeleteTransactionModalOpen, setIsDeleteTransactionModalOpen] = useState(
    false
  );

  async function deleteTransaction() {
    await api.delete(`transactions/${selectedTransaction?.id}`);

    const filteredTransactions = transactions.filter(transaction => transaction.id !== selectedTransaction?.id);
    
    setTransactions(filteredTransactions)
  }

  function handleOpenDeleteTransactionModal(transaction: Transaction) {
    setIsDeleteTransactionModalOpen(true);
    setSelectedTransaction(transaction);
  }

  function handleCloseDeleteTransactionModal() {
    setIsDeleteTransactionModalOpen(false);
  }

  return (
    <DeleteTransactionContext.Provider value={{ 
      deleteTransaction, isDeleteTransactionModalOpen, handleOpenDeleteTransactionModal,
      handleCloseDeleteTransactionModal, selectedTransaction
    }}>
      {children}
    </DeleteTransactionContext.Provider>
  );
}

export { DeleteTransactionContext, DeleteTransactionProvider };
