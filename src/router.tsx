import { createBrowserRouter } from 'react-router-dom';

import Home from './routes/Home';
import Contact from './routes/Contact';
import AboutUs from './routes/AboutUs';
import RealEstate from './routes/RealEstate';
import Immigration from './routes/Immigration';

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
        path: '/practice-areas/immigration-law',
        element: <Immigration/>
    },
])