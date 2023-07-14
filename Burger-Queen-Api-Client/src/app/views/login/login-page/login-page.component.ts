// import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/LoginService/login.service';

// Se importa el módulo Router de @angular/router para poder utilizar la funcionalidad de enrutamiento.
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  public email: string = '';
  public password: string = '';
  public errorMessage: string = '';
  // errorMessagePassword: string = '';
  // errorMessageEmail: string = '';
// aquí recibir el token cuando tengamos exito
  constructor(private loginService: LoginService, private router: Router) { }
  //evaluar que esté logeada ¿?
  onSubmit(): void {
    this.loginService.getCredentials(this.email, this.password).subscribe({
      next: (resp) => {
        // console.log(resp.accessToken, 'ACCESSTOKEN');
        localStorage.setItem("accessToken", resp.accessToken)
        // console.log(localStorage,'TOKEN LÍNEA 25');
        // en next almacenar.. el token  puede ser en local storage
        // implementar para guardar el token 
        //un servicio  podría tener una variable que permanezca, cuando tengamos el token.. guarda el token en el servicio. check sí hay alguna mejor manera. para luego mandar el token para autentificación. Check sí angular tiene algo para guardar.. o manejar lo del token!!!!
        // console.log('RESP', resp);
        if (resp.user.role === 'waiter') {
          this.router.navigate(['/home-waiter']);
        } else if (resp.user.role === 'chef') {
          this.router.navigate(['/home-chef']);
        } else if (resp.user.role === 'admin') {
          this.router.navigate(['/home-admin']);
        } else {
          this.errorMessage = 'Wrong Credentials!!!';
        }
        this.email = ' ';
        this.password = ' '; //observables reciben de otra forma los errores 
      },
      error: () => {
        this.errorMessage = 'Wrong Credentials!!!';
      }
    })
  }
  
//   set(key: string, value: string) {
//     localStorage.setItem(key, value);
// }

// get(key: string) {
//     return localStorage.getItem(key);
// }

// remove(key: string) {
//     localStorage.removeItem(key);
// }
}