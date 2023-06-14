const PopularClassesCard = ({ each }) => {
  const { name, instructor_name, image, enrollment } = each;
  return (
    <div className="my-5">
      <div className="card w-96 h-auto bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" className="h-72" />
        </figure>
        <div className="card-body flex flex-col items-center">
          <h2 className="text-2xl font-bold">{name}</h2>
          <p><span className="font-semibold">Instructor :</span> {instructor_name}</p>
          <p><span className="font-semibold">Enrolled Students: </span> {enrollment}</p>
        </div>
      </div>
    </div>
  );
};

export default PopularClassesCard;
