import { Container, Form ,Avatar} from "./styles";
import {FiArrowLeft,FiMail,FiLock,FiUser,FiCamera} from "react-icons/fi";

import {Input} from  "../../components/Input";
import {Button} from  "../../components/Button";



export function Profile(){
  return(
    <Container>
      <header>
        <a href="/" >
         <FiArrowLeft/>       
        </a>
      </header>

      <Form>
        <Avatar>
          <img src="https://github.com/williamborba97.png" alt="foto do usuario" />

          <label htmlFor="avatar">
          <FiCamera/>

          <input id="avatar" type="file"/> 

        </label>
        </Avatar>

       

        <Input placeholder="Nome" type="text" icon={FiUser}/>

        <Input placeholder="Email" type="text" icon={FiMail}/>

        <Input placeholder="Senha atual" type="password" icon={FiLock}/>

        <Input placeholder="Nova senha" type="password" icon={FiLock}/>

        <Button title="Salvar"/>
      </Form>
        </Container>
    );
      
    
};