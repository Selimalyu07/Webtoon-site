import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { Heart, BookOpen, Award, Mail } from 'lucide-react'

const ProfilePage: React.FC = () => {
  const { userId } = useParams<{ userId: string }>()
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState<'favorites' | 'reading' | 'completed'>('favorites')

  // Mock user data
  const profileData = {
    username: 'webtoon_lover',
    avatar: 'https://via.placeholder.com/200',
    bio: 'Webtoon ve manga tutkunuyum 📚',
    joinedDate: '2024-01-15',
    stats: {
      chaptersRead: 1250,
      hoursRead: 450,
      favorites: 45,
      rozes: 5,
    },
  }

  return (
    <div className="container-custom py-12">
      {/* Header */}
      <div className="mb-12">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <img
            src={profileData.avatar}
            alt={profileData.username}
            className="w-40 h-40 rounded-full object-cover"
          />
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-2">{profileData.username}</h1>
            <p className="text-slate-600 dark:text-slate-400 mb-4">{profileData.bio}</p>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
              Tarihte katıldı: {new Date(profileData.joinedDate).toLocaleDateString('tr-TR')}
            </p>

            {user?.id === userId && (
              <button className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
                Profili Düzenle
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-6 text-center">
          <BookOpen className="w-8 h-8 mx-auto mb-2 text-primary-600" />
          <p className="text-2xl font-bold">{profileData.stats.chaptersRead}</p>
          <p className="text-sm text-slate-600 dark:text-slate-400">Okunan Bölüm</p>
        </div>
        <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-6 text-center">
          <span className="text-3xl">⏱️</span>
          <p className="text-2xl font-bold">{profileData.stats.hoursRead}h</p>
          <p className="text-sm text-slate-600 dark:text-slate-400">Okuma Saati</p>
        </div>
        <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-6 text-center">
          <Heart className="w-8 h-8 mx-auto mb-2 text-red-500" />
          <p className="text-2xl font-bold">{profileData.stats.favorites}</p>
          <p className="text-sm text-slate-600 dark:text-slate-400">Favori</p>
        </div>
        <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-6 text-center">
          <Award className="w-8 h-8 mx-auto mb-2 text-yellow-500" />
          <p className="text-2xl font-bold">{profileData.stats.rozes}</p>
          <p className="text-sm text-slate-600 dark:text-slate-400">Rozet</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-12">
        <div className="flex gap-4 border-b border-slate-200 dark:border-slate-700 mb-8">
          {(['favorites', 'reading', 'completed'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-3 font-semibold border-b-2 transition ${
                activeTab === tab
                  ? 'border-primary-600 text-primary-600'
                  : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-primary-600'
              }`}
            >
              {tab === 'favorites' && '❤️ Favoriler'}
              {tab === 'reading' && '📖 Devam Edenler'}
              {tab === 'completed' && '✅ Tamamlananlar'}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="group cursor-pointer">
              <div className="bg-slate-200 dark:bg-slate-800 aspect-square rounded-lg mb-3 group-hover:opacity-80 transition"></div>
              <p className="font-semibold text-sm">Series {item}</p>
              <p className="text-xs text-slate-600 dark:text-slate-400">Yazar Adı</p>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div className="bg-gradient-primary rounded-lg p-8 text-white">
        <h2 className="text-2xl font-bold mb-6">🏆 Rozetler</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            { name: '100 Bölüm', desc: 'İlk 100 bölümü oku' },
            { name: 'Okuma Ustası', desc: '50 dizi oku' },
            { name: 'Hızlı Okuyucu', desc: 'Bir günde 10 bölüm oku' },
            { name: 'Yorum Şampiyonu', desc: '100 yorum yap' },
            { name: 'Diğerleri...', desc: 'Daha fazlası' },
          ].map((badge, idx) => (
            <div key={idx} className="text-center p-4 bg-white/20 rounded-lg">
              <div className="text-3xl mb-2">🏅</div>
              <p className="font-semibold text-sm">{badge.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
