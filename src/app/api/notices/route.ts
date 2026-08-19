import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import Notice from '@/models/Notice';
import { schoolData } from '@/data/schoolData';

// GET all notices
export async function GET(request: NextRequest) {
  try {
    const conn = await connectToDatabase();
    if (conn) {
      const notices = await Notice.find({}).sort({ createdAt: -1 });
      if (notices && notices.length > 0) {
        return NextResponse.json({ success: true, data: notices });
      }
    }
    // Fallback to static schoolData when DB is not connected or empty
    return NextResponse.json({ success: true, data: schoolData.notices, isFallback: true });
  } catch (error: any) {
    console.error('Error fetching notices:', error);
    return NextResponse.json({ success: true, data: schoolData.notices, isFallback: true });
  }
}

// POST new notice
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, category, description, date, pdfUrl, isUrgent } = body;

    if (!title || !description) {
      return NextResponse.json({ error: 'Title and description are required' }, { status: 400 });
    }

    const conn = await connectToDatabase();
    if (conn) {
      const newNotice = await Notice.create({
        title,
        category: category || 'Academics',
        description,
        date: date || new Date().toLocaleDateString('hi-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
        pdfUrl: pdfUrl || '#',
        isUrgent: Boolean(isUrgent),
        isNewItem: true,
      });
      return NextResponse.json({ success: true, data: newNotice }, { status: 201 });
    }

    // In-memory response if DB is not configured
    const mockNotice = {
      _id: Date.now().toString(),
      id: Date.now(),
      title,
      category: category || 'Academics',
      description,
      date: date || 'Today',
      pdfUrl: pdfUrl || '#',
      isUrgent: Boolean(isUrgent),
      isNewItem: true,
      createdAt: new Date().toISOString(),
    };

    return NextResponse.json({ success: true, data: mockNotice, isFallback: true }, { status: 201 });
  } catch (error: any) {
    console.error('Error creating notice:', error);
    return NextResponse.json({ error: error.message || 'Failed to create notice' }, { status: 500 });
  }
}
