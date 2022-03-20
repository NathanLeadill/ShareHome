import { StarIcon } from '@chakra-ui/icons'
import { Badge, Box, HStack, Text } from '@chakra-ui/react'
import { ListingType } from 'pages/search'
import { BiMap } from 'react-icons/bi'
import React, { useState } from 'react'
import ViewListingModal from '@components/modals/viewListing'

const HouseListing = (props: ListingType) => {
    console.log(props);
    const [modalOpen, setModalOpen] = useState(false)
    const [modalId, setModalId] = useState(0)
    const property = {
        imageUrl: 'https://bit.ly/2Z4KKcF',
        imageAlt: 'Rear view of modern home with pool',
        beds: 3,
        baths: 2,
        title: 'Modern home in city center in the heart of historic Los Angeles',
        formattedPrice: '$1,900.00',
        reviewCount: 34,
        // rating: props
    }

    const onClose = () => {
        setModalOpen(false)
    }

    const showModal = (id: number) => {
        setModalId(id)
        setModalOpen(true)
    }

    return (
        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' onClick={() => showModal(props.id)}>
            <img src={property.imageUrl} alt={property.imageAlt} />
            <Box p='6'>
                <Box display='flex' alignItems='baseline'>
                    <Badge borderRadius='full' px='2' colorScheme='teal'>
                        New
                    </Badge>
                    <Box
                        color='gray.500'
                        fontWeight='semibold'
                        letterSpacing='wide'
                        fontSize='xs'
                        textTransform='uppercase'
                        ml='2'
                    >
                        {props.rooms} rooms
                    </Box>
                </Box>

                <Box
                    mt='1'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'
                    isTruncated
                >
                    {props.title}
                </Box>

                <Box>
                    <HStack>
                        <BiMap />
                        <Text>{props.town}</Text>
                    </HStack>
                </Box>

                <Box display='flex' mt='2' alignItems='center'>
                    <Text fontSize="x-small">
                        {props.description}
                    </Text>
                </Box>
            </Box>
            {/* MODAL */}
            <ViewListingModal isOpen={modalOpen} onClose={onClose} />
        </Box>
    )
}

export default HouseListing