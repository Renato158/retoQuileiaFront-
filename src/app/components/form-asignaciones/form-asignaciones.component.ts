import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ciudad } from 'src/app/models/ciudad.models';
import { TuristaCiudad } from 'src/app/models/turista-ciudad.models';
import { Turista } from 'src/app/models/turista.models';
import { CiudadService } from 'src/app/services/ciudad.service';
import { TuristaCiudadService } from 'src/app/services/turista-ciudad.service';
import { TuristaService } from 'src/app/services/turista.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-form-asignaciones',
  templateUrl: './form-asignaciones.component.html',
  styleUrls: ['./form-asignaciones.component.css']
})
export class FormAsignacionesComponent implements OnInit {

  titulo: string = "";
  asignacion: TuristaCiudad = new TuristaCiudad();

  fecha: string = "2023-01-04";

  ciudades: Ciudad[] = [];
  turistas: Turista[] = [];

  constructor(
    private turistaCiudadService: TuristaCiudadService,
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private ciudadService: CiudadService,
    private turistaService: TuristaService
  ) { }

  ngOnInit(): void {

    this.cargarAsignacion();
    this.ciudadService.getCiudades().subscribe(
      response => this.ciudades = response
    );
    this.turistaService.getTuristas().subscribe(
      response => this.turistas = response
    );

  }

  crearAsignacion(){

    this.turistaCiudadService.findByFechaAndCiudad(this.asignacion.fecha,this.asignacion.ciudad.id).subscribe(
      response => {
        if(response.length < 5){
          this.turistaCiudadService.crearTuristaCiudad(this.asignacion).subscribe(
            response => {
              console.log(response)
              this.route.navigate(['asignaciones'])
            }
          )
        }else{
          Swal.fire('Solo se permiten 5 asignaciones a ciudad en la misma fecha')
        }
      }
    )




    

  }

  actualizarAsignacion(){

    this.turistaCiudadService.actualizarTuristaCiudad(this.asignacion, this.asignacion.id).subscribe(
      response => {
        console.log(response)
        this.route.navigate(['asignaciones'])
      }
    )

  }

  cargarAsignacion(): void{
    this.activatedRoute.params.subscribe(
      params =>{
        let id = params['id']
        this.titulo = params['titulo']

        if(id){
          this.turistaCiudadService.getTuristaCiudadById(id).subscribe(
            (asignacion) => this.asignacion = asignacion
          )
        }
      }
    )

  }

  getA(){
    this.turistaCiudadService.findByFechaAndCiudad(this.fecha,1).subscribe(
      response => console.log(response)
    )
  }

}
