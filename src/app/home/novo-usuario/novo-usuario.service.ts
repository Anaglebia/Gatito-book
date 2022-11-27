// import * as environmentProd from './../../../enviroment/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NovoUsuario } from './novo-usuario';
import { environment } from 'src/environment/environment.prod';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class NovoUsuarioService {
  constructor(private http: HttpClient) {}

  cadastraNovoUsuario(novoUsuario: NovoUsuario) {
    return this.http.post(`${API}/user/signup`, novoUsuario);
  }

  verificaUsuarioExistente(nomeUsuario: string) {
    return this.http.get(`${API}/user/exists/${nomeUsuario}`);
  }
}
