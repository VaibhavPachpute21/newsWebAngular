import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.css']
})
export class TechnewsComponent implements OnInit {

  constructor(private service:NewsapiservicesService) { }

  techNews:any=[];

  ngOnInit(): void {
    this.service.techNews().subscribe((result)=>{
      console.log(result);
      this.techNews=result.articles;
    })
  }

}
