import { createBrowserRouter } from 'react-router-dom';

import Home from './routes/Home';
import Contact from './routes/Contact';
import AboutUs from './routes/AboutUs';
import RealEstate from './routes/RealEstate';
import Family from './routes/Family';
import Immigration from './routes/Immigration';
import NotaryServices from './routes/NotaryServices';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/contact',
        element: <Contact/>
    },
    {
        path: '/about-us',
        element: <AboutUs/>
    },
    {
        path: '/practice-areas/real-estate-law',
        element: <RealEstate/>
    },
    {
        path: '/practice-areas/family-law' ,
        element: <Family/>
    },
    {
        path: '/practice-areas/immigration-law',
        element: <Immigration/>
    },
    {
        path: '/practice-areas/notary-services',
        element: <NotaryServices />
    }
])