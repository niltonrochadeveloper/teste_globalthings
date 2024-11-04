import { QueryClient, QueryClientConfig } from "@tanstack/react-query";

const queryClientConfig: QueryClientConfig = {
  defaultOptions: {
    queries: {
      // retry: 1, // Número de tentativas de re-tentativa em caso de falha
      // refetchOnWindowFocus: true, // Refaz a busca quando a janela é focada
      refetchOnReconnect: true, // Refaz a busca quando a conexão é restabelecida
      refetchInterval: false, // Intervalo de tempo para refazer a busca em intervalos regulares
      // retryDelay: 60 * 1000 * 2, //
    },
    mutations: {
      // retry: 1, // Número de tentativas de re-tentativa em caso de falha para mutações
      // retryDelay: 60 * 1000 * 2, // Atraso entre tentativas em milissegundos (2 minutos)
    },
  },
};

const queryClient = new QueryClient(queryClientConfig);

export default queryClient;
