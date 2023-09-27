import {
    Box,
	Button,
    Center,
    FormControl,
	Heading,
	HStack,
	Image,
    Input,
	Text,
	VStack,
	useDisclosure
} from '@chakra-ui/react';
import Guide from '../Images/guide.png';
import { MDBIcon } from 'mdbreact';
import { Link as RouterLink } from 'react-router-dom';

export function Model() {

	return (
		<>

            <VStack paddingY={80}>

                <Box bg={'white'} paddingY={25} borderRadius={100} marginBottom={'80px'} alignContent={'center'}>

                    <VStack alignContent={'center'} paddingX={250} paddingY={25} borderRadius={100} spacing={50}>
                    
                        <RouterLink to={'/'}>
                            <MDBIcon icon="home" className={'fa fa-house fa-4x'} py={200} px={200}/>
                        </RouterLink>
                        <Heading align={'center'} fontWeight={'bold'} fontSize={70} color={'#1A54D7'}>HAND-S Model</Heading>

                    </VStack>

                </Box>

                <iframe
                    src="https://layai-loop-classification.hf.space"
                    frameborder="0"
                    width="850"
                    height="450"
                ></iframe>

                <Box paddingTop={'100px'} paddingBottom={'100px'}>
                    <Box bg={'white'} px={100} paddingY={50} borderRadius={100}>
                        <Text textAlign={'center'} maxW={'600px'} fontSize={'22px'}>
                        Please upload a .png file in a format such as the one shown below (four handwritten loops). A result of 1 means that the model predicts that the handwriting sample suggests bipolar disorder or schizophrenia.
                        </Text>
                    </Box>
                </Box>

                <Image src={Guide} alt='Four Loops' objectFit='cover' maxW={'739px'} maxH={'217px'} />

            </VStack>
		</>
	);
}