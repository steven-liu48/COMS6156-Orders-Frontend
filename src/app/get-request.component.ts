import {Component, Injectable, OnInit} from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Observable} from "rxjs";
import {stringify} from "@angular/compiler/src/util";
@Component({selector: 'get-request', templateUrl: 'get-request.component.html'})

export class GetRequestComponent implements OnInit {
  allOrders = "";
  result1 = "";
  orderID1 = "";
  result2 = "";
  orderID2 = "";
  result3 = "";
  orderID3 = "";
  result4 = "";
  orderID4 = "";
  url = "http://3.214.79.148:5000/orders";
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any>(this.url).subscribe(data => {
      this.allOrders = JSON.stringify(data);
    })
  }

  getOrder() {
    return this.http.get<any>(this.url + '/' + this.orderID1).subscribe(data => {
      this.result1 = JSON.stringify(data);
    })
  }

  createOrder() {
    this.http.post<any>(this.url +  '/' + this.orderID2,[]).subscribe(data => {
      this.result2 = JSON.stringify(data);
    })
  }

  updateOrder() {
    this.http.put<any>(this.url +  '/' + this.orderID3,[]).subscribe(data => {
      this.result3 = JSON.stringify(data);
    })
  }

  deleteOrder() {
    this.http.delete<any>(this.url +  '/' + this.orderID4).subscribe(data => {
      this.result4 = JSON.stringify(data);
    })
  }

}



// @Injectable({
//   providedIn: 'root'
// })
// export class GetRequestComponent {
//
//   constructor(private http: HttpClient) {
//   }
//
//   getOrder() {
//     const result = this.http.get<any>('https://api.npms.io/v2/search?q=scope:angular')
//     console.log(result)
//     return result
//   }
// }





    // getOrder(): string{
    //     console.log(this.http.get<JSON>('http://127.0.0.1:5000/orders/1'))
    //     return JSON.stringify(this.http.get<JSON>('http://127.0.0.1:5000/orders/1'))
    // }


    // getOrder(): Observable<Order>{
    //   return this.http.get<Order>('http://127.0.0.1:5000/orders/1')
    // }



// export class GetRequestComponent implements OnInit {
//   totalAngularPackages: any ;
//
//     constructor(private http: HttpClient) { }
//
//     ngOnInit() {
//         this.totalAngularPackages = this.http.get<any>('http://127.0.0.1:5000/orders/1')
//
//     }
// }
