import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import SignUpPage from '../pages/SignUpPage';
import RecipeDetails from '../components/RecipeDetails';
import CreateRecipePage from '../pages/createRecipePage';
import MainLayout from '../layout/MainLayout';
import RedirectAuthenticatedUser from '../components/RedirectAuthenticatedUser';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route
        path='/signup'
        element={
          <RedirectAuthenticatedUser>
            <SignUpPage />
          </RedirectAuthenticatedUser>
        }
      />
      <Route
        path='/login'
        element={
          <RedirectAuthenticatedUser>
            <LoginPage />
          </RedirectAuthenticatedUser>
        }
      />
      <Route path='/recipe/:id' element={<RecipeDetails />} />
      <Route path='/create-recipe' element={<CreateRecipePage />} />
    </Route>
  )
);
