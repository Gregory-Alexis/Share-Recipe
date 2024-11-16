import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Navbar />
        <RouterProvider router={router} />
        <Footer />
      </div>
    </QueryClientProvider>
  );
};
export default App;
