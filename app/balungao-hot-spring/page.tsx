'use client';

import React from 'react';
import HeaderNavigation from '@/components/organisms/HeaderNavigation';
import Typography from '@/components/atoms/Typography';
import Image from '@/components/atoms/Image';
import Icon from '@/components/atoms/Icon';
import Button from '@/components/atoms/Button';

export default function BalungaoHotSpringPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <HeaderNavigation currentPath="/balungao-hot-spring" />
      
      <main>
        {/* Hero Section */}
        <section className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] overflow-hidden">
          <Image
            src="/balungao-hotspring.webp"
            alt="Balungao Hot Spring resort pools"
            className="w-full h-full brightness-75"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end">
            <div className="container-custom pb-8 sm:pb-12 md:pb-16 text-white">
              <div className="flex items-center gap-3 mb-4">
                <Icon name="hot-spring" size="xl" className="text-primary-400" ariaLabel="Hot spring icon" />
                <Typography variant="h1" className="text-white">
                  Balungao Hot Spring
                </Typography>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="map" size="md" className="text-primary-300" ariaLabel="Location" />
                <Typography variant="body" className="text-primary-100 text-lg sm:text-xl">
                  Balungao, Pangasinan
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
                  Nestled in the lush hills of Balungao, Pangasinan, the Balungao Hot Spring is a natural 
                  wonder known for its therapeutic sulfuric waters and stunning hilltop location. This unique 
                  destination combines the healing properties of natural hot springs with breathtaking panoramic 
                  views of the surrounding landscape.
                </Typography>
                <Typography variant="body" className="mb-4">
                  The resort features naturally heated pools fed by underground sulfuric springs, believed to have 
                  medicinal properties that help with skin conditions, muscle pain, and arthritis. The water 
                  temperature ranges from warm to hot, providing a soothing and relaxing experience for visitors.
                </Typography>
                <Typography variant="body">
                  What sets Balungao Hot Spring apart is its elevated location atop a hill, offering visitors 
                  spectacular 360-degree views of Pangasinan&apos;s countryside. The combination of therapeutic waters, 
                  fresh mountain air, and scenic vistas creates a perfect wellness retreat destination.
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
                        <Icon name="hot-spring" size="md" className="text-primary-600" ariaLabel="Hot spring" />
                      </div>
                    </div>
                    <div>
                      <Typography variant="h4" className="mb-2 text-lg">Natural Sulfuric Waters</Typography>
                      <Typography variant="caption" className="text-slate-600">
                        Therapeutic mineral-rich waters with healing properties
                      </Typography>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                        <Icon name="mountain" size="md" className="text-primary-600" ariaLabel="Hilltop" />
                      </div>
                    </div>
                    <div>
                      <Typography variant="h4" className="mb-2 text-lg">Hilltop Location</Typography>
                      <Typography variant="caption" className="text-slate-600">
                        Elevated position offering stunning countryside panoramas
                      </Typography>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                        <Icon name="compass" size="md" className="text-primary-600" ariaLabel="Pools" />
                      </div>
                    </div>
                    <div>
                      <Typography variant="h4" className="mb-2 text-lg">Multiple Pools</Typography>
                      <Typography variant="caption" className="text-slate-600">
                        Various pool sizes and temperatures for all preferences
                      </Typography>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                        <Icon name="map" size="md" className="text-primary-600" ariaLabel="Facilities" />
                      </div>
                    </div>
                    <div>
                      <Typography variant="h4" className="mb-2 text-lg">Full Amenities</Typography>
                      <Typography variant="caption" className="text-slate-600">
                        Cottages, changing rooms, and local food options available
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>

              {/* Health Benefits */}
              <div className="bg-white rounded-xl shadow-md p-6 sm:p-8 md:p-10 mb-8">
                <Typography variant="h2" className="mb-6 text-primary-700">
                  Health Benefits
                </Typography>
                <Typography variant="body" className="mb-4">
                  The sulfuric waters of Balungao Hot Spring are believed to offer numerous therapeutic benefits:
                </Typography>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <Typography variant="h4" className="mb-2 text-base">Skin Health</Typography>
                    <Typography variant="caption" className="text-slate-600">
                      Helps treat skin conditions like eczema and psoriasis
                    </Typography>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <Typography variant="h4" className="mb-2 text-base">Muscle Relaxation</Typography>
                    <Typography variant="caption" className="text-slate-600">
                      Soothes sore muscles and reduces tension
                    </Typography>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <Typography variant="h4" className="mb-2 text-base">Joint Relief</Typography>
                    <Typography variant="caption" className="text-slate-600">
                      Eases arthritis and joint pain symptoms
                    </Typography>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <Typography variant="h4" className="mb-2 text-base">Stress Reduction</Typography>
                    <Typography variant="caption" className="text-slate-600">
                      Promotes relaxation and mental wellness
                    </Typography>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <Typography variant="h4" className="mb-2 text-base">Circulation</Typography>
                    <Typography variant="caption" className="text-slate-600">
                      Improves blood circulation throughout the body
                    </Typography>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <Typography variant="h4" className="mb-2 text-base">Detoxification</Typography>
                    <Typography variant="caption" className="text-slate-600">
                      Helps remove toxins through skin pores
                    </Typography>
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
                      Early morning or late afternoon. Weekdays are less crowded than weekends.
                    </Typography>
                  </div>
                  <div>
                    <Typography variant="h4" className="mb-2 text-lg">How to Get There</Typography>
                    <Typography variant="body" className="text-slate-600">
                      3-hour drive from Manila via NLEX and SCTEX. Located in Barangay San Marcelino, Balungao.
                    </Typography>
                  </div>
                  <div>
                    <Typography variant="h4" className="mb-2 text-lg">What to Bring</Typography>
                    <Typography variant="body" className="text-slate-600">
                      Swimwear, towels, extra clothes, toiletries, and drinking water. Cottages available for rent.
                    </Typography>
                  </div>
                  <div>
                    <Typography variant="h4" className="mb-2 text-lg">Important Notes</Typography>
                    <Typography variant="body" className="text-slate-600">
                      Consult a doctor if you have heart conditions or are pregnant before using hot springs.
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
