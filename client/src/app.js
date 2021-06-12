import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

//PAGES
import Navbar from './components/Navbar/index'
import DashboardPage from './components/dashboard/index'
import CustomersPage from './components/customers/index'
import ParkingPage from './components/parking/index'
import ReservationPage from './components/reservation/index'
import AuthenficationPage from './components/Authentification/index'
import NotFoundPage from './components/404'



export default function App() {
  
  return (
    <div>
        <Router>
          <Navbar/>
            <Switch>
                <Route exact path="/" component={AuthenficationPage}/>
                <Route exact path="/customers" component={CustomersPage} />
                <Route exact path="/dashboard" component={DashboardPage} />
                <Route exact path="/reservation" component={ReservationPage} />
                <Route exact path="/parking" component={ParkingPage} />
                 <Route exact path="/404" component={NotFoundPage} />
                <Redirect to="/404" />
       

              
            </Switch>
           
        </Router>
    </div>
  );
}