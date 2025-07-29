'use client'

export default function BlogLoadingAnimation() {
  return (
    <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 pt-24 pb-16">
        {/* Header skeleton */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="animate-pulse">
            {/* Back button skeleton */}
            <div className="h-4 bg-gray-200 rounded w-32 mb-8"></div>
            
            {/* Featured image skeleton */}
            <div className="aspect-video bg-gray-200 rounded-xl mb-8"></div>
            
            {/* Category badge skeleton */}
            <div className="h-6 bg-gray-200 rounded-full w-24 mb-8"></div>
            
            {/* Title skeleton */}
            <div className="space-y-3 mb-6">
              <div className="h-8 bg-gray-200 rounded w-full"></div>
              <div className="h-8 bg-gray-200 rounded w-3/4"></div>
            </div>
            
            {/* Meta info skeleton */}
            <div className="flex items-center space-x-4 mb-8">
              <div className="h-4 bg-gray-200 rounded w-24"></div>
              <div className="h-4 bg-gray-200 rounded w-16"></div>
            </div>
            
            {/* Excerpt skeleton */}
            <div className="space-y-2 mb-12">
              <div className="h-5 bg-gray-200 rounded w-full"></div>
              <div className="h-5 bg-gray-200 rounded w-5/6"></div>
              <div className="h-5 bg-gray-200 rounded w-4/5"></div>
            </div>
          </div>
        </div>

        {/* Content skeleton */}
        <div className="max-w-7xl mx-auto">
          <div className="lg:grid lg:grid-cols-4 lg:gap-8">
            {/* Sidebar skeleton */}
            <div className="hidden lg:block lg:col-span-1">
              <div className="animate-pulse space-y-4">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                <div className="h-3 bg-gray-200 rounded w-4/5"></div>
              </div>
            </div>
            
            {/* Main content skeleton */}
            <div className="lg:col-span-3">
              <div className="animate-pulse space-y-6">
                {/* Paragraph skeletons */}
                <div className="space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-11/12"></div>
                  <div className="h-4 bg-gray-200 rounded w-10/12"></div>
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                </div>
                
                {/* Heading skeleton */}
                <div className="h-6 bg-gray-200 rounded w-2/3 mt-8"></div>
                
                {/* More paragraph skeletons */}
                <div className="space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-9/12"></div>
                  <div className="h-4 bg-gray-200 rounded w-11/12"></div>
                </div>
                
                {/* List skeleton */}
                <div className="space-y-2 ml-4">
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                  <div className="h-4 bg-gray-200 rounded w-4/5"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                </div>
                
                {/* Another heading */}
                <div className="h-6 bg-gray-200 rounded w-1/2 mt-8"></div>
                
                {/* Final paragraphs */}
                <div className="space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-10/12"></div>
                  <div className="h-4 bg-gray-200 rounded w-8/12"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}