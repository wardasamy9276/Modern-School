import ChoolsPage from "./(website)/home/choolsPage";
import FeaturesPage from "./(website)/home/FeaturesPage";
import Hero from "./(website)/home/Hero";
import WhyChooseUsCard from "./(website)/home/WhyChooseUsCard";
import SchoolSlider from "./(website)/home/SchoolSlider";
import SchoolsPage from "./(website)/home/SchoolsPage";
import BookDemo from "./(website)/home/book-demo";
import StagesPage from "./(website)/home/stagespage";
import Activities from "./(website)/home/Activities";
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
