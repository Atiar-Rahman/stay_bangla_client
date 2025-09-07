import SwiperSlider from "../components/home/SwiperSlider";
import SectionTitle from "../components/SectionTitle";
import Services from "../components/home/Services";
import BlogNews from "../components/home/BlogNews";
import FAQSection from "../components/home/FAQSection";

const Home = () => {
  return (
    <div>
      <SwiperSlider />
      <SectionTitle
        heading={"Our Best Hotel"}
        subHeading={"Explore our Top label Hotel in Bangladesh"}
      />
      <SectionTitle
        heading={"Our Best Services"}
        subHeading={"Explore hotel services and Enjoy at all"}
      />
      <Services />
      <SectionTitle
        heading={"Blog and News"}
        subHeading={"Explore all news knowledge our Hotel"}
      />
      <BlogNews />
      <FAQSection/>
    </div>
  );
};

export default Home;
