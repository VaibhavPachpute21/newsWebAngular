import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-business-news',
  templateUrl: './business-news.component.html',
  styleUrls: ['./business-news.component.css']
})
export class BusinessNewsComponent implements OnInit {

  constructor(private service:NewsapiservicesService) { }
  businessNews:any=[];

  ngOnInit(): void {
    this.service.businessNews().subscribe((result)=>{
      console.log(result);
      this.businessNews=result.articles;
    })
  }

}
