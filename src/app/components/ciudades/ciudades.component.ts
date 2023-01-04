import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ciudad } from 'src/app/models/ciudad.models';
import { CiudadService } from 'src/app/services/ciudad.service';

@Component({
  selector: 'app-ciudades',
  templateUrl: './ciudades.component.html',
  styleUrls: ['./ciudades.component.css']
})
export class CiudadesComponent implements OnInit {

  ciudades: Ciudad[] = [];

  constructor(
    private ciudadService: CiudadService,
    private route: Router) { }

  ngOnInit(): void {

    this.ciudadService.getCiudades().subscribe(
      response => this.ciudades = response
    )
  }

  eliminarCiudad(id: number){

    this.ciudadService.deleteCiudad(id).subscribe(
      response =>{
        console.log(response)
        this.ngOnInit()
      }
    )

  }

  
  irEditar(id: number){
    this.route.navigate(['/formCiudad', {id: id, titulo: 'Editar ciudad'}])
  }

  irAgregar(){
    this.route.navigate(['/formCiudad', {titulo: 'Crear ciudad'}])
  }

}
