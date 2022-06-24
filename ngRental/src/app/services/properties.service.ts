
import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Property } from '../models/property';

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {

  private url = environment.baseUrl + 'api/properties'

  constructor(private http: HttpClient) { }


  index(): Observable<Property[]> {
    return this.http.get<Property[]>(this.url).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('TodoService.index(): error retrieving todos ' + err)
        );
      })
    );


}


create(prop: Property): Observable<Property> {
  return this.http.post<Property>(this.url, prop).pipe(
    catchError((err: any) => {
      console.error(err);
      return throwError(
        () => new Error('PropertyService.create(): Error Creating Property: ' + err)
      );
    })
  )
};

destroy(id: number): Observable<Property>{
  return this.http.delete<Property>(this.url+'/'+ id).pipe(
    catchError((err) => {
      console.error(err);
      return throwError(
        () => new Error("PropertyService")
      )
    })
  )
}

update(prop: Property): Observable<Property>{
  return this.http.put<Property>(this.url+'/'+ prop.id, prop).pipe(
    catchError((err: any) => {
      console.error(err);
      return throwError(
        () => Error('PropertyService.update(): Error updatng Property')


      );
    })
  )
};


show(id: number): Observable<Property>{
  return this.http.get<Property>(this.url+'/'+id)
}










}
