import { Container,Heading } from "@chakra-ui/react"



export default function Gallery (){

    return(
        <Container>
            <Heading as="h3" fontSize={20}mb={4}>
                Gallery ins
            </Heading>
        </Container>
        
    )}
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