import { fetchWithoutToken } from "../helpers/fetch";
import { types } from "../types/types";


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
        };
    };
};

const login = (user) => ({
    type: types.authLogin,
    payload: user
});
