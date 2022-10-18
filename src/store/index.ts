import { configureStore, createListenerMiddleware } from "@reduxjs/toolkit";

import modulesReducer from "./moduleSlice";
import postsReducer from "./postsSlice";
import albumsReducer from "./albumsSlice";
import usersReducer from "./usersSlice";
import { addModules } from "./moduleSlice";
import { addPosts } from "./postsSlice";
import { addAlbums } from "./albumsSlice";
import { addUsers } from "./usersSlice";

const listenerMiddleware = createListenerMiddleware();

export const store = configureStore({
  reducer: {
    modules: modulesReducer,
    posts: postsReducer,
    albums: albumsReducer,
    users: usersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listenerMiddleware.middleware),
});

listenerMiddleware.startListening({
  actionCreator: addModules,
  effect: (action, listenerApi) => {
    const { posts, comments, albums, photos, users, todos } =
      store.getState().modules;
    //Блок постов и комментариев
    if (!!posts && !!comments && !!action.payload.comments) {
      const readyPosts = posts?.map((post) => ({
        ...post,
        comments: comments?.filter((comment) => comment.postId === post.id),
      }));
      listenerApi.dispatch(addPosts(readyPosts));
    }
    //Блок альбомов
    if (!!albums && !!photos && !!action.payload.photos) {
      const readyAlbums = albums?.map((album) => ({
        ...album,
        photos: photos
          ?.filter((photo) => photo.albumId === album.id)
          .splice(0, 4),
      }));
      listenerApi.dispatch(addAlbums(readyAlbums));
    }
    //Блок юзеров
    if (!!users && !!todos && !!action.payload.users) {
      const readyUsers = users?.map((user) => ({
        ...user,
        todos: todos?.filter((todo) => user.id === todo.userId),
      }));
      listenerApi.dispatch(addUsers(readyUsers));
    }
  },
});

export type RootState = ReturnType<typeof store.getState>;
