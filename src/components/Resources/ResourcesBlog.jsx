import { useEffect, useState } from "react";
import aos from "aos";
import "aos/dist/aos.css";
import client from "../../../sanityClient";
import { useNavigate } from "react-router-dom";

const ResourcesBlog = () => {
    const [blogs, setBlogs] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        aos.init(1800)
    }, []);

    useEffect(() => {
        client
            .fetch(
                `*[_type == "blogPost"]{
              title,
              slug,
              publishedAt,
              body,
              mainImage{
                asset->{
                  _id,
                  url
                },
                alt
              },
              excerpt,
              author-> {
                name,
                image {
                  asset->{
                    _id,
                    url
                  },
                  alt
                }
              }
            }`
            )
            .then((data) => {
                setBlogs(data);
            })
            .catch((error) => console.error(error));
    }, []);


    return (
        <div className="w-screen resources relative mt-10">
            <section className="bg-darkGreen" id="learn">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
                        <h2 className="mb-4 text-3xl lg:text-4xl  font-extrabold text-light font-dmSans">Our Blog</h2>
                        <p className="font-light sm:text-xl text-light/60 font-dmSans">We use an agile approach to test assumptions and connect with the needs of your audience early and often.</p>
                    </div>
                    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
                        {blogs.map((blog, index) => (
                            <article
                                data-aos="fade-up"
                                key={index}
                                className="p-6 rounded-md border border-gray-200 shadow-md flex flex-col justify-between"
                            >
                                <div className="flex justify-between items-center mb-5 text-white">
                                    <span className="font-dmSans text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded bg-primary-200 text-primary-800">
                                        <svg
                                            className="mr-1 w-3 h-3"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.navigate894l-2 1z"></path>
                                        </svg>
                                        {blog.title.slice(0, 20)}{blog.title.length > 20 ? '...' : ''}
                                    </span>
                                    <span className="text-sm">
                                        {new Date(blog.publishedAt).toDateString()}
                                    </span>
                                </div>

                                {blog.mainImage && blog.mainImage.asset && (
                                    <div className="h-[250px] overflow-hidden">
                                        <img
                                            className="mb-5 rounded-md w-full h-full object-cover"
                                            src={blog.mainImage.asset.url}
                                            alt={blog.mainImage.alt || 'Blog image'}
                                        />
                                    </div>
                                )}

                                <h2 className="my-2 w-full text-sm pb-4 md:text-base font-dmSans  text-gray-400 cursor-pointer">
                                    <div
                                        onClick={() => navigate(`/resources/blog/${blog.slug.current}`)}
                                    >{blog.excerpt.slice(0, 100)}{blog.excerpt.length > 100 ? '...' : ''}</div>
                                </h2>

                                {/* <div className="mb-5 font-light text-gray-400">
                                    {blog.body.map((block) => {
                                        if (block._type === 'block') {
                                            return renderBlockContent(block);
                                        }
                                             else if (block._type === 'image' && block.asset) {
                                            return (
                                                <img
                                                    key={block._key}
                                                    src={block.asset.url}
                                                    alt={block.alt || 'Block image'}
                                                    className="mb-5 rounded-md"
                                                />
                                            );
                                        }
                                        return null;
                                    })}
                                </div> */}

                                <div className="flex flex-wrap justify-between items-center gap-y-4">
                                    <div className="flex items-center space-x-4">
                                        {blog.author.image && blog.author.image.asset && (
                                            <img
                                                className="w-7 h-7 rounded-md"
                                                src={blog.author.image.asset.url}
                                                alt={blog.author.image.alt || 'Author avatar'}
                                            />
                                        )}
                                        <span className="font-medium text-white">{blog.author.name.slice(0,10)}</span>
                                    </div>
                                    <div
                                        onClick={() => navigate(`/resources/blog/${blog.slug.current}`)} className="inline-flex items-center font-medium text-white text-primary-500 hover:underline cursor-pointer"
                                    >
                                        Read more
                                        <svg
                                            className="ml-2 w-4 h-4"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>


                </div>
            </section>
        </div>
    );
};

export default ResourcesBlog;

const renderBlockContent = (block) => {
    switch (block.style) {
        case 'h1':
            return <h1 key={block._key} className="mb-2 text-3xl font-bold">{block.children.map(child => child.text).join('')}</h1>;
        case 'h2':
            return <h2 key={block._key} className="mb-2 text-2xl font-semibold">{block.children.map(child => child.text).join('')}</h2>;
        case 'h3':
            return <h3 key={block._key} className="mb-2 text-xl font-medium">{block.children.map(child => child.text).join('')}</h3>;
        case 'h4':
            return <h4 key={block._key} className="mb-2 text-xl font-medium">{block.children.map(child => child.text).join('')}</h4>;
        case 'h5':
            return <h5 key={block._key} className="mb-2 text-xl font-medium">{block.children.map(child => child.text).join('')}</h5>;
        case 'h6':
            return <h6 key={block._key} className="mb-2 text-xl font-medium">{block.children.map(child => child.text).join('')}</h6>;
        case 'blockquote':
            return <blockquote key={block._key} className="mb-2 italic border-l-4 border-gray-300 pl-4">{block.children.map(child => child.text).join('')}</blockquote>;
        default:
            return <p key={block._key} className="mb-2">{block.children.map(child => child.text).join('')}</p>;
    }
};
