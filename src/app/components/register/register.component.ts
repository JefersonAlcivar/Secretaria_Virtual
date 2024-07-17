import { Component , OnInit} from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  title = 'localstorage'
  myforde!:FormGroup;
  resultado!: string;
  
  constructor(private formBuilder: FormBuilder, 
    private router: Router, 
    private toastr: ToastrService,
    private userService: UserService) {

    this.myforde = this.formBuilder.group({

    username: new FormControl('', [Validators.required, Validators.minLength(5)]),
    cedula: new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    direccion: new FormControl('', [Validators.required, Validators.minLength(2)]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^\d{9}$/)]),
    password2: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });
}

  ngOnInit():void{}

  onSubmit() {
    this.userService.register(this.myforde.value)
    .then(response => {
      console.log(response);
      this.toastr.success('¡Los datos se han subido correctamente!', 'Éxito');
      this.router.navigate(['/login']);
    })
    .catch(error => console.log(error));
  }

}
