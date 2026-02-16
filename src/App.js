import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import './App.css';

function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <Router>
          <div className="App">
            <header>
              <div className="header-container">
                <div className="logo-section">
                  <img src="/logo12.png" alt="DIY Assist Logo" className="logo" />
                  <h1>The DIY Assist</h1>
                </div>
                <div className="nav">
                  <p>Welcome, {user.username}!</p>
                  <button onClick={signOut} className="btn-signout">
                    Sign Out
                  </button>
                </div>
              </div>
            </header>

            <main className="content">
              <Routes>
                <Route
                  path="/"
                  element={
                    <div className="home-content">
                      <h2>Welcome to The DIY Assist</h2>
                      <p>Expert help via video chat for all your DIY projects!</p>
                      <p>You are signed in as: <strong>{user.email}</strong></p>
                    </div>
                  }
                />
              </Routes>
            </main>
          </div>
        </Router>
      )}
    </Authenticator>
  );
}

export default App;