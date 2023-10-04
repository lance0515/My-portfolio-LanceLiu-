/* eslint-disable @next/next/no-img-element */
import { Container, Heading,SimpleGrid  } from '@chakra-ui/react'
import Section from '../components/section'






export default function Gallery({  }) {
    
    //const images = feed.data
    return (

        <Container>
            <Heading as="h3" fontSize={30} mb={5} >
               My Instagram Gallery
            </Heading>
            <Section delay={0.5}>
           
 
           
                    <SimpleGrid columns={3} gap={1}>
              
            
                  
                    </SimpleGrid>
               
            </Section>
        </Container>


    )

}
export const getStaticProps = async () => {
    const url = `${process.env.NEXT_PUBLIC_API}${process.env.NEXT_PUBLIC_INSTAGRAM_KEY}`
    const data = await fetch(url)
    const feed = await data.json()
    console.log(feed)
    return {
        props: {
            feed,
        },
    }

}
