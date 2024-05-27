import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
              <Router>
            <div>
                <Switch>
                    <Route path="/login">
                        <LoginForm/>
                    </Route>
                    <Route path="/register">
                        <RegisterForm />
                    </Route>
                </Switch>
            </div>
        </Router>
        <Dashboard/>
        <ToastContainer/>
    </div>
  );
}

export default App;
