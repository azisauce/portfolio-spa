import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { TechCategory } from '../../models/technology.interface';

interface TechCategoryItem extends TechCategory {
  visible: boolean;
}

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.css'
})
export class TechnologiesComponent implements OnInit {
  sectionVisible = false;
  contactEmail = 'hello@yourname.com';
  techCategories: TechCategoryItem[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    // Load technologies from service
    this.dataService.getTechnologies().subscribe(data => {
      this.techCategories = data.map(category => ({ ...category, visible: false }));
    });
    
    this.setupIntersectionObserver();
  }

  private setupIntersectionObserver() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.animateCategories();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    setTimeout(() => {
      const section = document.querySelector('app-technologies');
      if (section) {
        observer.observe(section);
      }
    }, 100);
  }

  private animateCategories() {
    this.sectionVisible = true;
    
    this.techCategories.forEach((category, index) => {
      setTimeout(() => {
        category.visible = true;
      }, index * 200);
    });
  }
}