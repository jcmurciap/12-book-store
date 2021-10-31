import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { LoginScreen } from '../components/auth/LoginScreen';
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
                        component={BookStoreScreen}
                        path="/"
                    />
                    <Redirect to="/"/>
                </Switch>
            </div>
        </Router>
    )
}
