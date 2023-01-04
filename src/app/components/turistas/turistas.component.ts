import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Turista } from 'src/app/models/turista.models';
import { TuristaService } from 'src/app/services/turista.service';

@Component({
  selector: 'app-turistas',
  templateUrl: './turistas.component.html',
  styleUrls: ['./turistas.component.css']
})
export class TuristasComponent implements OnInit {

  turistas: Turista[] = [];

  constructor( 
    private turistaService: TuristaService,
    private route: Router) { }

  ngOnInit(): void {

    this.turistaService.getTuristas().subscribe(
      response => this.turistas = response
    )
  }

  eliminarTurista(id: number){

    this.turistaService.deleteTurista(id).subscribe(
      response => {
        console.log(response);
        this.ngOnInit();
      }
    )

  }

  irEditar(id: number){
    this.route.navigate(['/formTurista', {id: id, titulo: 'Editar turista'}])
  }

  irAgregar(){
    this.route.navigate(['/formTurista', {titulo: 'Crear turista'}])
  }

}
