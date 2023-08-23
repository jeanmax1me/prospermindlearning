"use client";

import Header from "./components/Header/Header";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './globals.scss'
import type { Metadata } from 'next'
import { useState } from 'react';
import { Alegreya } from 'next/font/google'
import useUserData from "./hooks/useUserData";



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
  keywords: "e-learning, courses, learning online",
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

  if (currentTheme === 'dark') {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }

  const userData = useUserData();

  return (
    <html lang="en" className={alegreya.className}>
      <head>
        <title>{metadata.title as React.ReactNode}</title>
        <meta charSet="UTF-8" />
        <meta name="description" content={metadata.description as string | undefined} />
        <meta name="keywords" content={metadata.keywords as string | undefined} />
        <meta name="author" content="jeanmax1me" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="body">
        <ThemeProvider theme={theme}>
          <Header userData={userData} theme={currentTheme} toggleTheme={toggleTheme} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}