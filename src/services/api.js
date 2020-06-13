import * as REST from './rest';
import * as COOKIE from './cookie';

export async function SaveContent(list) {

    const url = REST.SERVER + '/save/id';
    const saved = await REST.sendPOSTRequest(url, {list});

    return saved;
}

export async function GetContent() {
    const url = REST.SERVER + '/save/dataget';
    const content = await REST.sendGETRequest(url);

    return content.list;
}

export async function GetNodes() {
    const url = REST.SERVER + '/save/coordinatesget';
    const content = await REST.sendGETRequest(url);

    return content;
}

export async function Login(username, password) {
    const url = REST.SERVER + '/login';
    const response = await REST.sendPOSTRequest(url, { username, password });

    if (response.success) {
        COOKIE.setCookie('tkn', response.token);
    }

    return response;
}
