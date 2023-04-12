import {FiLogIn,FiMail,FiLock} from 'react-icons/fi'

import { Container,Form, Background} from "./styles";
import { Input } from "../../components/Input";
import {Button} from '../../components/Button'

export function SignIn(){
    return(
        <Container>
         <Form>
            <h1>Daily Notes</h1>
            <p>Aolicação para salvar e gerenciar seus Links Uteis</p>

            <h2>Faça seu login</h2>
            <Input placeholder='E-mail' type='text' icon={FiMail}/>
            <Input placeholder='Senha' type='password' icon={FiLock}/>
            
            <Button title='Entrar'/>

            <a href="#">Criar Conta</a>
         </Form>
         <Background/>
        </Container>
    )
}