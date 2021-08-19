import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
// import { GraphQLClient, gql } from "graphql-request";
import { AppProps } from "next/dist/next-server/lib/router/router";
import "../styles/globals.css";
import "antd/dist/antd.css";
import Layout from "../src/components/commons/layout";
// import { Global } from "@emotion/react";
// import { globalStyles } from "../src/commons/styles/globalStyles";
import { createUploadLink } from "apollo-upload-client";

import firebase from "firebase/app";
import "firebase/firestore";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
} from "react";
import { getAccessToken } from "../src/commons/libraries/getAccessToken";
import * as Sentry from "@sentry/nextjs";
Sentry.init({
  dsn: "https://0f85b5e981834e92a1d676c8a84a863f@o965498.ingest.sentry.io/5916350",
});

// import Head from "next/head";
if (typeof window !== "undefined") {
  firebase.initializeApp({
    apiKey: "AIzaSyB2AZodzgw35GmS8qlyy3Z22jFI3Du2GH8",
    authDomain: "codecamp-01.firebaseapp.com",
    databaseURL: "https://codecamp-01.firebaseio.com",
    projectId: "codecamp-01",
    storageBucket: "codecamp-01.appspot.com",
  });
}

interface IContext {
  accessToken: string;
  setAccessToken: Dispatch<SetStateAction<string>>;
  userInfo: any;
  setUserInfo: any;
}
export const GlobalContext = createContext<IContext>({});
function MyApp({ Component, pageProps }: AppProps) {
  const [accessToken, setAccessToken] = useState("");
  const [userInfo, setUserInfo] = useState({});

  const value = {
    accessToken: accessToken,
    setAccessToken: setAccessToken,
    userInfo: userInfo,
    setUserInfo: setUserInfo,
  };

  useEffect(() => {
    if (localStorage.getItem("refreshToken")) getAccessToken(setAccessToken);
  }, []);

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        if (err.extensions?.code === "UNAUTHENTICATED") {
          // 2. 발급 받은 accessToken으로 방금 실패했던 쿼리 재실행하기
          operation.setContext({
            headers: {
              ...operation.getContext().headers,
              authorization: `Bearer ${getAccessToken(setAccessToken)}`,
            },
          });
          return forward(operation);
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "https://backend02.codebootcamp.co.kr/graphql",
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
    credentials: "include",
  });

  const client = new ApolloClient({
    // uri: "http://backend02.codebootcamp.co.kr/graphql",
    link: ApolloLink.from([errorLink, uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
    connectToDevTools: true,
  });

  return (
    <GlobalContext.Provider value={value}>
      <ApolloProvider client={client}>
        {/* <Head>
          <script
            type="text/javascript"
            src="//dapi.kakao.com/v2/maps/sdk.js?appkey=46a088defe4208f8cfd94b08223db61a"
          ></script>
        </Head> */}
        <Layout aaa={true}>
          {/* <Global styles={globalStyles} /> */}
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </GlobalContext.Provider>
  );
}

export default MyApp;
