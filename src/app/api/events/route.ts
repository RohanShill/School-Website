import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import Event from '@/models/Event';

const defaultEvents = [
  {
    _id: '1',
    title: 'सत्र 2026-27 निःशुल्क नवीन नामांकन अभियान',
    titleHindi: 'सत्र 2026-27 नामांकन',
    date: 'सत्र 2026-27 (जारी)',
    category: 'Admissions',
    description: 'कक्षा 1 से 8 में सभी छात्र-छात्राओं के लिए शत-प्रतिशत निःशुल्क नामांकन, ड्रेस एवं पुस्तक वितरण।',
    venue: 'विद्यालय कार्यालय, हिरणपुर',
    isUpcoming: true,
  },
  {
    _id: '2',
    title: 'त्रैमासिक ICT कंप्यूटर प्रायोगिक परीक्षा',
    titleHindi: 'ICT परीक्षा',
    date: 'मार्च 2026',
    category: 'Examinations',
    description: 'कक्षा 6, 7 एवं 8 के छात्रों के लिए कंप्यूटर प्रैक्टिकल परीक्षा एवं डिजिटल प्रोजेक्ट कार्य।',
    venue: 'ICT कंप्यूटर लैब',
    isUpcoming: true,
  },
  {
    _id: '3',
    title: 'मासिक विद्यालय प्रबंधन समिति (SMC) एवं PTM बैठक',
    titleHindi: 'PTM बैठक',
    date: 'प्रत्येक माह का अंतिम शनिवार',
    category: 'Meeting',
    description: 'छात्रों की उपस्थिति, मध्याह्न भोजन गुणवत्ता एवं विद्यालय विकास पर विचार-विमर्श।',
    venue: 'मुख्य सभागार',
    isUpcoming: true,
  },
];

export async function GET(request: NextRequest) {
  try {
    const conn = await connectToDatabase();
    if (conn) {
      const events = await Event.find({}).sort({ createdAt: -1 });
      if (events && events.length > 0) {
        return NextResponse.json({ success: true, data: events });
      }
    }
    return NextResponse.json({ success: true, data: defaultEvents, isFallback: true });
  } catch (error: any) {
    console.error('Error fetching events:', error);
    return NextResponse.json({ success: true, data: defaultEvents, isFallback: true });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, titleHindi, date, category, description, venue } = body;

    if (!title || !description) {
      return NextResponse.json({ error: 'Title and description are required' }, { status: 400 });
    }

    const conn = await connectToDatabase();
    if (conn) {
      const newEvent = await Event.create({
        title,
        titleHindi: titleHindi || '',
        date: date || 'Upcoming',
        category: category || 'General',
        description,
        venue: venue || 'School Campus',
        isUpcoming: true,
      });
      return NextResponse.json({ success: true, data: newEvent }, { status: 201 });
    }

    const mockEvent = {
      _id: Date.now().toString(),
      title,
      titleHindi: titleHindi || '',
      date: date || 'Upcoming',
      category: category || 'General',
      description,
      venue: venue || 'School Campus',
      isUpcoming: true,
      createdAt: new Date().toISOString(),
    };

    return NextResponse.json({ success: true, data: mockEvent, isFallback: true }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Failed to create event' }, { status: 500 });
  }
}
