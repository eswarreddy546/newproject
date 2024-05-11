
import './index.css'
const Login =()=>(<div className='login-container'>
    <div className="container">
        <div>
            <input type="text" placeholder='Enter your Username' /><br/>
            <input type="password" placeholder='Enter your Password'/>
        </div>
        {/** add a check box for remember me */}
        <div>
            <button>Login</button>
            <button>SignUp</button>
        </div>
    </div>
</div>)

export default Login;