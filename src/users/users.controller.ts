import {Body, Controller, Delete, Get, Param, Post, Put, Query} from '@nestjs/common';
import {UsersService} from "../services/users/users.service";
import {User} from "../shemas/user";

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService) {
    }
    @Get( )
    getAllUsers():  Promise<User[]> {
      return   this.userService.getAllUsers();
    }

    @Get(":id")
    getUserById(@Param() param):  Promise<User> {
        return this.userService.getUserById(param);
    }
    @Post()
    sendUsers(@Body() data):  Promise<User> {
        return this.userService.sendUsers(data);
    }

    @Put()
    updateUsers(@Param() id):  Promise<User>{
        return this.userService.updateUsers(id);
    }

    /*@Delete()
    deleteUsers():  Promise<User>{
        return this.userService.deleteUsers();
    }*/

    @Delete(":id")
    deleteUserById(@Param('id') id):  Promise<User> {
        return this.userService.deleteUserById(id);
    }
}
