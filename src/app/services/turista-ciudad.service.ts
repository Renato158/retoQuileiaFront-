import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ciudad } from '../models/ciudad.models';
import { TuristaCiudad } from '../models/turista-ciudad.models';

@Injectable({
  providedIn: 'root'
})
export class TuristaCiudadService {

  url: string = 'http://localhost:8080/turistasC/turistasC';

  constructor(private http: HttpClient) { }

  getTuristaCiudades(): Observable<TuristaCiudad[]>{
    
    return this.http.get<TuristaCiudad[]>(this.url);
  }

  getTuristaCiudadById(id: number): Observable<TuristaCiudad>{

    return this.http.get<TuristaCiudad>(this.url+`/${id}`);
  }

  crearTuristaCiudad(turista: TuristaCiudad): Observable<TuristaCiudad>{

    return this.http.post<TuristaCiudad>(this.url, turista)

  }

  actualizarTuristaCiudad(turista: TuristaCiudad, id: number): Observable<TuristaCiudad>{

    return this.http.put<TuristaCiudad>(this.url+`/${id}`, turista);
    
  }

  deleteTuristaCiudad(id: number): Observable<TuristaCiudad>{

    return this.http.delete<TuristaCiudad>(this.url+`/${id}`);

  }

  findByFechaAndCiudad(fecha: string, id: number): Observable<TuristaCiudad[]>{
    
    return this.http.get<TuristaCiudad[]>(`http://localhost:8080/turistasC/filtro/${id}?fecha=${fecha}`)
  }

  findByTurista(id: number): Observable<TuristaCiudad[]>{
    
    return this.http.get<TuristaCiudad[]>(`http://localhost:8080/turistasC/filtroTurista/${id}`)
  }

  findByCiudad(id: number): Observable<TuristaCiudad[]>{
    
    return this.http.get<TuristaCiudad[]>(`http://localhost:8080/turistasC/filtroCiudad/${id}`)
  }

  
}
