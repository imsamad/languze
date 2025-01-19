import { LoremIpsum } from '@/components/lorem';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <LoremIpsum n={100} />
    </div>
  );
};

export default HomePage;
