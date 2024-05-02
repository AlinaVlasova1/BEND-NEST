import { Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {User, UserDocument} from "../../shemas/user";
import {Model} from "mongoose";

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model <UserDocument>) {
        console.log("userService run");
    }

    async getAllUsers(): Promise<User[]> {
        return this.userModel.find();
    }


    async getUserById(id): Promise<User> {
        return this.userModel.findById(id);
    }

    async sendUsers(data): Promise<User> {
        const userData = new this.userModel(data);
        return userData.save();
    }


    async updateUsers(id: string): Promise<User> {
        return this.userModel.findByIdAndUpdate(id);
    }


    /*async deleteUsers(): Promise<User> {
        return this.userModel.deleteMany(User.name);
    }*/

    async deleteUserById(id: string): Promise<User> {
        return this.userModel.findByIdAndDelete(id);
    }
}
