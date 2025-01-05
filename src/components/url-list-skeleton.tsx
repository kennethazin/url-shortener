import React from 'react';
import { Skeleton } from './ui/skeleton';

const UrlListSkeleton = () => (
  <div>
    <h2 className="text-2xl font-bold mb-2">Recent URLs</h2>
    <ul className="space-y-5">
      {[...Array(5)].map((_, index) => (
        <li key={index} className="flex items-center gap-5 justify-between">
      <Skeleton className="h-5 w-1/2 " />
      <div className="flex items-center gap-6">
      <Skeleton className="h-5 w-5" />
      <Skeleton className="h-5 w-20" />
      </div>
        </li>
      ))}
    </ul>
  </div>
);

export default UrlListSkeleton;