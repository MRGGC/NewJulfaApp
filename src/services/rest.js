import jwt_decode from 'jwt-decode'
import {SERVER_HOSTNAME, SERVER_PORT, SERVER_PROTOCOL, TOKEN_TYPE} from '../config'

export const SERVER = `${SERVER_PROTOCOL}://${SERVER_HOSTNAME}:${SERVER_PORT}`;

const JSON2Body = (data) => {
    let formBody = [];

    for (let key in data) {
        const encodedKey = encodeURIComponent(key);
        const encodedValue = encodeURIComponent(data[key]);
        formBody.push(encodedKey + '=' + encodedValue);
    }

    return formBody.join('&');
};

export const verifyAccessToken = async (access_token) => {
    if (access_token) {
        const decoded = jwt_decode(access_token);
        const exp = decoded['exp'];

        if (exp && Date.now() >= exp) {
            const refresh_token = await Storage.retrieveData('refresh_token');

            const res = await sendPOSTRequest(SERVER + '/token', { refresh_token });
            const newAccessToken = res.access_token;
            await Storage.storeData('access_token', newAccessToken);
        }
    }
};

export async function sendPOSTRequest(url, data, access_token) {
    await verifyAccessToken(access_token);

    const req = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };

    if (access_token) req.headers['Authorization'] = `${TOKEN_TYPE} ${access_token}`;

    const response = await fetch(url, req);

    if (response.ok) {
        return response.json();
    } else {
        return null;
    }
}

export async function sendDELETERequest(url, access_token) {
    await verifyAccessToken(access_token);

    const req = {
        method: 'DELETE',
        headers: {}
    };

    if (access_token) req.headers['Authorization'] = `${TOKEN_TYPE} ${access_token}`;

    const response = await fetch(url, req);

    if (response.ok) {
        return response.json();
    } else {
        return null;
    }
}

export async function sendGETRequest(url, access_token) {
    await verifyAccessToken(access_token);

    const req = {
        method: 'GET',
        headers: {}
    };

    if (access_token) req.headers['Authorization'] = `${TOKEN_TYPE} ${access_token}`;

    const response = await fetch(url, req);

    if (response.ok) {
        return response.json();
    } else {
        return null;
    }
}
