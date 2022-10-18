export interface PostsInterface {
  userId: number;
  id: number;
  title: string;
  body: string;
  comments?: CommentsInterface[];
}

export interface CommentsInterface {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface AlbumsInterface {
  userId: number;
  id: number;
  title: string;
  photos: PhotosInterface[];
}

export interface PhotosInterface {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export interface TodosInterface {
  userId: number;
  id: number;
  title: string;
  completed: false;
}

export interface UsersInterface {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
  todos:TodosInterface[]
}

export type ModulesType = {
  posts?: PostsInterface[];
  comments?: CommentsInterface[];
  albums?: AlbumsInterface[];
  photos?: PhotosInterface[];
  todos?: TodosInterface[];
  users?: UsersInterface[];
};
