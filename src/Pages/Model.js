import {
    Box,
	Button,
	Heading,
	HStack,
	Image,
	Text,
	VStack,
	useDisclosure
} from '@chakra-ui/react';
import Guide from '../Images/guide.png';
import { MDBIcon } from 'mdbreact';
import { Link as RouterLink } from 'react-router-dom';
import { useFileUpload } from 'use-file-upload'

export function Model() {

    const [file, selectFile] = useFileUpload()

    const { getDisclosureProps, getButtonProps } = useDisclosure()
    const buttonProps = getButtonProps()
    const disclosureProps = getDisclosureProps()

	return (
		<>

            <VStack paddingY={80}>

                <Box bg={'white'} paddingY={25} borderRadius={100} marginBottom={'80px'} alignContent={'center'}>

                    <VStack alignContent={'center'} paddingX={180} paddingY={25} borderRadius={100} spacing={50}>
                    
                        <RouterLink to={'/'}>
                            <MDBIcon icon="home" className={'fa fa-house fa-4x'} py={200} px={200}/>
                        </RouterLink>
                        <Heading align={'center'} fontWeight={'bold'} fontSize={70} color={'#1A54D7'}>HAND-S Model</Heading>

                    </VStack>

                </Box>

                <Image src={Guide} alt='Four Loops' objectFit='cover' maxW={'739px'} maxH={'217px'} />

                <Box paddingTop={'100px'} paddingBottom={'70px'}>
                    <Box bg={'white'} px={50} paddingY={50} borderRadius={100}>
                        <Text textAlign={'center'} maxW={'550px'} fontSize={'22px'}>
                        Please upload a .png file in a format such as the one shown above (four handwritten loops). The dimensions of the image should be 255px by 906px.
                        </Text>
                    </Box>
                </Box>

                <HStack spacing={75} paddingBottom={80}>

                    <Box bg={'#407bfe'} px={110} paddingY={25} borderRadius={100} fontSize={'25px'} color={'white'}>
                        <Button type={'submit'} onClick={selectFile}>
                            Upload
                        </Button>
                    </Box>

                    <Box bg={'#407bfe'} px={120} paddingY={25} borderRadius={100} fontSize={'25px'} color={'white'}>
                        <Button type={'submit'} {...buttonProps}>
                            Test
                        </Button>

                    </Box>

                </HStack>
                {
                    file ? (
                        <div>
                            <span> File Name: {file.name} </span>
                        </div>
                    ) : (
                        <span>No file selected</span>
                    )
                }

                <Box paddingTop={'100px'} paddingBottom={'70px'}>
                    <Box bg={'#1A54D7'} px={50} paddingY={50} borderRadius={100} {...disclosureProps}>
                        <Text textAlign={'center'} maxW={'550px'} fontSize={'22px'} color={'white'}>
                        Based on your handwriting, you may not have schizophrenia or bipolar disorder.
                        </Text>
                    </Box>
                </Box>

            </VStack>
		</>
	);
}