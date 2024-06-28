import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../apiservice.service';
import { UserService } from '../user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router,
    private userService:UserService
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void { }

  onSubmit() {
    this.userService.setUsername(this.loginForm.get('username')?.value);
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe(
        response => {
          if (response && response.success) {
            this.toastr.success('Successfully logged in!');
            this.router.navigate(['/topics']);
          } else {
            this.toastr.error('Invalid credentials, please try again!');
          }
        },
        error => {
          this.toastr.error('Invalid credentials, please try again!');
        }
      );
    }
  }
}
