// import logo from './logo.svg';
import './styles/App.scss';
import React, { useContext, useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Footer from './components/Footer';
import { observer } from 'mobx-react-lite';
import { Context } from './index';
import { check } from './http/userAPI';
import { Spinner } from 'react-bootstrap';


const App = observer(() => {
  const {user} = useContext(Context);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    check().then(data => {
      user.setUser(true);
      user.setIsAuth(true);
      user.setRole(data.dataRole);
      console.log(data.dataRole)
    }).finally(() => setLoading(false))
  }, []);

  if (loading) {
    return <Spinner animation="border" role="status" style={{color: 'lightblue', margin: 'auto'}}/>
  }
  
  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
      <Footer />
    </BrowserRouter>
  );
});

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

export default App;
