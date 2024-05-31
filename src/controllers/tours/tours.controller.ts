import {Controller, Delete, Get, Param, Post} from '@nestjs/common';
import {ToursService} from "../../services/tours/tours.service";
import {User} from "../../shemas/user";
import {Tour} from "../../shemas/tour";

@Controller('tours')
export class ToursController {

    constructor(private tourService: ToursService) {
    }

    @Get()
    getAllTours(): Promise<Tour[]> {
        return this.tourService.getAllTours();
    }

    @Get(":id")
    getTourById(@Param('id') id): Promise<Tour> {
        return this.tourService.getTourById(id);
    }

    /*@Get()
    getAllTours(): void{
        this.tourService.generateTours();
    }*/

    @Post()
    initTours(): Promise<any> {
        this.tourService.generateTours();
        return this.tourService.getAllTours()
    }

    @Delete()
    removeAllTours(): void {
        this.tourService.deleteTours();
    }
}
