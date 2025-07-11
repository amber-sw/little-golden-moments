import { Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { AboutPage } from './about-page/about-page';
import { PortfolioPage } from './portfolio-page/portfolio-page';
import { ContactPage } from './contact-page/contact-page';
import { ServicesPage } from './services-page/services-page';

export const routes: Routes = [
    {
        path: '',
        component: HomePage
    },
    {
        path: 'over-mij',
        component: AboutPage
    },
    {
        path: 'aanbod',
        component: ServicesPage
    },
    {
        path: 'portfolio',
        component: PortfolioPage
    },
    {
        path: 'contact',
        component: ContactPage
    },
     
];
