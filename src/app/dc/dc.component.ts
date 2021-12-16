import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dc',
  templateUrl: './dc.component.html',
  styleUrls: ['./dc.component.css']
})
export class DcComponent implements OnInit {

  dcHeros: any[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
      this.http.get<any>('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json').subscribe(dcDatas => {
        // console.log(dcDatas[0])
        
        this.dcHeros = dcDatas;
        
  })
  }

  }
