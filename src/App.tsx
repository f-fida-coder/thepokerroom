import { useState } from 'react';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import Lobby from './pages/Lobby';
import PokerTablePage from './pages/PokerTablePage';
import Spectator from './pages/Spectator';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import { demoTables, findDemoTable } from './data/demoTables';
import type { DemoPage } from './types/demo';

function App() {
  const [currentPage, setCurrentPage] = useState<DemoPage>('landing');
  const [selectedTableId, setSelectedTableId] = useState(demoTables[0].id);

  const selectedTable = findDemoTable(selectedTableId);

  const openTable = (tableId: string, page: DemoPage = 'table') => {
    setSelectedTableId(tableId);
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'landing':
        return <Landing onNavigate={(page) => setCurrentPage(page)} />;
      case 'login':
        return <Login onNavigate={(page) => setCurrentPage(page)} />;
      case 'register':
        return <Register onNavigate={(page) => setCurrentPage(page)} />;
      case 'lobby':
        return (
          <Lobby
            onNavigate={(page) => setCurrentPage(page)}
            onOpenTable={(tableId, page) => openTable(tableId, page)}
          />
        );
      case 'table':
        return (
          <PokerTablePage
            onNavigate={(page) => setCurrentPage(page)}
            table={selectedTable}
          />
        );
      case 'spectator':
        return (
          <Spectator
            onNavigate={(page) => setCurrentPage(page)}
            table={selectedTable}
          />
        );
      case 'admin-login':
        return <AdminLogin onNavigate={(page) => setCurrentPage(page)} />;
      case 'admin-dashboard':
        return (
          <AdminDashboard
            onNavigate={(page) => setCurrentPage(page)}
            onOpenTable={(tableId, page) => openTable(tableId, page)}
          />
        );
      default:
        return <Landing onNavigate={(page) => setCurrentPage(page)} />;
    }
  };

  return (
    <div>{renderPage()}</div>
  );
}

export default App;
