import "@/styles/globals.css";
import Head from "next/head";
import { AuthUserProvider } from "@/firebase/auth";
import { store } from "../store/store";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>webskitters task</title>
      </Head>
      <Provider store={store}>
        <AuthUserProvider>
          <Component {...pageProps} />
        </AuthUserProvider>
      </Provider>
    </>
  );
}
