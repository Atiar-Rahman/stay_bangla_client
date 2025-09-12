import SwiperSlider from "../components/home/SwiperSlider";
import SectionTitle from "../components/SectionTitle";
import Services from "../components/home/Services";
import BlogNews from "../components/home/BlogNews";
import FAQSection from "../components/home/FAQSection";
import Hotels from "./Hotels";
import HotelSlider from "../components/home/HotelSlider";
import BookingPorcess from "../components/home/BookingPorcess";
import SweetSection from "../components/home/SweetSection";

const Home = () => {
  return (
    <div>
      <SwiperSlider />
      <SectionTitle
        heading={"Time line"}
        subHeading={"First See hotel Booking process"}
      />
      <BookingPorcess />
      <SectionTitle
        heading={"Our Best Hotel"}
        subHeading={"Explore our Top label Hotel in Bangladesh"}
      />
      <HotelSlider />
      <SectionTitle
        heading={"Our Best Services"}
        subHeading={"Explore hotel services and Enjoy at all"}
      />
      <Services />
      <SectionTitle
        heading={"Our Sweet"}
        subHeading={"Our all room your near hand price"}
      />
      <SweetSection />
      <SectionTitle
        heading={"Blog and News"}
        subHeading={"Explore all news knowledge our Hotel"}
      />
      <BlogNews />
      <FAQSection />
    </div>
  );
};

export default Home;
