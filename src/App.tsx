import './App.css';
import { Card } from './components/card';
import { Header } from './components/header';

import { QueryClient, QueryClientProvider } from 'react-query';
import { Products } from './components/products';
import { Footer } from './components/footer';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Products />
      <Footer />
    </QueryClientProvider>
  );
}

export default App;
