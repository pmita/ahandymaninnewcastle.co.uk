// NEXT
import Image from "next/image"
// COMPONENTS
import { DescriptionCard } from "@/components/description-card"
// CONFIG
import { sellingPoints } from "@/config/selling-points"


export const FeaturesSection = () => {
  return (
    <section className="min-h-[100dvh] flex flex-col items-center justify-center">
      <h2 className="text-2xl m-12 font-poppins font-bold text-secondary text-center">Our Expertise</h2>
      <div className="m-8 grid grid-cols-1 lg:grid-cols-[repeat(3,1fr)] grid-rows-[repeat(2,320px)] gap-4">
        {sellingPoints.map(({ id, title, description, src, alt}) => (
          <DescriptionCard
            key={id}
            title={title}
            description={description}
            headerIcon={(
              <Image 
                src={src}
                alt={alt}
                width={50}
                height={50}
                loading="eager"
              />
            )}
          />
        ))}
      </div>
  </section>
  )
}