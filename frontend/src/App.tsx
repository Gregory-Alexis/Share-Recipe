import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { router } from './router/router';
import { useRecipeStore } from './store/recipeStore';
import { useEffect } from 'react';

const queryClient = new QueryClient();

const App = () => {
  const { checkAuth } = useRecipeStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};
export default App;
