import { v2 as cloudinary, UploadApiResponse } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export async function uploadBufferToCloudinary(
  buffer: Buffer,
  folder = 'school-website',
  resourceType: 'auto' | 'image' | 'raw' | 'video' = 'auto'
): Promise<UploadApiResponse> {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder,
        resource_type: resourceType,
      },
      (error, result) => {
        if (error || !result) {
          reject(error || new Error('Upload failed without error result'));
        } else {
          resolve(result);
        }
      }
    );

    uploadStream.end(buffer);
  });
}

export default cloudinary;
