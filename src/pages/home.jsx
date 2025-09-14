import React from "react";
import ScrollVelocity from "../components/ScrollVelocity";

const velocity = 50;

const Home = () => {
  return (
    <section id="tentang" className="flex flex-col h-[100vh] pt-20">
      {/* Vertical 20% */}
      <div className="h-[30%] flex items-center justify-center bg-white w-full overflow-x-hidden">
        <ScrollVelocity
          texts={[
            <>
              <span className="text-[#09DCD5]">| Social House |</span>
              <span className="text-black"> Working Space </span>
            </>,
            <>
              <span className="text-[#09DCD5]">| Drink &amp; Eatery |</span>
              <span className="text-black"> Pet Friendly </span>
            </>,
          ]}
          velocity={velocity}
          className="custom-scroll-text"
        />
      </div>
      {/* Box 80% */}
      <div className="h-[80%] flex flex-col md:flex-row items-center justify-between bg-white px-4 md:px-8 py-4 md:py-6 shadow rounded-lg">
        {/* Kiri: Heading & Penjelasan */}
        <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-4 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#09DCD5]">
            About Wonk
          </h2>
          <p className="text-gray-700 text-base md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
            faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
            pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
            tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
            Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
            hendrerit semper vel class aptent taciti sociosqu. Ad litora
            torquent per conubia nostra inceptos himenaeos.
          </p>
        </div>
        {/* Kanan: Foto */}
        <div className="w-full md:w-1/2">
          <img
            src="../src/assets/img/tim7.jpg"
            alt="Tim WonkCaffe"
            className="rounded-lg w-full h-40 md:h-100 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
