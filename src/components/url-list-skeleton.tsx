import React from 'react';
import { Skeleton } from './ui/skeleton';

const UrlListSkeleton = () => (
  <div>
    <ul className="space-y-5">
      {[...Array(5)].map((_, index) => (
        <li key={index} className="flex items-center gap-5 justify-between">
      <Skeleton className="h-20 w-full " />
      <div className="flex items-center gap-6">

      </div>
        </li>
      ))}
    </ul>
  </div>
);

export default UrlListSkeleton;