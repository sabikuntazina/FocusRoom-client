'use client';

import { deleteRoomAction } from "@/lib/actions";
import { useRouter } from "next/navigation";

import toast from "react-hot-toast";



export default function DeleteRoomModal({ room }) {


const router=useRouter();
    const modalId = `cancel_modal_${room._id}`;
  
    const handleCancel = async () => {
      const res = await fetch(
           `${process.env.NEXT_PUBLIC_SERVER_URL}/rooms/${room._id}`,
           {
             method: "DELETE",
           }
         );
     
         const data = await res.json();
      if(data.deletedCount> 0 ){
       toast.success("Room Deleted successfully!");
  router.push('/my-listings')
    document.getElementById(modalId).close();
     
       }
      
   

 
      }
  return (
    <>
      {/* Open Button */}
      <button
        className="btn rounded-full btn-outline btn-error hover:text-white px-6"
        onClick={() =>
          document.getElementById(modalId).showModal()
        }
      >
        Delete
      </button>

      {/* Modal */}
      <dialog
        id={modalId}
        className="modal"
      >
        <div className="modal-box max-w-xl bg-[#140b05] border border-[#3b2618] rounded-[32px] text-white p-0 overflow-hidden">
          {/* Header */}
          <div className="border-b border-[#2d1b11] p-8">
            <p className="uppercase tracking-[4px] text-sm text-red-400 mb-2">
              Warning
            </p>

            <h3 className="text-4xl font-serif text-[#f8f1e7]">
              Delete Room?
            </h3>
          </div>

          {/* Content */}
          <div className="p-8 space-y-6">
         

            {/* Warning Text */}
            <div className="bg-red-950/30 border border-red-800 rounded-2xl p-5">
              <p className="text-red-200 leading-relaxed">
                Are you sure you want to Delete this
                Room Permanently? This action cannot be undone.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col-reverse md:flex-row justify-end gap-4 pt-2">
              <button
                type="button"
                className="btn bg-[#24140c] border border-[#3b2618] text-white rounded-full hover:bg-[#2e1a10]"
                onClick={() =>
                  document
                    .getElementById(modalId)
                    .close()
                }
              >
                Close
              </button>

              <button
                onClick={handleCancel}
                className="btn rounded-full bg-red-600 border-none text-white hover:bg-red-700 px-8"
              >
                Confirm Delete 
              </button>
            </div>
          </div>
        </div>

        {/* Backdrop */}
        <form
          method="dialog"
          className="modal-backdrop"
        >
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}