import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ciudad } from 'src/app/models/ciudad.models';
import { Turista } from 'src/app/models/turista.models';
import { CiudadService } from 'src/app/services/ciudad.service';
import { TuristaService } from 'src/app/services/turista.service';

@Component({
  selector: 'app-form-turista',
  templateUrl: './form-turista.component.html',
  styleUrls: ['./form-turista.component.css']
})
export class FormTuristaComponent implements OnInit {

  ciudades: Ciudad[] = [];

  titulo: string = "";

  turista: Turista = new Turista();

  constructor(
    private ciudadService: CiudadService,
    private turistaService: TuristaService,
    private route: Router,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.cargarTurista();
    this.ciudadService.getCiudades().subscribe(
      response => this.ciudades = response
    );
  }

  crearTurista(){

    this.turistaService.crearTurista(this.turista).subscribe(
      response => {
        console.log(response)
        this.route.navigate(['turistas'])
      }
    )
    

  }

  actualizarTurista(){

    this.turistaService.actualizarTurista(this.turista, this.turista.id).subscribe(
      response => {
        console.log(response)
        this.route.navigate(['turistas'])
      }
    )

  }

  cargarTurista(): void{
    this.activatedRoute.params.subscribe(
      params =>{
        let id = params['id']
        this.titulo = params['titulo']

        if(id){
          this.turistaService.getTuristaById(id).subscribe(
            (turista) => this.turista = turista
          )
        }
      }
    )

  }

}
