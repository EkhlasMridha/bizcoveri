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
        this.firstName = signUpModel.firstname;
        this.lastName = signUpModel.lastname;
        this.username = signUpModel.username;
        this.password = signUpModel.password;
        this.phone = signUpModel.phone;
        this.usertype = signUpModel.usertype;
        this.roles = signUpModel.roles;
        this.email = signUpModel.email;
    }
}

export interface SignUpModel {
    firstname: string;
    lastname: string;
    username: string;
    email: string;
    password: string;
    phone: string;
    roles: any[];
    usertype: string;
}
