import { Injectable } from '@angular/core';
import { TarefaModel } from './tarefa-model';
@Injectable({
  providedIn: 'root',
})
export class ListaTarefasService {
  public lista: Array<TarefaModel> = [];
  public contadorTarefasPendentes = 0;
  private proximoId = 1; // controle interno de ID

  constructor() {}

  public adicionar(descricao: string): void {
    if (!descricao) {
      alert('Informe uma tarefa válida');
    } else {
      const nova = new TarefaModel();
      nova.id = this.proximoId;
      nova.descricao = descricao;
      this.lista.push(nova);
      this.proximoId++;
      this.contadorTarefasPendentes++;
    }
  }

  public excluir(): void {
    this.lista = [];
    this.contadorTarefasPendentes = 0;
  }

  public atualizar(tarefaid: number): void {
    const tarefaEncontrada = this.lista.find((x) => x.id === tarefaid);
    if (tarefaEncontrada) {
      tarefaEncontrada.concluida = !tarefaEncontrada.concluida; // Atualizar status
      tarefaEncontrada.concluida
        ? this.contadorTarefasPendentes--
        : this.contadorTarefasPendentes++;
    }
  }
}
