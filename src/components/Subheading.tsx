import { Heading } from '@chakra-ui/react';
import React from 'react'

type Props = {
    text: string;
}

function Subheading({text}: Props) {
  return (
    <Heading py={5}>{text}</Heading>
  )
}

export default Subheading