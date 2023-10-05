/* eslint-disable @next/next/no-img-element */
import { Container, Heading,SimpleGrid  } from '@chakra-ui/react'
import Section from '../components/section'






export default function Gallery({ feed }) {
    
    const images = feed.data
    return (

        <Container>
            <Heading as="h3" fontSize={30} mb={5} >
               My Instagram Gallery
            </Heading>
            <Section delay={0.5}>
           
 
           
                    <SimpleGrid columns={3} gap={1}>
              
            
                    {images && images.map(image => (
                       
                        <div key={image.id}>
                            <img 
                            
                            src={image.media_url}
                            alt={image.caption} 
                            herf={image.permalink}
                            />   
                            
                            </div>
                            
                    ))}
                    </SimpleGrid>
               
            </Section>
        </Container>


    )

}
export const getStaticProps = async () => {
    const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type,permalink&access_token=IGQWRNaUxFaVZAvVzA1VkhTMWhLZAERiSXd2R0VuQ2EtV240VXBaOWRyVlVxaG5yM1hnOHIxSFBGQmphM053bl9zQjVGMktid2hZAVVh3MzZAQNGZA5QzdMQlhDMklnMGpWM29YYWxlSjE4WmpKVGR0bVIxTmRxMDVneGsZD`
    const data = await fetch(url)
    const feed = await data.json()
    
    console.log(feed)
    return {
        props: {
            feed,
        },
    }
   
}
