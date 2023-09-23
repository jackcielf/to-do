import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  mode = "moon";
  value: string;
  dataToDo: any;
  icon = "/assets/images/icon-check.svg";
  sizeList: number;

  constructor() {}

  ngOnInit() {
    this.list();
  }

  // Validação do tarefa
  todoVerify(): void {
    if (
      !this.dataToDo ||
      (this.dataToDo && this.value && !this.newTaskExist())
    ) {
      this.create();
    } else {
      alert(
        "Campo não preenchido corretamente ou descrição já existente, tente novamente!"
      );
    }
  }

  // Cria uma nova tarefa
  create(): void {
    this.dataToDo = new Array(); // Criando um array para colocar os objetos

    // Verificando se existe a propriedade/array 'dataToDo' no localStorage
    if (localStorage.hasOwnProperty("dataToDo")) {
      this.dataToDo = JSON.parse(localStorage.getItem("dataToDo")); // Pegando os valores da propriedade/array 'dataToDo' e convertendo para JSON
    }

    this.dataToDo.push({ description: this.value, do: false }); // Adicionando um novo objeto ao array

    localStorage.setItem("dataToDo", JSON.stringify(this.dataToDo)); // Salvando no localStorage

    this.list();
  }

  // Lista as tarefas
  list(): void {
    // Pegando os valores da propriedade/array 'dataToDo'
    // Convertendo para JSON
    this.dataToDo = JSON.parse(localStorage.getItem("dataToDo"));

    if (localStorage.hasOwnProperty("dataToDo")) {
      this.sizeList = this.dataToDo.length;
    }
  }

  // Deleta uma tarefa
  delete(data: any): void {
    this.dataToDo = JSON.parse(localStorage.getItem("dataToDo")); // Pegando os valores da propriedade/array 'dataToDo' e convertendo para JSON

    let tmp = this.dataToDo.filter((item: any) => item.description !== data);

    localStorage.setItem("dataToDo", JSON.stringify(tmp)); // Salvando no localStorage

    this.list();
  }

  // Atualiza a lista quando há alguma alteração
  update(data: any) {
    const newDataToDo = this.dataToDo.map((item: any) => {
      if (item.description === data.description) {
        return { ...item, do: !data.do };
      }
      return item;
    });

    localStorage.setItem("dataToDo", JSON.stringify(newDataToDo)); // Salvando no localStorage

    this.list();
  }

  // Limpando a lista
  clear(): void {
    localStorage.removeItem("dataToDo");
    this.list();
  }

  // Alteração de modos (escuro e claro)
  changeMode(): void {
    if (this.mode === "sun") {
      this.mode = "moon";
    } else {
      this.mode = "sun";
    }
  }

  // Verificando se a tarefa já existe
  newTaskExist(): any {
    this.dataToDo = JSON.parse(localStorage.getItem("dataToDo"));
    let exist = this.dataToDo.find(
      (item: any) => item.description === this.value
    );
    return !exist ? false : true;
  }
}
