import React, { useEffect, useState } from 'react';
import client from '../../../sanityClient';
import { useNavigate } from 'react-router-dom';
import {IoIosArrowDropright} from 'react-icons/io';
const TagsList = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      const query = `*[_type == "tagCategory"]{
        title,
        slug,
        "imageUrl": image.asset->url,
        "subcategories": subcategories[]->{
          name,
          description,
          "imageUrl": image.asset->url,
          types,
          examples
        }
      }`;
      const result = await client.fetch(query);
      setCategories(result);
      // console.log(result);
    };

    fetchCategories();
  }, []);

  return (
    <div className="w-4/5 mx-auto mb-10">
      <h1 className="text-3xl font-bold mb-10 text-center font-dmSans">Tags Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div
            key={category.slug.current}
            className="bg-white rounded-md shadow-md overflow-hidden cursor-pointer group"
            onClick={() =>
              navigate(`/tags/${category.slug.current}`)
            }
          >
            {category.imageUrl && (
              <div className='h-48 overflow-hidden'>
                <img
                  src={category.imageUrl}
                  alt={category.title}
                  className="w-full h-48 object-cover  transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            )}
            <div className="p-4 w-full flex justify-between items-center">
              <h2 className="text-xl font-semibold tracking-tight mb-2 font-dmSans">{category.title}</h2>
              <IoIosArrowDropright className="w-6 h-6 text-dark group-hover:animate-bounce" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TagsList;
