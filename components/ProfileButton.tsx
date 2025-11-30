// "use client";

// import { signIn, signOut } from "next-auth/react";
// import Image from "next/image";
// import type { Session } from "next-auth";

// interface ProfileButtonProps {
//   session: Session | null;
// }

// export default function ProfileButton({ session }: ProfileButtonProps) {
//   if (!session) {
//     return (
//       <div className="flex justify-center items-center gap-3">
//         <button
//           onClick={() => signIn("google")}
//           className="w-20 px-2 py-2 bg-black text-white rounded-xl"
//         >
//           Sign In
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="flex items-center gap-3">
//       {session.user?.image && (
//         <Image
//           src={session.user.image}
//           width={36}
//           height={36}
//           alt="Profile"
//           className="rounded-full"
//         />
//       )}
//       <button
//         onClick={() => signOut()}
//         className="px-3 py-2 bg-red-500 text-white rounded-xl"
//       >
//         Sign Out
//       </button>
//     </div>
//   );
// }

import { FiUser } from "react-icons/fi";

const ProfileButton = () => {
  return (
    <div>
      <FiUser size={24} />
    </div>
  )
}

export default ProfileButton