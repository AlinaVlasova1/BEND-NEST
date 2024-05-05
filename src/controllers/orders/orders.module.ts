import { Module } from '@nestjs/common';
import {OrdersController} from "./orders.controller";
import {MongooseModule} from "@nestjs/mongoose";
import {Order, OrderSchema} from "../../shemas/order";
import {OrderService} from "../../services/orders/order.service";

@Module({
    imports: [MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }])],
    controllers: [OrdersController],
    providers: [OrderService]
})
export class OrdersModule {}
