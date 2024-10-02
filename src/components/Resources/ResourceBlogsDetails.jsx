import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import client from "../../../sanityClient";
import aos from "aos";
import "aos/dist/aos.css";
import Spinner from "../utils/Spinner";

const ResourceBlogsDetails = () => {
    const { slug } = useParams();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        aos.init(1800)
        window.scrollTo(0, 0)
    })

    useEffect(() => {
        if (slug) {
            client
                .fetch(
                    `*[_type == "blogPost" && slug.current == $slug]{
                        title,
                        slug,
                        publishedAt,
                        body[]{
                        ...,
                            asset->{
                                _id,
                                url
                            }
                        },
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
                        bio,
                        image {
                            asset->{
                            _id,
                            url
                            },
                            alt
                        }
                        }
                    }`,
                    { slug }
                )
                .then((data) => {
                    setBlog(data[0]);
                })
                .catch((error) => console.error(error));
        }
    }, [slug]);

    if (!blog) return <div>
        {<Spinner />}
    </div>;

    return (
        <div className='w-screen flex flex-col justify-center items-center ' >
            {blog.mainImage && blog.mainImage.asset && (
                <div className="w-screen lg:max-h-96 mx-auto overflow-hidden mb-5 relative" data-aos="fade-up">
                    <img
                        className=" w-full h-full object-cover"
                        src={blog.mainImage.asset.url}
                        alt={blog.mainImage.alt || 'Blog image'}
                    />
                    <p className='text-white/80 font-dmSans absolute right-4 bottom-2'>{new Date(blog.publishedAt).toDateString()}</p>

                </div>
            )}
            <div className='xl:w-4/5 w-[90%] flex flex-col items-center'>
                <div className="flex flex-col items-center justify-between gap-y-5 w-full" >
                    <h1 className='text-xl md:text-5xl mt-4 font-bold uppercase  sm:px-4 font-dmSans text-white text-center highlight highlight-spread-xl md:highlight-spread-sm highlight-variant-1'>{blog.title}</h1>
                </div>
                <p className="xl:w-4/5 text-2xl mt-4">{blog.excerpt}</p>
                <div className='mt-5 lg:w-4/5 w-full mx-auto'>
                    {blog.body.map((block, ind) => {
                        if (block._type === 'block') {
                            return (
                                <div key={ind}>
                                    {
                                        renderBlockContent(block)
                                    }
                                    <br />
                                </div>
                            );
                        } else if (block._type === 'image' && block.asset) {
                            return (
                                <div key={ind} className="lg:max-w-[80%] mx-auto" data-aos="fade-up">
                                    <img

                                        src={block.asset.url}
                                        alt={block.alt || 'Blog image'}
                                        className='mb-5 rounded-md w-full h-full object-cover'
                                    />
                                </div>
                            );
                        }
                        return null;
                    })}
                    <div className="">
                        <div className="w-full flex flex-col items-center mr-10 border bg-dark/10 p-4 rounded-md mb-4">
                            {blog.author.image && blog.author.image.asset && (
                                <div className="w-10 h-10 rounded-md">
                                    <img
                                        className="object-cover w-full h-full rounded-md"
                                        src={blog.author.image.asset.url}
                                        alt={blog.author.image.alt || 'Author avatar'}
                                    />
                                </div>
                            )}
                            <div className="flex flex-col items-center ">
                                <span className="font-medium text-dark/50">Author: <span className="text-dark/60">{blog.author.name}</span></span>
                                <span className="text-sm text-dark/30 max-w-80 h-full">{blog.author.bio}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

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
          return <p className='mb-2 font-dmSans text-lg pb-2 flex items-start'>{" "}{block.children.map(child => child.text).join('')}</p>;
      }
};

export default ResourceBlogsDetails;
