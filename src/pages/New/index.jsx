import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { Section } from "../../components/Section";
import{Button} from "../../components/Button"

import { Link } from "react-router-dom";

import { Container ,Form } from "./styles";
import { Noteitem } from "../../components/Noteitem/idenx";


export function New(){
  return(
  <Container>
    <Header/>
    <main>
      <Form>
        <header>
          <h1>Criar Nota</h1>
          <Link to="/">Voltar</Link>
        </header>
        <Input Placeholder="titulo"/>
      
        <TextArea Placeholder="asfhj"/>

        <Section title="links uteis">
        <Noteitem value="aiohjfioa" />
        <Noteitem  isNew Placeholder="Novo link"/>
        </Section>  

        <Section title="marcadores">
         <div className="tags">
          <Noteitem value="React" />
          <Noteitem  isNew Placeholder="Nova tag"/>
         </div>
        </Section>
        <Button title="Salvar"/>
      </Form>
    </main>
  </Container>
    )
}