"use client";
import * as React from "react";
import { HeroUIProvider } from "@heroui/system";

import { ThemeProvider as NextThemesProvider } from "next-themes";
/* import { ThemeProviderProps } from "next-themes/dist/types"; */
import { ThemeProvider } from "next-themes";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ProvidersProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  return (
    <HeroUIProvider>
      <NextThemesProvider
        defaultTheme='system'
        attribute='class'
        {...themeProps}>
        {children}
      </NextThemesProvider>
    </HeroUIProvider>
  );
}
