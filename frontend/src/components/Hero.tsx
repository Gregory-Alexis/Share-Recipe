const Hero = () => {
  return (
    <header className='text-center py-16 px-4 bg-orange-200 w-full'>
      <h2 className='text-4xl font-bold text-orange-600 mb-4'>Bienvenue sur ShareRecipe!</h2>
      <p className='text-lg text-orange-700 mb-8'>
        Découvrez et partagez des recettes délicieuses et faciles à préparer avec la communauté !
      </p>
      <button className='px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition'>
        Explorer les recettes
      </button>
    </header>
  );
};
export default Hero;
