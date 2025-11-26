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
  cargando: boolean = true;

  constructor(private ordenadoresService: OrdenadoresService) { }

  ngOnInit(): void {
    this.ordenadoresService.getOrdenadores().subscribe({
      next: (data) => {
        this.ordenadores = data;
        this.cargando = false;
      },
      error: (err) => {
        console.error('Error al cargar los ordenadores', err);
        this.cargando = false;
      }
    });
  }
}
