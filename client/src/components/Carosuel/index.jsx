import React from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Container,
} from "@chakra-ui/react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Slider from "react-slick";


const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function CaptionCarousel() {
  const [slider, setSlider] = React.useState(<Slider />);

  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  const cards = [
    {
      image:
        "https://n11scdn.akamaized.net/a1/1180_440/22/12/01/64/02/47/53/37/00/13/01/21/51027047743945788762.jpg",
    },
    {
      image:
        "https://n11scdn.akamaized.net/a1/1180_440/22/12/01/49/89/23/31/46/82/09/64/03/67423030917244170311.jpg",
    },
    {
      image:
        "https://n11scdn.akamaized.net/a1/1180_440/22/12/02/86/71/52/55/32/08/48/37/05/16827310559406474333.jpg",
    },
    {
      image:
        "https://n11scdn.akamaized.net/a1/1180_440/22/12/01/87/53/24/93/03/01/86/69/12/31822571266467282870.jpg",
    },
    {
      image:
        "https://n11scdn.akamaized.net/a1/1180_440/22/12/01/80/39/71/56/96/73/57/88/49/55020258976093326540.jpg",
    },
    {
      image:
        "https://n11scdn.akamaized.net/a1/1180_440/22/12/01/46/42/38/54/01/50/96/46/72/51568320074684478466.jpg",
    },
  ];

  return (
    <Box
      position={"relative"}
      height={"600px"}
      width={"full"}
      overflow={"hidden"}
    >
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />

      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt size="40px" />
      </IconButton>

      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt size="40px" />
      </IconButton>

      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            objectFit="cover"
            backgroundImage={`url(${card.image})`}
          >
            <Container size="container.lg" height="600px" position="relative">
              <Stack
                spacing={6}
                w={"full"}
                maxW={"lg"}
                position="absolute"
                top="50%"
                transform="translate(0, -50%)"
              ></Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
