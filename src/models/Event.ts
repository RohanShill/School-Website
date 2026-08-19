import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IEvent extends Document {
  title: string;
  titleHindi?: string;
  date: string;
  category: string;
  description: string;
  venue?: string;
  posterImage?: string;
  isUpcoming: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const EventSchema = new Schema<IEvent>(
  {
    title: { type: String, required: true },
    titleHindi: { type: String, default: '' },
    date: { type: String, required: true },
    category: { type: String, default: 'General' },
    description: { type: String, required: true },
    venue: { type: String, default: 'School Campus, Hiranpur' },
    posterImage: { type: String, default: '/images/school-building.jpg' },
    isUpcoming: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const Event: Model<IEvent> =
  mongoose.models.Event || mongoose.model<IEvent>('Event', EventSchema);

export default Event;
