import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Aluno } from './alunos/aluno.model';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  constructor(private http: HttpClient) { }

  cadastrarAluno(aluno: Aluno) : Observable<any>{
    return this.http.post("http://localhost:3000/alunos/", aluno)
  }

  listarAlunos() : Observable<any>{
    return this.http.get("http://localhost:3000/alunos/")
  }

  atualizarAluno(id: any, aluno: Aluno) : Observable<any>{
    return this.http.put("http://localhost:3000/alunos/".concat(id), aluno)
  }

  removerAluno(id: any){
    return this.http.delete("http://localhost:3000/alunos/".concat(id))
  }
}
