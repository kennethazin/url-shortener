'use client';

import React from 'react'
import { useState } from 'react';
import ShortenForm from './shorten-form'
import UrlList from './url-list'
import { Card } from './ui/card';



export default function UrlShortenerContainer() {
const [refreshKey, setrefreshKey] = useState(0);

const handleUrlShortened = () => {
  setrefreshKey(prev => prev + 1);
}

  return (
    <div>
      <Card className='p-5 shadow-none bg-neutral-100 bg-opacity-40'>
        <ShortenForm handleUrlShortened={handleUrlShortened}  />
        <UrlList key={refreshKey} />
        </Card>      
    </div>
  )
}
