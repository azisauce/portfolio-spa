import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from '../models/project.interface';
import { Career } from '../models/career.interface';
import { TechCategory } from '../models/technology.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  // CAREER DATA
  private careerData: Career[] = [
    {
      id: '1',
      number: '01',
      title: 'Senior Full Stack Developer',
      company: 'Tech Company Inc.',
      period: '2023 - Present',
      description: 'Leading development of enterprise web applications using Angular, React, and Node.js.',
      technologies: ['Angular', 'Node.js', 'TypeScript']
    },
    {
      id: '2',
      number: '02',
      title: 'Full Stack Developer',
      company: 'Digital Agency Co.',
      period: '2021 - 2023',
      description: 'Built and maintained multiple client projects.',
      technologies: ['React', 'Express', 'MongoDB']
    },
    {
      id: '3',
      number: '03',
      title: 'Frontend Developer',
      company: 'Startup XYZ',
      period: '2019 - 2021',
      description: 'Developed user interfaces and interactive experiences.',
      technologies: ['Vue.js', 'CSS3', 'JavaScript']
    },
    {
      id: '4',
      number: '04',
      title: 'Computer Science Degree',
      company: 'University Name',
      period: '2015 - 2019',
      description: 'Bachelor of Science in Computer Science.'
    }
  ];

  // PROJECTS DATA
  private projectsData: Project[] = [
    {
      id: '1',
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with real-time inventory management.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
      tags: ['Angular', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/yourusername/project'
    },
    {
      id: '2',
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
      tags: ['React', 'Firebase', 'Tailwind'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/yourusername/project'
    },
    {
      id: '3',
      title: 'Portfolio Website',
      description: 'Modern portfolio website with animations and smooth scrolling.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
      tags: ['Angular', 'Tailwind', 'GSAP'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/yourusername/project'
    },
    {
      id: '4',
      title: 'Weather Dashboard',
      description: 'Real-time weather dashboard with interactive maps.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop',
      tags: ['Vue.js', 'API Integration', 'Charts.js'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/yourusername/project'
    }
  ];

  // TECHNOLOGIES DATA
  private technologiesData: TechCategory[] = [
    {
      number: '01',
      title: 'Frontend Development',
      technologies: [
        'Angular', 'React', 'Vue.js', 'TypeScript', 'JavaScript',
        'HTML5', 'CSS3', 'Tailwind CSS', 'SASS', 'GSAP'
      ]
    },
    {
      number: '02',
      title: 'Backend Development',
      technologies: [
        'Node.js', 'Express', 'NestJS', 'Python', 'Django',
        'PostgreSQL', 'MongoDB', 'Redis', 'REST API', 'GraphQL'
      ]
    },
    {
      number: '03',
      title: 'Design & Tools',
      technologies: [
        'Figma', 'Adobe XD', 'Photoshop', 'Illustrator',
        'UI/UX Design', 'Responsive Design', 'Prototyping'
      ]
    },
    {
      number: '04',
      title: 'DevOps & Tools',
      technologies: [
        'Git', 'GitHub', 'Docker', 'AWS', 'Vercel',
        'CI/CD', 'Linux', 'Nginx', 'Jest', 'Webpack'
      ]
    }
  ];

  constructor() { }

  // Get all career items
  getCareerData(): Observable<Career[]> {
    return of(this.careerData);
  }

  // Get all projects
  getProjects(): Observable<Project[]> {
    return of(this.projectsData);
  }

  // Get featured projects
  getFeaturedProjects(): Observable<Project[]> {
    return of(this.projectsData.slice(0, 4));
  }

  // Get project by ID
  getProjectById(id: string): Observable<Project | undefined> {
    return of(this.projectsData.find(p => p.id === id));
  }

  // Get all technologies
  getTechnologies(): Observable<TechCategory[]> {
    return of(this.technologiesData);
  }
}