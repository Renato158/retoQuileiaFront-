import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ciudad } from 'src/app/models/ciudad.models';
import { TuristaCiudad } from 'src/app/models/turista-ciudad.models';
import { Turista } from 'src/app/models/turista.models';
import { CiudadService } from 'src/app/services/ciudad.service';
import { TuristaCiudadService } from 'src/app/services/turista-ciudad.service';
import { TuristaService } from 'src/app/services/turista.service';

@Component({
  selector: 'app-asignaciones',
  templateUrl: './asignaciones.component.html',
  styleUrls: ['./asignaciones.component.css']
})
export class AsignacionesComponent implements OnInit {

  asignacion: TuristaCiudad = new TuristaCiudad;

  ciudades: Ciudad[] = [];
  turistas: Turista[] = [];

  asignaciones: TuristaCiudad[] = [];

  constructor(
    private turistaCiudadService: TuristaCiudadService,
    private ciudadService: CiudadService,
    private turistaService: TuristaService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.turistaCiudadService.getTuristaCiudades().subscribe(
      response => this.asignaciones = response
    );

    this.turistaService.getTuristas().subscribe(
      response => this.turistas = response
    );

    this.ciudadService.getCiudades().subscribe(
      response => this.ciudades = response
    );
  }

  eliminarAsignacion(id: number){

    this.turistaCiudadService.deleteTuristaCiudad(id).subscribe(
      response =>{
        console.log(response)
        this.ngOnInit()
      }
    )

  }

  
  irEditar(id: number){
    this.route.navigate(['/formAsignaciones', {id: id, titulo: 'Editar asignacion'}])
  }

  irAgregar(){
    this.route.navigate(['/formAsignaciones', {titulo: 'Crear asignacion'}])
  }

  buscarTurista(){
    this.turistaCiudadService.findByTurista(this.asignacion.turista.id).subscribe(
      response => this.asignaciones = response
    )

  }

  buscarCiudad(){
    this.turistaCiudadService.findByCiudad(this.asignacion.ciudad.id).subscribe(
      response => this.asignaciones = response
    )

  }

}
