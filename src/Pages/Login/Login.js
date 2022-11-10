import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contaxt/AuthProvider';
import useTitle from '../../Hooks/useTitle';

const Login = () => {
    const {userLogin,loading} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation()
    useTitle('login')
    if(loading){
        return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-orange-600 ml-[50%] "></div>
    }

    let from = location.state?.from?.pathname || "/";
    const handleLogin = (event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password)
        userLogin(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user)
            navigate(from, { replace: true });
        })
        .catch(error=> {
            console.log(error)
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center bg-white rounded-l-full lg:h-[300px] py-20">
                    <h1 className="text-5xl font-bold">Login now </h1>
                    <p className="py-6">We respect your privacy. Sign up here and create your account. we will never send you a single message without your benefits</p>
                </div>
                <div className="card flex-shrink-0 md:w-1/2 md:h-[350px] shadow-2xl bg-gradient-to-r from-yellow-200  to-red-300">
                        
                     {/* login form     */}
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                            <label className="label">
                                <Link to='/signUp'>
                                <p className="label-text-alt link link-hover">Are you new here? <span className='text-2xl text-blue-900'>Sign up</span></p>
                                </Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-gradient-to-r from-yellow-300  to-red-500 ">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;