import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ordenador } from '../models/ordenador.model';

@Injectable({
  providedIn: 'root'
})
export class OrdenadoresService {

  private baseUrl = 'https://691d9a12d58e64bf0d36c945.mockapi.io/api/v1/ordenadores';

  constructor(private http: HttpClient) { }

  getOrdenadores(): Observable<Ordenador[]> {
    return this.http.get<Ordenador[]>(this.baseUrl);
  }

  // Obtener un ordenador por ID
  getOrdenador(id: string): Observable<Ordenador> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Ordenador>(url);
  }

  // Crear un nuevo ordenador
  createOrdenador(ordenador: Ordenador): Observable<Ordenador> {
    return this.http.post<Ordenador>(this.baseUrl, ordenador);
  }

  // Actualizar un ordenador existente
  updateOrdenador(id: string, ordenador: Ordenador): Observable<Ordenador> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.put<Ordenador>(url, ordenador);
  }

  // Eliminar un ordenador
  deleteOrdenador(id: string): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete(url);
  }
}
