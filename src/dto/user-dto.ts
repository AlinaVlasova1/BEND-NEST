import {IUser} from "../interfaces/users";


export class UserDto implements IUser {
    cardNumber: string;
    email: string;
    id: string;
    password: string;
    login: string

}