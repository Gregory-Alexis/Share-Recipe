import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import SignUpPage from '../pages/SignUpPage';
import RecipeDetails from '../components/RecipeDetails';
import CreateRecipePage from '../pages/createRecipePage';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<HomePage />} />
      <Route path='/signup' element={<SignUpPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/recipe/:id' element={<RecipeDetails />} />
      <Route path='/create-recipe' element={<CreateRecipePage />} />
    </Route>
  )
);
