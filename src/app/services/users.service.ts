import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/enviroment';
import { UsersCadastro } from '../models/request/users-cadastro';
import { User } from '../models/response/user';
import { UsersAtualizar } from '../models/request/users-atualizar';
import { UsersLogin } from '../models/request/users-login';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  //Service "anticorruptionLayer", onde será consumido os endpoints da nossa API externa que publicamos no azure com o nosso backend

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  //Obter Usuario
  getUser(userId: number | undefined): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}Usuario/usuario/` + userId);
  }

  //Obter Usuarios
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}Usuario/usuarios`);
  }

  //Cadastrar Usuario
  postUser(user: UsersCadastro): Observable<number> {
    return this.http.post<number>(`${this.apiUrl}Usuario/usuario`, user);
  }
  
  //Atualizar Usuario
  putUser(user: UsersAtualizar): Observable<UsersAtualizar> {
    return this.http.put<UsersAtualizar>(`${this.apiUrl}Usuario/usuario`, user);
  }
  
  //Validar Usuario
  ValidarUser(user: UsersLogin): Observable<UsersLogin> {
    return this.http.post<UsersLogin>(`${this.apiUrl}Usuario/usuario/validar`, user);
  }
}
