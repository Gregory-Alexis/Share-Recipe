import { Navigate } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';

export const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useRecipeStore();

  if (!isAuthenticated) {
    return <Navigate to='/login' replace />;
  }

  return children;
};
