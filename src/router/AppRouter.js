import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { BookStoreScreen } from '../components/bookStore/BookStoreScreen';
import { UserScreen } from '../components/ui/UserScreen';
import { LoginScreen } from '../components/auth/LoginScreen';
import { SignoutScreen } from '../components/auth/SignoutScreen';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route
                        component={LoginScreen}
                        exact
                        path="/login"
                    />
                    <Route
                        component={SignoutScreen}
                        exact
                        path="/register"
                    />
                    <Route
                        component={BookStoreScreen}
                        exact
                        path="/"
                    />
                    <Route
                        component={UserScreen}
                        exact
                        path="/user"
                    />
                    <Redirect to="/"/>
                </Switch>
            </div>
        </Router>
    );
};
