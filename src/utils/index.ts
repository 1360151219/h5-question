import { v4 as uuidv4 } from "uuid";
import axios from 'axios';
export function ParseQuery(query: { [key: string]: any }) {
    let queryStr = '?';
    const queryList: string[] = [];
    for (const key in query) {
        const element = query[key];
        if (element !== undefined && element !== null) {
            if (element instanceof Array) {
                element.forEach(e => {
                    queryList.push(`${key}=${e}`)
                });
            } else queryList.push(`${key}=${element}`)
        }
    }
    queryStr = queryStr + queryList.join('&');
    return queryStr
}
const getUId = (): string => {
    return uuidv4().split("-").join(''); // ⇨ '9b1deb4d'
};
export const uuid = getUId()
export async function recordAccessType(query: { access_type: number, request_id: string }): Promise<void> {
    return (await axios({
        method: 'post',
        url: '/api/access_type',
        data: query
    })).data
}
export async function recordRemainTime(query: { page_id: number, time: number, access_type: number, request_id: string }): Promise<void> {
    return (await axios({
        method: 'post',
        url: '/api/stay',
        data: query
    })).data
}
export async function recordPosterSaved(query: { request_id: string, is_poster_saved: boolean }): Promise<void> {
    return (await axios({
        method: 'post',
        url: '/api/poster_saved',
        data: query
    })).data
}