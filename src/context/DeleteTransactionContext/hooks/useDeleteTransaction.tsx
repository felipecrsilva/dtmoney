import { useContext } from 'react';

import { DeleteTransactionContext } from '..';

export function useDeleteTransaction() {
  const context = useContext(DeleteTransactionContext);

  return context;
}
