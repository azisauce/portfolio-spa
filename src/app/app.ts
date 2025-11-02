import { Component, signal } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { CareerComponent } from './components/career/career.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { TechnologiesComponent } from './components/technologies/technologies.component';
import { ContactComponent } from './components/contact/contact.component';
@Component({
  selector: 'app-root',
  imports: [
    HeroComponent,
    CareerComponent,
    ProjectsComponent,
    TechnologiesComponent,
    ContactComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio-spa');
}
