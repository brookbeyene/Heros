import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getAttrsForDirectiveMatching } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-marvel',
  templateUrl: './marvel.component.html',
  styleUrls: ['./marvel.component.css']
})
export class MarvelComponent implements OnInit {

  allHeros = []
  marvelHeros: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json').subscribe(datas => {
        console.log(datas[0])
        
        this.marvelHeros = datas
        
       
    })  
    this.marvelHeros = this.marvelHeros.filter(data=> data.biography.publisher === "DC Comics")
  }

  // onClick(){
  //   this.marvelHeros = this.all
  // }
  

}
