"use server";

import { revalidatePath } from "next/cache";

export const deleteRoomAction = async (roomId) => {


    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/rooms/${roomId}`,
      {
        method: "DELETE",
      }
    );

    const data = await res.json();
 if(data.deletedCount> 0 ){
   revalidatePath("/my-listings");

  }
    
    return {
      success: true,
      data,
    };

 
};