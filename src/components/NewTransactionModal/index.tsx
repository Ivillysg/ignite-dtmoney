import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { Container, RadioBox, TransactionTypeContainer } from './styles';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { api } from '../../services/api';

Modal.setAppElement('#root');
interface Props {
  isOpen: boolean;
  onRequestClose: () => void;
}
export function NewTransactionModal({ isOpen, onRequestClose }: Props) {
  const [state, setState] = useState({
    title: '',
    value: 0,
    category: '',
    type: 'deposit',
  });
  function handleCreateNewTransaction(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    api.post('/transactions', state);
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button className="react-modal-close" type="button">
        <img src={closeImg} alt="Fecha modal" onClick={onRequestClose} />
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar Transação</h2>
        <input
          type="text"
          placeholder="Titulo"
          value={state.title}
          onChange={event => setState({ ...state, title: event.target.value })}
        />
        <input
          type="number"
          placeholder="Valor"
          onChange={event =>
            setState({ ...state, value: Number(event.target.value) })
          }
        />
        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => setState({ ...state, type: 'deposit' })}
            isActive={state.type === 'deposit'}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => setState({ ...state, type: 'withdraw' })}
            isActive={state.type === 'withdraw'}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>
        <input
          type="text"
          placeholder="Categoria"
          onChange={event =>
            setState({ ...state, category: event.target.value })
          }
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
