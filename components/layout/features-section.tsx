// COMPONENTS
import { DescriptionCard } from "@/components/description-card"
// CONFIG
import { sellingPoints } from "@/config/selling-points"


export const FeaturesSection = () => {
  return (
    <section className="min-h-[100dvh] flex flex-col items-center justify-center">
      <h2 className="text-5xl mb-12 font-poppins font-extrabold text-secondary sm:text-7xl text-center">Our Expertise</h2>
      <div className="m-8 grid grid-cols-1 lg:grid-cols-[repeat(3,1fr)] grid-rows-[repeat(2,320px)] gap-4">
        {sellingPoints.map((point, index) => (
          <DescriptionCard
            key={index}
            title={point.title}
            description={point.description}
            headerIcon={(
              <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px">
                <path d={point.svgPath} />
              </svg>
            )}
          />
        ))}
      </div>
  </section>
  )
}