import axios from "axios";
import { toast } from "react-toastify";

export default function errorHandling(err: any) {
  if (axios.isAxiosError(err)) {
    toast.error('Error: ' + err.message);

    if (err.response) {
      console.error('Erro na resposta da API:', {
        status: err.response.status,
        data: err.response.data,
      });
    } else if (err.request) {
      console.error('Nenhuma resposta recebida:', err.request);
    } else {
      console.error('Erro ao fazer a requisição:', err.message);
    }
  } else {
    toast.error('Error: ' + err);
    
    // Erro não relacionado ao Axios
    console.error('Erro inesperado:', err);
  }
}
