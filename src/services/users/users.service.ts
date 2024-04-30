import { Injectable} from '@nestjs/common';

@Injectable()
export class UsersService {
    constructor() {
        console.log("userService run");
    }

    getAllUsers(): string {
        return "service all users";
    }


    getUserById(param): string {
        return "service user id is " + param.id;
    }

    sendUsers(): string {
        return "service user post data"
    }


    updateUsers(): string{
        return "service user put data"
    }


    deleteUsers(): string{
        return "service all users delete data"
    }

    deleteUserById(id: string): string {
        return "service delete user id is " + id;
    }
}
