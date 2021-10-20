
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './pages/Shared/Header/Header';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import Register from './pages/Login/Register/Register';
import Counseling from './pages/Counseling/Counseling';
import ServiceDetails from './pages/Home/ServiceDetails/ServiceDetails';
import Footer from './pages/footer/Footer';
import GetAppoinment from './pages/getAppoinment/GetAppoinment'
import NotFound from './pages/notFound/NotFound';



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
            <PrivateRoute path="/serviceDetails/:id">
              <ServiceDetails></ServiceDetails>

            </PrivateRoute>
            <PrivateRoute path="/counseling">
              <Counseling></Counseling>

            </PrivateRoute>
            <PrivateRoute path="/appoinment">
              <GetAppoinment></GetAppoinment>

            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>


          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>



    </div>
  );
}

export default App;
