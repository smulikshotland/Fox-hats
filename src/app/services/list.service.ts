import { Injectable, Pipe } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Pipe({
  name: 'ListService'
})
@Injectable({
  providedIn: 'root'
})
export class ListService {
  getHat(id: number) {
    throw new Error('Method not implemented.');
  }
  arr1
  
  constructor( private http:HttpClient) {
   this.httpGet("http://localhost:8080/galery.json")
   .subscribe((result)=>{
    this.arr1=result
    // console.log( this.arr1);
    // console.log(this.arr1[0].name);
   })}
  

  // HatsList=[
  //   {id:1,name:"בורסלינו",size:[50,51,52,53,54,55,56,57,58,58,60,61,62],price:700,image:"https://adm.kikar.co.il/data/auto/addonsmgr/ld/ulxdooxf.jpg"},
  //   {id:2,name:"ברליינדו",size:[50,51,52,53,54,55,56,57,58,58,60,61,62],price:600,image:"https://adm.kikar.co.il/data/auto/addonsmgr/ld/ulxdooxf.jpg"},
  //   {id:3,name:"ראטצ",size:[50,51,52,53,54,55,56,57,58,58,60,61,62],price:500,image:"https://adm.kikar.co.il/data/auto/addonsmgr/ld/ulxdooxf.jpg"},
  //   {id:4,name:"דוריה",size:[50,51,52,53,54,55,56,57,58,58,60,61,62],price:400,image:"https://adm.kikar.co.il/data/auto/addonsmgr/ld/ulxdooxf.jpg"},
  //   {id:5,name:"לאונרדו",size:[50,51,52,53,54,55,56,57,58,58,60,61,62],price:300,image:"https://adm.kikar.co.il/data/auto/addonsmgr/ld/ulxdooxf.jpg"}
  // ]

  // getHat(id: number) {
  //   return this.HatsList.find(x=>x.id==id)
    // return this.http.get(this.HatsList).pipe(
    //   map(ajaxResults => {
       
    //     return 
    //   })
    // )
  // }
  httpGet(url:string):Observable<any> {
    return this.http.get(url)
    
  }

}
