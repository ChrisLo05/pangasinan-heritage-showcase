'use client';

import React, { useState } from 'react';
import HeaderNavigation from '@/components/organisms/HeaderNavigation';
import HeritageGrid from '@/components/organisms/HeritageGrid';
import SearchForm from '@/components/molecules/SearchForm';
import Typography from '@/components/atoms/Typography';
import { HeritageCardProps } from '@/components/molecules/HeritageCard';

const heritageSites: HeritageCardProps[] = [
  {
    title: 'Hundred Islands',
    location: 'Alaminos, Pangasinan',
    description: 'A stunning archipelago of 124 islands and islets scattered across Lingayen Gulf. Perfect for island hopping, snorkeling, and kayaking adventures.',
    imageUrl: '/pangasinan-heritage-showcase/hundred-islands.jpg',
    iconName: 'beach',
    href: '/pangasinan-heritage-showcase/hundred-islands',
  },
  {
    title: 'Bolinao Lighthouse',
    location: 'Bolinao, Pangasinan',
    description: 'A historic Spanish colonial lighthouse built in 1905, standing tall on Punta Piedra Point. Offers breathtaking panoramic views of the West Philippine Sea.',
    imageUrl: '/pangasinan-heritage-showcase/bolinao-lighthouse.png',
    iconName: 'lighthouse',
    href: '/pangasinan-heritage-showcase/bolinao-lighthouse',
  },
  {
    title: 'Balungao Hot Spring',
    location: 'Balungao, Pangasinan',
    description: 'Natural sulfuric hot springs nestled in a lush hilltop resort. Known for therapeutic waters and stunning hilltop views perfect for relaxation.',
    imageUrl: '/pangasinan-heritage-showcase/balungao-hotspring.webp',
    iconName: 'hot-spring',
    href: '/pangasinan-heritage-showcase/balungao-hot-spring',
  },
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    console.log('Searching for:', query);
    // In a real application, this would filter the heritage sites
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <HeaderNavigation currentPath="/" />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-12 sm:py-16 md:py-24">
          <div className="container-custom text-center">
            <Typography variant="h1" className="text-white mb-4 sm:mb-6">
              Discover Pangasinan Heritage
            </Typography>
            <Typography variant="body" className="text-primary-50 mb-8 sm:mb-12 max-w-3xl mx-auto text-lg sm:text-xl">
              Explore the iconic heritage sites of Pangasinan - from pristine islands to historic landmarks and natural wonders
            </Typography>
            <div className="mt-8">
              <SearchForm onSearch={handleSearch} />
            </div>
          </div>
        </section>

        {/* Heritage Sites Grid */}
        <HeritageGrid sites={heritageSites} />

        {/* About Section */}
        <section className="bg-white py-12 sm:py-16 md:py-20">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <Typography variant="h2" className="mb-6">
                Why Visit Pangasinan?
              </Typography>
              <Typography variant="body" className="mb-8 text-slate-600">
                Pangasinan is a province rich in natural beauty, cultural heritage, and warm hospitality. 
                From the world-famous Hundred Islands to historic Spanish-era landmarks, every destination 
                tells a unique story of our province's vibrant past and promising future.
              </Typography>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-12">
                <div className="p-6 bg-slate-50 rounded-lg">
                  <Typography variant="h3" className="text-primary-600 mb-2 text-3xl sm:text-4xl">
                    124+
                  </Typography>
                  <Typography variant="body" className="text-slate-600">
                    Islands to Explore
                  </Typography>
                </div>
                <div className="p-6 bg-slate-50 rounded-lg">
                  <Typography variant="h3" className="text-primary-600 mb-2 text-3xl sm:text-4xl">
                    100+
                  </Typography>
                  <Typography variant="body" className="text-slate-600">
                    Years of History
                  </Typography>
                </div>
                <div className="p-6 bg-slate-50 rounded-lg">
                  <Typography variant="h3" className="text-primary-600 mb-2 text-3xl sm:text-4xl">
                    3
                  </Typography>
                  <Typography variant="body" className="text-slate-600">
                    Iconic Heritage Sites
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 sm:py-12">
        <div className="container-custom text-center">
          <Typography variant="body" className="text-slate-400 mb-4">
            © 2026 Pangasinan Provincial Tourism Office. All rights reserved.
          </Typography>
          <Typography variant="small" className="text-slate-500">
            Designed by Christian Lozada
          </Typography>
        </div>
      </footer>
    </div>
  );
}
