// Importa o pacote axios e o tipo AxiosInstance
import axios, { AxiosInstance } from "axios";

// Cria uma instância do axios com o método create() e a atribui a uma constante chamada api, com o tipo AxiosInstance
const api: AxiosInstance = axios.create();

// Exporta a constante api como padrão, para que possa ser importada em outros arquivos.
export default api;
