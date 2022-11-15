import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, tap, catchError } from 'rxjs';
import { Subcategory } from '../models/subcategory.model';

@Injectable({
  providedIn: 'root'
})
export class SubcategoryService {

  baseUrl: string = `http://localhost:8080/api/v1`;
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  getAll(): Observable<Subcategory[]> {
    return this.http.get<Subcategory[]>(this.baseUrl);
  }

  get(id: any): Observable<Subcategory> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(this.baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.patch(`${this.baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
