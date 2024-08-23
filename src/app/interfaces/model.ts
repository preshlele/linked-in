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
    refresh_token: string;
    message: string;
}

export interface ValidateUserResponse {
    message: string;
}

export interface User {
    client: string;
    email: string;
    exp: number;
    firstname: string;
    lastname: string;
    role: string;
}

export interface Author {
    firstName: string;
    lastName: string;
    headline: string;
    username: string;
}

export interface Post {
    id: number;
    text: string;
    totalReactionCount: number;
    likeCount: number;
    appreciationCount: number;
    empathyCount: number;
    interestCount: number;
    praiseCount: number;
    commentsCount: number;
    repostsCount: number;
    postedAt: string;
    postedDate: string;
    author: Author;
    funnyCount?: number;
}

export interface Recommendation {
    name: string;
    tagline: string;
    followers: number;
}

export interface AuthorProfilePicture {
    width: number;
    height: number;
    url: string;
}

export interface AuthorDetails {
    firstName: string;
    lastName: string;
    headline: string;
    username: string;
    url: string;
    profilePictures: AuthorProfilePicture[];
}

export interface ArticleDetails {
    title: string;
    subtitle: string;
    link: string;
}

export interface LinkedInPost {
    text: string;
    totalReactionCount: number;
    likeCount: number;
    appreciationCount: number;
    empathyCount: number;
    interestCount: number;
    praiseCount: number;
    commentsCount: number;
    repostsCount: number;
    funnyCount?: number;
    postUrl: string;
    postedAt: string;
    postedDate: string;
    postedDateTimestamp: number;
    urn: string;
    author: AuthorDetails;
    company: object;
    document: object;
    article: ArticleDetails;
}

export interface LinkedInPostResponse {
    success: boolean;
    message: string;
    data: LinkedInPost[];
}

export interface PostResponse{
    success: boolean;
    status: number;
    posts: Post [];
}

