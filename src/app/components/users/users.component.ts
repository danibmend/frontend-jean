import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { UsersCadastro } from 'src/app/models/request/users-cadastro';
import { UsersAtualizar } from 'src/app/models/request/users-atualizar';
import { UsersLogin } from 'src/app/models/request/users-login';
import { User } from 'src/app/models/response/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  newUser: UsersCadastro = new UsersCadastro();
  updatedUser: UsersAtualizar = new UsersAtualizar();
  userId?: number;
  user: User | null = null;
  users: User[] | null = null;

  constructor(private apiService: UsersService) { }

  onAddUser(): void {
    this.apiService.postUser(this.newUser).subscribe(
      response => {
        console.log('Usuário cadastrado com sucesso', response);
        this.newUser = new User();
      },
      error => {
        console.error('Erro ao cadastrar usuário', error);
      }
    );
  }

  onUpdateUser(): void {
    this.apiService.putUser(this.updatedUser).subscribe(
      response => {
        console.log('Usuário atualizado com sucesso', response);
        this.updatedUser = new User();
      },
      error => {
        console.error('Erro ao atualizar usuário', error);
      }
    );
  }

  onGetUser(): void {
    this.apiService.getUser(this.userId).subscribe(
      response => {
        this.user = response;
      },
      error => {
        console.error('Erro ao obter usuário', error);
      }
    );
  }

  onGetUsers(): void {
    this.apiService.getUsers().subscribe(
      response => {
        this.users = response;
      },
      error => {
        console.error('Erro ao obter usuários', error);
      }
    );
  }

  closeModal(): void {
    this.user = null;
  }

  closeUsersModal(): void {
    this.users = null;
  }
}
