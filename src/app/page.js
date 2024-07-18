import {allBlogs} from "contentlayer/generated";
import HomeCoverSection from "../components/Home/HomeCoverSection";
import FeaturedPosts from "../components/Home/FeaturedPosts";
import RecentPosts from "../components/Home/RecentPosts";
import AdBanner from "../components/Ads/AdBanner";

export default function Home() {
  
  return (
    <main className="flex flex-col items-center justify-center">
      
      <HomeCoverSection blogs={allBlogs} />
      <div className="bg-black mt-5">
              <AdBanner
                dataAdFormat="auto"
                dataFullWidthResponsive={true}
                dataAdSlot="5768850629"
              />
            </div>
      
      <FeaturedPosts blogs={allBlogs} />
      <div className="bg-black mt-5">
              <AdBanner
                dataAdFormat="auto"
                dataFullWidthResponsive={true}
                dataAdSlot="5768850629"
              />
            </div>
      <RecentPosts blogs={allBlogs} />


    </main>
  )
}
