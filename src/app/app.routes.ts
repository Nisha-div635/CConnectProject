import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Login } from './login/login';
import { Gallery } from './gallery/gallery';
import { About } from './about/about';
import { Events } from './events/events';
import { Profile } from './profile/profile';

export const routes: Routes = [
    {
        path:'',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component:Home,
    },
    {
        path:'header',
        component:Header,
    },
    {
        path:'footer',
        component:Footer,
    },
    {
        path:'Login',
        component:Login,
    },
    {
        path:'gallery',
        component: Gallery,
    },
    {
        path:'about',
        component:About,
    },
    {
        path:'events',
        component:Events,
    },
    {
        path:'profile',
        component:Profile,
    },
    
    
];
