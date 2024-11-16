import { useQuery } from '@tanstack/react-query';
import { fetchOneRecipe } from '../utils/fetchData';
import { useParams } from 'react-router-dom';
import { RecipeModel } from '../models/Recipes';

const RecipeDetails = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useQuery<RecipeModel, Error>({
    queryKey: ['recipe', id],
    queryFn: () => fetchOneRecipe(id!),
    enabled: !!id,
  });

  if (isLoading) return <div>Chargement des recettes...</div>;
  if (error) return <div>Erreur : {error.message}</div>;

  return (
    <div className='w-full max-w-3xl mx-auto p-6 min-h-screen'>
      <div className='bg-white shadow-md rounded-lg overflow-hidden h-full'>
        <img
          src={`https://via.placeholder.com/500?text=${data?.image_url}`}
          alt={data?.title}
          className='w-full h-80 object-cover'
        />
        <div className='p-6'>
          <h2 className='text-3xl font-semibold text-orange-600'>{data?.title}</h2>
          <p className='text-gray-700 mt-4'>{data?.content}</p>
        </div>
      </div>
    </div>
  );
};
export default RecipeDetails;
