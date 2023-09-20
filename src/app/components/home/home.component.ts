import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  imgUrl = "/assets/images/bg-desktop-dark.jpg";
  mode = "moon";
  value: string;
  index = 0;

  constructor() {}

  ngOnInit() {}

  changeMode(): void {
    if (this.mode === "sun") {
      this.mode = "moon";
    } else {
      this.mode = "sun";
    }
  }

  saveToDo(): void {
    this.index = this.index + 1;
    let dataToDo = new Array(); // Criando um array para colocar os objetos

    // Verificando se existe a propriedade/array 'dataToDo' no localStorage
    if (localStorage.hasOwnProperty("dataToDo")) {
      dataToDo = JSON.parse(localStorage.getItem("dataToDo")); // Pegando os valores da propriedade/array 'dataToDo' e convertendo para JSON
    }

    dataToDo.push({ id: this.index, do: this.value }); // Adicionando um novo objeto ao array

    localStorage.setItem("dataToDo", JSON.stringify(dataToDo)); // Salvando no localStorage
  }

  
}
