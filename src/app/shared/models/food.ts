export class Foods{
[x: string]: any;

    // ! marks because to not use constructor to define the datatype...

    id!:number;
    price!:number;
    name!:string;
    favorite:boolean=false;
    stars:number=0;
    tags?:string[];
    imageURL!:string;
    cookTime!:string;
    origin!:string[];
  static id: any;
// imageUrl: any;
}