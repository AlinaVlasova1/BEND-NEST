import { Module } from '@nestjs/common';
import {UsersController} from "./users.controller";
import {UsersService} from "../../services/users/users.service";
import {MongooseModule} from "@nestjs/mongoose";
import {User, UserSchema} from "../../shemas/user";
import {PassportModule} from "@nestjs/passport";
import {AuthService} from "../../services/authentication/auth/auth.service";
import {JwtModule} from "@nestjs/jwt";
import {jwtConstants} from "../../static/private/constants";
import {JwtStrategy} from "../../services/authentication/jwt-strategy/jwt-strategy.service";
import {LocalGuardService} from "../../services/local-guard/local-guard.service";

@Module({
    imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    PassportModule,
    JwtModule.register({
        secret: jwtConstants.secret
    })],
    controllers: [UsersController],
    providers: [UsersService, AuthService, JwtStrategy],
})
export class UsersModule {}
