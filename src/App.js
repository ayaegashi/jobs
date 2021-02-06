import React from 'react'
import { ApolloProvider } from '@apollo/client'
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Job from './Pages/Job/Job'

const client = new ApolloClient({
  uri: 'https://api.graphql.jobs/',
  cache: new InMemoryCache()
});

function App() {
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <Switch>
          <Route path="/job/:cslug/:jslug" component={ Job } />
          <Route path="/" component={ Home } />
        </Switch>
      </ApolloProvider>
    </BrowserRouter>
  );
}

export default App;
