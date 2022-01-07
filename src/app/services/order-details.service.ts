import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  foodDetails = [
    {
      id: 1,
      foodName: "Lorem Ipsum 1",
      foodDetails: "Lorem Imsum Detaie 1",
      foodPrice: 100,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wzfq7djolqxgdhghebbq"
    },
    {
      id: 2,
      foodName: "Lorem Ipsum 2",
      foodDetails: "Lorem Imsum Detaie 2",
      foodPrice: 200,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/sgbobtbxlojbtdnr2m5k"
    },
    {
      id: 3,
      foodName: "Lorem Ipsum 3",
      foodDetails: "Lorem Imsum Detaie 3",
      foodPrice: 300,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/xbeqlsck3p0kei53to7k"
    },
    {
      id: 4,
      foodName: "Lorem Ipsum 4",
      foodDetails: "Lorem Imsum Detaie 4",
      foodPrice: 400,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/l2ng6gtge30sqaafqng7"
    },
    {
      id: 5,
      foodName: "Lorem Ipsum 5",
      foodDetails: "Lorem Imsum Detaie 5",
      foodPrice: 500,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/iqlmbg1hlyc0dspdyzzv"
    },
    {
      id: 6,
      foodName: "Lorem Ipsum 6",
      foodDetails: "Lorem Imsum Detaie 6",
      foodPrice: 600,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wtj8esaeslvlscv8glj6"
    },
  ]

}
