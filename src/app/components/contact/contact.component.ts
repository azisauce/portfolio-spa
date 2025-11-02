import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface SocialLink {
  name: string;
  url: string;
  visible: boolean;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  sectionVisible = false;
  
  // UPDATE THESE WITH YOUR CONTACT INFO
  email = 'hello@yourname.com';
  phone = '+1 234 567 890'; // Optional
  location = 'Your City, Country'; // Optional

  socialLinks: SocialLink[] = [
    { name: 'LinkedIn', url: 'https://linkedin.com/in/yourprofile', visible: false },
    { name: 'GitHub', url: 'https://github.com/yourusername', visible: false },
    { name: 'Twitter', url: 'https://twitter.com/yourhandle', visible: false },
    { name: 'Instagram', url: 'https://instagram.com/yourhandle', visible: false }
  ];

  // Form data (if you want a contact form)
  formData = {
    name: '',
    email: '',
    message: ''
  };

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
      const section = document.querySelector('app-contact');
      if (section) {
        observer.observe(section);
      }
    }, 100);
  }

  private animateContent() {
    this.sectionVisible = true;
    
    this.socialLinks.forEach((link, index) => {
      setTimeout(() => {
        link.visible = true;
      }, 500 + (index * 100));
    });
  }

  onSubmit() {
    // Handle form submission here
    console.log('Form submitted:', this.formData);
    // You can integrate with a backend API or email service
    alert('Thank you for your message! I will get back to you soon.');
    this.resetForm();
  }

  resetForm() {
    this.formData = {
      name: '',
      email: '',
      message: ''
    };
  }
}