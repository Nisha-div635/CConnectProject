import { Component } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import { Home } from './home/home';
import { Footer } from './footer/footer';
import { Header } from './header/header';
import { Login } from './login/login';
import { Gallery } from './gallery/gallery';
import { Events } from './events/events';
import { About } from './about/about';
import { Profile } from './profile/profile';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,Home,Login,Header,Footer,Profile,About,Events,Gallery],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'CConnectProject';
}
