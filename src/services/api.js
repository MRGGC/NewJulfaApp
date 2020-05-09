import * as REST from './rest';

export async function SaveContent(content) {
    if (!content) return null;

    const date = new Date();
    const _content = {...content, createdAt: date, updatedAt: date};
    const url = REST.SERVER + '/save/id';
    const saved = await REST.sendPOSTRequest(url, _content);

    return saved;
}

export async function GetContent() {
    const url = REST.SERVER + '/save/dataget';
    const content = await REST.sendGETRequest(url);

    return content;
}

export async function GetNodes() {
    const url = REST.SERVER + '/save/coordinatesget';
    const content = await REST.sendGETRequest(url);

    return content;
}
