import { NextRequest, NextResponse } from 'next/server';
import { uploadBufferToCloudinary } from '@/lib/cloudinary';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File | null;
    const folder = (formData.get('folder') as string) || 'school-website';

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    // Convert file to Buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Determine resource type: 'raw' for PDFs/Docs, 'image' for images
    const isPdf = file.type.includes('pdf') || file.name.endsWith('.pdf');
    const resourceType = isPdf ? 'raw' : 'image';

    // Upload to Cloudinary if configured
    if (process.env.CLOUDINARY_CLOUD_NAME && process.env.CLOUDINARY_API_KEY) {
      const result = await uploadBufferToCloudinary(buffer, folder, resourceType);
      return NextResponse.json({
        success: true,
        url: result.secure_url,
        publicId: result.public_id,
        format: result.format,
        bytes: result.bytes,
      });
    } else {
      // Fallback for local testing before user sets Cloudinary keys
      // Convert small preview to base64 data URI
      const base64 = `data:${file.type};base64,${buffer.toString('base64')}`;
      return NextResponse.json({
        success: true,
        url: base64,
        isFallback: true,
        message: 'Uploaded via local fallback. Set CLOUDINARY_* environment variables for cloud storage.',
      });
    }
  } catch (error: any) {
    console.error('Upload Error:', error);
    return NextResponse.json(
      { error: error.message || 'File upload failed' },
      { status: 500 }
    );
  }
}
