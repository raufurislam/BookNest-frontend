import BookContainer from "./BookContainer";
import Hero from "./Hero";
import Stats from "./Stats";

const Home = () => {
  return (
    <div className="bg-[#F9C265] h-[620px] absolute top-0 left-0 w-full -z-50">
      <Hero></Hero>
      <Stats></Stats>
      <BookContainer></BookContainer>
    </div>
  );
};

export default Home;
