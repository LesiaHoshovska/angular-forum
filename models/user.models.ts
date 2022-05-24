export interface AddUser{
  name: string,
  email: string,
  password: string,
}

export interface EditUser{
  id: string,
  name: string,
  email: string,
}

export interface LoginUser{
  password: string,
  email: string,
}

export interface UserPass{
  password: string,
  newPassword: string,
}

export interface User {
  id: string,
  name: string,
  email: string,
  token: string,
}
