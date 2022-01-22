export interface IPost {
    id: number;
    title: string;
    description: string;
    body: string;
    created_at: string;
    updated_at: string;
}

export interface IPostRequest {
    title: string;
    description: string;
    body: string;
}
