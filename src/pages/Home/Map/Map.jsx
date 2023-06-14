const Map = () => {
  return (
    <div className="max-w-7xl mx-auto mb-14 flex justify-center items-center flex-col">
      <h2 className="text-4xl text-center text-orange-500 mb-8 font-semibold">
        Find Us At Google Map
      </h2>
      <div className="sm:w-3/4 lg:w-full h-96">
        <iframe
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d10329.114329204296!2d90.3724575200471!3d23.75118074467632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1684668876130!5m2!1sen!2sbd"
          width="600"
          height="450"
          style={{ border: "0" }}
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
