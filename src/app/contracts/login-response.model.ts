export interface LogInResponseModel {
    id: string;
    accessToken: string;
    username: string;
    tokenType: string;
    userEmail: string;
    userType: string;
    roles: object[];
}