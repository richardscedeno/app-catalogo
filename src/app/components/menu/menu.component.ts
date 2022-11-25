import { ServicioService } from './../../servicos/servicio.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IMenu } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})

export class MenuComponent implements OnInit {

  listaMenu!: Observable<IMenu[]>

  constructor(private service:ServicioService ) { }

  ngOnInit() {
    this.listaMenu = this.service.getMenu()
  }

}
