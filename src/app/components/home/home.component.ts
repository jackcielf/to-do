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
  icon = '/assets/images/icon-check.svg';

  constructor() {}

  ngOnInit() {
    this.listToDo();
  }

  changeMode(): void {
    if (this.mode === "sun") {
      this.mode = "moon";
    } else {
      this.mode = "sun";
    }
  }

  
  saveToDo(): void {
    let dataToDo = new Array(); // Criando um array para colocar os objetos
    
    // Verificando se existe a propriedade/array 'dataToDo' no localStorage
    if (localStorage.hasOwnProperty("dataToDo")) {
      dataToDo = JSON.parse(localStorage.getItem("dataToDo")); // Pegando os valores da propriedade/array 'dataToDo' e convertendo para JSON
    }

    let index = dataToDo.length + 1;

    dataToDo.push({ id: index, description: this.value, do: false }); // Adicionando um novo objeto ao array

    localStorage.setItem("dataToDo", JSON.stringify(dataToDo)); // Salvando no localStorage
    
    this.listToDo();
  }
  
  listToDo(): void {
    // Pegando os valores da propriedade/array 'dataToDo' 
    // Convertendo para JSON
    this.dataToDo = JSON.parse(localStorage.getItem("dataToDo"));
  }

  deleteToDo(data: any): void {
    let dataToDo = JSON.parse(localStorage.getItem("dataToDo")); // Pegando os valores da propriedade/array 'dataToDo' e convertendo para JSON
    
    let tmp = dataToDo.filter((item: any) => item.id !== data );

    localStorage.setItem("dataToDo", JSON.stringify(tmp)); // Salvando no localStorage

    this.listToDo();
  }

  changeVerify(data: any): void {
    console.log(!data.do);
    let newData = !data.do;
    // localStorage.setItem("dataToDo", '');
  }

  clearToDo(): void {
    localStorage.removeItem("dataToDo");
    this.listToDo();
  }
}
