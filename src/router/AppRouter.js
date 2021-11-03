import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { LoginScreen } from '../pages/auth/LoginScreen';
import { SignoutScreen } from '../pages/auth/SignoutScreen';
import { BookStoreScreen } from '../components/bookStore/BookStoreScreen';

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
                        path="/"
                    />
                    <Redirect to="/"/>
                </Switch>
            </div>
        </Router>
    )
}
