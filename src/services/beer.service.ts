import { Injectable } from '@nestjs/common';
import { beersHardcode } from 'src/models/beers.harcode';

@Injectable()
export class BeersService {
  private readonly beers: Beer[] = beersHardcode;

  create(cat: Beer) {
    this.beers.push(cat);
  }

  findAll(): Beer[] {
    return this.beers;
  }

  findById(id: string): Beer{
    return this.beers.find(b => b.id === id);
  }
}