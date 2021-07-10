import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const client = new ApolloClient({
    uri: "http://backend02.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
