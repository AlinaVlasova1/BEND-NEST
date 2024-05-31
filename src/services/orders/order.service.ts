import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Order, OrderDocument} from "../../shemas/order";
import {Model} from "mongoose";
import {OrderDto} from "../../dto/order-dto";
import {Tour, TourDocument} from "../../shemas/tour";

@Injectable()
export class OrderService {

    constructor(@InjectModel(Order.name) private  orderModel: Model<OrderDocument>,
                @InjectModel(Tour.name) private tourModel: Model<TourDocument>) {
    }

    async sendOrder(data: OrderDto): Promise<Order> {
        const orderData = new this.orderModel(data);
        return orderData.save();
    }

    async getAllOrders(): Promise<any> {
        /*const tours =  await this.tourModel.find();
        const orders =  await this.orderModel.find();
        return [tours, orders]*/
        return this.orderModel.find();
    }
}
