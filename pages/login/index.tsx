import { useReducer, useState } from "react";
import {
    Flex,
    Heading,
    Input,
    Button,
    InputGroup,
    Stack,
    InputLeftElement,
    chakra,
    Box,
    Link,
    Avatar,
    FormControl,
    FormHelperText,
    InputRightElement,
    useColorModeValue
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import useTranslation from "next-translate/useTranslation";
import { login, setCredentials } from "@redux/actions";
import { useLoginMutation } from "@redux/services/authApi";
import { LoginFormState } from "@redux/services/types";
import { useAppDispatch, useAppSelector } from "@redux/reducers";
import { useLocalStorage } from "react-use";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

type FormActionPayload = {
    payload: {
        key: string;
        value: string;
    }
    type: string;
}

const initial: LoginFormState = {
    email: '',
    password: '',
    showPassword: false,
}

const reducer = (state: LoginFormState, action: FormActionPayload): LoginFormState => {
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

const Login: React.FC = () => {
    const { t, lang } = useTranslation('common')
    const reduxDispatch = useAppDispatch()
    const [state, dispatch] = useReducer(reducer, initial);
    const [showPassword, setShowPassword] = useState(false)
    const [login, { isLoading }] = useLoginMutation();
    const [value, setValue, remove] = useLocalStorage('token');


    const states = useAppSelector(state => state)
    const handleShowClick = () => setShowPassword(!showPassword)

    const handleLogin = async () => {
        try {
            const { data } = await login(state);
            if (data) {
                reduxDispatch(setCredentials(data));
                setValue(data.token)
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <Flex
            flexDirection="column"
            width="100wh"
            height="100vh"
            justifyContent="center"
            alignItems="center"
        >
            <Stack
                flexDir="column"
                mb="2"
                justifyContent="center"
                alignItems="center"
            >
                <Avatar bg="teal.500" />
                <Heading color="teal.400">{t('welcome')}</Heading>
                <pre>
                    {
                        JSON.stringify(states)
                    }
                </pre>
                <Box minW={{ base: "90%", md: "468px" }}>
                    <form>
                        <Stack
                            spacing={8}
                            p="2rem"
                            bg={useColorModeValue('gray.100', 'gray.900')}
                            boxShadow="md"
                            borderRadius="2rem"
                            margin="2rem 0"
                        >
                            <FormControl>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                        children={<CFaUserAlt color="gray.300" />}
                                    />
                                    <Input type="email" placeholder={t('email')} />
                                </InputGroup>
                            </FormControl>
                            <FormControl>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                        color="gray.300"
                                        children={<CFaLock color="gray.300" />}
                                    />
                                    <Input
                                        type={showPassword ? "text" : "password"}
                                        placeholder={t('password')}
                                    />
                                    <InputRightElement width="4.5rem">
                                        <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                                            {showPassword ? t('hide') : t('show')}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                                <FormHelperText textAlign="right">
                                    <Link>{t('forgotPassword')}</Link>
                                </FormHelperText>
                            </FormControl>
                            <Button
                                borderRadius={0}
                                variant="solid"
                                colorScheme="teal"
                                width="full"
                                onClick={handleLogin}
                            >
                                {t('login')}
                            </Button>
                        </Stack>
                    </form>
                </Box>
            </Stack>
            <Box>
                {t('newHere')}?{" "}
                <Link color="teal.500" href="register">
                    {t('signUp')}
                </Link>
            </Box>
        </Flex>
    );
};

export default Login;
