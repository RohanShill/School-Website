import mongoose, { Schema, Document, Model } from 'mongoose';

export interface INotice extends Document {
  title: string;
  category: 'Academics' | 'Events' | 'Examinations' | 'Administrative';
  description: string;
  date: string;
  pdfUrl?: string;
  isUrgent?: boolean;
  isNewItem?: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const NoticeSchema = new Schema<INotice>(
  {
    title: { type: String, required: true },
    category: {
      type: String,
      enum: ['Academics', 'Events', 'Examinations', 'Administrative'],
      default: 'Academics',
    },
    description: { type: String, required: true },
    date: { type: String, default: '' },
    pdfUrl: { type: String, default: '#' },
    isUrgent: { type: Boolean, default: false },
    isNewItem: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const Notice: Model<INotice> =
  mongoose.models.Notice || mongoose.model<INotice>('Notice', NoticeSchema);

export default Notice;
