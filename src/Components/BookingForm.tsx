'use client'
import { DatePicker } from '@mui/x-date-pickers'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs'
import { Select, MenuItem } from '@mui/material'
import { useState } from 'react'

export default function BookingForm() {

  const [vaccineDate, setVaccineDate] = useState(null)
  const [hospital, setHospital] = useState("CU")

  return (
    <form className="p-12">
      <div className="space-y-12 border-b border-gray-900/10 pb-6">
          <h2 className="text-2xl font-semibold leading-7 text-gray-900">Vaccine Booking Form</h2>
          <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                First name
              </label>
              <div className="mt-2">
                <input type="text" name='first-name' id="first-name" autoComplete="given-name"
                    className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 
                    shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
                    focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                Last name
              </label>
              <div className="mt-2">
                <input type="text" name='last-name' id="last-name" autoComplete="family-name"
                    className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 
                    shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
                    focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-full">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                National ID
              </label>
              <div className="mt-2">
                <input
                  id="nationalid"
                  name="nationalid"
                  type="text"
                  autoComplete="national-id"
                  className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm 
                  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
                  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-full">
              <label htmlFor="hospital" className="block text-sm font-medium leading-6 text-gray-900">
                Hospital
              </label>
              <div className="mt-[10px]">
                <Select name='hospital' id='hospital' variant='standard' className='h-[2em] w-[400px]' 
                value={hospital} onChange={(e)=>(setHospital(e.target.value))}>
                    <MenuItem value='CU'>Chulalongkorn Hospital</MenuItem>
                    <MenuItem value='RJ'>Rajavithi Hospital</MenuItem>
                    <MenuItem value='TU'>Thammasat University Hospital</MenuItem>
                </Select>
              </div>
            </div>

            <div className="col-span-full">
                <label htmlFor="vaccination-date" className="block text-sm font-medium leading-6 text-gray-900">
                    Book Vaccination Date
                </label>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker className='bg-white' value={vaccineDate}
                    onChange={(value)=>setVaccineDate(value)}/>
                </LocalizationProvider>
                <h2 className='text-base font-semibold leading-7 text-gray-900 pt-5'>
                  Note: Please don't forget to bring your national ID card to the hospital on the day of vaccination.
                </h2>
            </div>
            
          </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6 border-b border-gray-900/10 pb-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button>
        <button type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm 
          hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
          focus-visible:outline-indigo-600">
          Save
        </button>
      </div>
    </form>
  )
}