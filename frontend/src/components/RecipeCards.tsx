import { useQuery } from '@tanstack/react-query';
import { RecipeModel } from '../models/Recipes';
import { fetchAllRecipes } from '../utils/fetchData';
import { Link } from 'react-router-dom';

const RecipeCards = () => {
  const { data, isLoading, error } = useQuery<RecipeModel[], Error>({
    queryKey: ['recipes'],
    queryFn: fetchAllRecipes,
  });

  if (isLoading) return <div>Chargement des recettes...</div>;
  if (error) return <div>Erreur : {error.message}</div>;

  return (
    <section className='w-full max-w-6xl my-4 p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
      <h3 className='col-span-full text-2xl font-semibold text-orange-700'>Recettes populaires</h3>

      {data?.map((recipe) => (
        <div
          key={recipe.id}
          className='bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition flex flex-col h-full'
        >
          <img
            src={`https://via.placeholder.com/300?text=${recipe.image_url}`}
            alt={recipe.title}
            className='w-full h-60 object-cover'
          />

          <div className='p-4 flex-1'>
            <h4 className='text-xl font-semibold text-orange-600'>{recipe.title}</h4>
            <p className='text-gray-700 mt-2'>{recipe.content}</p>
          </div>

          <Link
            to={`/recipe/${recipe.id}`}
            className=' px-4 py-2 my-4 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition text-center mx-auto'
          >
            Voir la recette
          </Link>
        </div>
      ))}
    </section>
  );
};
export default RecipeCards;
