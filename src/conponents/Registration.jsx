import { useState } from "react";

const Registration = () => {
    const [name, setName] = useState([]);
    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState([]);
    const [isSubmit, setIsSubmit] = useState(false);

    // console.log({name:name, email:email, password:password});

    const handleSubmit =(event) =>{
        event.preventDefault();
        const user ={
            name: name,
            email: email,
            password: password
        }
        console.log(user);
        setIsSubmit(true)
    };
    return (
        <div className="h-screen w-full flex rounded-3xl justify-center items-center bg-purple-500">
            <form onSubmit={(event)=>handleSubmit(event)} className="w-2/3 lg:w-2/5 bg-white rounded-xl shadow-lg p-8">
                <h1 className="text-4xl mb-6 text-purple-500 text-center">
                    Sign Up Form
                </h1>
                <label className="mb-2 text-xl ">Name</label>
                <input onChange={(event)=> setName(event.target.value)} type="text" placeholder="Enter your name" className="py-2 px-1 border-2 border-solid border-gray-400 w-full rounded-lg text-lg mb-3" required></input>

                <label className="mb-2 text-xl ">Email</label>
                <input onChange={(event)=> setEmail(event.target.value)} type="email" placeholder="Enter your email" className="py-2 px-1 border-2 border-solid border-gray-400 w-full rounded-lg text-lg mb-3" required></input>

                <label className="mb-2 text-xl ">Password</label>
                <input onChange={(event)=> setPassword(event.target.value)} type="password" placeholder="Enter your password" className="py-2 px-1 border-2 border-solid border-gray-400 w-full rounded-lg text-lg mb-3" required></input>

                <div className="flex justify-end mt-3">
                        <button type="submit" className="bg-purple-500 rounded h-10 w-24 text-xl hover:bg-gray-300 hover:text-black text-white">
                            Sign Up
                        </button>
                    </div>
            </form>
            {isSubmit && (
                <div className="fixed top-0 flex justify-center items-center h-screen w-full bg-purple-500">
                <div className="w-1/2 h-1/2 rounded-lg bg-purple-300 text-center">
                    <h1 className="text-3xl mb-6 text-purple-500">
                        You have submitted the form successfully!
                    </h1>
                    <p className="text-xl mb-3">Name: {name}</p>
                    <p className="text-xl mb-3">Email: {email}</p>
                    <p className="text-xl mb-3">Password: {password}</p>
                </div>
            </div>
            )}
        </div>
    );
};

export default Registration;