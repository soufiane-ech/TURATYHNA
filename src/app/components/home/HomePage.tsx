import { useState } from 'react';

// --- Shorts ---
import gnawa from './images/shorts/gnawa.png';
import ksourDraa from './images/shorts/ksour-draa.jpg';
import halqaImg from './images/shorts/halqa-jemaa-elfna.jpeg';

// --- Articles ---
import aitBenHaddou from './images/articles/ait-ben-haddou.jpg';
import moussemImg from './images/articles/moussem-imilchil.jpg';
import medinaArticleImg from './images/articles/medina-marrakech.jpg';

// --- Vidéos ---
import hammamImg from './images/videos/hammam.jpg';
import medinaVideoImg from './images/videos/medina-architecture.jpg';
import couscousImg from './images/videos/couscous.jpeg';
import arganierImg from './images/videos/arganier.jpg';
import festivalFesImg from './images/videos/festival-fes.jpeg';
import {
  Bell,
  Search,
  Play,
  Home,
  Star,
  User,
} from 'lucide-react';
import { Card } from '../ui/card';

function LogoMark() {
  return (
    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#8B3D15] shadow-sm">
      <svg viewBox="0 0 100 100" className="h-9 w-9">
        <polygon points="50,5 61,35 95,35 67,55 78,90 50,70 22,90 33,55 5,35 39,35" fill="#E5C7A4" stroke="#6C2F12" strokeWidth="4" />
        <path d="M50 18 L58 40 L82 40 L61 55 L70 78 L50 64 L30 78 L39 55 L18 40 L42 40 Z" fill="#6B8C5F" opacity="0.85" />
        <circle cx="50" cy="50" r="8" fill="#8B3D15" />
      </svg>
    </div>
  );
}

const filters = ['Tout', 'Matériel', 'Immatériel', 'Monuments', 'Traditions', 'Artisanat'];

const shorts = [
  {
    title: 'Gnawa — origines et transe sacrée',
    channel: 'Fès Patrimoine',
    views: '1,2M vues',
    duration: '0:58',
    thumbnail: gnawa,
  },
  {
    title: 'Ksour du Drâa — citadelles de terre',
    channel: 'Atlas Culture',
    views: '742k vues',
    duration: '1:12',
    thumbnail: ksourDraa,
  },
  {
    title: 'Halqa — l’art du conte à Jemaa el-Fna',
    channel: 'Marrakech Live',
    views: '860k vues',
    duration: '0:45',
    thumbnail: halqaImg,
  },
];

const articles = [
  {
    title: 'Ksar Aït Ben Haddou — guide complet',
    description: 'Architecture ocre, forteresse souabe et histoire du commerce caravanier.',
    source: 'Heritage Journal',
    thumbnail: aitBenHaddou,
  },
  {
    title: 'Moussem d’Imilchil — rites et origines',
    description: 'Plongez dans les cérémonies sacrées et leurs légendes.',
    source: 'Atlas Chronicle',
    thumbnail: moussemImg,
  },
  {
    title: 'Médina de Marrakech — labyrinthe vivant',
    description: 'Un parcours entre palais, souks et traditions urbaines.',
    source: 'Morocco Today',
    thumbnail: medinaArticleImg,
  },
];

const videos = [
  {
    title: 'Hammam marocain — rituel et culture du bain traditionnel',
    tag: 'Vidéo',
    duration: '5:22',
    subtitle: 'Fès · 12k vues',
    thumbnail: hammamImg,
  },
  {
    title: 'Médina de Marrakech — architecture millénaire',
    tag: 'Vidéo',
    duration: '9:15',
    subtitle: 'Marrakech · 31k vues',
    thumbnail: medinaVideoImg,
  },
  {
    title: 'Couscous berbère — histoire d’un plat UNESCO',
    tag: 'Article',
    duration: '18:42',
    subtitle: 'Chef Rabat · 8k vues',
    thumbnail: couscousImg,
  },
  {
    title: 'Ferme arganier — secrets des artisans du sud',
    tag: 'Vidéo',
    duration: '7:08',
    subtitle: 'Agadir · 15k vues',
    thumbnail: arganierImg,
  },
  {
    title: 'Festival des musiques sacrées de Fès',
    tag: 'Vidéo',
    duration: '4:56',
    subtitle: 'Fès · 42k vues',
    thumbnail: festivalFesImg,
  },
];

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen bg-[#FAF6EF] text-[#2D1810]">
      <div className="fixed inset-x-0 top-0 z-30 border-b border-[#E5DED3] bg-[#FAF6EF]/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-[375px] items-center justify-between gap-3 px-4 py-4">
          <div className="flex items-center gap-3">
            <LogoMark />
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#8B3D15]">تراث</p>
              <h1 className="text-lg font-semibold">Turath</h1>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="grid h-11 w-11 place-items-center rounded-2xl bg-white shadow-sm border border-[#E5DED3] text-[#5C4A3A]">
              <Search className="w-5 h-5" />
            </button>
            <button className="grid h-11 w-11 place-items-center rounded-2xl bg-white shadow-sm border border-[#E5DED3] text-[#5C4A3A]">
              <Bell className="w-5 h-5" />
            </button>
            <div className="grid h-11 w-11 place-items-center rounded-full bg-[#8B3D15] text-white font-semibold shadow-sm">
              S
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[375px] px-4 pb-15 pt-[80px]">
        <div className="mb-4 rounded-[24px] bg-white px-4 py-2 shadow-sm shadow-[#C0622A]/10">
          <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap scrollbar-hidden">
            {filters.map((filter, index) => (
              <button
                key={filter}
                className={`rounded-full px-4 py-1 text-sm font-semibold transition ${
                  index === 0 ? 'bg-[#2D1810] text-white' : 'bg-[#F6F1E8] text-[#5C4A3A] border border-[#E5DED3]'
                }`}>
                {filter}
              </button>
            ))}
          </div>
        </div>
        <section className="mb-6">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div className="min-w-0">
              <p className="text-sm font-semibold">Articles à lire</p>
              <p className="text-xs text-[#5C4A3A]">Des histoires et découvertes authentiques du Maroc.</p>
            </div>
            <button className="shrink-0 text-sm font-medium text-[#C0622A]">Voir tout</button>
          </div>
          <div className="space-y-3">
            {articles.map((item) => (
              <Card key={item.title} className="rounded-[20px] border-[#E5DED3] bg-white shadow-sm overflow-hidden">
                <div className="flex items-center gap-4 p-4">
                  {/* Thumbnail */}
                  <div className="shrink-0 h-[72px] w-[72px] rounded-[14px] bg-[#F0EBE3] overflow-hidden border border-[#E5DED3]">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  {/* Text content */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-[#2D1810] leading-snug line-clamp-2">{item.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-[#7A6A5A] line-clamp-2">{item.description}</p>
                    <p className="mt-2 text-[11px] font-semibold text-[#C0622A]">{item.source}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-6">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div className="min-w-0">
              <p className="text-sm font-semibold">Shorts</p>
              <p className="text-xs text-[#5C4A3A]">Vidéo verticale courte inspirée de YouTube.</p>
            </div>
            <button className="shrink-0 text-sm font-medium text-[#C0622A]">Voir tout</button>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {shorts.map((item) => (
              <div key={item.title} className="min-w-[170px] rounded-[24px] bg-white shadow-sm border border-[#E5DED3]">
                <div className="relative h-56 overflow-hidden rounded-[24px] bg-slate-100">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-x-3 top-3 flex items-center justify-between text-[10px] text-white">
                    <span className="rounded-full bg-black/30 px-2 py-1">Short</span>
                    <span className="rounded-full bg-black/30 px-2 py-1">{item.duration}</span>
                  </div>
                  <div className="absolute inset-x-3 bottom-3 flex items-center justify-between text-[10px] text-white">
                    <span className="rounded-full bg-black/30 px-2 py-1">{item.views}</span>
                    <div className="grid h-9 w-9 place-items-center rounded-full bg-white/90 text-[#2D1810] shadow-sm">
                      <Play className="w-4 h-4" />
                    </div>
                  </div>
                </div>
                <div className="p-3">
                  <p className="mb-1 text-sm font-semibold text-[#2D1810]">{item.title}</p>
                  <p className="text-[12px] text-[#5C4A3A]">{item.channel}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-6">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div className="min-w-0">
              <p className="text-sm font-semibold">Vidéos recommandées</p>
              <p className="text-xs text-[#5C4A3A]">Vignettes et contextes visuels cohérents avec chaque sujet.</p>
            </div>
            <button className="shrink-0 text-sm font-medium text-[#C0622A]">Tout voir</button>
          </div>
          <div className="space-y-4">
            {videos.map((item) => (
              <Card key={item.title} className="rounded-[24px] border-[#E5DED3] p-4 shadow-sm">
                <div className="relative overflow-hidden rounded-[20px] h-44 bg-slate-100">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/35 to-transparent" />
                  <div className="absolute left-3 top-3 rounded-full bg-white/90 px-2 py-1 text-[11px] font-semibold text-[#2D1810]">
                    {item.tag}
                  </div>
                  <div className="absolute right-3 bottom-3 rounded-full bg-white/90 px-2 py-1 text-[11px] font-semibold text-[#2D1810]">
                    {item.duration}
                  </div>
                </div>
                <div className="mt-4 flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-[#2D1810] leading-snug">{item.title}</p>
                    <p className="mt-2 text-xs text-[#5C4A3A]">{item.subtitle}</p>
                  </div>
                  <button className="grid h-11 w-11 place-items-center rounded-2xl bg-[#C0622A] text-white shadow-sm">
                    <Play className="w-5 h-5" />
                  </button>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>

      <nav className="fixed inset-x-0 bottom-0 border-t border-[#D4B49F] bg-[#F1E2D1] px-4 py-3 shadow-[0_-8px_30px_-20px_rgba(192,98,42,0.25)]">
        <div className="mx-auto flex max-w-[375px] items-center justify-between">
          {[
            { label: 'Accueil', icon: Home, value: 'home' },
            { label: 'Quiz', icon: Play, value: 'quiz' },
            { label: 'Récomp.', icon: Star, value: 'rewards' },
            { label: 'Profil', icon: User, value: 'profile' },
          ].map((item) => (
            <button
              key={item.value}
              onClick={() => setActiveTab(item.value)}
              className={`flex flex-col items-center gap-1 text-[10px] font-semibold transition ${
                activeTab === item.value ? 'text-[#8B3D15]' : 'text-[#5C4A3A]'
              }`}
            >
              <item.icon className="h-5 w-5" />
              {item.label}
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}
