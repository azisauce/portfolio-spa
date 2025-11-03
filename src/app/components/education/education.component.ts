import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent implements OnInit {
  sectionVisible = false;
  storyVisible = false;
  highlightsVisible = false;

  // Education story content
  university = 'SUP\'COM (Higher School of Communications of Tunis)';
  degree = 'Engineering Degree in Computer Science';
  period = '2021 - 2024';
  
  story = `I discovered my passion for web development during my Computer Science studies at SUP'COM. Through rigorous coursework and collaborative projects, I honed my skills in software architecture, algorithms, and modern web technologies. The challenging curriculum pushed me to think critically and solve complex problems, while hands-on projects allowed me to transform theoretical knowledge into practical solutions.`;

  highlights = [
    {
      icon: 'code',
      title: 'Technical Foundation',
      description: 'Mastered core CS fundamentals: algorithms, data structures, and software engineering principles'
    },
    {
      icon: 'users',
      title: 'Collaborative Projects',
      description: 'Led team projects building full-stack applications, learning agile methodologies and version control'
    },
    {
      icon: 'lightbulb',
      title: 'Problem Solving',
      description: 'Developed analytical thinking through competitive programming and real-world case studies'
    },
    {
      icon: 'rocket',
      title: 'Innovation',
      description: 'Explored emerging technologies and contributed to research in web performance optimization'
    }
  ];

  ngOnInit() {
    this.setupIntersectionObserver();
  }

  private setupIntersectionObserver() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.animateContent();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    setTimeout(() => {
      const section = document.querySelector('app-education');
      if (section) {
        observer.observe(section);
      }
    }, 100);
  }

  private animateContent() {
    this.sectionVisible = true;
    
    setTimeout(() => {
      this.storyVisible = true;
    }, 400);

    setTimeout(() => {
      this.highlightsVisible = true;
    }, 800);
  }

  getIconPath(icon: string): string {
    const icons: { [key: string]: string } = {
      'code': 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
      'users': 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
      'lightbulb': 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
      'rocket': 'M13 10V3L4 14h7v7l9-11h-7z'
    };
    return icons[icon] || icons['code'];
  }
}
