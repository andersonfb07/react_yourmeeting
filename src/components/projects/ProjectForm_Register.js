import styles from './ProjectForm_Register.module.css'

import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'

function ProjectForm_Register ({ btnText }) {
    return(
        <form>
            <Input 
              type="text" 
              text="Nome completo" 
              name="name" 
              placeholder="Digite seu nome*"
            />
            <Input 
              type="text" 
              text="Seu e-mail" 
              name="name" 
              placeholder="Digite seu e-mail*"
            />
            <Input 
              type="text" 
              text="Telefone" 
              name="name" 
              placeholder="Digite seu número*"
            />
            <Input 
              type="text" 
              text="CRM" 
              name="name" 
              placeholder="Digite seu CRM**"
            />
            <SubmitButton text={btnText} />
        </form>
    )
}

export default ProjectForm_Register;