import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import Blog from '@/models/Blog';

const defaultBlogs = [
  {
    _id: '1',
    title: 'PM SHRI योजना के अंतर्गत स्मार्ट क्लासरूम और ICT लैब का शुभारंभ',
    slug: 'pm-shri-smart-classroom-ict-launch',
    excerpt: 'मध्य विद्यालय हिरणपुर में छात्रों के लिए 10+ कंप्यूटर वर्कस्टेशन और इंटरैक्टिव स्मार्ट पैनल का उद्घाटन।',
    content: 'विद्यालय में राष्ट्रीय शिक्षा नीति 2020 (NEP 2020) के अनुरूप आधुनिक डिजिटल शिक्षा को बढ़ावा देने के उद्देश्य से ICT कंप्यूटर लैब एवं स्मार्ट क्लास का शुभारंभ किया गया। छात्र अब डिजिटल माध्यम से गणित, विज्ञान एवं कोडिंग के बुनियादी सिद्धांतों को व्यावहारिक रूप से सीख रहे हैं।',
    featuredImage: '/images/lab.jpg',
    author: 'Principal Office',
    category: 'Digital Education',
    tags: ['PM SHRI', 'ICT Lab', 'Smart Class', 'NEP 2020'],
    isPublished: true,
    createdAt: new Date().toISOString(),
  },
  {
    _id: '2',
    title: 'वार्षिक खेलकूद एवं योग महोत्सव में छात्रों का उत्कृष्ट प्रदर्शन',
    slug: 'annual-sports-and-yoga-meet-2026',
    excerpt: 'बाल संसद के तत्वावधान में 100 मीटर दौड़, खो-खो, कबड्डी और योग प्रदर्शन का सफल आयोजन।',
    content: 'विद्यालय परिसर में आयोजित वार्षिक खेलकूद प्रतियोगिता में प्राथमिक एवं उच्च प्राथमिक स्तर के छात्र-छात्राओं ने उत्साहपूर्वक भाग लिया। विजयी प्रतिभागियों को मेडल एवं प्रमाण पत्र देकर सम्मानित किया गया।',
    featuredImage: '/images/school-building.jpg',
    author: 'Sports Committee',
    category: 'Sports & Culture',
    tags: ['Sports', 'Yoga', 'Bal Sansad', 'Health'],
    isPublished: true,
    createdAt: new Date().toISOString(),
  },
];

export async function GET(request: NextRequest) {
  try {
    const conn = await connectToDatabase();
    if (conn) {
      const blogs = await Blog.find({ isPublished: true }).sort({ createdAt: -1 });
      if (blogs && blogs.length > 0) {
        return NextResponse.json({ success: true, data: blogs });
      }
    }
    return NextResponse.json({ success: true, data: defaultBlogs, isFallback: true });
  } catch (error: any) {
    console.error('Error fetching blogs:', error);
    return NextResponse.json({ success: true, data: defaultBlogs, isFallback: true });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, excerpt, content, featuredImage, author, category, tags } = body;

    if (!title || !content) {
      return NextResponse.json({ error: 'Title and content are required' }, { status: 400 });
    }

    const slug =
      title
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .slice(0, 80) +
      '-' +
      Date.now().toString().slice(-4);

    const conn = await connectToDatabase();
    if (conn) {
      const newBlog = await Blog.create({
        title,
        slug,
        excerpt: excerpt || content.slice(0, 150) + '...',
        content,
        featuredImage: featuredImage || '/images/school-building.jpg',
        author: author || 'School Editorial',
        category: category || 'General',
        tags: Array.isArray(tags) ? tags : ['School News'],
        isPublished: true,
      });
      return NextResponse.json({ success: true, data: newBlog }, { status: 201 });
    }

    const mockBlog = {
      _id: Date.now().toString(),
      title,
      slug,
      excerpt: excerpt || content.slice(0, 150) + '...',
      content,
      featuredImage: featuredImage || '/images/school-building.jpg',
      author: author || 'School Editorial',
      category: category || 'General',
      tags: tags || ['School News'],
      isPublished: true,
      createdAt: new Date().toISOString(),
    };

    return NextResponse.json({ success: true, data: mockBlog, isFallback: true }, { status: 201 });
  } catch (error: any) {
    console.error('Error creating blog:', error);
    return NextResponse.json({ error: error.message || 'Failed to create blog' }, { status: 500 });
  }
}
