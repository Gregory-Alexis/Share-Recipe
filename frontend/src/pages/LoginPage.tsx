const LoginPage = () => {
  return (
    <div className='bg-orange-100 min-h-screen flex flex-col justify-center items-center'>
      <div className='text-center mb-8'>
        <h1 className='text-3xl font-bold text-orange-600'>ShareRecipe</h1>
        <p className='text-lg text-orange-700 mt-2'>
          Connectez-vous pour partager vos recettes préférées
        </p>
      </div>

      <form className='bg-white p-8 rounded-lg shadow-md w-full max-w-md'>
        <div className='mb-6'>
          <label htmlFor='email' className='block text-gray-700 font-semibold mb-2'>
            Email
          </label>
          <input
            type='email'
            id='email'
            name='email'
            placeholder='Entrez votre email'
            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500'
            required
          />
        </div>
        <div className='mb-6'>
          <label htmlFor='password' className='block text-gray-700 font-semibold mb-2'>
            Mot de passe
          </label>
          <input
            type='password'
            id='password'
            name='password'
            placeholder='Entrez votre mot de passe'
            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500'
            required
          />
        </div>

        <button
          type='submit'
          className='w-full py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition'
        >
          Se connecter
        </button>

        <p className='mt-6 text-center text-gray-700'>
          Pas encore de compte ?{' '}
          <a href='/signup' className='text-orange-500 hover:underline'>
            Inscrivez-vous
          </a>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
