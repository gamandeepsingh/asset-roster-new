import React, { useEffect, useState } from "react";
import aos from "aos";
import "aos/dist/aos.css";
import client from "../../../sanityClient";
import { AnimatePresence, motion } from "framer-motion";
import { FiAlertCircle } from "react-icons/fi";

const ProductItem = () => {
  const [dataItem, setDataItems] = useState({});
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState([])
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    aos.init(1800)
  }, [])

  useEffect(() => {
    client
      .fetch(
        `*[_type == "product"]{
          name,
          description,
          "imageUrl": imageUrl.asset->url
        }`
      )
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className='relative w-full min-h-[450px] flex flex-col items-center justify-center my-10'>
      <div className='px-4 md:px-28 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
        {product.map((item, index) => (
          <div data-aos="fade-up" key={index} className="w-full bg-white shadow-md rounded-md duration-500 hover:scale-105 hover:shadow-xl overflow-hidden">
            <img src={item.imageUrl} alt="Product" className="h-80 object-cover rounded-t-xl bg-dark" />
            <div className="px-4 py-3 w-full">
              <span className="text-gray-400 mr-3 uppercase text-xs">Assets Roster</span>
              <p className="text-lg font-bold text-dark truncate block capitalize">{item.name}</p>
              <div className="flex items-center">
                <p className="text-sm text-dark/50 cursor-auto my-3">
                  {item.description[0].slice(0, 80)}...
                  <button
                    onClick={() => {
                      setDataItems(item);
                      setIsOpen(true);
                      console.log(dataItem);
                    }}
                    className="text-dark ml-1 font-bold"
                  >Read More</button>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} data={dataItem}/>
    </div>
  );
};

const SpringModal = ({ isOpen, setIsOpen,data  }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-dark text-white p-6 rounded-md w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
          >
            <FiAlertCircle className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
            <div className="relative z-10">
              <div className="bg-white w-16 h-16 mb-2 rounded-md text-3xl text-dark grid place-items-center mx-auto">
                <FiAlertCircle />
              </div>
              <h3 className="text-3xl font-bold text-center mb-2 font-dmSans">
                {data.name}
              </h3>
              <p className="text-center mb-6">
                {
                  data.description.map((item,ind)=>{
                    return(
                      <p key={ind}>
                        {item}
                      </p>
                    )
                  })
                }
              </p>
              <div className="flex">
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-white hover:opacity-90 transition-opacity text-dark font-semibold w-full py-2 rounded"
                >
                  Understood!
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProductItem