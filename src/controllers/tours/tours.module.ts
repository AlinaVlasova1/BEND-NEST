import { Module } from '@nestjs/common';
import {PassportModule} from "@nestjs/passport";
import {JwtModule} from "@nestjs/jwt";
import {jwtConstants} from "../../static/private/constants";
import {JwtStrategy} from "../../services/authentication/jwt-strategy/jwt-strategy.service";
import {ToursController} from "./tours.controller";
import {MongooseModule} from "@nestjs/mongoose";
import {Tour, TourSchema} from "../../shemas/tour";
import {ToursService} from "../../services/tours/tours.service";

@Module({
    imports: [MongooseModule.forFeature([{ name: Tour.name, schema:TourSchema }]),
        ToursModule,
        PassportModule,
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: {expiresIn: '60s'}
        })],
    controllers: [ToursController],
    providers: [JwtStrategy, ToursService],
})
export class ToursModule {}
