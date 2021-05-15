import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './compenents/Header';
import Login from './compenents/Login';
import { AuthProvider, AuthContext } from './AuthProvider';
import { useContext } from 'react';



function App() {

  const authContext = useContext(AuthContext)

  return (
    <div className="container">
      <Header />
      { authContext.auth.email ? 'Welcome' : <Login />}
    </div>

  );
}

function AppWithStore() {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  )
}



export default AppWithStore;
