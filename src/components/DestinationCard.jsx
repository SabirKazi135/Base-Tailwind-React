import React from 'react';

export default function DestinationCard({ destination }) {
  return (
    <div className="flex items-center overflow-hidden rounded-lg bg-white shadow-lg">
      <img
        className="h-32 w-32 flex-shrink-0"
        src={destination.imageUrl}
        alt={destination.imageAlt}
      />
      <div className="px-6 py-4">
        <h3 className="text-lg font-semibold text-gray-800">
          {destination.city}
        </h3>

        <p className="text-gray-600">
          ${destination.averagePrice} / night average
        </p>
        <div className="mt-4">
          <a
            href="#"
            className="text-brand hover:text-brand-light text-sm font-semibold"
          >
            Explore {destination.propertyCount} properties
          </a>
        </div>
      </div>
    </div>
  );
}
