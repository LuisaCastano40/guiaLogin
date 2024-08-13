import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Admin } from '../interfaces/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private httpClient = inject(HttpClient);
  private API_URL = 'http://localhost:3000/admin';

   //obtener administradores
   getAdmins() {
    return this.httpClient.get(this.API_URL);
  }

  //crear datos
  createAdmin(admin: Admin) {
    console.log(admin);
    return this.httpClient.post(this.API_URL, admin);
  }
}
