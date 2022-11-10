import React, { useEffect } from "react";

import useEmblaCarousel from "embla-carousel-react";

import Autoplay from "embla-carousel-autoplay";

import styles from "./compStyles/fromclients.module.css";
import { Image } from "@chakra-ui/react";

const Fromclients = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      speed: 0.2,
    },
    [Autoplay({ delay: 1000, stopOnInteraction: false })]
  );

  useEffect(() => {
    if (emblaApi) {
      // Embla API is ready
    }
  }, [emblaApi]);

  return (
    <div className={`${styles.embla} container`} ref={emblaRef}>
      <div className={`${styles.embla__container}`}>
        <div className={`${styles.embla__slide} `}>
          <Image
            src="/images/stand_set.jpg"
            width={"100%"}
            height={200}
            alt="flower vase"
            objectFit={"fill"}
          />
        </div>

        <div className={`${styles.embla__slide} `}>
            <Image
              src="/images/cieling.jpg"
              width={'100%'}
              height={200}
              alt="flower vase"
            />
          
        </div>

        <div className={`${styles.embla__slide} `}>
         
            <Image
              src="/images/gas_cupbaord.jpg"
              width={"100%"}
              height={200}
              alt="gas cupbaord"
            />
          
        </div>

        <div className={`${styles.embla__slide} `}>
          
            <Image
              src="/images/pantry.jpg"
              width={"100%"}
              height={200}
              alt="flower vase"
            />
          
        </div>
      </div>
    </div>
  );
};

export default Fromclients;
