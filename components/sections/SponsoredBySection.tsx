"use client";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import Image from "next/image";

export default function SponsoredBySection({ setApi }: { setApi: (api: CarouselApi) => void }) {
  return (
    <section className="meow flex flex-col items-center justify-center gap-12">
      <div className="container flex items-center justify-center px-4 md:px-8 xl:px-12">
        <div className="flex flex-col gap-8 text-center max-w-4xl items-center justify-center">
          <p className="text-2xl font-bold text-[#000091]">Sponsored by</p>
          <Carousel setApi={setApi}>
            <CarouselContent>
              <CarouselItem className="flex items-center justify-center">
                <Image src="/JGI_MASTER_COUNTRY_LOGO_WHITE_7_France.svg" alt="Jane Goodall Institute France" width={600} height={600} className="invert" />
              </CarouselItem>
              <CarouselItem className="flex items-center justify-center">
                <Image src="/sciencepo.png" alt="Place" width={400} height={400} />
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
} 