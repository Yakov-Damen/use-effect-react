import React from 'react'

export type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
        lat: string;
        lng: string;
      };
    };
    phone: string;
    website: string;
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    };
  };

export default function UserCard({users}: {users: User[]}) {
  return (
    <>
        {users.map(({name, email}: User) => <div>{name} {email}</div>)}
    </>
  );
}
