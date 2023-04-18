import { useQuery } from "@tanstack/vue-query";
import api from "./api/api";
import { Method } from "axios";

// Classe construtora para requisição de dados
export default class {
  name: any;
  method: Method;
  url: string;
  data: {} | undefined;
  constructor(name: string, method: Method, url: string, data?: {}) {
    this.name = name;
    this.method = method;
    this.url = url;
    this.data = data;
  }

  fetchData() {
    const { isLoading, error, data, isFetching } = useQuery(
      [this.name],
      (): any =>
        api({ method: this.method, url: this.url, data: this.data }).then(
          (res: { data: any }) => res.data
        )
    );
    return { isLoading, error, data, isFetching };
  }
}
