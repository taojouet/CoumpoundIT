import { Injectable } from '@angular/core';
import { Calcul } from './saved-calculs.model';

@Injectable({
  providedIn: 'root'
})

export class SavedCalculsService {

  public calculs: Calcul[] = [];

}
