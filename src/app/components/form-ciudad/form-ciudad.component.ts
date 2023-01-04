import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ciudad } from 'src/app/models/ciudad.models';
import { CiudadService } from 'src/app/services/ciudad.service';

@Component({
  selector: 'app-form-ciudad',
  templateUrl: './form-ciudad.component.html',
  styleUrls: ['./form-ciudad.component.css']
})
export class FormCiudadComponent implements OnInit {

  titulo: string = "";

  ciudad: Ciudad = new Ciudad();

  constructor(
    private ciudadService: CiudadService,
    private activatedRoute: ActivatedRoute,
    private route: Router
  ) { }

  ngOnInit(): void {

    this.cargarCiudad();
  }

  crearCiudad(){

    this.ciudadService.crearCiudad(this.ciudad).subscribe(
      response => {
        console.log(response)
        this.route.navigate(['ciudades'])
      }
    )

  }

  actualizarCiudad(){

    this.ciudadService.actualizarCiudad(this.ciudad, this.ciudad.id).subscribe(
      response => {
        console.log(response)
        this.route.navigate(['ciudades'])
      }
    )

  }

  cargarCiudad(): void{
    this.activatedRoute.params.subscribe(
      params =>{
        let id = params['id']
        this.titulo = params['titulo']

        if(id){
          this.ciudadService.getCiudadById(id).subscribe(
            (ciudad) => this.ciudad = ciudad
          )
        }
      }
    )

  }

}
