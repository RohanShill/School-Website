'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { NoticeCategory, NoticeItem } from '@/data/schoolData';

export type ExtendedNoticeItem = NoticeItem & {
  isUrgent?: boolean;
  isNew?: boolean;
};

interface NoticeContextType {
  notices: ExtendedNoticeItem[];
  addNotice: (notice: Omit<ExtendedNoticeItem, 'id'>) => void;
  updateNotice: (id: number, updated: Partial<ExtendedNoticeItem>) => void;
  deleteNotice: (id: number) => void;
  resetToDefaults: () => void;
  isAdminModalOpen: boolean;
  setIsAdminModalOpen: (open: boolean) => void;
}

const STORAGE_KEY = 'school_website_notices_v1';

const defaultNotices: ExtendedNoticeItem[] = [
  {
    id: 1,
    title: 'सत्र 2026-27 नवीन नामांकन सूचना (Admissions Open)',
    category: 'Academics',
    date: 'सत्र 2026-27',
    description: 'कक्षा 1 से 8 में सभी वर्गों के लिए शत-प्रतिशत निःशुल्क नवीन नामांकन प्रारंभ। निःशुल्क पाठ्यपुस्तकें, मध्याह्न भोजन एवं स्कूल पोशाक सुविधा।',
    pdfUrl: '#',
    isUrgent: true,
    isNew: true,
  },
  {
    id: 2,
    title: 'ICT कंप्यूटर प्रायोगिक परीक्षा — कक्षा 6, 7 एवं 8',
    category: 'Examinations',
    date: 'मार्च 2026',
    description: 'कक्षा 6, 7 एवं 8 के छात्रों के लिए द्वितीय त्रैमासिक कंप्यूटर प्रैक्टिकल एवं डिजिटल लिटरेसी असेसमेंट की घोषणा।',
    pdfUrl: '#',
    isUrgent: false,
    isNew: true,
  },
  {
    id: 3,
    title: 'विद्यालय प्रबंधन समिति (SMC) एवं अभिभावक-शिक्षक बैठक',
    category: 'Events',
    date: 'प्रत्येक माह का अंतिम शनिवार',
    description: 'छात्रों की शैक्षणिक प्रगति, उपस्थिति और पोषण योजना की समीक्षा हेतु SMC एवं PTM का आयोजन। सभी अभिभावक सादर आमंत्रित हैं।',
    pdfUrl: '#',
    isUrgent: false,
    isNew: false,
  },
  {
    id: 4,
    title: 'DBT आधार सीडिंग एवं प्री-मैट्रिक छात्रवृत्ति सूचना',
    category: 'Administrative',
    date: 'अंतिम तिथि: 31 मार्च',
    description: 'ई-कल्याण एवं केंद्र प्रायोजित छात्रवृत्ति राशि अंतरण हेतु सभी छात्र-छात्राएं अपना बैंक खाता आधार से अवश्य लिंक करवाएं।',
    pdfUrl: '#',
    isUrgent: true,
    isNew: false,
  },
  {
    id: 5,
    title: 'वार्षिक खेलकूद प्रतियोगिता एवं सांस्कृतिक उत्सव',
    category: 'Events',
    date: 'आगामी सप्ताह',
    description: 'फुटबॉल, खो-खो, 100 मी. दौड़, योग प्रदर्शन एवं बाल संसद सांस्कृतिक प्रस्तुतियों का भव्य आयोजन।',
    pdfUrl: '#',
    isUrgent: false,
    isNew: true,
  },
];

const NoticeContext = createContext<NoticeContextType>({
  notices: defaultNotices,
  addNotice: () => {},
  updateNotice: () => {},
  deleteNotice: () => {},
  resetToDefaults: () => {},
  isAdminModalOpen: false,
  setIsAdminModalOpen: () => {},
});

export const NoticeProvider = ({ children }: { children: React.ReactNode }) => {
  const [notices, setNotices] = useState<ExtendedNoticeItem[]>(defaultNotices);
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setNotices(parsed);
        }
      }
    } catch (e) {
      console.error('Failed to load notices from localStorage', e);
    }
  }, []);

  const saveNotices = (updated: ExtendedNoticeItem[]) => {
    setNotices(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch (e) {
      console.error('Failed to save notices to localStorage', e);
    }
  };

  const addNotice = (newNoticeData: Omit<ExtendedNoticeItem, 'id'>) => {
    const newNotice: ExtendedNoticeItem = {
      ...newNoticeData,
      id: Date.now(),
      isNew: true,
    };
    const updated = [newNotice, ...notices];
    saveNotices(updated);
  };

  const updateNotice = (id: number, updatedFields: Partial<ExtendedNoticeItem>) => {
    const updated = notices.map((item) => (item.id === id ? { ...item, ...updatedFields } : item));
    saveNotices(updated);
  };

  const deleteNotice = (id: number) => {
    const updated = notices.filter((item) => item.id !== id);
    saveNotices(updated);
  };

  const resetToDefaults = () => {
    saveNotices(defaultNotices);
  };

  return (
    <NoticeContext.Provider
      value={{
        notices,
        addNotice,
        updateNotice,
        deleteNotice,
        resetToDefaults,
        isAdminModalOpen,
        setIsAdminModalOpen,
      }}
    >
      {children}
    </NoticeContext.Provider>
  );
};

export const useNotice = () => useContext(NoticeContext);
