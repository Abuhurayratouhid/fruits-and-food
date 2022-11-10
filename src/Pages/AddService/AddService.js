import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useTitle from '../../Hooks/useTitle';


const AddService = () => {
    useTitle('Add Service')
    const handleAddService = (e) => {
        e.preventDefault();
        const form = e.target;
        const serviceName= form.name.value;
        const servicePhoto = form.photoURL.value;
        const servicePrice = form.price.value;
        const serviceDetails = form.details.value;
        console.log(serviceName, servicePhoto, servicePrice,serviceDetails)

        const newService = {
            name: serviceName,
            picture: servicePhoto,
            price : servicePrice,
            details: serviceDetails
        }

        fetch('http://localhost:5000/addService',{
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(newService)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                toast.success('service added successfully')
            }
        })

    }
    return (
        <div className=''>
            <h1 className='text-center my-10 text-4xl font-bold'>Add a service</h1>
            <div className="card flex-shrink-0 lg:w-3/4 lg:ml-40 md:h-[600px] shadow-2xl bg-gradient-to-r from-slate-300  to-slate-400">
                    {/* add service  form  */}

                    <form onSubmit={handleAddService}  className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Service name: </span>
                            </label>
                            <input type="text" name='name' placeholder="Service name" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Service photo</span>
                            </label>
                            <input type="text" name='photoURL' placeholder="photo" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Service price</span>
                            </label>
                            <input type="text" name='price' placeholder="price" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Service details :</span>
                            </label>
                            <input type="text" name='details' placeholder="details" className="input input-bordered" required/>
                            
                            
                        </div>
                        <div className="form-control ">
                            <button className="mt-20 btn bg-gradient-to-r from-yellow-300  to-red-500 ">Add service</button>
                        </div>
                        
                    </form>
                </div>
                <ToastContainer/>
        </div>
    );
};

export default AddService;