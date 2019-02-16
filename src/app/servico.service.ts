import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {

  servicoUrl = 'https://compras-facil.herokuapp.com/produtos';

  constructor(private http:HttpClient) { }

  listar(){
    return this.http.get<any[]>(`${this.servicoUrl}`);


  }

}
