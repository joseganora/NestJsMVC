import { Module } from '@nestjs/common';
import { BeersService } from './services/beer.service';
import { BeerController } from './controllers/beerjs-team';

@Module({
  imports: [],
  controllers: [BeerController],
  providers: [BeersService],
})
export class AppModule {}
