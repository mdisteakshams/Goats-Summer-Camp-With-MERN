import useClasses from "../../../hooks/useClasses";
import PopularClassesCard from "./PopularClassesCard";

const PopularClasses = () => {
  const [classes] = useClasses();
  const firstSixClasses = classes.slice(0, 6); // Show only the first 6 cards

  return (
    <div>
      <h2 className="text-center text-4xl font-bold text-orange-500 my-5">
        Popular Classes
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
        {firstSixClasses.map((each) => (
          <PopularClassesCard key={each._id} each={each} />
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
