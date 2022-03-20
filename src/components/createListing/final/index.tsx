import { Checkbox, Stack, Textarea } from '@chakra-ui/react'
import useTranslation from 'next-translate/useTranslation'
import React from 'react'

const Final: React.FC = () => {
    const { t } = useTranslation('common')
    return (
        <Stack>
            <Textarea placeholder={t('extraInfo')} />
            <Checkbox>{t('agreeTerms')}</Checkbox>
        </Stack>
    )
}

export default Final