import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrdenadoresService } from '../../services/ordenadores';
import { Ordenador } from '../../models/ordenador.model';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-ordenador',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule   // <-- NECESARIO AQUÍ
  ],
  templateUrl: './editar-ordenador.html',
  styleUrls: ['./editar-ordenador.css']
})
export class EditarOrdenadorComponent implements OnInit {

  form!: FormGroup;
  cargando = true;
  ordenadorId!: string;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private ordenadoresService: OrdenadoresService
  ) {}

  ngOnInit(): void {
    this.ordenadorId = this.route.snapshot.paramMap.get('id')!;

    // Crear el formulario vacío
    this.form = this.fb.group({
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
      procesador: [''],
      ram: [''],
      precio: ['']
    });

    // Cargar datos del API
    this.ordenadoresService.getOrdenador(this.ordenadorId)
      .subscribe((data) => {
        this.form.patchValue({
          marca: data.marca,
          modelo: data.modelo,
          procesador: data.procesador,
          ram: data.ram,
          precio: data.precio
        });
        this.cargando = false;
      });
  }

  onGuardar() {
    if (this.form.invalid) return;

    const datosActualizados: Ordenador = {
      id: this.ordenadorId,
      createdAt: new Date().toISOString(), // o conserva el original si quieres
      ...this.form.value
    };

    this.ordenadoresService.updateOrdenador(this.ordenadorId, datosActualizados)
      .subscribe(() => {
        this.router.navigate(['/ordenadores', this.ordenadorId]);
      });
  }

  onCancelar() {
    this.router.navigate(['/ordenadores', this.ordenadorId]);
  }
}
