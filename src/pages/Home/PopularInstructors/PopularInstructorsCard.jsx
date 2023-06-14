const PopularInstructorsCard = ({ each }) => {
  const { name, photo, email, role } = each;
  
  if (role !== "instructor") {
    return null; // Skip rendering if the role is not 'instructor'
  }
  return (
    <div className="my-5">
      <>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={photo} alt="Shoes" className="h-72" />
          </figure>
          <div className="card-body flex flex-col items-center">
            <h2 className="card-title">Instructor : {name}</h2>
            <p>Email Address: {email}</p>
          </div>
        </div>
      </>
    </div>
  );
};

export default PopularInstructorsCard;
