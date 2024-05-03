import {Controller, Get, Param} from '@nestjs/common';
import {ToursService} from "../../services/tours/tours.service";

@Controller('tours')
export class ToursController {

    constructor(private tourService: ToursService) {
    }

    @Get()
    getAllTours(): void{
        this.tourService.generateTours();
    }

    @Get(":remove")
    removeAllTours(@Param('remove') remove): void {
        this.tourService.deleteTours();
    }
}
