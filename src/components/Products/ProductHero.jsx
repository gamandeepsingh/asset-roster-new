import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import aos from "aos";
import "aos/dist/aos.css";
import client from "../../../sanityClient";

const ProductHero = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    aos.init(1800)
  }, [])

  useEffect(() => {
    client.fetch(`*[_type == "productTopSection"]{
          heading,
          content,
          buttonText1,
          buttonText2,
          excerpt,
          "images": images[].asset->url
        }`)
      .then(data => {
        setData(data[0]);
      })
      .catch(console.error);
  }, [])

  return (
    <section className="px-4 md:px-28 min-h-[580px] w-full py-12 grid grid-cols-1 lg:grid-cols-2 items-center gap-8 mx-auto">
      <div data-aos="fade-right">
        <span className="block mb-4 text-xs md:text-sm text-dark font-medium font-dmSans">
          {data?.excerpt}
        </span>
        <h3 className="text-4xl md:text-6xl text-dark font-semibold font-dmSans">
          {data?.heading}
        </h3>
        <p className="text-base md:text-lg text-dark/50 my-4 md:my-6 font-dmSans">
          {data?.content}
        </p>
        <button className="rounded-md md:text-lg text-xs border-2 font-dmSans border-light bg-darkGreen px-6 py-3 font-semibold uppercase text-light transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-md active:shadow-none my-2 md:my-5 whitespace-nowrap">
          {data?.buttonText1}
        </button>
        <button className="sm:ml-4 md:text-lg text-xs lg:ml-0 xl:ml-4 font-dmSans rounded-md border-2  border-darkGreen px-6 py-3 font-semibold uppercase text-darkGreen transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-md active:shadow-none whitespace-nowrap">
          {data?.buttonText2}
        </button>
      </div>
      <ShuffleGrid img={data?.images}/>
    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const generateSquares = (img) => {
  return shuffle(img).map((src, index) => (
    <motion.div
      key={index}
      layout
      transition={{ duration: 2.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${src})`,
        backgroundSize: "cover",
      }}
    >
      {/* <img src={src} alt={`image-${index}`} className="w-full h-full object-cover" /> */}
    </motion.div>
  ));
};

const ShuffleGrid = ({ img = [] }) => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState([]);

  useEffect(() => {
    setSquares(generateSquares(img));

    return () => clearTimeout(timeoutRef.current);
  }, [img]);

  const shuffleSquares = () => {
    setSquares(generateSquares(img));
    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  useEffect(() => {
    shuffleSquares(); 

    return () => clearTimeout(timeoutRef.current);
  }, [img]); 

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};


export default ProductHero;
