import { Box, Text } from '@chakra-ui/react'
import { useAppSelector } from '@redux/reducers'
import useTranslation from 'next-translate/useTranslation'
import { useSelector } from 'react-redux'

export default function Test() {
    const { t, lang } = useTranslation('common')
    const example = t('welcome')
    return (
        <Box>
            <Text fontSize="6xl" textAlign="center">{example}</Text>
            <Text fontSize="1xl" textAlign="center" width="45%" margin="0 auto">{t('welcomeMessage')}</Text>
        </Box>
    )
}