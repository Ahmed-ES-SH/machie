/* eslint-disable react/no-unescaped-entities */
// app/layout.js

import "./globals.css";
import { VariablesProvider } from "./context/VariablesContext";
import Cartprovider from "./context/Cart_context";
import Data_provider from "./context/Data_context";

export const metadata = {
  title: "Home",
  description: "Created by Next.js",
};

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');
      </style>
      <body className={` dark:bg-main_dash`}>
        <VariablesProvider>
          <Data_provider>
            <Cartprovider>{children}</Cartprovider>
          </Data_provider>
        </VariablesProvider>
      </body>
    </html>
  );
}
