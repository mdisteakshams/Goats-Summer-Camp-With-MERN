import { Helmet } from "react-helmet-async";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import Map from "../Map/Map";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Goat's Summer Camp | Home</title>
      </Helmet>
      <PopularClasses></PopularClasses>
      <PopularInstructors></PopularInstructors>
      <Map></Map>
    </div>
  );
};

export default Home;
