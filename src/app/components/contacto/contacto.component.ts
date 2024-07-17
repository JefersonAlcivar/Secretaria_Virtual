import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit{
  title = 'localstorage';
  myform: FormGroup;
  resultado!: string;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.myform = this.formBuilder.group({
     
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    archivo: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required]),



    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.myform.valid) {
      localStorage.setItem('formdata', JSON.stringify(this.myform.value));
      this.toastr.success('¡Los datos se han subido correctamente!', 'Éxito');
      this.router.navigate(['/pagina']); 
    }
  }
}
