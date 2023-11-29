import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "app-tasks",
  templateUrl: "./tasks.component.html",
  styleUrls: ["./tasks.component.scss"],
})
export class TasksComponent implements OnInit {
  mode = "moon";
  value: string;
  dataToDo: any;
  sizeList = 0;
  activeMode = true;
  @ViewChild("main", { static: true }) main!: ElementRef;
  @ViewChild("priorityElement", { static: true }) priorityElement!: ElementRef;
  numPriority = 0;

  constructor() {}

  ngOnInit() {
    this.list();
    this.loadTheme();

    if (localStorage.hasOwnProperty("darkmode")) {
      this.mode = "sun";
    }
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

    this.dataToDo.push({ description: this.value, do: false, priority: this.numPriority }); // Adicionando um novo objeto ao array

    localStorage.setItem("dataToDo", JSON.stringify(this.dataToDo)); // Salvando no localStorage

    this.list();
  }

  // Lista as tarefas
  list(): void {
    // Pegando os valores da propriedade/array 'dataToDo'
    // Convertendo para JSON
    this.dataToDo = JSON.parse(localStorage.getItem("dataToDo"));

    if (localStorage.hasOwnProperty("dataToDo")) {
      this.sizeList = this.dataToDo.length; // Pegando o tamanho da lista
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

  completedAll(): void {
    if (localStorage.hasOwnProperty("dataToDo")) {
      const newDataToDo = this.dataToDo.map((item: any) => {
        return { ...item, do: true };
      });

      localStorage.setItem("dataToDo", JSON.stringify(newDataToDo)); // Salvando no localStorage
      console.log(this.dataToDo);
      this.list();
    }
  }

  saveMode(): void {
    // Verificando se existe a propriedade/array 'dataToDo' no localStorage
    if (localStorage.hasOwnProperty("sun")) {
      this.activeMode = true;
    } else {
      this.activeMode = false;
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

  // Mudando o tema
  darkLightMode() {
    this.activeMode = !this.activeMode;
  }

  // Carregando o tema escolhido
  loadTheme(): void {
    const darkmode = localStorage.getItem("darkmode");

    if (darkmode) {
      this.darkLightMode();
    }
  }

  // Verificação de alteração de temas
  changeMode(): void {
    this.darkLightMode();

    localStorage.removeItem("darkmode");
    this.mode = "moon";

    console.log(this.main.nativeElement.classList.contains("darkMode"));
    if (this.main.nativeElement.classList.contains("darkMode")) {
      localStorage.setItem("darkmode", "1"); // Salvando no localStorage
      this.mode = "sun";
    }
  }

  priority(): void {
    this.numPriority = this.numPriority + 1;

    if (this.numPriority === 3) {
      this.numPriority = 0;
    }

    this.priorityVerify();
    console.log(this.numPriority);
  }

  priorityVerify(): void {
    switch (this.numPriority) {
      case 0:
        this.priorityElement.nativeElement.classList.remove("high-priority");
        this.priorityElement.nativeElement.classList.add("low-priority");
        break;

      case 1:
        this.priorityElement.nativeElement.classList.remove("low-priority");
        this.priorityElement.nativeElement.classList.add("medium-priority");
        break;

      case 2:
        this.priorityElement.nativeElement.classList.remove("medium-priority");
        this.priorityElement.nativeElement.classList.add("high-priority");
        break;

      default:
        break;
    }
  }
}
