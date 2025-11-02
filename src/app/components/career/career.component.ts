import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { Career } from '../../models/career.interface';

interface CareerItem extends Career {
  visible: boolean;
}

@Component({
  selector: 'app-career',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './career.component.html',
  styleUrl: './career.component.css'
})
export class CareerComponent implements OnInit {
  sectionVisible = false;
  careerItems: CareerItem[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    // Load career data from service
    this.dataService.getCareerData().subscribe(data => {
      this.careerItems = data.map(item => ({ ...item, visible: false }));
    });
    
    this.setupIntersectionObserver();
  }

  private setupIntersectionObserver() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.animateItems();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    setTimeout(() => {
      const section = document.querySelector('app-career');
      if (section) {
        observer.observe(section);
      }
    }, 100);
  }

  private animateItems() {
    this.sectionVisible = true;
    
    this.careerItems.forEach((item, index) => {
      setTimeout(() => {
        item.visible = true;
      }, index * 200);
    });
  }
}