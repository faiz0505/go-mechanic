import React from 'react'
import Blog from "@/components/blog/Blog"
import { carAccessoriesArticle } from "@/utils/blog"
const Page = () => {
  return (
    <div>
      <Blog heading={"Car Accessories Articles"} data={carAccessoriesArticle}/>
    </div>
  )
}

export default Page
