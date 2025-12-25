import BestSellingSection from '@/components/homepage/BestSellingSection'
import Category from '@/components/homepage/Category'
import FlashSaleSection from '@/components/homepage/FlashSaleSection'
import HeroSection from '@/components/homepage/HeroSection'

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <FlashSaleSection />
      <Category />
      <BestSellingSection />
    </div>
  )
}

export default HomePage