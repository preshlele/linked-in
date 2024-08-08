export interface RegisterData {
    email: string;
    first_name: string;
    last_name: string;
    password: string;
}

export interface LoginData {
    email: string;
    password: string;
}

export interface RegisterDataResponse{
    message: string;
}

export interface LoginDataResponse{
    login_token: string;
    message: string;
}

export interface ValidateUserResponse{
    message: string;
}