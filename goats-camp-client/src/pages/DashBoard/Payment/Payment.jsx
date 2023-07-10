import { Elements } from "@stripe/react-stripe-js";
import { useLoaderData } from "react-router-dom";
import CheckOutForm from "./CheckOutForm";
import { loadStripe } from "@stripe/stripe-js";


const stripPromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    const data = useLoaderData();
    
    
  return (
    <div>
      <h2 className="text-center text-4xl font-bold text-orange-500 my-5">
        Course Amount: {data.price}$
      </h2>
      {/* <button onClick={handle}>Pay</button> */}
      <Elements stripe={stripPromise}>
        <CheckOutForm data={data} price={data.price}></CheckOutForm>
      </Elements>
    </div>
  );
};

export default Payment;
