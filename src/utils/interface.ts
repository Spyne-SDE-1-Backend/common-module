export interface ICreateUser {
    name: string;
    mobileNumber: string;
    email: string;
    password: string;
}

export interface IUserLogin {
    email: string;
    password: string;
}