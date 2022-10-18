const HOST = 'https://jsonplaceholder.typicode.com';

export enum ModulesAPI {
    Posts,
    Comments,
    Albums,
    Photos,
    Todos,
    Users,
}

export const pullUrls: string[] = [
    `${HOST}/posts`,
    `${HOST}/comments`,
    `${HOST}/albums`,
    `${HOST}/photos`,
    `${HOST}/todos`,
    `${HOST}/users`,
];

export const API_POSTS = `${HOST}/posts`
export const API_COMMENTS = `${HOST}/comments`
export const API_ALBUMS = `${HOST}/albums`
export const API_PHOTOS = `${HOST}/photos`
export const API_TODOS = `${HOST}/todos`
export const API_USERS = `${HOST}/users`
