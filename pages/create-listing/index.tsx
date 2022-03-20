import { Box, Flex, Select, Stack, Text } from '@chakra-ui/react'
import useTranslation from 'next-translate/useTranslation'
import React from 'react'

const CreateListing: React.FC = () => {
    const { t, lang } = useTranslation('common')
    return (
        <Stack alignItems={"center"}>
            <Text marginTop="5" fontSize="3xl">{t('createListing')}</Text>
            <Box
                bg="black"
                h="10rem"
                w="30%"
                borderRadius="1rem"
                margin="0 auto"

            >
                <Box
                    h="3rem"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Text fontSize="2xl" color="white" m="0" textAlign="center">{t('chooseCategory')}</Text>
                </Box>
                <Box
                    bg="blue"
                    height="5rem"
                >
                    <Stack justifyContent="center">
                        <Text fontSize="md" textAlign="center" m="1rem 0 0 0">{t('selectOption')}</Text>
                        <Select placeholder='Select option' w="30%">
                            <option value='option1'>{t('offerHouse')}</option>
                            <option value='option2'>{t('offerFood')}</option>
                            <option value='option3'>{t('offerPet')}</option>
                        </Select>
                    </Stack>
                </Box>
            </Box>
        </Stack>
    )
}

export default CreateListing