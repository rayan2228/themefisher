import PricePlanCard from '@/components/PricePlanCard'
import Title from '@/components/Title'
const pricePlanDetails = [
  {
    "id": 1,
    "title": "intro",
    "price": "29",
  },
  {
    "id": 2,
    "title": "base",
    "price": "49",
  },
  {
    "id": 3,
    "title": "popular",
    "price": "99",
  },
  {
    "id": 4,
    "title": "enterprise",
    "price": "199",
  },
]

const features = [
  {
    "id": 1,
    "title": "Interface Design",
    "packages": ["intro", "base", "popular", "enterprise"]
  },
  {
    "id": 2,
    "title": "Front-end Code",
    "packages": ["intro", "base", "popular", "enterprise"]
  },
  {
    "id": 3,
    "title": "Back-end Development",
    "packages": ["intro", "base", "popular", "enterprise"]
  },
  {
    "id": 4,
    "title": "Search Engine Optimization",
    "packages": ["base", "popular", "enterprise"]
  },
  {
    "id": 5,
    "title": "Awesome Support",
    "packages": ["popular", "enterprise"]
  },
  {
    "id": 6,
    "title": "Responsive site",
    "packages": ["base", "popular", "enterprise"]
  },
  {
    "id": 7,
    "title": "Easy in use",
    "packages": ["enterprise"]
  },
  {
    "id": 8,
    "title": "Useful site",
    "packages": ["enterprise"]
  },
  {
    "id": 9,
    "title": "Speedy web",
    "packages": ["enterprise"]
  }
]
const PricePlan = () => {
  return (
    <section className='lg:mt-25 mt-10 px-5 lg:px-0' id='price'>
      <Title text='price' />
      <PricePlanCard data={pricePlanDetails} features={features} />
    </section>
  )
}

export default PricePlan