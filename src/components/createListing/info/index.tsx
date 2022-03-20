import { Input, Stack, Textarea } from '@chakra-ui/react'
import useTranslation from 'next-translate/useTranslation'
import React from 'react'

const AddInfo: React.FC = () => {
    const { t } = useTranslation('common')
    const type = "HOUSE"
    return (
        <Stack>
            <Input placeholder={t('title')} />
            {
                type === "HOUSE" && (
                    <Input placeholder={t('numPeople')} />
                )
            }
            <Textarea placeholder={t('descriptionExplaination')} />
        </Stack>
    )
}
export default AddInfo