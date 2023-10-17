import { Container ,Box,Heading,Image ,useColorModeValue , Button, SimpleGrid} from "@chakra-ui/react"
import Section from'../components/section.js'
import NextLink from'next/link.js'

import article from '../components/layouts/article.js'
import { GridItem } from '../components/grid-item.js'
import { BioSection,BioYear } from "../components/bio.js"
import Paragraph from "../components/paragraph.js"
import { ChevronRightIcon } from "@chakra-ui/icons"
import fireproject from "../public/images/fireproject.gif"
import myportfolio from "../public/images/myportfolio.png"

const Page= ()=>{
    return(
        <Container>
            <   Box 
            borderRadius="lg"
                bg={useColorModeValue('whiteAlpha.500','whiteAlpha.200')}
                mb ={6} 
                p={3} 
                align= "center">
                HI,I&apos;m a junior developer based in New Taipei City!

            </Box >

            <Box display={{md:'flex'}}>
            <Box flexGrow={1}>
                <Heading as ="h2" variant="page=title">
                Lance Liu
                </Heading>
                Photographer / Developer / Music-Lover / pianist 
            </Box>
                <Box flexShrink={0} 
                mt={{ base: 4, md: 0 }} 
                ml={{ md: 6 }} 
                aling="center"
                >
                  <Image
                    borderColor="whiteAlpha.800"
                    borderWidth={3} 
                    borderStyle="solid"
                    maxWidth="100px"
                    display="inline-block"
                    borderRadius="full"
                    src="/images/lanceliu.jpg"
                    alt="Profile Image">
                        </Image>
                </Box>
            </Box>
            <Section delay={0.1}>
            <Heading as="h3" variant="section-title">
                   About me
                   
            </Heading>
            <Paragraph>
                西元 2000 年出生在新北市，從小就喜歡把家裡的東西拆拆裝裝。
                因為對於資訊和電子產品有十分濃厚的興趣，
                高中進入資訊科，大學則是選擇往資訊工程發展，
                閒暇時喜歡拎著相機出門拍照，
                最近正在自學前後端，
                期望自己能成為 Full-Stack Developer。
                <Paragraph>
               
                如果你對攝影有興趣或是想委託我拍攝，請點選下方按鈕!
                </Paragraph>
            </Paragraph>
              <Box align="center" my={4}>
              <NextLink href="https://docs.google.com/forms/d/e/1FAIpQLSeA15px5bXXnzbCmHGUuy3P-80rA7cAMLWtpS5YPCTsRUxwJg/viewform?usp=sharing">
                    <Button rightIcon={<ChevronRightIcon/>}colorScheme="teal">拍照邀約表單</Button>
                </NextLink>
                </Box>  
            </Section>
            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">Biography</Heading>
            <BioSection>
                <BioYear>2000/5</BioYear>
                出生於 新北市
            </BioSection>

            <BioSection>
                <BioYear>2018/6</BioYear>
                松山工農 資訊科 畢業
            </BioSection>

            <BioSection>
                <BioYear>2023/1</BioYear>
                銘傳大學 資訊工程學系畢業
            </BioSection>

            <BioSection>
                <BioYear>2023/8</BioYear>
                完成兵役，準備投入職場
            </BioSection>
            </Section>
            
            <Section delay={0.3}>
            <Heading as="h3" variant="section-title">Project I made</Heading>
            <SimpleGrid columns={[1,2,2]} gap={6}>
                <GridItem
                title="My graduate Project"
                thumbnail={fireproject}
                href="https://drive.google.com/file/d/1wEtErEHkRx7jHvZkKH98Py8d65D6Bo7P/view"
                
                >

                </GridItem>
                <GridItem
                title="My portfolio"
                thumbnail={myportfolio}
                href="https://my-portfolio-lance-liu.vercel.app/"
                
                >

                </GridItem>
            </SimpleGrid>

            </Section>
        </Container>
        
    )
    
}
export default Page