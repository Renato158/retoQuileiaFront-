import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Turista } from '../models/turista.models';

@Injectable({
  providedIn: 'root'
})
export class TuristaService {

  url: string = 'http://localhost:8080/turistas/turistas';

  constructor( private http: HttpClient) { }

  getTuristas(): Observable<Turista[]>{
    
    return this.http.get<Turista[]>(this.url);
  }

  getTuristaById(id: number): Observable<Turista>{

    return this.http.get<Turista>(`${this.url}/${id}`);
  }

  crearTurista(turista: Turista): Observable<Turista>{

    return this.http.post<Turista>(this.url, turista)

  }

  actualizarTurista(turista: Turista, id: number): Observable<Turista>{

    return this.http.put<Turista>(`${this.url}/${id}`, turista);
    
  }

  deleteTurista(id: number): Observable<Turista>{

    return this.http.delete<Turista>(`${this.url}/${id}`);

  }


}
