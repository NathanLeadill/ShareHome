import { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Center, useColorModeValue, Icon, Stack, Text } from '@chakra-ui/react';
import { AiFillFileAdd } from 'react-icons/ai';
import useTranslation from 'next-translate/useTranslation';

const AddPhotos: React.FC = ({ onFileAccepted }) => {
    const { t } = useTranslation('common')
    const [uPhotos, setUPhotos] = useState([])
    const onDrop = useCallback((acceptedFiles) => {
        console.log('accept', acceptedFiles)
        setUPhotos(acceptedFiles)
        // onFileAccepted(acceptedFiles[0]);
    }, [onFileAccepted]);

    useEffect(() => {
        console.log(uPhotos)
    }, [uPhotos])


    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop, maxFiles: 10, multiple: true,
    });

    const dropText = isDragActive ? 'Drop the files here ...' : t('photoMessage');

    const activeBg = useColorModeValue('gray.100', 'gray.600');
    const borderColor = useColorModeValue(
        isDragActive ? 'teal.300' : 'gray.300',
        isDragActive ? 'teal.500' : 'gray.500',
    );

    return (
        <Stack>
            <Center
                p={10}
                cursor="pointer"
                bg={isDragActive ? activeBg : 'transparent'}
                _hover={{ bg: activeBg }}
                transition="background-color 0.2s ease"
                borderRadius={4}
                border="3px dashed"
                borderColor={borderColor}
                {...getRootProps()}
            >
                <input {...getInputProps()} />
                <Icon as={AiFillFileAdd} mr={2} />
                <p>{dropText}</p>
            </Center>
            {
                uPhotos.length > 0 && (
                    <>
                        <Text fontSize="2xl">Uploaded Files</Text>
                        {
                            uPhotos.map(({ path }) => (
                                <Text fontSize="md">{path}</Text>
                            ))
                        }
                    </>
                )
            }

        </Stack>
    );
}

export default AddPhotos