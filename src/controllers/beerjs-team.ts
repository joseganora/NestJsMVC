import { Controller, Get, Param, Render } from '@nestjs/common';
import { BeerDetailsIn } from 'src/models/input.beer-details.model';
import { BeersService } from 'src/services/beer.service';

@Controller('beers')
export class BeerController {

  constructor(private beerService: BeersService){ }
  
  @Get()
  @Render('beer-list')
  list() {
    const beers: Beer[] = this.beerService.findAll();
    return { title: 'Beers on BeerJs!',
              beers: beers };
  }

  @Get("/:id")
  @Render('beer-details')
  itemDetails(@Param() params: BeerDetailsIn) {
    const b = this.beerService.findById(params.id);
    return { beer: b };
  }
}
