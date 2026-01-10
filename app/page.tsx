import BestSellingSection from '@/components/homepage/BestSellingSection'
import Category from '@/components/homepage/Category'
import ExploreOurProducts from '@/components/homepage/ExploreOurProducts'
import FlashSaleSection from '@/components/homepage/FlashSaleSection'
import HeroSection from '@/components/homepage/HeroSection'
import SaleBannerSection from '@/components/homepage/SaleBannerSection'

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <FlashSaleSection />
      <Category />
      <BestSellingSection />
      <SaleBannerSection />
      <ExploreOurProducts />
    </div>
  )
}

export default HomePage