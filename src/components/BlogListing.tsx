// src/components/BlogListing.tsx
// This is a simple component to display blog posts
// Since blogPosts.ts is deleted, we just need to remove the import and the usage

import React from 'react';

interface BlogListingProps {
  // Add any props you need here
}

const BlogListing: React.FC<BlogListingProps> = () => {
  // Since the blog data is now hardcoded in BlogPage.tsx and BlogArticlePage.tsx,
  // this component might not be needed. 
  // 
  // If this component is still being used somewhere, you have two options:
  // 1. Delete the component entirely if it's not used
  // 2. Rewrite it to use the hardcoded blog data from BlogPage.tsx
  //
  // For now, returning null to prevent build errors

  return null;
};

export default BlogListing;