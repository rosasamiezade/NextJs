'use client'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

export function QueryProvider({ children }) {
  <QueryClientProvider client={queryClient}>
    {children}
    {ReactQueryDevtools} 
  </QueryClientProvider>;
}
