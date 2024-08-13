import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private httpClient = inject(HttpClient);
  private API_URL = 'http://localhost:3000/users';

   //obtener datos
   getUsers() {
    return this.httpClient.get(this.API_URL);
  }

  //crear datos
  createUser(user: User) {
    console.log(user);
    return this.httpClient.post(this.API_URL, user);
  }

  //eliminar
  deleteUser(id: string) {
    return this.httpClient.delete(`${this.API_URL}/${id}`);
  }
}
