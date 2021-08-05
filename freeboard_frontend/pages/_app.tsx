import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import { AppProps } from "next/dist/next-server/lib/router/router";
import "antd/dist/antd.css";
import Layout from "../src/components/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { createUploadLink } from "apollo-upload-client";
// import firebase from "firebase/app";
// import "firebase/firestore";
import { createContext, useState } from "react";

// if (typeof window !== "undefined") {
//   firebase.initializeApp({
//     apiKey: "AIzaSyB2AZodzgw35GmS8qlyy3Z22jFI3Du2GH8",
//     authDomain: "codecamp-01.firebaseapp.com",
//     databaseURL: "https://codecamp-01.firebaseio.com",
//     projectId: "codecamp-01",
//     storageBucket: "codecamp-01.appspot.com",
//   });
// }

export const GlobalContext = createContext<IContext>({});
function MyApp({ Component, pageProps }: AppProps) {
  const [accessToken, setAccessToken] = useState("");
  const value = {
    accessToken: accessToken,
    setAccessToken: setAccessToken,
  };

  const uploadLink = createUploadLink({
    uri: "http://backend02.codebootcamp.co.kr/graphql",
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
  });

  const client = new ApolloClient({
    // uri: "http://backend02.codebootcamp.co.kr/graphql",
    link: ApolloLink.from([uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
  });
  return (
    <GlobalContext.Provider value={value}>
      <ApolloProvider client={client}>
        <Layout>
          <Global styles={globalStyles} />
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </GlobalContext.Provider>
  );
}

export default MyApp;
