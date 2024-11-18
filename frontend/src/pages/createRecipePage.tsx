import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';

type RecipeFormInputs = {
  title: string;
  content: string;
  image_url: string;
};

const CreateRecipePage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RecipeFormInputs>();
  const navigate = useNavigate();

  const createRecipeMutation = useMutation({
    mutationFn: async (data: RecipeFormInputs) => {
      return await axios.post('http://localhost:5000/api/recipes', data);
    },
    onSuccess: () => {
      console.log('Recette créée avec succès !');
      navigate('/');
    },
    onError: (error) => {
      console.error('Erreur lors de la création de la recette:', error);
    },
  });

  const onSubmit: SubmitHandler<RecipeFormInputs> = (data) => {
    createRecipeMutation.mutate(data);
  };

  return (
    <div className='w-full max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10'>
      <h2 className='text-2xl font-semibold text-orange-700 mb-6'>Créer une nouvelle recette</h2>
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
        <div>
          <label htmlFor='title' className='block text-gray-700 font-semibold'>
            Titre
          </label>
          <input
            type='text'
            id='title'
            className={`w-full border rounded-lg p-2 mt-1 ${
              errors.title ? 'border-red-500' : 'border-gray-300'
            }`}
            {...register('title', { required: 'Le titre est obligatoire' })}
          />
          {errors.title && <p className='text-red-500 text-sm mt-1'>{errors.title.message}</p>}
        </div>

        <div>
          <label htmlFor='content' className='block text-gray-700 font-semibold'>
            Contenu
          </label>
          <textarea
            id='content'
            className={`w-full border rounded-lg p-2 mt-1 h-32 ${
              errors.content ? 'border-red-500' : 'border-gray-300'
            }`}
            {...register('content', { required: 'Le contenu est obligatoire' })}
          ></textarea>
          {errors.content && <p className='text-red-500 text-sm mt-1'>{errors.content.message}</p>}
        </div>

        <div>
          <label htmlFor='image_url' className='block text-gray-700 font-semibold'>
            URL de l'image
          </label>
          <input
            type='text'
            id='image_url'
            className={`w-full border rounded-lg p-2 mt-1 ${
              errors.image_url ? 'border-red-500' : 'border-gray-300'
            }`}
            {...register('image_url', { required: "L'URL de l'image est obligatoire" })}
          />
          {errors.image_url && (
            <p className='text-red-500 text-sm mt-1'>{errors.image_url.message}</p>
          )}
        </div>

        <button
          type='submit'
          className='w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition'
        >
          Ajouter la recette
        </button>
      </form>
    </div>
  );
};

export default CreateRecipePage;
