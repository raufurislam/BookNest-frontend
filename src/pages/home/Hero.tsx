import { Button } from "@/components/ui/button";
import hero from "@/assets/hero.png";
import { Link } from "react-router";

const Hero = () => {
  return (
    <div>
      <div className="mt-28 max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-2 justify-between items-center">
          <div className="text-6xl text-black/90 font-normal">
            Books Make <br />
            Minds Bloom
          </div>
          <div className="w-2/4 ml-20">
            <p className="text-sm text-black/70">
              A calm, simple way to explore and manage books. Enjoy a
              clutter-free experience where stories inspire and your mind feels
              at ease.
            </p>
            <Link to="/all-books">
              <Button
                variant="default"
                className="mt-6 px-8 py-4 rounded-full 
             bg-black/90 text-white hover:bg-black/80 
             shadow-md hover:shadow-lg transition-all duration-200"
              >
                Explore Now
              </Button>
            </Link>
          </div>
        </div>
        <img src={hero} className="mx-auto w-[420px] mt-5" alt="" />
      </div>
    </div>
  );
};

export default Hero;
