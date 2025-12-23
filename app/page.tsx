import Category from '@/components/homepage/Category'
import FlashSaleSection from '@/components/homepage/FlashSaleSection'
import HeroSection from '@/components/homepage/HeroSection'

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <FlashSaleSection />
      <Category />
    </div>
  )
}

export default HomePage