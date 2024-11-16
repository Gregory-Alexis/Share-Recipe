const Navbar = () => {
  return (
    <nav className='w-full bg-orange-500 text-white py-4 px-8 shadow-md flex justify-between items-center'>
      <h1 className='text-2xl font-bold'>Share recipe</h1>
      <div>
        <button className='px-4 py-2 mr-4 bg-white text-orange-500 rounded-lg hover:bg-orange-600 hover:text-white transition'>
          Se connecter
        </button>
        <button className='px-4 py-2 bg-white text-orange-500 rounded-lg hover:bg-orange-600 hover:text-white transition'>
          S'inscrire
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
