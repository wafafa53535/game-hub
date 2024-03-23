import React from "react";
import bulleye from "../assets/bulleye.webp";
import thumbsup from "../assets/thumbsup.webp";
import meh from "../assets/meh.webp";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;
  const emojimap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbsup, alt: "recommended", boxSize: "25px" },
    5: { src: bulleye, alt: "exceptional", boxSize: "35px" },
  };
  return <Image {...emojimap[rating]} marginTop={1} />;
};

export default Emoji;
