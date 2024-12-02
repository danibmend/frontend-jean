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
    return this.http.get<User>(`${this.apiUrl}/usuario`);
  }

  //Obter Usuarios
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/usuarios`);
  }

  //Cadastrar Usuario
  postUser(user: UsersCadastro): Observable<UsersCadastro> {
    return this.http.post<UsersCadastro>(`${this.apiUrl}/usuario`, user);
  }
  
  //Atualizar Usuario
  putUser(user: UsersAtualizar): Observable<UsersAtualizar> {
    return this.http.put<UsersAtualizar>(`${this.apiUrl}/usuario`, user);
  }
  
  //Validar Usuario
  ValidarUser(user: UsersLogin): Observable<UsersLogin> {
    return this.http.post<UsersLogin>(`${this.apiUrl}/usuario/validar`, user);
  }
}
