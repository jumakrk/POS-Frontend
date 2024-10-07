import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './components/Dashboard';
import Logout from './components/Logout';

function App() {
  return (
    <div className="App">
              <Router>
            <div>
                <Switch>
                    <Route path="/" exact component={LoginForm} /> {/* Opens the login page as th first page */}
                    <Route path="/login">
                        <LoginForm/>
                    </Route>
                    <Route path="/register">
                        <RegisterForm />
                    </Route>
                    <Route path="/dashboard">
                        <Dashboard />
                    </Route>
                    <Route path="/logout">
                        <Logout/>
                    </Route>
                </Switch>
            </div>
        </Router>
        <ToastContainer/>
    </div>
  );
}

export default App;
