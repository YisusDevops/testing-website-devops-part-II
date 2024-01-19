"use client";
import { Inter } from "next/font/google";
import "@mantine/core/styles.css";
import "./globals.css";
import { makeStore, AppStore } from "@/store";
import { useRef } from "react";
import { Provider } from "react-redux";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={inter.className}>
        <MantineProvider>
          <Provider store={storeRef.current}>{children}</Provider>
        </MantineProvider>
      </body>
    </html>
  );
}
