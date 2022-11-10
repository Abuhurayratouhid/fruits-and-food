import React, { useContext } from 'react';
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contaxt/AuthProvider';
import useTitle from '../../Hooks/useTitle';

const SignUp = () => {
    const {createUser,updateUser,googleLogin,loading,setLoading} = useContext(AuthContext)
    useTitle('Sign up')
    if(loading){
        return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-orange-600 ml-[50%] "></div>
    }
    
    const handleSignUp= (event)=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email,password)
        .then(result => {
            const user = result.user;
            // updateUser
            handleUserUpdate(name,photoURL)
            console.log(user)
            setLoading(false)
        })
        .catch(error => {
            console.log(error)
        })
        
        const handleUserUpdate = (name, photoURL)=>{
            const user= {
                displayName: name,
                photoURL: photoURL
            }
            updateUser(user)
            .then(()=>{

            })
            .catch(e => {
                console.log(e)
            })
        }


        // console.log(form, name, photoURL, email,password)
    }
    // login with google 
    const handleGoogleLogin= ()=>{
        googleLogin()
        .then(result => {
            const user = result.user;
            const currentUser = {
                email: user.email 
            }
            fetch('http://localhost:5000/jwt',{
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            }) 
            .then(res => res.json())
            .then(data => {
                console.log(data)
                localStorage.setItem('token', data.token);
                
            })
        })
        .catch(error => console.log(error))

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center bg-white rounded-l-full lg:h-[300px] py-20">
                    <h1 className="text-5xl font-bold">Sign up</h1>
                    <p className="py-6">We respect your privacy. Sign up here and create your account. we will never send you a single message without your benefits</p>
                </div>
                <div className="card flex-shrink-0 md:w-1/2 md:h-[600px] shadow-2xl bg-gradient-to-r from-yellow-200  to-red-300">
                    {/* signUp form  */}

                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name </span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoURL</span>
                            </label>
                            <input type="text" name='photoURL' placeholder="email" className="input input-bordered" required/>
                        </div>
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
                                <Link to='/login'>
                                <p className="label-text-alt link link-hover">Already have an account? <span className='text-2xl text-blue-900'>login</span></p>
                                </Link>
                            </label>
                            
                        </div>
                        <div className="form-control ">
                            <button className="btn bg-gradient-to-r from-yellow-300  to-red-500 ">Sign up</button>
                        </div>
                        <div className="form-control ">
                            <button onClick={handleGoogleLogin} className="btn text-primary bg-slate-300 text-3xl "><FcGoogle></FcGoogle></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;