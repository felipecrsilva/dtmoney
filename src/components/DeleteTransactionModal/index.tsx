import { FormEvent } from 'react';
import { FiTrash } from 'react-icons/fi';
import Modal from 'react-modal';

import closeImg from '../../assets/close.svg';
import { useDeleteTransaction } from '../../context/DeleteTransactionContext/hooks/useDeleteTransaction';

import { Container } from './styles';

export function DeleteTransactionModal() {
  const { 
    selectedTransaction: transaction,
    isDeleteTransactionModalOpen,
    handleCloseDeleteTransactionModal, 
    deleteTransaction
  } = useDeleteTransaction();

  async function handleDeleteTransaction(event: FormEvent) {
    event.preventDefault();

    deleteTransaction()

    handleCloseDeleteTransactionModal();
  }

  return (
    <Modal
      isOpen={isDeleteTransactionModalOpen}
      onRequestClose={handleCloseDeleteTransactionModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={handleCloseDeleteTransactionModal}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <Container onSubmit={handleDeleteTransaction}>
        <h2>Deseja excluir essa transação? <br/> { transaction?.title }</h2>

        <div className="icon-container">
          <FiTrash />
        </div>

        <div className="buttons-container">
          <button type="button">Cancelar</button>
          <button type="submit">Excluir</button>
        </div>
      </Container>
    </Modal>
  );
}
