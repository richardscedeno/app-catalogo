import { ICatalogo } from './../../interfaces/interfaces';
import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicos/servicio.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.page.html',
  styleUrls: ['./catalogo.page.scss'],
})
export class CatalogoPage implements OnInit {

  dataCatalogo: ICatalogo[] = []
  searchText=''
  
  sliderConfig={
    spaceBerween:10,
    centerdSlides:true,
    slidesPerView:1.4
  }

  constructor(private servive:ServicioService) { }

  ngOnInit() {
    this.servive.getCatalogo().subscribe(data => { this.dataCatalogo = data })
  }

  search(event:any) {
    this.searchText = event.detail.value
  }

}
