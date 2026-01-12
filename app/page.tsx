import BestSellingSection from '@/components/homepage/BestSellingSection'
import Category from '@/components/homepage/Category'
import ExploreOurProducts from '@/components/homepage/ExploreOurProducts'
import FlashSaleSection from '@/components/homepage/FlashSaleSection'
import HeroSection from '@/components/homepage/HeroSection'
import NewArrivalsSection from '@/components/homepage/NewArrivalsSection'
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
      <NewArrivalsSection />
    </div>
  )
}

export default HomePage