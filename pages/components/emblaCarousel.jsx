import React, { useEffect } from "react";

import useEmblaCarousel from "embla-carousel-react";

import Autoplay from "embla-carousel-autoplay";

import styles from "./compStyles/emblacarousel.module.css";
import Link from "next/link";
import { Image } from "@chakra-ui/react";

const EmblaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      speed: 10,
    },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  useEffect(() => {
    if (emblaApi) {
      // Embla API is ready
    }
  }, [emblaApi]);

  return (
    <div className={styles.embla} ref={emblaRef}>
      <div className={`${styles.embla__container}`}>
        <div className={`${styles.embla__slide} `}>
          <div className={`${styles.embla__slide_container} container flex`}>
            
            <div className={styles.image}>
              <Image
                src="images/tv_stand2.jpg"
                width={400}
                height={600}
                alt="flower vase"
              />
            </div>
          </div>
        </div>

        <div className={`${styles.embla__slide2} `}>
          <div className={`${styles.embla__slide_container} container flex`}>
            
            <div className={styles.image}>
              <Image
                src="/images/tv_stand.jpg"
                width={400}
                height={500}
                alt="flower vase"
              />
            </div>
          </div>
        </div>

        <div className={`${styles.embla__slide2} `}>
          <div className={`${styles.embla__slide_container} container flex`}>
            
            <div className={styles.image}>
              <Image
                src="/images/stools.jpg"
                width={400}
                height={500}
                alt="flower vase"
              />
            </div>
          </div>
        </div>

        <div className={`${styles.embla__slide2} `}>
          <div className={`${styles.embla__slide_container} container flex`}>
            
            <div className={styles.image}>
              <Image
                src="/images/stand_set.jpg"
                width={400}
                height={500}
                alt="flower vase"
              />
            </div>
          </div>
        </div>

        <div className={`${styles.embla__slide2} `}>
          <div className={`${styles.embla__slide_container} container flex`}>
            
            <div className={styles.image}>
              <Image
                src="/images/pantry.jpg"
                width={400}
                height={500}
                alt="flower vase"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default EmblaCarousel;
