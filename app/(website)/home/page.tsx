import ChoolsPage from "./choolsPage";
import FeaturesPage from "./FeaturesPage";
import Hero from "./Hero";
import WhyChooseUsCard from "./WhyChooseUsCard";
import SchoolSlider from "./SchoolSlider";
import SchoolsPage from "./SchoolsPage";
import BookDemo from "./book-demo";
import StagesPage from "./stagespage";
import Activities from "./Activities";
  import BentoFeatures from "./BentoFeatures"
// import VisionMission from "../about/VisionMission";

// php artisan migrate:fresh --seed   للحفظ
function page() {
  return (
    <div>
 {/* <BentoFeatures /> */}
      <Hero />
         
      
      <FeaturesPage />
      <Activities />
      <SchoolSlider />
      <WhyChooseUsCard />
      <StagesPage />
      <SchoolsPage />
      <ChoolsPage />
      <BookDemo />
       <BentoFeatures />
    </div>
  );
}

export default page;
