"use client";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import "./globals.css";
import "react-multi-carousel/lib/styles.css";
import NavigationConfig from "@/core/navigation/NavigationConfig";
import { usePathname } from 'next/navigation';
import localFont from "next/font/local";
import { Providers } from "./providers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const poppins = localFont({
  src:"../app/fonts/Poppins-Regular.ttf",
});


export default function RootLayout( {
  children
})

{
  const pathname = usePathname();
  return (
    <html lang="en" suppressHydrationWarning>

      <title>AI Mental</title>
      <body className={poppins.className}>
        <Provider store={store}>
          <AppRouterCacheProvider>
            <NavigationConfig />
            <ToastContainer
        position="top-right"
        autoClose={5000}
        limit={4}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
            <main>
              <Providers>
              {children}
              </Providers>
              </main>
          </AppRouterCacheProvider>
        </Provider>
      </body>
    </html>
  );
}
