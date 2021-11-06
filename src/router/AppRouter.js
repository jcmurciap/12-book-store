import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { BookStoreScreen } from '../components/bookStore/BookStoreScreen';
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
                    <Redirect to="/"/>
                </Switch>
            </div>
        </Router>
    );
};
