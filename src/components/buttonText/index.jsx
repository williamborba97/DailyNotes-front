import { Container } from "./style";

export function ButtonText({title,isAtcive = false,...rest}){
    return(
     <Container  type="button" {... rest} isAtcive>
        {title}
     </Container>   
    )
}