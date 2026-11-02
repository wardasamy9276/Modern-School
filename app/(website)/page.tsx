import ChoolsPage from "./home/choolsPage";
import FeaturesPage from "./home/FeaturesPage";
import Hero from "./home/Hero";
import WhyChooseUsCard from "./home/WhyChooseUsCard";
import SchoolSlider from "./home/SchoolSlider";
import SchoolsPage from "./home/SchoolsPage";
import BookDemo from "./home/book-demo";
import StagesPage from "./home/stagespage";
import Activities from "./home/Activities";
// import VisionMission from "../about/VisionMission";

// php artisan migrate:fresh --seed   للحفظ
function page() {
  return (
    <div>
      <Hero />
      <FeaturesPage />
      <Activities />
      <SchoolSlider />
      <WhyChooseUsCard />
      <StagesPage />
      <SchoolsPage />
      <ChoolsPage />
      <BookDemo />
    </div>
  );
}

export default page;
