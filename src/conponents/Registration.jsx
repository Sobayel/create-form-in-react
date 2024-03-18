import { useState } from "react";

const Registration = () => {
    const [name, setName] = useState([]);
    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState([]);

    // console.log({name:name, email:email, password:password});

    const handleSubmit =(event) =>{
        event.preventDefault();
        const user ={
            name: name,
            email: email,
            password: password
        }
        console.log(user);
    };
    return (
        <div className="h-screen w-full flex justify-center items-center bg-purple-500">
            <form onSubmit={(event)=>handleSubmit(event)} className="w-2/3 lg:w-2/5 bg-white rounded shadow-lg p-8">
                <h1 className="text-4xl mb-6 text-purple-500 text-center">
                    Sign Up Form
                </h1>
                <label className="mb-2 text-xl ">Name</label>
                <input onChange={(event)=> setName(event.target.value)} type="text" placeholder="Enter your name" className="py-2 px-1 border-2 border-solid border-gray-400 w-full rounded text-lg mb-3"></input>

                <label className="mb-2 text-xl ">Email</label>
                <input onChange={(event)=> setEmail(event.target.value)} type="email" placeholder="Enter your email" className="py-2 px-1 border-2 border-solid border-gray-400 w-full rounded text-lg mb-3"></input>

                <label className="mb-2 text-xl ">Password</label>
                <input onChange={(event)=> setPassword(event.target.value)} type="password" placeholder="Enter your password" className="py-2 px-1 border-2 border-solid border-gray-400 w-full rounded text-lg mb-3"></input>

                <div className="flex justify-end mt-3">
                        <button type="submit" className="bg-purple-500 rounded h-10 w-24 text-xl hover:bg-gray-300 hover:text-black text-white">
                            Sign Up
                        </button>
                    </div>
            </form>
        </div>
    );
};

export default Registration;