import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormGroup, FormControl} from '@angular/forms' 

@Component({
  selector: 'app-form-registro',
  templateUrl: './form-registro.component.html',
  styleUrls: ['./form-registro.component.css']
})
export class FormRegistroComponent implements OnInit {

  resultado !:string;

  public formSignUp: FormGroup;

  showErrorUser: Boolean = true;
  showErrorEmail: Boolean = true;
  showErrorPassword: Boolean = true;
  showErrorTerms: Boolean = true;
 
  constructor(private formBuilder: FormBuilder){

  }
  ngOnInit(): void {
    this.formSignUp = this.formBuilder.group ({
      username: new FormControl('',[Validators.required, Validators.minLength(4), Validators.maxLength(10)]),
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required, Validators.minLength(4), Validators.maxLength(8)]),
      terms: new FormControl('',[Validators.required, Validators.requiredTrue]),
    })

  }

  submit(): any {
    if (this.formSignUp.valid)
      this.resultado = "Todos los datos son válidos";
    else
      this.resultado = "Hay datos inválidos en el formulario";
  }

}
