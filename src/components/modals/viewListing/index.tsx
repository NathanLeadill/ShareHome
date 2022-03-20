import { Avatar, Box, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, Image, Grid, GridItem, List, ListItem, UnorderedList } from '@chakra-ui/react'
import useTranslation from 'next-translate/useTranslation';
import React from 'react'
import { BiMap } from 'react-icons/bi';

export interface ModalProps {
    isOpen: boolean;
    onClose(): void;
}

const ViewListingModal = ({ isOpen, onClose }: ModalProps) => {
    const { t } = useTranslation('common')
    return (
        <Modal isOpen={isOpen} onClose={onClose} >
            <ModalOverlay />
            <ModalContent maxW="60rem">
                <ModalHeader>{t('info')}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Box>
                        <Box w="100%" h="4rem" display='flex' alignItems='baseline'>
                            <Avatar
                                m="2"
                                src='https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=0hb44OrI'
                            />
                            <Text fontStyle="italic" fontSize="md">{t('hosted')}</Text>, <Text ml="2" fontWeight="extrabold" fontSize="xl">Marta</Text>
                        </Box>
                        <Box display="flex" alignItems="start">
                            <Box w="60%">
                                <Image src="https://bit.ly/2Z4KKcF" />
                                <Grid templateColumns="repeat(4,1fr)">
                                    {
                                        [1, 2, 3, 4].map((el) => (
                                            <GridItem>
                                                <Image src="https://bit.ly/2Z4KKcF" />
                                            </GridItem>
                                        ))
                                    }
                                </Grid>
                                <Box p="4" display="flex" alignItems="center">
                                    <BiMap />   
                                    <Text fontSize="md" ml="2">Kyiv</Text>
                                </Box>
                            </Box>
                            <Box w="40%">
                                <Text textAlign="center" fontSize="2xl">Title</Text>
                                <Text textAlign="center" fontSize="xs">
                                    LOREAM IPSUM
                                </Text>
                                <UnorderedList alignSelf="end" ml="2rem" >
                                    <ListItem>Room for a dog</ListItem>
                                </UnorderedList>
                            </Box>
                        </Box>

                    </Box>
                </ModalBody>

                <ModalFooter>
                    {/* <Button colorScheme='blue' mr={3} onClick={onClose}>
                        Close
                    </Button> */}
                    <Button variant='ghost'>{t('apply')}</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default ViewListingModal