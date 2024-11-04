"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "@/lib/store";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "@/services/queryClient";

const Provider = ({ children, ...props }: ThemeProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReduxProvider store={store}>
        <NextThemesProvider {...props}>{children}</NextThemesProvider>
      </ReduxProvider>
    </QueryClientProvider>
  );
};

export default Provider;
