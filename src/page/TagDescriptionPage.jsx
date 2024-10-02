import React, { useEffect, useState } from 'react';
import Newfooter from '../components/Common/Newfooter';
import BreadCrumbs from '../components/Common/Breadcrumbs';
import client from '../../sanityClient';
import { useParams } from 'react-router-dom';
import FAQs from '../components/Common/FAQs';
import Spinner from '../components/utils/Spinner';

const TagDescriptionPage = () => {
  const [data, setData] = useState([]);
  const { slug } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategoryBySlug = async () => {
      const query = `*[_type == "tagCategory" && slug.current == $slug]{
        title,
        slug,
        description,
        "imageUrl": image.asset->url,
        "subcategories": subcategories[]->{
          name,
          description,
          "imageUrl": image.asset->url,
          types,
          examples
        }
      }`;
      const result = await client.fetch(query, { slug });
      if (result && result.length > 0) {
        setData(result[0]);
      } else {
        setData(null);
      }
    };

    window.scrollTo(0, 0);
    fetchCategoryBySlug();
  }, [slug]);


  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);
  if(loading)
    return <Spinner/>

  
  if (!data) {
    return <Spinner/>;
  }

  return (
    <div>
      <BreadCrumbs />
      <div className='flex flex-col items-center'>
        {/* <h1 className= font-dmSans  text-xl my-3  whitespace-nowrap text-white highlight highlight-spread-md highlight-variant-1'>Tag Description Page</h1> */}
          {data.imageUrl && (
            <img src={data.imageUrl} alt={data.title} className="w-screen h-96 object-cover mb-6 " />
          )}
        <div className="md:w-3/5 container mx-auto px-4 my-10 flex flex-col items-center">
          <h1 className="text-4xl font-dmSans w-fit font-bold mb-6 whitespace-nowrap text-white highlight highlight-spread-md highlight-variant-1">{data.title}</h1>
          <div>
            {data.description && data.description.map((block, index) => (
              <div key={index}>
                {renderBlockContent(block)}
                <br />
              </div>
            ))}
          </div>
          {data.subcategories?.length > 0 ? (
            <div className="grid gap-6 w-full">
              {data.subcategories.map((subCategory, index) => (
                <div key={index} className="pt-4">
                  <h3 className="text-xl font-semibold font-dmSans mb-2">{subCategory.name}</h3>
                  {subCategory.imageUrl && (
                    <img
                      src={subCategory.imageUrl}
                      alt={subCategory.name}
                      className="w-full h-48 object-cover mb-4 rounded"
                    />
                  )}
                  {/* Render the blocks inside each subcategory's description */}
                  {subCategory.description && subCategory.description.map((block, ind) => (
                    <div key={ind}>
                      {renderBlockContent(block)}
                      <br />
                    </div>
                  ))}
                  {subCategory.types && subCategory.types.length > 0 && (
                    <div className="mb-4">  
                      <h4 className="font-semibold mb-2 font-dmSans">Types:</h4>
                      <ul className="list-disc list-inside">
                        {subCategory.types.map((type, typeIndex) => (
                          <li key={typeIndex} className="text-gray-600">{type}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {subCategory.examples && subCategory.examples.length > 0 && (
                    <div>
                      <h4 className="font-semibold mb-2 font-dmSans">Examples:</h4>
                      <ul className="list-disc list-inside">
                        {subCategory.examples.map((example, exampleIndex) => (
                          <li key={exampleIndex} className="text-gray-600">{example}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p></p>
          )}
        </div>
        <FAQs/>
        <Newfooter />
      </div>
    </div>
  );
}

export default TagDescriptionPage;

const renderBlockContent = (block) => {
  switch (block.style) {
    case 'h1':
      return <h2 className='mb-2 text-dark font-dmSans text-3xl font-bold'>{block.children.map(child => child.text).join('')}</h2>;
    case 'h2':
      return <h2 className='mb-2 text-dark font-dmSans text-2xl font-bold'>{block.children.map(child => child.text).join('')}</h2>;
    case 'h3':
      return <h2 className='mb-2 text-dark font-dmSans text-2xl font-bold'>{block.children.map(child => child.text).join('')}</h2>;
    case 'h4':
      return <h2 className='mb-2 text-dark font-dmSans text-xl font-bold'>{block.children.map(child => child.text).join('')}</h2>;
    case 'h5':
      return <h2 className='mb-2 text-dark font-dmSans text-lg font-bold'>{block.children.map(child => child.text).join('')}</h2>;
    case 'h6':
      return <h2 className='mb-2 text-dark font-dmSans text-md font-bold'>{block.children.map(child => child.text).join('')}</h2>;
    case 'blockquote':
      return <blockquote className='mb-2 text-dark font-dmSans italic border-l-4 border-gray-300 pl-4 flex w-full justify-center'>{block.children.map(child => child.text).join('')}</blockquote>;
    default:
      return <p className='mb-2 font-dmSans text-sm md:text-lg pb-2 flex items-start '>{" "}{block.children.map(child => child.text).join('')}</p>;
  }
};
