import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import s1 from '../../../assets/sum1.jpg';
import s2 from '../../../assets/sum2.jpg';
import s3 from '../../../assets/sum3.jpg';

const Banner = () => {
  return (
    <Carousel className="">
      <div>
        <img src={s1} />
      </div>
      <div>
        <img src={s2} />
      </div>
      <div>
        <img src={s3} />
      </div>
    </Carousel>
  );
};

export default Banner;
