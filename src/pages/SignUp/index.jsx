import {FiUser,FiMail,FiLock} from 'react-icons/fi'

import { Container,Form, Background} from "./styles";
import { Input } from "../../components/Input";
import {Button} from '../../components/Button'

export function SignUp(){
    return(
        <Container>
            <Background/>
         <Form>
            <h1>Daily Notes</h1>
            <p>Aplicação para salvar e gerenciar seus Links Uteis</p>

            <h2>Crie sua conta</h2>
            <Input placeholder='Nome' type='text' icon={FiUser}/>
            <Input placeholder='Senha' type='password' icon={FiLock}/>
            <Input placeholder='E-mail' type='text' icon={FiMail}/>
            
            <Button title='Cadastrar'/>

            <a href="#">Ja possuo uma conta</a>
         </Form>
         
        </Container>
    )
}