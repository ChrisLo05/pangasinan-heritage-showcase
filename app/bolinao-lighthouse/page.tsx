'use client';

import React from 'react';
import HeaderNavigation from '@/components/organisms/HeaderNavigation';
import Typography from '@/components/atoms/Typography';
import Image from '@/components/atoms/Image';
import Icon from '@/components/atoms/Icon';
import Button from '@/components/atoms/Button';

export default function BolinaoLighthousePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <HeaderNavigation currentPath="/bolinao-lighthouse" />
      
      <main>
        {/* Hero Section */}
        <section className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1502933691298-84fc14542831?w=1600&h=900&fit=crop"
            alt="Bolinao Lighthouse overlooking the sea"
            className="w-full h-full brightness-75"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end">
            <div className="container-custom pb-8 sm:pb-12 md:pb-16 text-white">
              <div className="flex items-center gap-3 mb-4">
                <Icon name="lighthouse" size="xl" className="text-primary-400" ariaLabel="Lighthouse icon" />
                <Typography variant="h1" className="text-white">
                  Bolinao Lighthouse
                </Typography>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="map" size="md" className="text-primary-300" ariaLabel="Location" />
                <Typography variant="body" className="text-primary-100 text-lg sm:text-xl">
                  Bolinao, Pangasinan
                </Typography>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              {/* Overview */}
              <div className="bg-white rounded-xl shadow-md p-6 sm:p-8 md:p-10 mb-8">
                <Typography variant="h2" className="mb-6 text-primary-700">
                  Overview
                </Typography>
                <Typography variant="body" className="mb-4">
                  The Cape Bolinao Lighthouse, also known as Faro de Punta Piedra, stands majestically on 
                  Punta Piedra Point in Bolinao, Pangasinan. Built in 1905 during the American colonial period, 
                  this historic lighthouse has guided countless vessels through the West Philippine Sea for over 
                  a century.
                </Typography>
                <Typography variant="body" className="mb-4">
                  Rising 351 feet above sea level, the lighthouse features a distinctive white octagonal tower 
                  that can be seen from miles away. The structure showcases classic Spanish colonial architecture 
                  combined with American engineering, making it a unique piece of Philippine maritime history.
                </Typography>
                <Typography variant="body">
                  Today, it remains a fully operational lighthouse while also serving as a popular tourist 
                  destination. Visitors can climb to the top for breathtaking 360-degree views of the coastline, 
                  where the South China Sea meets dramatic cliffs and pristine beaches.
                </Typography>
              </div>

              {/* Historical Significance */}
              <div className="bg-white rounded-xl shadow-md p-6 sm:p-8 md:p-10 mb-8">
                <Typography variant="h2" className="mb-6 text-primary-700">
                  Historical Significance
                </Typography>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary-500 pl-4">
                    <Typography variant="h4" className="mb-2 text-lg">1905 - Construction</Typography>
                    <Typography variant="body" className="text-slate-600">
                      Built by American engineer Magin Pers during the American colonial period
                    </Typography>
                  </div>
                  <div className="border-l-4 border-primary-500 pl-4">
                    <Typography variant="h4" className="mb-2 text-lg">Spanish Design Heritage</Typography>
                    <Typography variant="body" className="text-slate-600">
                      Designed following Spanish lighthouse architecture traditions
                    </Typography>
                  </div>
                  <div className="border-l-4 border-primary-500 pl-4">
                    <Typography variant="h4" className="mb-2 text-lg">Cultural Property</Typography>
                    <Typography variant="body" className="text-slate-600">
                      Declared an Important Cultural Property by the National Museum
                    </Typography>
                  </div>
                  <div className="border-l-4 border-primary-500 pl-4">
                    <Typography variant="h4" className="mb-2 text-lg">Still Operational</Typography>
                    <Typography variant="body" className="text-slate-600">
                      Continues to guide maritime vessels after more than 115 years
                    </Typography>
                  </div>
                </div>
              </div>

              {/* Key Features */}
              <div className="bg-white rounded-xl shadow-md p-6 sm:p-8 md:p-10 mb-8">
                <Typography variant="h2" className="mb-6 text-primary-700">
                  What to Experience
                </Typography>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                        <Icon name="lighthouse" size="md" className="text-primary-600" ariaLabel="View" />
                      </div>
                    </div>
                    <div>
                      <Typography variant="h4" className="mb-2 text-lg">Panoramic Views</Typography>
                      <Typography variant="caption" className="text-slate-600">
                        360° views of the West Philippine Sea and coastline from the top
                      </Typography>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                        <Icon name="compass" size="md" className="text-primary-600" ariaLabel="History" />
                      </div>
                    </div>
                    <div>
                      <Typography variant="h4" className="mb-2 text-lg">Historic Architecture</Typography>
                      <Typography variant="caption" className="text-slate-600">
                        Marvel at Spanish-American colonial engineering and design
                      </Typography>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                        <Icon name="beach" size="md" className="text-primary-600" ariaLabel="Coastline" />
                      </div>
                    </div>
                    <div>
                      <Typography variant="h4" className="mb-2 text-lg">Dramatic Cliffs</Typography>
                      <Typography variant="caption" className="text-slate-600">
                        Walk along stunning clifftop paths with ocean vistas
                      </Typography>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                        <Icon name="map" size="md" className="text-primary-600" ariaLabel="Sunset" />
                      </div>
                    </div>
                    <div>
                      <Typography variant="h4" className="mb-2 text-lg">Sunset Watching</Typography>
                      <Typography variant="caption" className="text-slate-600">
                        Perfect spot for capturing stunning sunset photographs
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>

              {/* Visitor Information */}
              <div className="bg-white rounded-xl shadow-md p-6 sm:p-8 md:p-10 mb-8">
                <Typography variant="h2" className="mb-6 text-primary-700">
                  Visitor Information
                </Typography>
                <div className="space-y-4">
                  <div>
                    <Typography variant="h4" className="mb-2 text-lg">Best Time to Visit</Typography>
                    <Typography variant="body" className="text-slate-600">
                      Late afternoon for sunset views. November to May for clear weather.
                    </Typography>
                  </div>
                  <div>
                    <Typography variant="h4" className="mb-2 text-lg">How to Get There</Typography>
                    <Typography variant="body" className="text-slate-600">
                      6-hour drive from Manila to Bolinao. Lighthouse is 3km from town proper.
                    </Typography>
                  </div>
                  <div>
                    <Typography variant="h4" className="mb-2 text-lg">Tips for Visitors</Typography>
                    <Typography variant="body" className="text-slate-600">
                      Wear comfortable shoes for climbing. Bring a hat and sunscreen. Camera is a must!
                    </Typography>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center">
                <a href="/">
                  <Button variant="primary" size="lg" className="inline-flex items-center gap-2">
                    <Icon name="arrow-right" size="sm" className="rotate-180" ariaLabel="Back" />
                    Back to Home
                  </Button>
                </a>
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
