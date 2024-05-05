import {Body, Controller, Post} from '@nestjs/common';
import {OrderService} from "../../services/orders/order.service";
import {OrderDto} from "../../dto/order-dto";

@Controller('orders')
export class OrdersController {
    constructor(private orderSrvice: OrderService) {
    }

    @Post()
    initTours(@Body() data: OrderDto): void {
        const orderData = new OrderDto(data.age, data.birthDay, data.cardNumber, data.tourId, data.userId);
        this.orderSrvice.sendOrder(orderData);
    }
}
