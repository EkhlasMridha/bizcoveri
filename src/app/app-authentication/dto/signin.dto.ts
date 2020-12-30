export class SignInDto {
    // email: string;
    username: string;
    password: string;

    constructor (signIn: SigninModel) {
        // this.email = signIn.email;
        this.username = signIn.username;
        this.password = signIn.password;
    }
}

export interface SigninModel {
    username: string;
    password: string;
}