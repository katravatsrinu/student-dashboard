import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import Sidebar from './components/Sidebar';
import UpcomingClasses from './components/UpcomingClasses';
import Assignments from './components/Assignments';
import AllClasses from './components/AllClasses';
import Performance from './components/Performance';
import FeeDetails from './components/FeeDetails';
import Settings from './components/Settings';
import Blogs from './components/Blogs';
import News from './components/News';
import HelpCenter from './components/HelpCenter';
import CustomerCare from './components/CustomerCare';

function App() {
  const [activePage, setActivePage] = useState('dashboard');
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const handleNavClick = (content) => {
    setModalContent(content);
    setShowModal(true);
  };

  const renderContent = () => {
    switch (activePage) {
      case 'dashboard':
        return (
          <>
            <h1 className="dashboard-title">Dashboard</h1>
            <div className="content-grid">
              <UpcomingClasses />
              <Assignments />
            </div>
          </>
        );
      case 'classes':
        return <AllClasses />;
      case 'assignments':
        return <Assignments showFull={true} />;
      case 'performance':
        return <Performance />;
      case 'fees':
        return <FeeDetails />;
      case 'settings':
        return <Settings />;
      default:
        return null;
    }
  };

  return (
    <div className="app-container">
      <Sidebar activePage={activePage} onPageChange={setActivePage} />
      <div className="main-content">
        <div className="top-nav">
          <a href="#" onClick={() => handleNavClick(<Blogs />)}>Blogs</a>
          <a href="#" onClick={() => handleNavClick(<News />)}>News</a>
          <a href="#" onClick={() => handleNavClick(<HelpCenter />)}>Help center</a>
          <a href="#" onClick={() => handleNavClick(<CustomerCare />)}>Customer care</a>
        </div>
        {renderContent()}
      </div>

      {/* Modal for top nav content */}
      <div className={`modal fade ${showModal ? 'show' : ''}`} 
           style={{ display: showModal ? 'block' : 'none' }}>
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
            </div>
            <div className="modal-body">
              {modalContent}
            </div>
          </div>
        </div>
      </div>
      {showModal && <div className="modal-backdrop fade show" onClick={() => setShowModal(false)}></div>}
    </div>
  );
}

export default App;