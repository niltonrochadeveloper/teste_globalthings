"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { Provider as ReduxProvider } from "react-redux";
import { persistor, store } from "@/lib/store";
import { PersistGate } from "redux-persist/lib/integration/react";

const Provider = ({ children, ...props }: ThemeProviderProps) => {
  return (
    <ReduxProvider store={store}>
      <PersistGate persistor={persistor}>
        <NextThemesProvider {...props}>{children}</NextThemesProvider>
      </PersistGate>
    </ReduxProvider>
  );
};

export default Provider;
