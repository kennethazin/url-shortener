'use client';

import React from 'react'
import { useState } from 'react';
import ShortenForm from './shorten-form'
import UrlList from './url-list'
import { Card } from './ui/card';
import { Link2, Check } from 'lucide-react';



export default function UrlShortenerContainer() {
const [refreshKey, setrefreshKey] = useState(0);
const [linkCreated, setLinkCreated] = useState(false);

const handleUrlShortened = () => {
  setrefreshKey(prev => prev + 1);
  setLinkCreated(true);
  setTimeout(() => {
    setLinkCreated(false);
  }, 4000);
}

  return (
    <div className='relative'>
      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
        <span className="inline-flex items-center rounded-full border border-gray-300 bg-gray-100 bg-opacity-80 px-2.5 py-0.5 text-xs font-medium text-zinc-700">
        {linkCreated ? <Check className='w-4 h-4 mr-1 text-green-500'/> :  <Link2 className="w-4 h-4 mr-1" />}
        {linkCreated ? 'Short link created' :  'Try it out'}
        </span>
      </div>
      <Card className='p-2 sm:p-5 shadow-none bg-neutral-100 bg-opacity-40'>

        <ShortenForm handleUrlShortened={handleUrlShortened}  />
        <UrlList key={refreshKey} />
        </Card>      
    </div>
  )
}
