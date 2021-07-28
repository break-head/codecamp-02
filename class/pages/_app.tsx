import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import { AppProps } from "next/dist/next-server/lib/router/router";
import "../styles/globals.css";
import "antd/dist/antd.css";
import Layout from "../src/components/commons/layout";
import { createUploadLink } from "apollo-upload-client";
// import { Global } from "@emotion/react";
// import { globalStyles } from "../src/commons/styles/globalStyle";

// import firebase from "firebase/app";
// import "firebase/firestore";

// firebase.initializeApp({
//   apiKey: "AIzaSyB2AZodzgw35GmS8qlyy3Z22jFI3Du2GH8",
//   authDomain: "codecamp-01.firebaseapp.com",
//   databaseURL: "https://codecamp-01.firebaseio.com",
//   projectId: "codecamp-01",
//   storageBucket: "codecamp-01.appspot.com",
// });

function MyApp({ Component, pageProps }: AppProps) {
  const uploadLink = createUploadLink({
    uri: "http://backend02.codebootcamp.co.kr/graphql",
  });

  const client = new ApolloClient({
    // uri: "http://backend02.codebootcamp.co.kr/graphql",
    link: ApolloLink.from([uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Layout>
        {/* <Global styles={globalStyles} /> */}
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
