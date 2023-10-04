import { Container,Heading,SimpleGrid,Divider } from "@chakra-ui/react"
import { Section}from'../components/section.js'
import { progress } from "framer-motion";


export default function Gallery (){

    return(
        <Container>
            <Heading as="h3" fontSize={20}mb={4}>
                Gallery
            </Heading>
        </Container>
        
    )

}
export const getStaticProps=()=>{
    const url=`https://graph.instagram.com/17895695668004550?fields=id,media_type,media_url,username,timestamp&access_token=${process.env.NEXT_PUBLIC_INSTAGRAM_KEY}`;
   
  
};