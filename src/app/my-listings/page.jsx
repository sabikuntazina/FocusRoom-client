import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const MyListingsPage = async () => {

  const session = await auth.api.getSession({
    headers: await headers(),
  });

// console.log(session)

  const user = session?.user;
  console.log(user);

  if (!user?.id) {
    return <div>User not logged in</div>;
  }
const res = await fetch(
  `${process.env.NEXT_PUBLIC_SERVER_URL}/allrooms/${user.id}`
);

const data = await res.json();

console.log(data);

  return (
    <div>
      My listing
    </div>
//     <div>
//     <div className="min-h-screen bg-[#0b0502] text-white p-6">
//   {/* Header */}
//   <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
//     <div>
//       <p className="uppercase tracking-[4px] text-sm text-[#b28b5c]">
//         Host
//       </p>

//       <h1 className="text-5xl font-serif text-[#f8f1e7]">
//         My Listings
//       </h1>
//     </div>

//     <button className="btn rounded-full bg-[#d89c3d] border-none text-black hover:bg-[#e4aa4b] px-7">
//       + New Listing
//     </button>
//   </div>

//   {/* Stats */}
//   <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
//     {/* Card */}
//     <div className="bg-[#1a0f08] border border-[#3a2618] rounded-[30px] p-6">
//       <div className="flex items-center justify-between mb-5">
//         <p className="uppercase text-sm tracking-wide text-[#c6a57a]">
//           Total Listings
//         </p>

//         <div className="badge badge-sm bg-[#2a1d14] border-none text-white">
//           live
//         </div>
//       </div>

//       <h2 className="text-5xl text-[#e6b04d] font-semibold">1</h2>
//     </div>

//     {/* Card */}
//     <div className="bg-[#1a0f08] border border-[#3a2618] rounded-[30px] p-6">
//       <div className="flex items-center justify-between mb-5">
//         <p className="uppercase text-sm tracking-wide text-[#c6a57a]">
//           Active
//         </p>

//         <div className="badge badge-sm bg-[#2a1d14] border-none text-white">
//           +
//         </div>
//       </div>

//       <h2 className="text-5xl text-[#e6b04d] font-semibold">1</h2>
//     </div>

//     {/* Card */}
//     <div className="bg-[#1a0f08] border border-[#3a2618] rounded-[30px] p-6">
//       <div className="flex items-center justify-between mb-5">
//         <p className="uppercase text-sm tracking-wide text-[#c6a57a]">
//           Avg. Price
//         </p>

//         <div className="badge badge-sm bg-[#2a1d14] border-none text-white">
//           $
//         </div>
//       </div>

//       <h2 className="text-5xl text-[#e6b04d] font-semibold">$20/hr</h2>
//     </div>
//   </div>

//   {/* Table */}
//   <div className="overflow-x-auto rounded-[32px] border border-[#3a2618] bg-[#1a0f08]">
//     <table className="table">
//       {/* head */}
//       <thead>
//         <tr className="text-[#b9966d] border-b border-[#3a2618]">
//           <th>ROOM</th>
//           <th>STATUS</th>
//           <th>PRICE</th>
//           <th>CAPACITY</th>
//           <th className="text-right">ACTIONS</th>
//         </tr>
//       </thead>

//       <tbody>
//         <tr className="hover:bg-[#24140c] transition">
//           {/* Room */}
//           <td>
//             <div className="flex items-center gap-4">
//               <div className="avatar">
//                 <div className="w-16 rounded-2xl">
//                   <img
//                     src="https://i.ibb.co/5xJQq7m/room.jpg"
//                     alt="room"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <div className="font-semibold text-lg">ytuyrt</div>
//                 <div className="text-sm text-gray-400">
//                   tryutyt
//                 </div>
//               </div>
//             </div>
//           </td>

//           {/* Status */}
//           <td>
//             <div className="badge badge-success badge-outline px-4 py-3">
//               Active
//             </div>
//           </td>

//           {/* Price */}
//           <td className="font-semibold text-[#f3c46c]">
//             $20/hr
//           </td>

//           {/* Capacity */}
//           <td>4</td>

//           {/* Actions */}
//           <td>
//             <div className="flex justify-end gap-3 text-xl">
//               <button className="btn btn-ghost btn-sm hover:bg-[#2d1a10]">
//                 👁
//               </button>

//               <button className="btn btn-ghost btn-sm hover:bg-[#2d1a10]">
//                 ✏️
//               </button>

//               <button className="btn btn-ghost btn-sm text-red-500 hover:bg-[#2d1a10]">
//                 🗑
//               </button>
//             </div>
//           </td>
//         </tr>
//       </tbody>
//     </table>
//   </div>
// </div>
//     </div>
  );
};

export default MyListingsPage;