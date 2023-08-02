import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from './theme'
import { RouterProvider } from 'react-router-dom'
import router from './components/routing/router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <RouterProvider router={router} />
    </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
