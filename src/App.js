
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './pages/Shared/Header/Header';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import GetAppoinment from './pages/GetAppoinment/GetAppoinment';
import Register from './pages/Login/Register/Register';
import Counseling from './pages/Counseling/Counseling';



function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/getappoinment/:serviceId">
              <GetAppoinment></GetAppoinment>

            </PrivateRoute>
            <PrivateRoute path="/counseling">
              <Counseling></Counseling>

            </PrivateRoute>


          </Switch>
        </Router>
      </AuthProvider>



    </div>
  );
}

export default App;
