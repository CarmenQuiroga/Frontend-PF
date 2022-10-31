import { HttpClient } from '@angular/common/http';
import { Education } from 'src/app/models/education';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  urlAPI = 'http://localhost:8080/Education/';

  constructor(private httpClient: HttpClient)  { }

 public lista(): Observable<Education[]>{
  return this.httpClient.get<Education[]>(this.urlAPI + 'lista');
 }

  public details(id: number): Observable<Education>{
  return this.httpClient.get<Education>(this.urlAPI + `detail/${id}`);
}

  public save(educar: Education): Observable<any>{
    return this.httpClient.post<any>(this.urlAPI + `create`, educar);
  }

  public update(id: number, educar: Education): Observable<any>{
    return this.httpClient.put<any>(this.urlAPI + `update/${id}`, educar);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.urlAPI + `delete/${id}`);
  }
}
