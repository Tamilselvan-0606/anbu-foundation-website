export interface Initiative {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: string;
  slug: string;
  ctaText: string;
  keyPoints: string[];
  image: string;
}

export interface SuccessStory {
  id: string;
  name: string;
  course: string;
  batch: string;
  hometown: string;
  quote: string;
  story: string;
  achievement: string;
  avatarPlaceholder: string;
}

export interface NewsItem {
  id: string;
  date: string;
  category: string;
  title: string;
  summary: string;
  fullText: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  caption: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}
