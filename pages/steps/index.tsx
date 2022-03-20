import { Box, Button, Flex, useColorModeValue, Text } from '@chakra-ui/react';
import AddPhotos from '@components/createListing/addPhotos';
import Category from '@components/createListing/category';
import CreateHouse from '@components/createListing/createHouse';
import Final from '@components/createListing/final';
import AddInfo from '@components/createListing/info';
import { Step, Steps, useSteps } from 'chakra-ui-steps';
import useTranslation from 'next-translate/useTranslation';
import { useReducer } from 'react';

const content = (
    <Flex py={4}>
        <Text fontSize="xl">
            Welcome to sharehome, we hope you offer some support to others
        </Text>
        {/* <LoremIpsum p={1} /> */}
    </Flex>
);

type StepsState = {
    category: string;
}

type FormActionPayload = {
    payload: {
        key: string;
        value: string | boolean;
    }
    type: string;
}

const initial: StepsState = {
    category: '',
}

const reducer = (state: StepsState, action: FormActionPayload): StepsState => {
    switch (action.type) {
        case 'UPDATE':
            return {
                ...state,
                [action.payload.key]: action.payload.value,
            }
            break
        default:
            return state
            break
    }
}

const StepsExample = () => {
    const { t, lang } = useTranslation('common')
    const [state, dispatch] = useReducer(reducer, initial);

    const { nextStep, prevStep, setStep, reset, activeStep } = useSteps({
        initialStep: 0,
    });
    const steps = [
        { label: `${t('step')} 1`, content: <Category /> },
        { label: `${t('step')} 2`, content: <AddInfo /> },
        { label: `${t('step')} 3`, content: <AddPhotos /> },
        { label: `${t('step')} 4`, content: <Final /> },
    ];
    
    return (
        <Flex flexDir="column" width="80%" m="2rem auto">
            <Steps activeStep={activeStep}>
                {steps.map(({ label, content }) => (
                    <Step label={label} key={label}>
                        <Box
                            bg={useColorModeValue('gray.100', 'gray.900')}
                            borderRadius="1rem"
                            m="1rem 0"
                            p="1rem"
                        >
                            {content}

                        </Box>
                    </Step>
                ))}
            </Steps>
            {activeStep === steps.length ? (
                <Flex p={4}>
                    <Button mx="auto" size="sm" onClick={reset}>
                        {t('reset')}
                    </Button>
                </Flex>
            ) : (
                <Flex width="100%" justify="flex-end">
                    <Button
                        isDisabled={activeStep === 0}
                        mr={4}
                        onClick={prevStep}
                        size="sm"
                        variant="ghost"
                    >
                        {t('prev')}
                    </Button>
                    <Button size="sm" onClick={nextStep}>
                        {activeStep === steps.length - 1 ? t('finish') : t('next')}
                    </Button>
                </Flex>
            )}
        </Flex>
    );
};

export default StepsExample