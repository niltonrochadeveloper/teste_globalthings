"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "@/lib/store";

const Provider = ({ children, ...props }: ThemeProviderProps) => {
  return (
    <ReduxProvider store={store}>
      <NextThemesProvider {...props}>{children}</NextThemesProvider>
    </ReduxProvider>
  );
};

export default Provider;
