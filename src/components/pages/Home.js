import styles from './Home.module.css'

import ProjectForm_Login from '../projects/ProjectForm_Login'
import ProjectForm_Register from '../projects/ProjectForm_Register'
import ProjectCount from '../projects/ProjectCount'

import React, { Component } from 'react'

class Home extends Component {
  constructor (props) {
    super (props);
    this.state = {
      status: true
    }
    this.acessar = this.acessar.bind(this);
  }

  acessar(){
    console.log('Hello acessar')
    this.setState({status:false}); 
  }
  
  render () {
    return (
      <>
        {this.state.status ? (
          <div className={styles.sub_container_login}>
            <h1>Seu evento<br />terá início em</h1>
            <ProjectCount />
            <p>Por favor preencha seus dados corretamente</p>
            <ProjectForm_Login btnText="ACESSE AGORA" onSubmit={this.acessar} />
          </div>
        ) :
          <div className={styles.sub_container_register}>
              <h1>Faça seu cadastro</h1>
              <p>Por favor preencha seus dados corretamente</p>
              <ProjectForm_Register btnText="ACESSE AGORA" /> 
          </div>}
      </>
    )
  }
}

export default Home;