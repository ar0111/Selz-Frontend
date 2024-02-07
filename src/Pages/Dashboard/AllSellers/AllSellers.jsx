import React from 'react';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';

const AllSellers = () => {
    const {data: users = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async () =>{
            const res = await fetch('https://selz-server.vercel.app/users');
            const data = await res.json();
            return data
        }
    })

    const handleMakeAdmin = (id) =>{
        fetch(`https://selz-server.vercel.app/users/admin/${id}`,{
            method: "PUT"
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount > 0){
                toast.success("Make Admin Successfully");
                refetch();
            }
        })
    }

    const handleDelete = (user) =>{
        console.log(user._id);
        const aggree = window.confirm(`Are you want to delete ${user.name}`);
        if(aggree){
            // console.log("Yes Aggree");
            fetch(`https://selz-server.vercel.app/users/admin/${user._id}`, {
                method: "DELETE"
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.deletedCount > 0){
                    toast.success("Delete User Successfully")
                    refetch();
                }
            })
        }
    }

    return (
        <div>
            <div className="overflow-x-auto rounded-lg bg-cyan-100">
                <table className="table w-full">

                    <thead className="bg-cyan-200">
                        <tr className='uppercase '>
                            <th>serial</th>
                            <th>Name</th>
                            <th>email</th>
                            <th>primary role</th>
                            <th>secondary role</th>
                            <th>set admin</th>
                            <th>delete</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            users.map((user, idx)=> user?.role.toLowerCase() === 'seller' && <tr key={idx} className='hover:bg-cyan-200'>
                                <th>{idx+1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td className='capitalize'>{user.primaryRole}</td>
                                <td className='capitalize'>{user.role}</td>
                                <td>{user?.primaryRole.toLowerCase() !== 'admin' && <button onClick={()=>handleMakeAdmin(user._id)} className='btn btn-sm'>Make Admin</button>}</td>
                                <td>{user?.role.toLowerCase() !== 'admin' && <button onClick={()=>handleDelete(user)} className='btn btn-sm'>Remove User</button>}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;