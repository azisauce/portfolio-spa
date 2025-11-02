export interface TechCategory {
  number: string;
  title: string;
  technologies: string[];
}

export interface Technology {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'design' | 'tools';
  proficiency?: number;
}