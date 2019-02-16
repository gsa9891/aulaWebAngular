import { Component, OnInit } from '@angular/core';
import { ServicoService } from '../servico.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  lista: Array<any>;

  constructor(private servicoService: ServicoService) { }

  ngOnInit() {
    this.listar();

  }

  listar(){
    this.servicoService.listar().subscribe(dados => this.lista = dados);
  }

}
