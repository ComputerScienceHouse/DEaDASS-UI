import fetch from 'cross-fetch';

// Credit to @ramzallan in tonic

function DELETE(access_token, route, body) {
    return fetch(process.env.REACT_APP_API_ROUTE + route, {
        method: 'DELETE',
        mode: 'cors',
        headers: {
            'Authorization': 'Bearer ' + access_token,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });
}