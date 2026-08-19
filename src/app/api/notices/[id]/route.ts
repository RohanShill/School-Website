import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import Notice from '@/models/Notice';

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const conn = await connectToDatabase();
    if (conn) {
      // Find by MongoDB _id or numeric id
      const deleted = await Notice.findByIdAndDelete(id);
      return NextResponse.json({ success: true, deleted });
    }
    return NextResponse.json({ success: true, message: 'Deleted locally' });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Failed to delete' }, { status: 500 });
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const body = await request.json();
    const conn = await connectToDatabase();
    if (conn) {
      const updated = await Notice.findByIdAndUpdate(id, body, { new: true });
      return NextResponse.json({ success: true, data: updated });
    }
    return NextResponse.json({ success: true, data: body });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Failed to update' }, { status: 500 });
  }
}
