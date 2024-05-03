import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Tour, TourDocument} from "../../shemas/tour";
import {Model} from "mongoose";
import {TourDto} from "../../dto/tour-dto";

@Injectable()
export class ToursService {

    private toursCount = 10;
    constructor(@InjectModel(Tour.name) private tourModel: Model<TourDocument>) {
    }

    generateTours(): void {
        for (let i=0; i <= this.toursCount; i++) {
            const tour = new TourDto('test'+1, 'test desc', 'test operator', '300'+i)
            const tourData = new this.tourModel(tour);
            tourData.save();
        }
    }

    async deleteTours(): Promise<any> {
        return this.tourModel.deleteMany({});
    }
}
