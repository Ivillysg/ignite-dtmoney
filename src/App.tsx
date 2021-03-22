import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import { useState } from 'react';
import { NewTransactionModal } from './components/NewTransactionModal';

export function App() {
  const [newTransactionModalOpen, setNewTransactionModalOpen] = useState(false);
  function handleOpenNewTransactionModal() {
    setNewTransactionModalOpen(true);
  }
  function handleCloseNewTransactionModal() {
    setNewTransactionModalOpen(false);
  }
  return (
    <>
      <Header onClick={handleOpenNewTransactionModal} />
      <Dashboard />
      <GlobalStyle />
      <NewTransactionModal
        isOpen={newTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
    </>
  );
}
