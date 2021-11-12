import React, { useEffect } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from "react-router-dom";
import { BookStoreScreen } from '../components/bookStore/BookStoreScreen';
import { LoginScreen } from '../components/auth/LoginScreen';
import { SignoutScreen } from '../components/auth/SignoutScreen';
import { useDispatch, useSelector } from 'react-redux';
import { startChecking } from '../actions/auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
    
    const dispatch = useDispatch();
    const { checking, uid } = useSelector( state => state.auth );

    useEffect(() => {
        dispatch(startChecking());
    }, [dispatch]);

    if(checking) {
        return (<h5>Wait a moment</h5>)
    };
    
    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute
                        component={LoginScreen}
                        exact
                        path="/login"
                        isLoggedIn={!!uid}
                    />
                    <PublicRoute
                        component={SignoutScreen}
                        exact
                        path="/register"
                        isLoggedIn={!!uid}                
                    />
                    <PrivateRoute
                        component={BookStoreScreen}
                        exact
                        path="/"
                        isLoggedIn={!!uid}
                    />
                    <Redirect to="/"/>
                </Switch>
            </div>
        </Router>
    );
};
