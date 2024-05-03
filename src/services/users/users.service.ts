import { Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {User, UserDocument} from "../../shemas/user";
import {Model} from "mongoose";
import {UserDto} from "../../dto/user-dto";
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>,
                private jwtService : JwtService) {
        console.log('userService run')
    }


    async getAllUsers(): Promise<User[]> {
        return this.userModel.find();
    }

    async getUserById(id): Promise<User> {
        return this.userModel.findById(id);
    }

    async sendUser(data): Promise<User> {
        console.log('data', data)
        const userObj = new UserDto(data.password, data.login)
        const userData = new this.userModel(userObj);
        return userData.save();
    }

    async updateUsers(id: string, body): Promise<User> {
        return this.userModel.findByIdAndUpdate(id, body);
    }

    async deleteUsers(): Promise<any> {
        return this.userModel.deleteMany({});
    }

    async  deleteUserById(id: string): Promise<User> {
        return this.userModel.findByIdAndDelete(id);
    }

    async checkAuthUser(login: string, psw: string): Promise<User[]> {
        const userArray = await this.userModel.find({login: login, psw: psw})
        return userArray.length === 0 ? null : userArray;
    }

    async checkRegUser(login: string): Promise<User[]> {
        return this.userModel.find({login: login});
    }

    async login(user: UserDto) {
        const payload = {username: user.login, password: user.psw};
        return {
            access_token: this.jwtService.sign(payload)
        }
    }

}
