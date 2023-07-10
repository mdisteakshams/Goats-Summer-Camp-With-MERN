import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const img_hosting_token_imgBB = import.meta.env.VITE_Image_Upload_Token;
const AddClass = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();
  const img_url = `https://api.imgbb.com/1/upload?expiration=600&key=${img_hosting_token_imgBB}`;
  const onSubmit = (each) => {
    const formData = new FormData();
    formData.append("image", each.image[0]);
    
    fetch(img_url, {
      method: "POST",
      body: formData,
    })
    .then((res) => res.json())
      .then(imgResponse =>{
        console.log(imgResponse)
        const imgURL = imgResponse.data.display_url;
          const { name, instructor_name, email, available_seats, enrollment, price, category, status } = each;
          const newItem = {
            name, instructor_name, email, available_seats: parseFloat(available_seats),  enrollment: parseFloat(enrollment), price: parseFloat(price), category, status,
            image: imgURL,
          };
          console.log(newItem);
          axiosSecure.post("/classes", newItem).then((data) => {
            console.log("posting new class", data.data);
            if (data.data.insertedId) {
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Class Added Successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
      })
  };
  return (
    <div className="w-full px-12 my-10">
      <h2 className="text-center text-4xl font-bold text-orange-500">
        Add A Class
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text font-semibold">Class name*</span>
          </label>
          <input
            type="text"
            placeholder="Class name"
            {...register("name", { required: true, maxLength: 120 })}
            className="input input-bordered w-full "
          />
        </div>
        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text font-semibold">Instructor Name*</span>
          </label>
          <input
            type="text"
            placeholder="Instructor name"
            defaultValue={user?.displayName}
            {...register("instructor_name", { required: true, maxLength: 120 })}
            className="input input-bordered w-full "
          />
        </div>
        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text font-semibold">Instructor Email*</span>
          </label>
          <input
            type="text"
            placeholder="Instructor Email"
            defaultValue={user?.email}
            {...register("email", {
              required: true,
              maxLength: 120,
            })}
            className="input input-bordered w-full "
          />
        </div>

        <div className="flex my-4">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Category*</span>
            </label>
            <select
              defaultValue="Pick One"
              {...register("category", { required: true })}
              className="select select-bordered"
            >
              <option disabled>Pick One</option>
              <option>Piano</option>
              <option>Guitar</option>
              <option>Violin</option>
              <option>Drum</option>
              <option>Harmonium</option>
              <option>Flute</option>
              <option>Tambourine</option>
              <option>Keyboard</option>
            </select>
          </div>
          <div className="form-control w-full ml-4">
            <label className="label">
              <span className="label-text font-semibold">Available Seats*</span>
            </label>
            <input
              type="number"
              {...register("available_seats", { required: true })}
              placeholder="Available Seats"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control w-full ml-4">
            <label className="label">
              <span className="label-text font-semibold">Price*</span>
            </label>
            <input
              type="number"
              {...register("price", { required: true })}
              placeholder="Price"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control w-full ml-4">
            <label className="label">
              <span className="label-text font-semibold">Enrollment*</span>
            </label>
            <input
              type="number"
              {...register("enrollment", { required: true })}
              placeholder="Enrollment"
              className="input input-bordered w-full "
            />
          </div>
        </div>
        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text font-semibold">Status*</span>
          </label>
          <input
            type="text"
            placeholder="status"
            {...register("status", { required: true, maxLength: 120 })}
            className="input input-bordered w-full "
          />
        </div>
        <div className="form-control w-full my-4">
          <label className="label">
            <span className="label-text">Class Image*</span>
          </label>
          <input
            type="file"
            {...register("image", { required: true })}
            className="file-input file-input-bordered w-full "
          />
        </div>
        <input className="btn btn-sm mt-4" type="submit" value="Add Class" />
      </form>
    </div>
  );
};

export default AddClass;
