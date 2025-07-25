"use client";

export default function TracksSection() {
  return (
    <div id="challenge" className="flex flex-col items-center justify-center gap-0 py-20 md:py-32">
      <div className="container px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold">3 Tracks</h1>
        <div className="flex flex-col md:flex-row justify-between w-full gap-4 pt-8 text-left">
            <div className="flex flex-col gap-4 bg-white rounded-lg">
                <h2 className="text-2xl font-bold">Consumer</h2>
                <p>
                    Create a digital tool to support consumers in shifting toward sustainable/plant-based diets: automated recipe, recommendations, gamification of the transition, and more.
                </p>
                <p>
                    Combine language models, recommendation algorithms, open data, and a user experience–driven strategy
                </p>
            </div>
            <div className="flex flex-col gap-4 bg-white rounded-lg">
                <h2 className="text-2xl font-bold">Corporation</h2>
                <p>
                    Develop a strategic roadmap for a major food company, to help its transition toward more plant-based products. Involves analyzing consumption data, plant-based ingredient substitution, innovation partnerships, CSR repositioning etc.
                </p>
                <p>
                    Produce a realistic and quantified action plan, integrating relevant AI tools, for a transition towards more sustainability
                </p>
            </div>
            <div className="flex flex-col gap-4 bg-white rounded-lg">
                <h2 className="text-2xl font-bold">Product</h2>
                <p>
                    Design an innovative food product (algae-based, plant-based or cultivated meat) using AI to optimize ingredients, simulate textures, enhance nutritional value.
                </p>
                <p>
                    Leverage ingredient databases, formulation models, and predictive algorithms to design a viable and distinctive product
                </p>
            </div>
        </div>
      </div>
    </div>
  );
} 