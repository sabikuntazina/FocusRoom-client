import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Link from 'next/link';
import React from 'react';

const MyBookingsPage =async () => {
  const session = await auth.api.getSession({
    headers: await headers() // you need to pass the headers object.
})

const user= session?.user;
// console.log(user)

  const res =await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings/${user?.id}`);
  const bookings =await res.json();
  console.log(bookings)
  const today = new Date();
  return (
    <div>
     <div className="min-h-screen bg-[#0b0502] text-white p-6 md:p-10">
      {/* Header */}
      <div className="mb-10">
        <p className="uppercase tracking-[4px] text-sm text-[#b28b5c] mb-2">
          Reservations
        </p>

        <h1 className="text-5xl font-serif text-[#f8f1e7]">
          My Bookings
        </h1>
      </div>

      {/* Empty State */}
      {bookings.length === 0 ? (
        <div className="bg-[#140b05] border border-[#3b2618] rounded-[32px] p-14 text-center">
          <h2 className="text-3xl font-serif text-[#f8f1e7] mb-4">
            You have no bookings yet.
          </h2>

          <p className="text-gray-400 mb-8">
            Start exploring study rooms and reserve your
            focus zone.
          </p>

          <Link
            href="/rooms"
            className="btn rounded-full bg-[#d89c3d] border-none text-black hover:bg-[#e4aa4b] px-8"
          >
            Browse Rooms
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          {bookings.map((booking) => {
            const bookingDate = new Date(booking.date);

            const canCancel =
              booking.status === "confirmed" &&
              bookingDate >= today;

            return (
              <div
                key={booking._id}
                className="bg-[#140b05] border border-[#3b2618] rounded-[32px] p-6"
              >
                <div className="flex flex-col lg:flex-row gap-6 lg:items-center lg:justify-between">
                  {/* Left */}
                  <div className="flex flex-col md:flex-row gap-5 md:items-center">
                    {/* Image */}
                    <div className="avatar">
                      <div className="w-28 h-28 rounded-3xl">
                        <img
                          src={booking.image}
                          alt={booking.roomName}
                        />
                      </div>
                    </div>

                    {/* Info */}
                    <div>
                      <h2 className="text-3xl font-serif text-[#f8f1e7] mb-2">
                        {booking.roomName}
                      </h2>

                      <div className="space-y-1 text-gray-300">
                        <p>
                          Date:{" "}
                          <span className="text-white">
                            {booking.date}
                          </span>
                        </p>

                        <p>
                          Time:{" "}
                          <span className="text-white">
                            {booking.startTime} -{" "}
                            {booking.endTime}
                          </span>
                        </p>

                        <p>
                          Total Cost:{" "}
                          <span className="text-[#e6b04d] font-semibold">
                            ${booking.totalCost}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right */}
                  <div className="flex flex-col items-start lg:items-end gap-4">
                    {/* Status */}
                    <div
                      className={`badge px-5 py-4 border-none text-white ${
                        booking.status === "confirmed"
                          ? "bg-green-600"
                          : "bg-red-600"
                      }`}
                    >
                      {booking.status}
                    </div>

                    {/* Cancel Button */}
                    
                      <button className="btn rounded-full bg-red-600 border-none text-white hover:bg-red-700 px-7">
                        Cancel Booking
                      </button>
                    
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
    </div>
  );
};

export default MyBookingsPage;