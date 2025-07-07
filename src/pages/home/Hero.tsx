import { Button } from "@/components/ui/button";
import hero from "@/assets/hero.png";

const Hero = () => {
  return (
    <div>
      <div className="mt-28 max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-2 justify-between items-center">
          <div className="text-6xl font-normal">
            Books Make <br />
            Minds Bloom
          </div>
          <div className="w-2/4 ml-20">
            <p className="text-sm">
              A calm, simple way to explore and manage books. Enjoy a
              clutter-free experience where stories inspire and your mind feels
              at ease.
            </p>
            <Button className="rounded-full bg-transparent text-black border border-black hover:bg-black px-4 hover:text-white mt-5">
              Explore Now
            </Button>
          </div>
        </div>
        <img src={hero} className="mx-auto w-[420px] mt-5" alt="" />
      </div>
    </div>
  );
};

export default Hero;
