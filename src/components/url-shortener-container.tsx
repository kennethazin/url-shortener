'use client';

import React from 'react'
import { useState } from 'react';
import ShortenForm from './shorten-form'
import UrlList from './url-list'

export default function UrlShortenerContainer() {
const [refreshKey, setrefreshKey] = useState(0);

const handleUrlShortened = () => {
  setrefreshKey(prev => prev + 1);
}

  return (
    <div>
        <ShortenForm handleUrlShortened={handleUrlShortened}  />
        <UrlList key={refreshKey} />
    </div>
  )
}
