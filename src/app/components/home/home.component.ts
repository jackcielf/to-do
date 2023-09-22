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
  sizeList = 0;
  // hideAlert = true;

  constructor() {}

  ngOnInit() {
    this.list();
  }

  // alertHide(): void {
  //   this.hideAlert = !this.hideAlert;
  // }

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

  list(): void {
    // Pegando os valores da propriedade/array 'dataToDo'
    // Convertendo para JSON
    this.dataToDo = JSON.parse(localStorage.getItem("dataToDo"));
    this.sizeList = this.dataToDo.length;
  }

  delete(data: any): void {
    this.dataToDo = JSON.parse(localStorage.getItem("dataToDo")); // Pegando os valores da propriedade/array 'dataToDo' e convertendo para JSON

    let tmp = this.dataToDo.filter((item: any) => item.description !== data);

    localStorage.setItem("dataToDo", JSON.stringify(tmp)); // Salvando no localStorage

    this.list();
  }

  update(data: any) {
    console.log(this.dataToDo)
    const newDataToDo = this.dataToDo.map((item: any) => {
      if (item.description === this.value) {
        return { ...item, do: !data.do };
      }
      return item;
    });

    localStorage.setItem("dataToDo", JSON.stringify(newDataToDo)); // Salvando no localStorage

    console.log(newDataToDo);
  }

  clear(): void {
    localStorage.removeItem("dataToDo");
    this.list();
  }

  todoFinalized(data: any): void {
    console.log(!data.do);
    let newData = !data.do;
    // localStorage.setItem("dataToDo", '');
  }

  changeMode(): void {
    if (this.mode === "sun") {
      this.mode = "moon";
    } else {
      this.mode = "sun";
    }
  }

  // numberItems(): void {
  //   this.dataToDo = JSON.parse(localStorage.getItem("dataToDo"));
  //   this.sizeList = this.dataToDo.length;
  // }

  newTaskExist(): any {
    this.dataToDo = JSON.parse(localStorage.getItem("dataToDo"));
    let exist = this.dataToDo.find(
      (item: any) => item.description === this.value
    );
    return !exist ? false : true;
  }
}
