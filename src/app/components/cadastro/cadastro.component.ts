import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersCadastro } from 'src/app/models/request/users-cadastro';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {  
  
  newUser: UsersCadastro = new UsersCadastro();

  constructor(private router: Router, private apiService: UsersService) { }

  onAddUser(): void {
    this.apiService.postUser(this.newUser).subscribe(
      response => {
        debugger;
        alert('Usuário cadastrado com sucesso!, Id: ' + response);
        this.newUser = new UsersCadastro();
        this.router.navigate(['/users']);
      },
      error => {
        alert(error.error.mensagem);
      }
    );
  }
}

