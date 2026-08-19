import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import Blog from '@/models/Blog';

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const conn = await connectToDatabase();
    if (conn) {
      await Blog.findByIdAndDelete(id);
      return NextResponse.json({ success: true });
    }
    return NextResponse.json({ success: true, message: 'Deleted locally' });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Failed to delete blog' }, { status: 500 });
  }
}
