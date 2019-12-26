import { Component, OnInit } from '@angular/core';
import { AlunosService } from '../alunos.service';
import { Aluno } from './aluno.model';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css'],
  providers: [ AlunosService ]
})
export class AlunosComponent implements OnInit {

  aluno: Aluno = new Aluno()
  alunos: Array<any> = new Array()

  constructor(private alunosService: AlunosService) { }

  ngOnInit() {
    this.listarAlunos()
  }

  atualizar(id: number){
    this.alunosService.atualizarAluno(id, this.aluno).subscribe(aluno => {
      this.aluno = new Aluno
      this.listarAlunos()
     },
    ), err => { console.log('Erro ao cadastrar aluno', err)}
  
  }

  remover(id: number){
    this.alunosService.removerAluno(id).subscribe(aluno => {
      this.aluno = new Aluno
      this.listarAlunos()
     },
    ), err => { console.log('Erro ao cadastrar aluno', err)}
  }

  cadastrar(){
    console.log(this.aluno)
    this.alunosService.cadastrarAluno(this.aluno).subscribe(aluno => {
      this.aluno = new Aluno
      this.listarAlunos()
     },
    ), err => { console.log('Erro ao cadastrar aluno', err)}
  }

  listarAlunos(){
    this.alunosService.listarAlunos().subscribe(alunos => {
      this.alunos = alunos
    }, err => {
      console.log('erro ao listar os alunos', err)
    })
  }

}
