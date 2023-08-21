"use client";

import Header from "./components/Header/Header";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './globals.scss'
import type { Metadata } from 'next'
import { useState } from 'react';
import { Alegreya } from 'next/font/google'


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  }
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

const alegreya = Alegreya({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'ProsperMind Learning',
  description: 'ProsperMind - Learn useful skills online',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [currentTheme, setCurrentTheme] = useState<'dark' | 'light'>('light');
  const toggleTheme = () => {
    setCurrentTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const theme = currentTheme === 'dark' ? darkTheme : lightTheme;

  return (
    <html lang="en" className={alegreya.className}>
      <body>
        <ThemeProvider theme={theme}>
          <Header theme={currentTheme} toggleTheme={toggleTheme} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}