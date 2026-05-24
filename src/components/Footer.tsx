import React from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Twitter, Instagram, Mail, Heart } from 'lucide-react'
import AdSpace from './AdSpace'

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white mt-20">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4">Hakkımızda</h3>
            <p className="text-slate-300 text-sm">
              Webtoon, Manhwa, Manga ve Novel okumak için en modern platform.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Kategoriler</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/webtoon" className="text-slate-300 hover:text-white transition">
                  Webtoon
                </Link>
              </li>
              <li>
                <Link to="/manhwa" className="text-slate-300 hover:text-white transition">
                  Manhwa
                </Link>
              </li>
              <li>
                <Link to="/manga" className="text-slate-300 hover:text-white transition">
                  Manga
                </Link>
              </li>
              <li>
                <Link to="/novel" className="text-slate-300 hover:text-white transition">
                  Novel
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-lg mb-4">Yasal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/privacy" className="text-slate-300 hover:text-white transition">
                  Gizlilik Politikası
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-slate-300 hover:text-white transition">
                  Kullanım Şartları
                </Link>
              </li>
              <li>
                <Link to="/dmca" className="text-slate-300 hover:text-white transition">
                  DMCA
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-300 hover:text-white transition">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-bold text-lg mb-4">Sosyal Medya</h3>
            <div className="flex gap-3 mb-4">
              <a href="#" className="p-2 bg-slate-800 hover:bg-slate-700 rounded transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-slate-800 hover:bg-slate-700 rounded transition">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-slate-800 hover:bg-slate-700 rounded transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="mailto:info@webtoon.com" className="p-2 bg-slate-800 hover:bg-slate-700 rounded transition">
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-3 py-2 bg-red-600 hover:bg-red-700 rounded transition text-sm font-semibold"
            >
              <Heart className="w-4 h-4 fill-white" />
              Bağış
            </a>
          </div>
        </div>

        {/* Ad space */}
        <div className="my-8">
          <AdSpace id="ad-footer" className="min-h-[100px]" />
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 pt-8 text-center text-slate-400 text-sm">
          <p>&copy; 2024 Webtoon Okuma. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
