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
    useColorModeValue,
    Select
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import useTranslation from "next-translate/useTranslation";
import { RegisterFormState } from "@redux/services/types";
import { useRegisterMutation } from "@redux/services/authApi";
import { useAppDispatch } from "@redux/reducers";
import { setCredentials } from "@redux/actions";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

type FormActionPayload = {
    payload: {
        key: string;
        value: string;
    }
    type: string;
}

const initial: RegisterFormState = {
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
    showPassword: false,
    accountType: 'REFUGEE'
}

const reducer = (state: RegisterFormState, action: FormActionPayload): RegisterFormState => {
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

const Register: React.FC = () => {
    const { t, lang } = useTranslation('common')
    const [register, { isLoading }] = useRegisterMutation();
    const reduxDispatch = useAppDispatch()
    const [state, dispatch] = useReducer(reducer, initial);
    const [showPassword, setShowPassword] = useState(false)

    const handleShowClick = () => setShowPassword(!showPassword)

    const handleRegister = async () => {
        try {
            const { data } = await register(state);
            if (data) {
                reduxDispatch(setCredentials(data));
                // setValue(data.token)
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
                                    <Input type="text" placeholder={t('name')} />
                                </InputGroup>
                            </FormControl>
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
                            </FormControl>
                            <FormControl>
                                <Select placeholder={t('selectAccountType')}>
                                    <option value='REFUGEE'>{t('refugee')}</option>
                                    <option value='HOST'>{t('host')}</option>
                                </Select>
                            </FormControl>
                            <Button
                                borderRadius={0}
                                onClick={handleRegister}
                                variant="solid"
                                colorScheme="teal"
                                width="full"
                            >
                                {t('signUp')}
                            </Button>
                        </Stack>
                    </form>
                </Box>
            </Stack>
            <Box>
                {t('exist')}?{" "}
                <Link color="teal.500" href="login">
                    {t('login')}
                </Link>
            </Box>
        </Flex>
    );
};

export default Register;
