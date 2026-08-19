# PM SHRI Middle School Hiranpur (Boys) — Official Website

> **पीएम श्री मध्य विद्यालय हिरणपुर (बालक), पाकुड़, झारखंड**  
> *A Modern, Bilingual (Hindi & English), Full-Stack Next.js 14 Web Application*

---

## 🌟 Key Features

- **🌐 Pure Bilingual Support:** Instant language switching (Hindi & English) across all pages and teacher profiles with LocalStorage persistence.
- **📢 Real-Time Digital Notice Board:**
  - Flash Notice Marquee Ticker on Homepage.
  - Interactive Homepage Notice Board with category swiping.
  - Dedicated Notices Archive (`/notices`) with search and direct PDF downloads.
- **👨‍🏫 12 Official Faculty Showcase:**
  - Dedicated faculty profiles with qualifications, subjects, and roles on `/about` and `/`.
- **🔐 Admin Management Portal (`/admin`):**
  - Notice Manager (Create, update, and delete notices with PDF attachments).
  - Blog & Campus News Manager (`/blogs`).
  - School Calendar & Events Manager.
  - Cloudinary Media & PDF Uploader.
- **📱 100% Mobile-First Responsive:** Custom sleek hamburger drawer, touch scroll, and fast loading.
- **⚡ Ultra-Fast Performance:** Static Site Generation (SSG) with First Load JS size of only 87 kB.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router, Server Components & Serverless API routes)
- **Language:** TypeScript
- **Styling:** Tailwind CSS & Lucide Icons
- **Database:** MongoDB Atlas (Mongoose ODM)
- **Media & PDF Storage:** Cloudinary
- **Hosting / Deployment:** Vercel

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/RohanShill/School-Website.git
cd School-Website
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Copy `.env.example` to `.env.local` and add your MongoDB Atlas and Cloudinary credentials:
```bash
cp .env.example .env.local
```

```env
MONGODB_URI=your_mongodb_connection_string
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
ADMIN_EMAIL=admin@school.com
ADMIN_PASSWORD=admin123
```

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🛡️ Admin Portal Login

- **URL:** `http://localhost:3000/admin/login`
- **Default Username:** `admin` *(or `admin@school.com`)*
- **Default Password:** `admin123` *(configurable in `.env.local`)*

---

## 📄 License & Credits

Developed with excellence for **PM SHRI Middle School Hiranpur (Boys)**, Pakur, Jharkhand.  
Under the PM SHRI, JCERT & NEP 2020 framework.
