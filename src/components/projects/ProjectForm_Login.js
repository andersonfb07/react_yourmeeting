import styles from './ProjectForm_Login.module.css'

import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'

function ProjectForm_Login ({ btnText, onSubmit }) {
  console.log('Hello onSubmit')
  
  return (
    
    <form className={styles.form}>
      <Input 
        type="text" 
        text="Seu e-mail" 
        name="name" 
        placeholder="Digite seu e-mail*" 
      />
      <Input 
        type="text" 
        text="Código" 
        name="name" 
        placeholder="Digite o código*" 
      />
      <Input 
        type="password" 
        text="Senha" 
        name="name" 
        placeholder="Digite a senha*" 
      />
      <SubmitButton text={btnText} onClick={onSubmit} />
    </form>
  
  );
}

export default ProjectForm_Login;