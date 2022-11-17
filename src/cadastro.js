import logo from './logo-amarelo-claro.png';
import './cadastro.css';

function Cadastro() { 

  //const navigation = useNavigation();
 
   function navigateToLogin(){
   // navigation.navigate("Login");
   }

  return (
    <div className="Login">
      <header className="Login-header">
        <img src={logo} className="Login-logo" alt="logo" />
        <h3>Cadastre-se</h3>
        <form>
          <label>
            <text>Nome: </text>
            <input type="text" name="name" class="inputs" placeholder="Digite seu nome a ser cadastrado"/>
            <text>E-mail: </text>
            <input type="email" name="email" class="inputs" placeholder="Digite o e-mail a ser cadastrado"/>
            <text>Senha: </text>
            <input type="password" name="password" class="inputs" placeholder="Digite sua senha a ser cadastrada"/>
          </label>
          <div className='Buttons'>
            <input type="submit" value="Cadastrar" class="button" />
          </div>
        </form>        
      </header>
    </div>
  );
}

export default Cadastro;
