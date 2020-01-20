import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import Profile from "./Profile";
import history from "../utils/history";
import { useAuth0 } from '../react-auth0-spa';

const Login = () => {
    
    const { loading } = useAuth0();

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Router history={history}>
                <NavBar />
                <Switch>
                    <Route exact path='/' />
                    <Route path='/profile' component={Profile} />
                </Switch>
            </Router>
        </div>
    );
}

export default Login;