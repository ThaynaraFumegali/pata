import logo from './logo-amarelo-claro.png';
import ok from './ok.png';
import './cadastrook.css';

function Cadastrook() { 

  //const navigation = useNavigation();
 
   function navigateToLogin(){
   // navigation.navigate("Login");
   }

  return (
    <div className="Login">
      <header className="Login-header">
        <img src={logo} className="Login-logo" alt="logo" />
        <h3>O cadastro ta ok!</h3>
        <text>Agora você já pode voltar à tela de login e logar normalmente na plataforma. </text>
        <img src={ok} className="ok" alt="certo" />
          <div className='Buttons'>
            <input type="submit" value="Ir para a tela de login" class="button" />
          </div>
      </header>
    </div>
  );
}

export default Cadastrook;
