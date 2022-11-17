import logo from './logo-amarelo-claro.png';
import './login.css';

function Login() { 

  //const navigation = useNavigation();
 
   function navigateToLogin(){
   // navigation.navigate("Login");
   }

  return (
    <div className="Login">
      <header className="Login-header">
        <img src={logo} className="Login-logo" alt="logo" />
        <h3>Login</h3>
        <form>
          <label>
            <text>E-mail: </text>
            <input type="email" name="name" class="inputs" placeholder="Digite seu e-mail"/>
            <text>Senha: </text>
            <input type="password" name="password" class="inputs" placeholder="Digite sua senha"/>
          </label>
          <div className='Buttons'>
            <input type="submit" value="Enviar" class="button" />
          </div>
        </form>        
      </header>
    </div>
  );
}

export default Login;
