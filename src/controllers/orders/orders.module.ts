import { Module } from '@nestjs/common';
import {OrdersController} from "./orders.controller";
import {MongooseModule} from "@nestjs/mongoose";
import {Order, OrderSchema} from "../../shemas/order";
import {OrderService} from "../../services/orders/order.service";
import {Tour, TourSchema} from "../../shemas/tour";

@Module({
    imports: [MongooseModule.forFeature([
        { name: Order.name, schema: OrderSchema },
        { name: Tour.name, schema:TourSchema }]

    )],
    controllers: [OrdersController],
    providers: [OrderService]
})
export class OrdersModule {}
