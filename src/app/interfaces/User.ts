export interface User{
    email:string|null,
    password:string|null,
    name:string|null
}

export interface UserLoginViewModel{
    email:string,
    password:string
}