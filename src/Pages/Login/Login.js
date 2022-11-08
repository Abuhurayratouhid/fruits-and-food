import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contaxt/AuthProvider';

const Login = () => {
    const {userLogin} = useContext(AuthContext);
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
                            <button className="btn bg-gradient-to-r from-yellow-300  to-red-500 ">Sign up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;