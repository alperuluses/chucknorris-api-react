import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import { ChakraProvider } from "@chakra-ui/react";
import { Fonts, theme } from "./utils/Fonts";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
// Create a client
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <Fonts />
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen />
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
