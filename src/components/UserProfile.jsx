import React from 'react';

export default function UserProfile({ user }) {
   return (
      <>
         <div className="p-6 bg-gray-100 rounded shadow max-w-md mx-auto mt-10 text-left">
            <h1 className="text-3xl font-bold mb-4">{user.name} {user.surname}</h1>
            <img
               src={user.profilePicture}
               alt={`Profile of ${user.name}`}
               className="mx-auto mb-4 rounded-2xl shadow-2xl w-32 h-32 object-cover"
            />
            <p className="mb-2">Email: {user.email}</p>
            <p className="mb-2">Country: {user.country}</p>
            <p className="mb-2">Company: {user.company}</p>
            <p className="mb-2">Interests:</p>
            <ul className="list-disc list-inside">
               {user.interests.map((interest) => (
                  <li key={interest}>{interest}</li>
               ))}
            </ul>
         </div>
      </>
   );
}
