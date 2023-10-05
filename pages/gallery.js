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
    const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type,permalink&access_token=IGQWRPLUd5SEZARb1ZAIYU5NbUN4cnhkcFVmS292bFhYb0xObV9BNFRmOUJ4eVltM3pXNW42Y3c4MzFMV0s5a09CVmZAxN2hwcXhLT1YteFZATSjNxS0NmcFYwalhub2duRzJaLW5VVXR5TEpKLW9QeHJhOEs0QXFKRTQZD`
    const data = await fetch(url)
    const feed = await data.json()
    
    console.log(feed)
    return {
        props: {
            feed,
        },
    }
   
}
