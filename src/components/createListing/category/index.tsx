import { Grid, GridItem, Select, Stack, Text } from '@chakra-ui/react'
import useTranslation from 'next-translate/useTranslation'
import React, { useState } from 'react'

const Category: React.FC = ({ state, handleChange}) => {
    const [option, setOption] = useState('PET')
    const { t, lang } = useTranslation('common')
    

    return (
        <Stack justifyContent="center">
            <Grid templateColumns='repeat(2, 1fr)' gap={6}>
                <GridItem w='100%' p="1rem">
                    <Text fontSize="md" m="1rem 0 1rem 0">{t('selectOption')}</Text>
                    <Select placeholder='Select option' w="30%" value={option}>
                        <option value='HOUSE'>{t('offerHouse')}</option>
                        <option value='FOOD'>{t('offerFood')}</option>
                        <option value='PET'>{t('offerPet')}</option>
                    </Select>
                </GridItem>
                <GridItem w='100%' h='10' p="1rem">
                    
                </GridItem>
            </Grid>

        </Stack>
    )
}

export default Category