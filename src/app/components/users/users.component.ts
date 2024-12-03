import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { UsersCadastro } from 'src/app/models/request/users-cadastro';
import { UsersAtualizar } from 'src/app/models/request/users-atualizar';
import { User } from 'src/app/models/response/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  updatedUser: UsersAtualizar = new UsersAtualizar();
  userId?: number;
  user: User | null = null;
  users: User[] | null = null;

  constructor(private apiService: UsersService) { }

  onUpdateUser(): void {
    this.apiService.putUser(this.updatedUser).subscribe(
      response => {
        alert("usuario alterado com sucesso, Id: " + this.updatedUser.id!);
        this.updatedUser = new User();
      },
      error => {
        alert(error.error.mensagem);
      }
    );
  }

  onGetUser(): void {
    this.apiService.getUser(this.userId).subscribe(
      response => {
        this.user = response;
      },
      error => {
        debugger;
        alert(error.error.mensagem);
      }
    );
  }

  onGetUsers(): void {
    this.apiService.getUsers().subscribe(
      response => {
        this.users = response;
      },
      error => {
        alert(error.error.mensagem);
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
