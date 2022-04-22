import { useTransactions } from '../../context/TransactionsContext/hooks/useTransactions';
import { useDeleteTransaction } from '../../context/DeleteTransactionContext/hooks/useDeleteTransaction';
import { FiTrash } from 'react-icons/fi';

import { Container } from './styles';

export function TransactionsTable() {
  const { transactions } = useTransactions();
  const { handleOpenDeleteTransactionModal } = useDeleteTransaction();

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>
                {new Intl.DateTimeFormat('pt-BR').format(
                  new Date(transaction.createdAt),
                )}
              </td>
              <td>
                <button onClick={() => handleOpenDeleteTransactionModal(transaction)}>
                  <FiTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
