export interface RegisterData {
    email: string | null;
    first_name: string | null;
    last_name: string | null;
    password: string | null;
}

export interface LoginData {
    email: string | null;
    password: string | null;
}

export interface RegisterDataResponse {
    message: string;
}

export interface LoginDataResponse {
    login_token: string;
    message: string;
}

export interface ValidateUserResponse {
    message: string;
}
