import { fetchWithoutToken, fetchWithToken } from "../helpers/fetch";
import { types } from "../types/types";
import Alert from '@mui/material/Alert';

// start authentication process
export const startLogin = (email, password) => {
    
    return async(dispatch) => {
        const resp = await fetchWithoutToken('auth', {email, password}, "POST");
        const body = await resp.json();
        if (body.ok) {
            localStorage.setItem('token', body.token);
            
            //momento exacto de generación del token.
            localStorage.setItem('token-init-date', new Date().getTime());

            dispatch(login({
                uid: body.uid,
                name: body.name,
            }));
        } else {
            <Alert severity="error">Error, `${body.msg}`</Alert>
        };
    };
};

const login = (user) => ({
    type: types.authLogin,
    payload: user,
});


export const startRegister = (name, email, password) => {

    return async(dispatch) => {
        const resp = await fetchWithoutToken(
            'auth/register', {name, email, password},'POST'
        );
        const body = await resp.json();
        if (body.ok) {
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(register({
                uid: body.uid,
                name: body.name,
            }));
        } else {
            // TODO
        }
    
    };
};

const register = (user) => ({
    type: types.authRegister,
    payload: user,
});


export const startChecking = () => {

    return async(dispatch) => {
        const resp = await fetchWithToken('auth/renew');
        const body = await resp.json();
        if (body.ok) {
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(login({
                uid: body.uid,
                name: body.name,
            }))
        } else {
            dispatch(checkingFinish()); 
        }
    };
};

const checkingFinish = () => ({
    type: types.authCheckingFinish
});

export const logout = () => ({
    type: types.authLogout,
})