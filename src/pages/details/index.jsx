import { Container,Links,Content } from "./styles";

import { Header } from "../../components/Header";
import { ButtonText } from "../../components/buttonText";
import { Button } from "../../components/button";
import { Section } from "../../components/section";
import {Tag} from "../../components/tags"

export function Details(){
    return(
    <Container>
      <Header/>
        <main>
          <Content>

            <ButtonText title="Excluir Nota"/>

            <h1>Introdução ao React</h1>

            <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel commodi quidem itaque,
            accusantium praesentium iste quo molestiae illum, doloremque provident eius impedit 
            aut voluptatum enim consequuntur voluptatem modi neque ad?
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Mollitia libero dicta aliquam veritatis aut explicabo nihil
             tempore rem neque totam recusandae hic reiciendis, quasi 
             adipisci assumenda in, distinctio suscipit at.
           </p>

            <Section title="Links Uteis">
              <Links>
              <li>
                <a href="#">Link</a>
              </li>          
              </Links>
            </Section>

            <Section title="Marcadores">
            <Tag title="express"/>
            <Tag title="nodejs"/>

            </Section>

            <Button title='Voltar'/>

          </Content>
        </main>     
    </Container>
    )
}

