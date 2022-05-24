export interface Post {
  _id: string;
  title: string;
  body: string;
  userId: User;
  commentIds: Comment[],
  isActive: boolean,
  createdAt: string,
  updatedAt: string
}

export interface PostsResponse {
  docs: Post[];
  pages: number;
  page: number;
  total: number;
  limit: number
}

export interface User{
  _id: string,
  name: string
}

export interface Comment{
  _id: string,
  userId: [string],
  body: string,
  isActive: boolean,
  createdAt: string,
  updatedAt: string
}

export interface AddPost{
  title: string;
  body: string;
}

export interface EditPost{
  _id: string;
  title: string;
  body: string;
}

export interface EditComment{
  _id: string,
  body: string
}
