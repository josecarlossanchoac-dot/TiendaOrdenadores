import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { OrdenadoresService } from '../../services/ordenadores';
import { Ordenador } from '../../models/ordenador.model';

@Component({
  selector: 'app-ordenador-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './ordenador-detail.html',
  styleUrls: ['./ordenador-detail.css']
})
export class OrdenadorDetailComponent implements OnInit {

  ordenador?: Ordenador;
  cargando: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private ordenadoresService: OrdenadoresService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id && id !== 'nuevo') {
      this.ordenadoresService.getOrdenador(id).subscribe({
        next: (data) => {
          this.ordenador = data;
          this.cargando = false;
        },
        error: (err) => {
          console.error('Error al cargar el ordenador', err);
          this.cargando = false;
        }
      });
    } else {
      this.cargando = false;
    }
  }

  onEliminar() {
    if (!this.ordenador?.id) return;

    if (confirm(`¿Estás seguro de eliminar ${this.ordenador.marca} ${this.ordenador.modelo}?`)) {
      this.ordenadoresService.deleteOrdenador(this.ordenador.id).subscribe({
        next: () => {
          this.router.navigate(['/ordenadores']); // Volver al listado
        },
        error: (err) => {
          console.error('Error al eliminar el ordenador', err);
          alert('Error al eliminar el ordenador.');
        }
      });
    }
  }

  onActualizar() {
    alert('Función de actualizar pendiente'); // Por ahora no hace nada
  }

  //modal 
  modalEliminarVisible = false; // controla la visibilidad del modal

  onMostrarModalEliminar() {
    this.modalEliminarVisible = true;
  }

  onCancelarEliminar() {
    this.modalEliminarVisible = false;
  }

  onConfirmarEliminar() {
    if (!this.ordenador?.id) return;

    this.ordenadoresService.deleteOrdenador(this.ordenador.id).subscribe({
      next: () => {
        this.router.navigate(['/ordenadores']); // Volver al listado
      },
      error: (err) => {
        console.error('Error al eliminar el ordenador', err);
        alert('Error al eliminar el ordenador.');
      }
    });
  }

}
