"use client";

import "@/styles/globals.css";
import { useEffect, useState } from "react";
import type { Metadata } from "next";
import { Providers } from "./providers";
import { fontSans } from "@/config/fonts";
import clsx from "clsx";

/* export const metadata: Metadata = {
  title: "dieplom",
  description: "dashboard for bashnya",
}; */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <html lang="ru">
      <body className={isMounted ? clsx("font-sans antialiased", fontSans.className) : "opacity-0"}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
