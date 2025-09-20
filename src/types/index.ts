export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  image?: string;
}

export interface SocialLink {
  platform: string;
  icon: React.ComponentType;
  link: string;
}

export interface NavItem {
  name: string;
  href: string;
}