import { Geist, Geist_Mono,Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./Header";
import Footer from "./Footer";
import Head from "next/head";

import  {Provider}  from "react-redux";
import { store } from "@/lib/reduxStore/store";
import StoreProvider from "./StoreProvider";


export const metadata = {
  title: "HappyCrackers",
  description: "Generated by create next app",
};
const interfont = Inter({
  subsets: ["latin"],
  weight: ['100','200','300','400','500','600','700','800']
})
export default function RootLayout({ children }) {
  
  return (
    <html lang="en"> 
      <body
        className={`${interfont.variable} ${interfont.variable} antialiased ${interfont.className} h-screen w-full relative tracking-[-1px]`}
      >
        
          <StoreProvider children={children}/>
        
      </body>
      
    </html>
  );
}
