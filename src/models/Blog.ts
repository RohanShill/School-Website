import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IBlog extends Document {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage?: string;
  author: string;
  category: string;
  tags?: string[];
  isPublished: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const BlogSchema = new Schema<IBlog>(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    excerpt: { type: String, required: true },
    content: { type: String, required: true },
    featuredImage: { type: String, default: '/images/school-building.jpg' },
    author: { type: String, default: 'School Editorial Team' },
    category: { type: String, default: 'School News' },
    tags: { type: [String], default: ['Education', 'PM SHRI'] },
    isPublished: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const Blog: Model<IBlog> =
  mongoose.models.Blog || mongoose.model<IBlog>('Blog', BlogSchema);

export default Blog;
