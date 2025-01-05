import React from 'react';
import { Skeleton } from './ui/skeleton';

const UrlListSkeleton = () => (
  <div>
    <h2 className="text-2xl font-bold mb-2">Recent URLs</h2>
    <ul className="space-y-2">
      {[...Array(5)].map((_, index) => (
        <li key={index} className="flex items-center gap-2 justify-between">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="flex items-center gap-3">
      <Skeleton className="h-4 w-[250px]" />
      <Skeleton className="h-4 w-[250px]" />
      </div>
        </li>
      ))}
    </ul>
  </div>
);

export default UrlListSkeleton;