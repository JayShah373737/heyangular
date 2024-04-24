import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
  info1:string[]=["Jay Shah",'E37','at@abc.net']
  info2:string[]=["XYZ Shah",'E73','xyz@abc.net']
  info3:string[]=["IJK Shah",'E18','ijk@abc.net']


  getinfo1():string[]{
    return this.info1
  }

  getinfo2():string[]{
    return this.info2
  }

  getinfo3():string[]{
    return this.info3
  }


  constructor() { }
}
