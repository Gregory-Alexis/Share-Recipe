import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { SignUpFormInputs } from '../models/signUp';
import { useRecipeStore } from '../store/recipeStore';

const SignUpPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<SignUpFormInputs>();

  const navigate = useNavigate();

  const { signUp } = useRecipeStore();

  const onSubmit: SubmitHandler<SignUpFormInputs> = async (data) => {
    try {
      signUp(data.firstname, data.lastname, data.email, data.password);
      navigate('/');
    } catch (error: any) {
      throw error;
    }
  };

  return (
    <div className='bg-orange-100 min-h-screen flex flex-col justify-center items-center'>
      <div className='text-center mb-8'>
        <h1 className='text-3xl font-bold text-orange-600'>ShareRecipe</h1>
        <p className='text-lg text-orange-700 mt-2'>
          Rejoignez-nous pour partager vos recettes préférées
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className='bg-white p-8 rounded-lg shadow-md w-full max-w-md'
      >
        <div className='mb-6'>
          <label htmlFor='firstname' className='block text-gray-700 font-semibold mb-2'>
            Prénom
          </label>
          <input
            type='text'
            id='firstname'
            {...register('firstname', {
              required: 'Le prénom est obligatoire',
              minLength: { value: 3, message: 'Le prénom doit contenir au moins 3 caractères' },
            })}
            placeholder='Entrez votre prénom'
            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500'
          />
          {errors.firstname && <p className='text-red-500 text-sm'>{errors.firstname.message}</p>}
        </div>

        <div className='mb-6'>
          <label htmlFor='lastname' className='block text-gray-700 font-semibold mb-2'>
            Nom
          </label>
          <input
            type='text'
            id='lastname'
            {...register('lastname', {
              required: 'Le nom est obligatoire',
              minLength: { value: 3, message: 'Le nom doit contenir au moins 3 caractères' },
            })}
            placeholder='Entrez votre nom'
            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500'
          />
          {errors.lastname && <p className='text-red-500 text-sm'>{errors.lastname.message}</p>}
        </div>

        <div className='mb-6'>
          <label htmlFor='email' className='block text-gray-700 font-semibold mb-2'>
            Email
          </label>
          <input
            type='email'
            id='email'
            {...register('email', {
              required: "L'email est obligatoire",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Format de l'email invalide",
              },
            })}
            placeholder='Entrez votre email'
            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500'
          />
          {errors.email && <p className='text-red-500 text-sm'>{errors.email.message}</p>}
        </div>

        <div className='mb-6'>
          <label htmlFor='password' className='block text-gray-700 font-semibold mb-2'>
            Mot de passe
          </label>
          <input
            type='password'
            id='password'
            {...register('password', {
              required: 'Le mot de passe est obligatoire',
              minLength: {
                value: 6,
                message: 'Le mot de passe doit contenir au moins 6 caractères',
              },
            })}
            placeholder='Choisissez un mot de passe'
            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500'
          />
          {errors.password && <p className='text-red-500 text-sm'>{errors.password.message}</p>}
        </div>

        <div className='mb-6'>
          <label htmlFor='confirmPassword' className='block text-gray-700 font-semibold mb-2'>
            Confirmez le mot de passe
          </label>
          <input
            type='password'
            id='confirmPassword'
            {...register('confirmPassword', {
              required: 'La confirmation du mot de passe est obligatoire',
              validate: (value) =>
                value === watch('password') || 'Les mots de passe ne correspondent pas',
            })}
            placeholder='Confirmez votre mot de passe'
            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500'
          />
          {errors.confirmPassword && (
            <p className='text-red-500 text-sm'>{errors.confirmPassword.message}</p>
          )}
        </div>

        <button
          type='submit'
          className='w-full py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition'
        >
          S'inscrire
        </button>

        <p className='mt-6 text-center text-gray-700'>
          Déjà inscrit ?{' '}
          <Link to='/login' className='text-orange-500 hover:underline'>
            Connectez-vous
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUpPage;
