import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersLogin } from 'src/app/models/request/users-login';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  newLogin: UsersLogin = new UsersLogin();
  showCadastro = false;

  constructor(private router: Router, private apiService: UsersService) { }

  onSubmit() : void {
      this.apiService.ValidarUser(this.newLogin).subscribe(
        response => {
          alert('Usuário Logado com sucesso');
          this.router.navigate(['/users']);
        },
        error => {
          alert(error.error.mensagem);
        }
      );
  }

  openCadastro() {
    this.showCadastro = true;
  }
}
