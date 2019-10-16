import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
url = 'https://my-json-server.typicode.com/HaibuSolutions/prueba-tecnica-sf/user';

// users: object[] = new Array();
// private user  = [];

user: Observable<any>;


  constructor(private http: HttpClient) { }

  getUsers():Observable<any> {
    return this.http.get(`${this.url}`)
    .pipe(
      map(results => {
        return results;
      })
    );
  }

  getDetails(id: string){
    return (this.user = this.http.get(`${this.url}`+'/'+ id));
    }
    



}
