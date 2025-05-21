import priceShape from "@/app/assets/icons/priceShape.svg"
import Image from "next/image"
import Button from "./Button"

interface PricePlanProps {
  data: {
    id: number,
    title: string,
    price: string
  }[],
  features: {
    id: number,
    title: string,
    packages: string[]
  }[]
}

const PricePlanCard = ({ data, features }: PricePlanProps) => {
  return (
    <div className="flex gap-6 mt-10 flex-wrap">
      {
        data.map(({ id, title, price }) => (
          <div key={id} className="lg:max-w-[360px] w-full bg-black relative py-12">
            <Image src={priceShape} alt="priceShape" className="absolute top-2 right-0" />
            <span className="gradient-bg-two py-3 px-6 rounded-e-4xl font-bold capitalize">
              {title}
            </span>
            <div className="px-6 mt-8">
              <h2 className="text-5xl font-bold">${price} <sub className="text-lg font-medium">/ month</sub></h2>
              <ul className="bg-bg-two py-6 px-4 mt-7.5 flex flex-col gap-3 mb-8">
                {
                  features.map((feature) => (
                    <li
                      key={feature.id}
                      className={`${feature.packages.includes(title) ? 'text-white' : 'text-text-four line-through'}`}
                    >
                      {feature.title}
                    </li>
                  ))
                }
              </ul>
              <Button text="Get Started" />
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default PricePlanCard