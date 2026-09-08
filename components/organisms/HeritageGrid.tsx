import React from 'react';
import HeritageCard, { HeritageCardProps } from '../molecules/HeritageCard';

export interface HeritageGridProps {
  sites: HeritageCardProps[];
}

const HeritageGrid: React.FC<HeritageGridProps> = ({ sites }) => {
  return (
    <section 
      className="w-full py-8 sm:py-12 md:py-16"
      aria-label="Heritage sites grid"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {sites.map((site, index) => (
            <HeritageCard
              key={index}
              title={site.title}
              location={site.location}
              description={site.description}
              imageUrl={site.imageUrl}
              iconName={site.iconName}
              href={site.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeritageGrid;
