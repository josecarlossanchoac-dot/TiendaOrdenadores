import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdenadoresService } from '../../services/ordenadores';
import { Ordenador } from '../../models/ordenador.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-ordenadores-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './ordenadores-list.html',
  styleUrls: ['./ordenadores-list.css']
})
export class OrdenadoresListComponent implements OnInit {

  ordenadores: Ordenador[] = [];
  ordenadoresPaginados: Ordenador[] = [];
  cargando: boolean = true;
  
  // Paginación
  paginaActual: number = 1;
  itemsPorPagina: number = 3; // Cambia este número según cuántos quieras mostrar
  totalPaginas: number = 0;

  constructor(private ordenadoresService: OrdenadoresService) { }

  ngOnInit(): void {
    this.ordenadoresService.getOrdenadores().subscribe({
      next: (data) => {
        this.ordenadores = data;
        this.totalPaginas = Math.ceil(this.ordenadores.length / this.itemsPorPagina);
        this.actualizarPaginacion();
        this.cargando = false;
      },
      error: (err) => {
        console.error('Error al cargar los ordenadores', err);
        this.cargando = false;
      }
    });
  }

  actualizarPaginacion(): void {
    const inicio = (this.paginaActual - 1) * this.itemsPorPagina;
    const fin = inicio + this.itemsPorPagina;
    this.ordenadoresPaginados = this.ordenadores.slice(inicio, fin);
  }

  cambiarPagina(pagina: number): void {
    if (pagina >= 1 && pagina <= this.totalPaginas) {
      this.paginaActual = pagina;
      this.actualizarPaginacion();
    }
  }

  getPaginas(): number[] {
    return Array.from({ length: this.totalPaginas }, (_, i) => i + 1);
  }
}