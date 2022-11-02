import React, { useEffect } from "react";

import useEmblaCarousel from "embla-carousel-react";

import Autoplay from "embla-carousel-autoplay";

import styles from "./compStyles/emblacarousel.module.css";
import Link from "next/link";
import { Box, Container, Flex, Image } from "@chakra-ui/react";

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
    <Box
      overflow={"hidden"}
      ref={emblaRef}
      height={"fit-content"}
      p={0}
      margin={0}
      mt={"4rem"}
      maxW={1200}
      display={"flex"}
    >
      <Flex>
        <div className={`${styles.embla__slide} `}>
          <Image
            src="images/tv_stand2.jpg"
            width={"100%"}
            height={600}
            alt="flower vase"
            objectFit={"contain"}
          />
        </div>

        <div className={`${styles.embla__slide} `}>
          <Image
            src="/images/tv_stand.jpg"
            width={"100%"}
            height={600}
            alt="flower vase"
            objectFit={"contain"}
          />
        </div>

        <div className={`${styles.embla__slide} `}>
          <Image
            src="/images/stand_set.jpg"
            width={"100%"}
            height={600}
            alt="flower vase"
            objectFit={"contain"}
          />
        </div>

        <div className={`${styles.embla__slide} `}>
          <Image
            src="/images/pantry.jpg"
            width={"100%"}
            height={600}
            alt="flower vase"
            objectFit={"contain"}
          />
        </div>
      </Flex>
    </Box>
  );
};

export default EmblaCarousel;
