export type Locales = "ru" | "en";
type Steps =
  | "Loading.Post"
  | "Loading.Comments"
  | "Loading.Albums"
  | "Loading.Photos"
  | "Loading.Todos"
  | "Loading.Users"
  | "Success.LoadingFinished";

export const messages: Record<Locales, Record<Steps, string>> = {
  ru: {
    "Loading.Post": "Начало загрузки. Загрузка постов...",
    "Loading.Comments": "Загрузка комментов...",
    "Loading.Albums": "Загрузка альбомов...",
    "Loading.Photos": "Загрузка фотографий...",
    "Loading.Todos": "Загрузка списка дела...",
    "Loading.Users": "Загрузка юзеров...",
    "Success.LoadingFinished": "Модули загружены!",
  },
  en: {
    "Loading.Post": "Starting loading. Loading posts...",
    "Loading.Comments": "Loading comments..",
    "Loading.Albums": "Loading albums.....",
    "Loading.Photos": "Loading photos...",
    "Loading.Todos": "Loading todo list...",
    "Loading.Users": "Loading users...",
    "Success.LoadingFinished": "Success!",
  },
};
