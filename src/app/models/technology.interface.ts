export interface Technology {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'design' | 'tools';
  icon?: string;
  proficiency: number; // 1-5
}