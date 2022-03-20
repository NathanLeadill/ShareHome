import { Box, Button, Flex, Grid, GridItem, Input, Select, Stack, useColorModeValue } from '@chakra-ui/react'
import useTranslation from 'next-translate/useTranslation'
import React, { useState } from 'react'
import {
    AsyncCreatableSelect,
    AsyncSelect,
    CreatableSelect,
    Select as MultiSelect,
} from "chakra-react-select";
import HouseListing from '@components/cards/houseListing';

const options = [
    {
        label: 'Pets',
        options: [
            {
                value: 'DOG',
                label: 'Dog'
            },
            {
                value: 'CAT',
                label: 'Cat',
            },
            {
                value: 'OTHER',
                label: 'Other'
            }
        ]
    },
    {
        label: 'Disabilities',
        options: [
            {
                value: 'PHYSICAL',
                label: 'Physical / Movement'
            },
            {
                value: 'BLIND',
                label: 'Blind'
            },
            {
                value: 'DEAF',
                label: 'Deaf'
            }
        ]
    }
]

export interface ListingType {
    id: number;
    title: string;
    coverPhoto: string;
    description: string;
    host: string;
    space: number; 
    rooms: number;
    town: string;
}

const resultss = [
    {
        id: 1,
        title: '2 spare double rooms',
        coverPhoto: 'https://bit.ly/2Z4KKcF',
        town: 'Kyiv',
        host: 'Marta',
        space: 4,
        rooms: 2,
        description: 'Hi, i have just 2 rooms with double beds available for two people to sleep in.'
    }
]

const SearchPage: React.FC = () => {
    const { t } = useTranslation('common')
    const [results, setResults] = useState(resultss)
    return (
        <Flex flexDir="column" width="80%" m="2rem auto">
            <Box
                bg={useColorModeValue('gray.100', 'gray.900')}
                borderRadius="1rem"
                m="1rem 0"
                p="1rem"
            >
                <Stack>
                    {/* SEARCH AREA */}
                    <Grid templateColumns="2fr 1fr 1fr 1fr" >
                        <GridItem m="4">
                            <Input
                                placeholder={t('townSearch')}
                            />
                        </GridItem>
                        <GridItem m="4">
                            <Select placeholder={t('noPeople')}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                            </Select>
                        </GridItem>
                        <GridItem m="4">
                            <MultiSelect placeholder="Other" options={options} />
                        </GridItem>
                        <GridItem m="4">
                            <Button w="100%">
                                {t('search')}
                            </Button>
                        </GridItem>
                    </Grid>
                    {/* RESULTS AREA */}
                        {
                            results.length > 0 && (
                                <Grid templateColumns="repeat(5, 1fr)" p="1rem">
                                    {
                                        results.map((result: ListingType) => (
                                            <HouseListing {...result} />
                                        ))
                                    }
                                </Grid>
                            )
                        }
                </Stack>
            </Box>
        </Flex>
    )
}

export default SearchPage