import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function AccountPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return <div className="text-center p-10">You must be logged in.</div>;
  }

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">Welcome, {session.user?.name}</h1>
      <p className="text-gray-500">Email: {session.user?.email}</p>
    </div>
  );
}
