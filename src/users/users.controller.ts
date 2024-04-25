import {Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get()
    getAllUsers(): string {
        return "all users";
    }

    @Get(":id")
    getUserById(@Param() param): string {
        return "user id is " + param.id;
    }
    @Post()
    sendUsers(): string {
        return "user post data"
    }

    @Put()
    updateUsers(): string{
        return "user put data"
    }

    @Delete()
    deleteUsers(): string{
        return "all users delete data"
    }
    @Delete(":id")
    deleteUserById(@Param() param): string {
        return "delete user id is " + param.id;
    }
}
