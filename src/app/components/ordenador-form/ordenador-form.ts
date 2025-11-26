import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { OrdenadoresService } from '../../services/ordenadores';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-ordenador-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './ordenador-form.html',
  styleUrls: ['./ordenador-form.css']
})
export class OrdenadorFormComponent {

  formulario;

  constructor(
    private fb: FormBuilder,
    private ordenadoresService: OrdenadoresService,
    private router: Router
  ) {
    this.formulario = this.fb.group({
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
      procesador: ['', Validators.required],
      ram: ['', Validators.required],
      precio: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]]
    });
  }

  onSubmit() {
    if (this.formulario.valid) {
      this.ordenadoresService.createOrdenador({
        marca: this.formulario.value.marca!,
        modelo: this.formulario.value.modelo!,
        procesador: this.formulario.value.procesador!,
        ram: this.formulario.value.ram!,
        precio: this.formulario.value.precio!
      }).subscribe({
        next: () => {
          this.router.navigate(['/ordenadores']);
        },
        error: (err) => {
          console.error('Error al crear el ordenador', err);
        }
      });
    }
  }
}
