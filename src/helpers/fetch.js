// We should install json web tokens

export const baseUrl = process.env.REACT_APP_API_URL;
export const fetchWithoutToken = (endpoint, data, method="GET") => {
    
    const url = `${baseUrl}/${endpoint}`;

    if (method === 'GET') {
        return fetch( url );
    } else {
        return fetch(url, {
            method,
            headers: {
                'Content-type': 'application/json', // WHAT IS THAT?
            },
            body: JSON.stringify(data),
        });
    };
};
