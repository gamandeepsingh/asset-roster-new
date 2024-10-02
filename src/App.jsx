import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Spinner from './components/utils/Spinner';
import Banner from './components/Common/Banner';
import Navbar from './components/Common/Navbar';
import BackToTop from './components/Common/BackToTop';
import Home from './page/Home';
const Error = lazy(() => import('./page/Error'));
const About = lazy(() => import('./page/About'));
const Tag = lazy(() => import('./page/Tag'));
const TagDescriptionPage = lazy(() => import('./page/TagDescriptionPage'));
const Products = lazy(() => import('./page/Products'));
const Service = lazy(() => import('./page/Service'));
const ServiceDetailPage = lazy(() => import('./page/ServiceDetailPage'));
const Softwares = lazy(() => import('./page/Softwares'));
const Resources = lazy(() => import('./page/Resources'));
const BlogDetails = lazy(() => import('./page/BlogDetails'));
const ToolsDetsils = lazy(() => import('./page/ToolsDetsils'));

function App() {
  return (
    <div className='w-screen overflow-x-hidden'>
      <Banner />
      <BrowserRouter>
        <Navbar />
        {
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/service' element={<Service />} />
              <Route path='/service/:slug' element={<ServiceDetailPage />} />
              <Route path='/tags' element={<Tag />} />
              <Route path='/tags/:slug' element={<TagDescriptionPage />} />
              <Route path='/softwares' element={<Softwares />} />
              <Route path='/products' element={<Products />} />
              <Route path='/resources' element={<Resources />} />
              <Route path='/resources/:slug' element={<ToolsDetsils />} />
              <Route path='/resources/blog/:slug' element={<BlogDetails />} />
              <Route path='*' element={<Error />} />
            </Routes>
          </Suspense>
        }
        <BackToTop />
      </BrowserRouter>
    </div>
  )
}

export default App
