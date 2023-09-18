import GlobalStyle from './styles/global';
import Intro from './components/intro';
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { useEffect } from 'react';
import HomeUsuario from './components/home-usuario';
import Marketplace from './components/marketplace';
import MeusLivros from './components/meus-livros';

const Container = styled.div`
  
  min-height: 100vh;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {

  useEffect(() => {
  })

  return (
    <>
      <Container>
        <Switch>
          <Route exact path='/' component={Intro}/>
          <Route path='/home-usuario' component={HomeUsuario}/>
          <Route path='/marketplace' component={Marketplace}/>
          <Route path='/meus-livros' component={MeusLivros}/>
        </Switch>
      </Container>
      <ToastContainer autoClose={3000} position={ toast.POSITION.BOTTOM_LEFT} />
      <GlobalStyle />
    </>
  );
}

export default App;
