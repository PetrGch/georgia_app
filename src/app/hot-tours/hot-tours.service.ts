import { Injectable } from '@angular/core';
import {TopToursService} from '../home/top-tours/top-tours.service';

@Injectable({
  providedIn: 'root'
})
export class HotToursService {

  constructor(private topToursService: TopToursService) { }


}
