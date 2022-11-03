import React, { useEffect } from "react";

import useEmblaCarousel from "embla-carousel-react";

import Autoplay from "embla-carousel-autoplay";

import styles from "./compStyles/emblacarousel.module.css";
import { Box, Flex, Image, useMediaQuery } from "@chakra-ui/react";

const EmblaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      speed: 40,
    },
    [Autoplay({ delay: 7000, stopOnInteraction: false })]
  );

  useEffect(() => {
    if (emblaApi) {
      // Embla API is ready
    }
  }, [emblaApi]);

  const [isLargerThan400] = useMediaQuery("(min-width: 400px)");

  return (
    <Box
      overflow={"hidden"}
      ref={emblaRef}
      height={"fit-content"}
      p={0}
      margin={0}
      mt={"3rem"}
      maxW={1200}
      w={isLargerThan400 ? '95%' : "90%"}
      m="auto"
      display={"flex"}
    >
      <Flex>
        <div className={`${styles.embla__slide} `}>
          <Image
            src="images/tv_stand2.jpg"
            width={"100%"}
            height={600}
            alt="flower vase"
            objectFit={"fill"}
          />
        </div>

        <div className={`${styles.embla__slide} `}>
          <Image
            src="/images/tv_stand.jpg"
            width={"100%"}
            height={600}
            alt="flower vase"
            objectFit={"fill"}
          />
        </div>

        <div className={`${styles.embla__slide} `}>
          <Image
            src="/images/stand_set.jpg"
            width={"100%"}
            height={600}
            alt="flower vase"
            objectFit={"fill"}
          />
        </div>

        <div className={`${styles.embla__slide} `}>
          <Image
            src="/images/pantry.jpg"
            width={"100%"}
            height={600}
            alt="flower vase"
            objectFit={"fill"}
          />
        </div>
      </Flex>
    </Box>
  );
};

export default EmblaCarousel;
