import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Layout from "./components/shared/Layout";
import DashboardComponent from "./components/dashboard/DashboardComponent";
import LoginComponent from "./components/registration/login/LoginComponent";
import './App.css';
import Table from "./components/dashboard/Tables/Table";
import LoginView from "./components/registration/login/LoginView";
import BoardLayout from "./components/shared/BoardLayout";
import FormView from "./components/dashboard/Forms/FormView";

function App() {
  return (
      <Router>
          <Routes>
              <Route path='/login' element={<LoginView />} />
                  <Route exact path='/' element={<BoardLayout/>}>
                      {/*path='dash'*/}
                      <Route index element={<DashboardComponent />}/>
                      <Route path='table' element={<Table/>} />
                      <Route path='login' element={<LoginView />} />
                      <Route path='forms' element={<FormView />} />
                  </Route>
          </Routes>
      </Router>
  );
}

export default App;
