'use client';

import React from 'react';
import HeaderNavigation from '@/components/organisms/HeaderNavigation';
import Typography from '@/components/atoms/Typography';
import Image from '@/components/atoms/Image';
import Icon from '@/components/atoms/Icon';
import Button from '@/components/atoms/Button';

export default function HundredIslandsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <HeaderNavigation currentPath="/hundred-islands" />
      
      <main>
        {/* Hero Section */}
        <section className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] overflow-hidden">
          <Image
            src="/pangasinan-heritage-showcase/hundred-islands.jpg"
            alt="Hundred Islands National Park aerial view"
            className="w-full h-full brightness-75"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end">
            <div className="container-custom pb-8 sm:pb-12 md:pb-16 text-white">
              <div className="flex items-center gap-3 mb-4">
                <Icon name="beach" size="xl" className="text-primary-400" ariaLabel="Beach icon" />
                <Typography variant="h1" className="text-white">
                  Hundred Islands
                </Typography>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="map" size="md" className="text-primary-300" ariaLabel="Location" />
                <Typography variant="body" className="text-primary-100 text-lg sm:text-xl">
                  Alaminos, Pangasinan
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
                  The Hundred Islands National Park is a stunning archipelago consisting of 124 islands and islets 
                  scattered across the Lingayen Gulf in Alaminos City, Pangasinan. This protected marine sanctuary 
                  is one of the Philippines' most treasured natural wonders.
                </Typography>
                <Typography variant="body" className="mb-4">
                  Formed through centuries of coral reef growth and geological uplift, these mushroom-shaped islands 
                  rise dramatically from turquoise waters, creating a breathtaking seascape that attracts thousands 
                  of visitors annually.
                </Typography>
                <Typography variant="body">
                  The park offers a perfect blend of adventure and relaxation, with activities ranging from island 
                  hopping and snorkeling to kayaking and cave exploration. Each island has its own unique character, 
                  from Governor's Island with its diving platform to Quezon Island with pristine beaches.
                </Typography>
              </div>

              {/* Key Features */}
              <div className="bg-white rounded-xl shadow-md p-6 sm:p-8 md:p-10 mb-8">
                <Typography variant="h2" className="mb-6 text-primary-700">
                  Key Features
                </Typography>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                        <Icon name="beach" size="md" className="text-primary-600" ariaLabel="Islands" />
                      </div>
                    </div>
                    <div>
                      <Typography variant="h4" className="mb-2 text-lg">124 Islands</Typography>
                      <Typography variant="caption" className="text-slate-600">
                        Explore diverse islands, each with unique formations and beaches
                      </Typography>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                        <Icon name="compass" size="md" className="text-primary-600" ariaLabel="Activities" />
                      </div>
                    </div>
                    <div>
                      <Typography variant="h4" className="mb-2 text-lg">Island Hopping</Typography>
                      <Typography variant="caption" className="text-slate-600">
                        Tour multiple islands in one day with local boat services
                      </Typography>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                        <Icon name="mountain" size="md" className="text-primary-600" ariaLabel="Snorkeling" />
                      </div>
                    </div>
                    <div>
                      <Typography variant="h4" className="mb-2 text-lg">Snorkeling</Typography>
                      <Typography variant="caption" className="text-slate-600">
                        Discover vibrant marine life in crystal-clear waters
                      </Typography>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                        <Icon name="map" size="md" className="text-primary-600" ariaLabel="Protected area" />
                      </div>
                    </div>
                    <div>
                      <Typography variant="h4" className="mb-2 text-lg">Protected Park</Typography>
                      <Typography variant="caption" className="text-slate-600">
                        National park status ensures conservation and sustainability
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
                      November to May (dry season) for the best weather and calm seas
                    </Typography>
                  </div>
                  <div>
                    <Typography variant="h4" className="mb-2 text-lg">How to Get There</Typography>
                    <Typography variant="body" className="text-slate-600">
                      5-hour drive from Manila via TPLEX and SCTEX. Buses available from major terminals.
                    </Typography>
                  </div>
                  <div>
                    <Typography variant="h4" className="mb-2 text-lg">What to Bring</Typography>
                    <Typography variant="body" className="text-slate-600">
                      Sunscreen, swimwear, towels, waterproof bags, snorkeling gear, and plenty of water
                    </Typography>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center">
                <a href="/pangasinan-heritage-showcase">
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
