import { RiShutDownLine } from "react-icons/ri";
import { Container,Profile,Logout} from "./styles";

export function Header(){
    return(
        <Container> 
        <Profile to="/profile">
            <img src='https://github.com/williamborba97.png'/>

            <div>
                <span>Bem vindo</span>
                <strong>William Gulart Borba</strong>
            </div>
        </Profile>

        <Logout>
            <RiShutDownLine/>
        </Logout>
        </Container>
       );

}
    
