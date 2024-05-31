import {Body, Controller, Get, Post} from '@nestjs/common';
import {OrderService} from "../../services/orders/order.service";
import {OrderDto} from "../../dto/order-dto";
import {Order} from "../../shemas/order";

@Controller('orders')
export class OrdersController {
    constructor(private orderService: OrderService) {
    }

    @Get()
    getAllOrders(): Promise<Order[]> {
        return this.orderService.getAllOrders();
    }

    @Post()
    initTours(@Body() data: OrderDto): void {
        const orderData = new OrderDto(data.age, data.birthDay, data.cardNumber, data.tourId, data.userId);
        this.orderService.sendOrder(orderData);
    }
}
