import RoomCard from '@/components/RoomCard';
import React from 'react';

const RoomsPage =async () => {
  const res= await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/rooms`);
  const rooms= await res.json();
  console.log(rooms)

  return (
    <div className='space-y-5 my-20'>
     <h2 className='text-[#da9e38] font-serif font-semibold text-5xl'>Browse our rooms</h2>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {
          rooms.map(room=><RoomCard key={room._id} room={room}></RoomCard>)
        }
      </div>
    </div>
  );
};

export default RoomsPage;