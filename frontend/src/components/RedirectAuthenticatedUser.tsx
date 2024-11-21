import React from 'react';
import { Navigate } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';

const RedirectAuthenticatedUser: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useRecipeStore();

  if (isAuthenticated) {
    return <Navigate to='/' replace />;
  }

  return <>{children}</>;
};

export default RedirectAuthenticatedUser;
