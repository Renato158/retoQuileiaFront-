import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ciudad } from '../models/ciudad.models';

@Injectable({
  providedIn: 'root'
})
export class CiudadService {

  url: string = 'http://localhost:8080/ciudades/ciudades';

  constructor(private http: HttpClient) { }

  getCiudades(): Observable<Ciudad[]>{
    
    return this.http.get<Ciudad[]>(this.url);
  }

  getCiudadById(id: number): Observable<Ciudad>{

    return this.http.get<Ciudad>(this.url+`/${id}`);
  }

  crearCiudad(turista: Ciudad): Observable<Ciudad>{

    return this.http.post<Ciudad>(this.url, turista)

  }

  actualizarCiudad(turista: Ciudad, id: number): Observable<Ciudad>{

    return this.http.put<Ciudad>(this.url+`/${id}`, turista);
    
  }

  deleteCiudad(id: number): Observable<Ciudad>{

    return this.http.delete<Ciudad>(this.url+`/${id}`);

  }

}
