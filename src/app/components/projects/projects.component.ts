import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { Project } from '../../models/project.interface';

interface ProjectItem extends Project {
  visible: boolean;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {
  sectionVisible = false;
  projects: ProjectItem[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    // Load projects from service
    this.dataService.getProjects().subscribe(data => {
      this.projects = data.map(project => ({ ...project, visible: false }));
    });
    
    this.setupIntersectionObserver();
  }

  private setupIntersectionObserver() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.animateProjects();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    setTimeout(() => {
      const section = document.querySelector('app-projects');
      if (section) {
        observer.observe(section);
      }
    }, 100);
  }

  private animateProjects() {
    this.sectionVisible = true;
    
    this.projects.forEach((project, index) => {
      setTimeout(() => {
        project.visible = true;
      }, index * 150);
    });
  }
}