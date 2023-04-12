import { FiPlus, FiSearch } from "react-icons/fi"
import { Container,Brand,Menu,Search,Content,NewNote } from "./styles";

import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Input } from "../../components/Input";
import { Note } from "../../components/Note";
import {Section} from "../../components/Section"


export function Home(){
    return(
        
        <Container>
            <Brand>
             <h1>Daily Notes</h1>
            </Brand>

            <Header/>

            <Menu>
                
                <li><ButtonText title="Todos" isActive/></li>
                <li><ButtonText title="React"/></li>
                <li><ButtonText title="Nodejs"/></li>
                
            </Menu>

            <Search>
                <Input placeholder="Pesquisar pelo titulo" icon={FiSearch}/>
            </Search >
                
            <Content>
             <Section title="Minhas Notas">
             <Note data={{
                        title:'React',
                        tags:[
                            {id:"1",name:'react'},
                            {id:"2",name:'Nodejs'}
                        ]
                        }}
                        />
             </Section>
            </Content>

            <NewNote>
                <FiPlus/>
               Criar Nota
            </NewNote>
        </Container>


    )
}