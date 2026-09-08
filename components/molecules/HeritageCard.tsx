import React from 'react';
import Image from '../atoms/Image';
import Typography from '../atoms/Typography';
import Button from '../atoms/Button';
import Icon from '../atoms/Icon';

export interface HeritageCardProps {
  title: string;
  location: string;
  description: string;
  imageUrl: string;
  iconName: 'beach' | 'lighthouse' | 'hot-spring';
  href: string;
}

const HeritageCard: React.FC<HeritageCardProps> = ({
  title,
  location,
  description,
  imageUrl,
  iconName,
  href,
}) => {
  return (
    <article className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full">
      {/* Image Container */}
      <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden bg-slate-200">
        <Image
          src={imageUrl}
          alt={title}
          className="w-full h-full group-hover:scale-110 transition-transform duration-500"
          objectFit="cover"
          loading="lazy"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-md">
          <Icon name={iconName} size="md" className="text-primary-600" ariaLabel={`${title} icon`} />
        </div>
      </div>

      {/* Content Container */}
      <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-2 mb-2">
          <Icon name="map" size="sm" className="text-slate-400" ariaLabel="Location" />
          <Typography variant="small" className="text-slate-500">
            {location}
          </Typography>
        </div>

        <Typography variant="h4" className="mb-3 text-xl sm:text-2xl">
          {title}
        </Typography>

        <Typography variant="body" className="mb-4 text-slate-600 text-sm sm:text-base flex-grow line-clamp-3">
          {description}
        </Typography>

        <div className="mt-auto">
          <a href={href} className="inline-block w-full sm:w-auto">
            <Button 
              variant="primary" 
              size="md" 
              className="w-full sm:w-auto flex items-center justify-center gap-2"
            >
              Explore More
              <Icon name="arrow-right" size="sm" ariaLabel="Arrow right" />
            </Button>
          </a>
        </div>
      </div>
    </article>
  );
};

export default HeritageCard;
