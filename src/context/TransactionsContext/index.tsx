import { createContext, useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';

import { api } from '../../services/api';

import {
  Transaction,
  TransactionInput,
  TransactionsContextData,
  TransactionsProviderProps,
} from './types';

const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData,
);

function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>(() => {
    const storagedTransactions = localStorage.getItem('@dtmoney:transactions')

    if (storagedTransactions) {
      return JSON.parse(storagedTransactions);
    }

    return [];
  });

  async function createTransaction(transactionInput: TransactionInput) {
    const transaction = {
      id: uuid(),
      ...transactionInput,
      createdAt: String(new Date())
    }

    localStorage.setItem('@dtmoney:transactions', JSON.stringify([ ...transactions, transaction ]))
    setTransactions([ ...transactions, transaction ]);
  }

  return (
    <TransactionsContext.Provider value={{ transactions, setTransactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}

export { TransactionsContext, TransactionsProvider };
