import { Injectable } from '@angular/core';
import { GroupCamping } from './Model/groups';

@Injectable({
  providedIn: 'root'
})
export class StatServiceService {

  constructor() { }
  count(groups: GroupCamping[]): number {
    return groups.length;
  }
}
