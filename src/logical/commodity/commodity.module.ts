import { Module } from '@nestjs/common';
import { CommodityController } from './commodity.controller';
import { CommodityService } from './commodity.service';


@Module({
  imports: [],
  controllers: [CommodityController],
  providers: [CommodityService],

})
export class CommodityModule {}