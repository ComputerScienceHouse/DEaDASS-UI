import fetch from 'cross-fetch';

// Credit to @ramzallan in tonic

function PUT(access_token, route, body) {
    return fetch(process.env.REACT_APP_API_ROUTE + route, {
        method: 'PUT',
        mode: 'cors',
        headers: {
            'Authorization': 'Bearer ' + access_token,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });
}