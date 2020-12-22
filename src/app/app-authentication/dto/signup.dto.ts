export class SignUpDto {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
    phone: string;
    roles: any[];
    usertype: string;

    constructor (signUpModel: SignUpModel) {
        this.firstName = signUpModel.firstName;
        this.lastName = signUpModel.lastName;
        this.username = signUpModel.username;
        this.password = signUpModel.password;
        this.phone = signUpModel.phone;
        this.usertype = signUpModel.usertype;
        this.roles = signUpModel.roles;
        this.email = signUpModel.email;
    }
}

export interface SignUpModel {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
    phone: string;
    roles: any[];
    usertype: string;
}
