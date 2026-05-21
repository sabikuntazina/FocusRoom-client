import React from 'react';
import RoomCard from './RoomCard';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

const AvailableRooms = async() => {



    const res= await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/featured`);
  const rooms= await res.json();
  // const availableRooms = rooms.filter(room => room.availability === true);
  // console.log(rooms)
  
  return (
    <div className='space-y-5 my-20 max-w-6xl mx-auto'>
         <h2 className='text-[#da9e38] font-serif font-semibold text-5xl mb-10'>Available rooms</h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
              rooms.map(room=><RoomCard key={room._id} room={room}></RoomCard>)
            }
          </div>
        </div>
  );
};

export default AvailableRooms;