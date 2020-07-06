import { ApolloProvider } from '@apollo/react-hooks'
import { useApollo } from '../lib/apolloClient'

const App: React.FC<{Component: any, pageProps: any}> = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default App