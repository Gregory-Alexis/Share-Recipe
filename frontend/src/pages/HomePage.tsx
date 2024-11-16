import Hero from '../components/Hero';
import RecipeCards from '../components/RecipeCards';

const HomePage = () => {
  return (
    <div className='bg-orange-100 min-h-screen flex flex-col items-center pb-0'>
      <Hero />
      <RecipeCards />
    </div>
  );
};

export default HomePage;
