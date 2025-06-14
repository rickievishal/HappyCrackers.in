"use client"
import { Provider } from "react-redux";
import { store } from "@/lib/reduxStore/store";
import { Header } from "./Header";
import Footer from "./Footer";

const StoreProvider = ({ children }) => {
  return <>
      <Provider store={store}>
          <main className="mt-[40px]">
            <Header/>
            {children}
            <Footer/> 
          </main>
      </Provider>
  </>;
};

export default StoreProvider;
