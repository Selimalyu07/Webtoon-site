# Webtoon Okuma Platformu

Webtoon, Manhwa, Manga ve Novel okumak için modern, mobil-uyumlu platform. Para kazanma için optimize edilmiş.

## Özellikler

- 📱 Mobil-first responsive tasarım
- 🌙 Karanlık/Aydınlık tema
- 📖 Dikey ve yatay okuma modları
- 👤 Kullanıcı sistemi (Email, Google Auth)
- ⭐ Premium üyelik sistemi
- 💰 Reklam entegrasyonu (Google AdSense)
- 🔍 SEO optimizasyonu
- 💬 Yorum sistemi
- 🎯 Admin paneli

## Tech Stack

- React 18 + TypeScript
- Vite
- TailwindCSS
- Supabase (Database, Auth, Storage)
- Lucide React (Icons)

## Kurulum

### Gereksinimler
- Node.js 18+
- npm/yarn/pnpm

### Başlangıç

```bash
# Repository klonlayın
git clone https://github.com/Selimalyu07/Webtoon-site.git
cd Webtoon-site

# Bağımlılıkları yükleyin
npm install

# .env.example dosyasını kopyalayın
cp .env.example .env.local

# Supabase kredilerinizi .env.local'e ekleyin
# Development sunucusunu başlatın
npm run dev
```

### Build

```bash
npm run build
npm run preview
```

## Proje Yapısı

```
src/
├── components/        # React bileşenleri
├── pages/            # Sayfa bileşenleri
├── stores/           # Zustand stores
├── lib/              # Utility fonksiyonlar
├── hooks/            # Custom hooks
├── types/            # TypeScript types
├── styles/           # Global styles
└── main.tsx          # Entry point
```

## Para Kazanma

### 1. Reklam Alanları
- Google AdSense entegrasyonu
- Header, sidebar, içerik içi, bölüm araları
- Responsive reklam blokları

### 2. Premium Üyelik
- Aylık: 29.99 TL
- Yıllık: 299 TL
- Reklamsız okuma
- Yeni bölümleri 1 gün önce
- HD kalite
- Offline indirme

### 3. Bağışlar
- Patreon/Kreosus entegrasyonu
- Köşede bağış butonu

### 4. Affiliate
- Manga ürünleri
- Trendyol/Amazon linkler

## Supabase Setup

### Tablolar

```sql
-- Kullanıcı profilleri
CREATE TABLE profiles (
  id UUID PRIMARY KEY,
  username TEXT UNIQUE,
  avatar_url TEXT,
  bio TEXT,
  is_premium BOOLEAN DEFAULT false,
  premium_until TIMESTAMP
);

-- Diziler (Webtoon, Manga, vb.)
CREATE TABLE series (
  id UUID PRIMARY KEY,
  title TEXT NOT NULL,
  type TEXT, -- webtoon, manhwa, manga, novel
  cover_url TEXT,
  description TEXT,
  author TEXT,
  artist TEXT,
  year INTEGER,
  status TEXT, -- ongoing, completed, hiatus
  genres TEXT[], -- array
  total_chapters INTEGER,
  views INTEGER DEFAULT 0,
  rating DECIMAL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Bölümler
CREATE TABLE chapters (
  id UUID PRIMARY KEY,
  series_id UUID REFERENCES series,
  chapter_no INTEGER,
  title TEXT,
  images TEXT[], -- array of URLs
  content TEXT, -- novel için
  release_date TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Favoriler
CREATE TABLE favorites (
  user_id UUID REFERENCES profiles,
  series_id UUID REFERENCES series,
  PRIMARY KEY (user_id, series_id)
);

-- Okuma ilerleme
CREATE TABLE reading_progress (
  user_id UUID REFERENCES profiles,
  series_id UUID REFERENCES series,
  chapter_id UUID REFERENCES chapters,
  page INTEGER,
  last_read_at TIMESTAMP,
  PRIMARY KEY (user_id, series_id)
);

-- Yorumlar
CREATE TABLE comments (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES profiles,
  chapter_id UUID REFERENCES chapters,
  text TEXT NOT NULL,
  likes INTEGER DEFAULT 0,
  parent_id UUID, -- yanıt için
  is_spoiler BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Puanlar
CREATE TABLE ratings (
  user_id UUID REFERENCES profiles,
  series_id UUID REFERENCES series,
  score INTEGER, -- 1-5
  PRIMARY KEY (user_id, series_id)
);
```

## Lisans

MIT

## İletişim

[İletişim sayfasına gidin](https://webtoon-okuma.com/iletisim)
