import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Text Section */}
          <div className="text-center xl:text-left order-2 xl:order-1 xl:mr-8">
            <span className="text-xl"> Cloud DevOps Engineer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br /> <span className="text-accent"> Mathew Jyothis Jimmy</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Hello! I'm Mathew Jyothis Jimmy, a passionate Cloud Engineer with a strong background in DevOps, cloud computing, and cybersecurity. With a Master's degree in Computer Applications from Christ University, I have honed my skills in building, deploying, and managing scalable cloud solutions. My goal is to leverage my expertise to help organizations achieve their digital transformation goals through efficient and secure cloud infrastructure.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
              <Socials 
              contanierStyles="flex gap-6"
              iconStyles="w-9 h-9 border border rounded-full flex justify-center items-center text-account text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
              />
              </div>
            </div>
          </div>
          {/* Photo Section */}
          <div className="order-1 xl:order-2 mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;