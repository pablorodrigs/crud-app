import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  signupForm: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    role: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]]
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.signupForm.valid) {
      // Lógica para salvar o usuário
      console.log("Novo usuário adicionado:");
      console.log(this.signupForm.value);

      // Redirecionar para a página de usuários
      this.router.navigate(['/users']);
    } else {
      // Se o formulário não for válido, você pode exibir mensagens de erro ou tomar outra ação adequada
    }
  }
}
