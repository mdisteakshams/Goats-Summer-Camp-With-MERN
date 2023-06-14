import { useState } from "react";
import { Helmet } from "react-helmet-async";
import useClasses from "../../hooks/useClasses";
import "react-tabs/style/react-tabs.css";
import ClassesCard from "../../Components/ClassesCard/ClassesCard";


const Classes = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [classes] = useClasses();
  

  const categoryIds = [
    ...new Set(classes.map((each) => each.category)),
  ];

  const filteredClasses =
    activeTab === "all"
      ? classes
      : classes.filter((each) => each.category === activeTab);
  

  return (
    <div className="">
       <Helmet>
        <title>Goat's Summer Camp | Classes</title>
      </Helmet>
      <div className="mt-16 mb-16">
        <div className="">
          <div className="text-center">
            <h3 className="text-4xl text-orange-500 mb-5 font-semibold">
              All the Classes
            </h3>
            <p className="mb-5">
              In this section we can see different types of classes based on
              their categories
            </p>
          </div>

          <div className="flex justify-center flex-col items-center mb-6 sm:flex-row">
            <button
              className={`mb-4 mr-4 lg:mb-0 px-4 py-2 rounded ${
                activeTab === "all" ? "bg-blue-500 text-white" : "bg-gray-300"
              }`}
              onClick={() => setActiveTab("all")}
            >
              All
            </button>
            {categoryIds.map((categoryId) => (
              <button
                key={categoryId}
                className={`mb-4 lg:mb-0 mr-4 px-4 py-2 rounded ${
                  activeTab === categoryId
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300"
                }`}
                onClick={() => setActiveTab(categoryId)}
              >
                {categoryId}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredClasses.map((each) => (
              <ClassesCard
                key={each._id}
                each={each}
              ></ClassesCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classes;
