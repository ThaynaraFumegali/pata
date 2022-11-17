import logo from './pata-amarela.png';
import './home.css';

function Home() { 

  //const navigation = useNavigation();
 
   function navigateToLogin(){
   // navigation.navigate("Login");
   }

  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> P.A.T.A. </h1>
        <text> Plataforma de adoção para todos os animais. </text>
        
          <div className='Buttons'>
          <button href='#' type="button" class="button">Entrar</button>
          <div className='cadastre'>
              <text>Ou <a href='#'>cadastre-se</a></text>
          </div>
          </div>
        
      </header>
    </div>
  );
}

export default Home;
