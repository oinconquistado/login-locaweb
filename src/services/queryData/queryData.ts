import { Method } from "axios"; // Importa o tipo de método do pacote axios
import { useQuery } from "@tanstack/vue-query"; // Importa uma função de uma biblioteca chamada vue-query
import api from "@/services/api/api"; // Importa um módulo personalizado de uma API

// Classe construtora para requisição de dados
export default class {
  data: {} | undefined; // Declara uma variável chamada data como um objeto vazio ou undefined
  method: Method; // Declara uma variável chamada method do tipo Method (importado do pacote axios)
  name: any; // Declara uma variável chamada name como qualquer tipo de dado
  url: string; // Declara uma variável chamada url como uma string

  constructor(name: string, method: Method, url: string, data?: {}) {
    // Define um construtor para a classe com 4 parâmetros
    this.name = name;
    this.method = method;
    this.url = url;
    this.data = data;
  }

  fetchData() {
    // Declara um método chamado fetchData
    const { isLoading, error, data, isFetching } = useQuery(
      // Declara variáveis que recebem valores de uma função useQuery
      [this.name], // Define um array com o nome da requisição
      (): any => // Define uma função anônima que retorna uma promessa
        api({ method: this.method, url: this.url, data: this.data }).then(
          // Chama a API definida no arquivo api.ts com os parâmetros passados na classe
          (res: { data: any }) => res.data // Retorna o resultado da chamada à API
        )
    );
    return { isLoading, error, data, isFetching }; // Retorna um objeto com as variáveis definidas acima
  }
}
