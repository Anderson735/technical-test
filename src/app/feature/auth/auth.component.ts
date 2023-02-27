import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';


@Component({
  standalone: false,
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  providers: [AuthService]
})
export class AuthComponent {

  user: string = '';
  password: string = '';


  public form: FormGroup = new FormGroup(
    {
      user: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    }
  )
  constructor( 
    private authService: AuthService,
    private rout: Router
  ) {}
  
  login(): void {
    const {user, password} = this.form.value
    this.authService.getToken(user, password).subscribe(
      (token: any) => {
        if (token.Status == 1) {
          this.rout.navigate(["/home"])
          localStorage.setItem('token', token.Token)
          console.log('Token de sesión:', token);
        } else {
          // El inicio de sesión falló, haz algo aquí
          console.log('Inicio de sesión fallido');
        }
        //this.rout.navigate(["/home"])
        //localStorage.setItem('token', token)
        console.log('Token de sesión:', token);
      },
      (error: any) => {
        // Manejo de errores aquí
        console.error(error);
      }
    );
  }
}

