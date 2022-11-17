import logo from './logo-amarelo-claro.png';
import ok from './ok.png';
import './boasvindas.css';

function Boasvindas() { 

  //const navigation = useNavigation();
 
   function navigateToLogin(){
   // navigation.navigate("Login");
   }

  return (
    <div className="Login">
      <header className="Login-header">
        <img src={logo} className="Login-logo" alt="logo" />
        <h3>Bem vindo!</h3>
        <text>O que você deseja fazer? </text>
          <div className='Buttons'>
            <input type="submit" value="Localizei um animal" class="button" />
            <input type="submit" value="Quero adotar um animal" class="button" />
          </div>
      </header>
    </div>
  );
}

export default Boasvindas;
