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

  console.log(accessToken);
  const uploadLink = createUploadLink({
    uri: "http://backend02.codebootcamp.co.kr/graphql",
    headers: {
      authorization: `Bearer ${accessToken}`,
      // authorization:
      //   "Bearer eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTBjYTRjNDljYTM0OTAwMjlhZGI0OTgiLCJwZXJtaXNzaW9uIjowLCJpYXQiOjE2Mjg1MDAyMzgsImV4cCI6MTYyODUwMzgzOCwic3ViIjoiYWNjZXNzVG9rZW4ifQ.kxJLLSwSQ1NDxKs6BzbOAhV5hBnMW3TW64iKR3JiDsusW06A_7FjoSbGoeCLrcaCP3aJZ0Zf3XFE-lBlOhh20Q",
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
