import BookingForm from "@/Components/BookingForm"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import getUserProfile from "@/libs/getUserProfile"

export default async function Booking() {

  const session = await getServerSession( authOptions )
  if(!session || !session.user.token){
      return null
  }

  const profile = await getUserProfile(session.user.token)
  var createdAt = new Date(profile.data.createdAt)

  return (
    <main className="bg-neutral-200 p-5">
      <table className="mx-2 table-auto border-separate border-spacing-3 font-bold"><tbody>
        <tr><td>Name</td><td>{profile.data.name}</td></tr>
        <tr><td>Email</td><td>{profile.data.email}</td></tr>
        <tr><td>Tel.</td><td>{profile.data.tel}</td></tr>
        <tr><td>Member Since</td><td>{createdAt.toString()}</td></tr>
      </tbody></table>
      <BookingForm />
    </main>
  )
}