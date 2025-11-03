import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit {
  @ViewChild('heroSection') heroSection!: ElementRef;
  
  // Your portfolio data - UPDATE THESE WITH YOUR INFO
  name = 'AZIZ TURKI';
  role = 'SOFTWARE ENGINEER';
  tagline = 'Blending software engineering and design to craft refined digital experiences that empower businesses.';
  ctaText = 'Contact me';
  ctaLink = 'mailto:mohamedaziz.torki@supcom.tn';
  
  // Animation states
  nameVisible = false;
  roleVisible = false;
  taglineVisible = false;
  ctaVisible = false;

  ngOnInit() {
    // Trigger animations with stagger
    setTimeout(() => this.nameVisible = true, 100);
    setTimeout(() => this.roleVisible = true, 300);
    setTimeout(() => this.taglineVisible = true, 600);
    setTimeout(() => this.ctaVisible = true, 900);
  }

  scrollToNext() {
    // Smooth scroll to next section
    const nextSection = document.querySelector('app-career');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}