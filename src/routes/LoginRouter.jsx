import { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import LoginScreen from '../pages/LoginScreen';
import AppRouter from './AppRouter';
import PublicRouter from './PublicRouter';

const LoginRouter = () => {
    const { log } = useContext(AuthContext);
    return (
        <Router>
            {/* <AppRouter /> */}
            {/* <Route exact path={'/login'} component={LoginScreen} /> */}


            <Switch>
                <PublicRouter path='/login' auth={log} component={LoginScreen} />
            </Switch>
        </Router>
    );
};

export default LoginRouter;
