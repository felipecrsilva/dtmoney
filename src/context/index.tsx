import { ReactNode } from 'react';
import { TransactionsProvider } from './TransactionsContext';
import { DeleteTransactionProvider } from './DeleteTransactionContext';

interface AppContextProviderProps {
  children: ReactNode;
}

export function AppContextProvider({ children }: AppContextProviderProps) {
  return (
    <TransactionsProvider>
      <DeleteTransactionProvider>
        { children }
      </DeleteTransactionProvider>
    </TransactionsProvider>
  );
}
