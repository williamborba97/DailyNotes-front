import { Container,Brand,Menu,Search,Content,NewNote } from "./styles";

import { Header } from "../../components/Header"
import { ButtonText } from "../../components/buttonText"
export function Home(){
    return(
        
        <Container>
            <Brand>
             <h1>Daily Notes</h1>
            </Brand>

            <Header/>

            <Menu>
                
                <li><ButtonText title="Todos"/></li>
                <li><ButtonText title="React"/></li>
                <li><ButtonText title="Nodejs"/></li>
                
            </Menu>

            <Search>

            </Search>

            <Content>

            </Content>

            <NewNote></NewNote>
        </Container>


    )
}