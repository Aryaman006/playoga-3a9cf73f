export interface Course {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  ai_summary: string | null;
  content: string | null;
  featured_image: string | null;
  thumbnail: string | null;
  category_id: string | null;
  author_id: string | null;
  tags: string[] | null;
  seo_title: string | null;
  seo_description: string | null;
  seo_keywords: string[] | null;
  reading_time: number | null;
  ai_generated: boolean;
  published: boolean;
  featured: boolean;
  views: number;
  created_at: string;
  updated_at: string;
  // Joined fields
  category?: string;
  author?: string;
  avatar?: string;
}
