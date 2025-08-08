'use client'

import { useState, useEffect, useCallback } from 'react'

interface ImagePreloaderState {
  loaded: boolean
  error: boolean
  loading: boolean
}

export const useImagePreloader = (src: string) => {
  const [state, setState] = useState<ImagePreloaderState>({
    loaded: false,
    error: false,
    loading: true
  })

  const preloadImage = useCallback((imageSource: string) => {
    if (!imageSource) {
      setState({ loaded: false, error: true, loading: false })
      return
    }

    setState({ loaded: false, error: false, loading: true })

    const img = new Image()
    
    img.onload = () => {
      setState({ loaded: true, error: false, loading: false })
    }
    
    img.onerror = () => {
      setState({ loaded: false, error: true, loading: false })
    }
    
    img.src = imageSource
  }, [])

  useEffect(() => {
    preloadImage(src)
  }, [src, preloadImage])

  return state
}

export const preloadImages = async (urls: string[]): Promise<{successful: string[], failed: string[]}> => {
  const successful: string[] = []
  const failed: string[] = []

  const preloadPromises = urls.map(url => {
    return new Promise<void>((resolve) => {
      if (!url) {
        failed.push(url)
        resolve()
        return
      }

      const img = new Image()
      img.onload = () => {
        successful.push(url)
        resolve()
      }
      img.onerror = () => {
        failed.push(url)
        resolve()
      }
      img.src = url
    })
  })

  await Promise.all(preloadPromises)
  
  return { successful, failed }
}