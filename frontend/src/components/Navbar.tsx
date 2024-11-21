import { NavLink } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';

const Navbar = () => {
  const { isAuthenticated, logout } = useRecipeStore();

  const handleLogout = () => {
    logout();
  };
  return (
    <nav className='w-full bg-orange-500 text-white py-4 px-8 shadow-md flex justify-between items-center'>
      <h1 className='text-2xl font-bold'>Share recipe</h1>
      <div>
        <button
          onClick={handleLogout}
          className='px-4 py-2 mr-4 bg-white text-orange-500 rounded-lg hover:bg-orange-600 hover:text-white transition'
        >
          <NavLink to='/login'>{isAuthenticated ? 'Se déconnecter' : 'Se connecter'}</NavLink>
        </button>
        {!isAuthenticated && (
          <button className='px-4 py-2 bg-white text-orange-500 rounded-lg hover:bg-orange-600 hover:text-white transition'>
            <NavLink to='/signup'>S'inscrire</NavLink>
          </button>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
