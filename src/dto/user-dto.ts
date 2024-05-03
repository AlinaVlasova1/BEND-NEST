import {IUser} from "../interfaces/users";


export class UserDto implements IUser {
    cardNumber: string;
    email: string;
    id: string;
    constructor(public psw, public login) {
    }
}