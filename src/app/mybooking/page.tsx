'use client'
import BookingCart from "@/Components/BookingCart"
import { useAppSelector } from "@/redux/store"

export default function MyBookingPage() {

    const bookingItems = useAppSelector(state => state.bookSlice.bookingItems)

    return (
        <main className="min-h-screen bg-neutral-300">
        {bookingItems.length ?
            <BookingCart />
            :
            <div className="bg-slate-200 rounded px-5 mx-5 mt-5 py-4 text-2xl">
                “No Vaccine Booking”
            </div>
        }
        </main>
    )
}