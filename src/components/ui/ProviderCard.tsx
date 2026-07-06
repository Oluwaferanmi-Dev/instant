import React from 'react';
import Image from 'next/image';

interface ProviderCardProps {
  name: string;
  profession: string;
  rating: number;
  reviews: number;
  priceStart: number;
  avatarUrl: string;
}

export function ProviderCard({ name, profession, rating, reviews, priceStart, avatarUrl }: ProviderCardProps) {
  return (
    <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-soft flex flex-col gap-4 transition-transform hover:-translate-y-1 duration-300">
      <div className="flex items-center gap-4">
        <div className="relative w-16 h-16 rounded-full overflow-hidden bg-surface-dim">
          {avatarUrl ? (
            <Image src={avatarUrl} alt={name} fill className="object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-secondary font-bold text-xl">
              {name.charAt(0)}
            </div>
          )}
        </div>
        <div>
          <h3 className="text-lg font-bold text-on-surface leading-tight">{name}</h3>
          <p className="text-sm text-neutral">{profession}</p>
        </div>
      </div>
      
      <div className="flex items-center justify-between border-t border-outline-variant pt-4 mt-2">
        <div className="flex items-center gap-1">
          <span className="text-yellow-500">★</span>
          <span className="font-bold text-sm text-on-surface">{rating.toFixed(1)}</span>
          <span className="text-sm text-neutral">({reviews})</span>
        </div>
        <div className="text-right">
          <span className="text-xs text-neutral block">From</span>
          <span className="font-bold text-primary">${priceStart}</span>
        </div>
      </div>
    </div>
  );
}
