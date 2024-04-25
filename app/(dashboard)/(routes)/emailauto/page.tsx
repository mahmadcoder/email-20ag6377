import React from 'react'
import { Input } from "@/components/ui/input";
const EmailAutomation = () => {
  return (
    <div className="main-form flex flex-col">
    <form className=" custom-input-form bg-white p-8 rounded  max-w-md w-full">
        <table className="w-full">
            <tbody>
                <tr>
                    <td className="text-left pr-4">
                        <label className="text-gray-600 font-semibold">
                            Email Receiver
                        </label>
                    </td>
                    <td>
                        <Input
                            type="email"
                            id="username"
                            placeholder="Enter Email"
                            className="custom-input-box border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent w-full rounded-none bg-blue-50"
                        />
                    </td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td className="text-left pr-4">
                        <label className="text-gray-600 font-semibold">
                            Subject
                        </label>
                    </td>
                    <td>
                        <Input
                            type="email"
                            id="username"
                            placeholder="Enter Subject of Email"
                            className="custom-input-box border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent w-full rounded-none bg-blue-50"
                        />
                    </td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td className="text-left pr-4">
                        <label className="text-gray-600 font-semibold">
                            Text
                        </label>
                    </td>
                    <td>
                        <Input
                            type="text"
                            id="username"
                            placeholder="Enter text"
                            className="custom-input-box border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent w-full rounded-none bg-blue-50"
                        />
                    </td>
                </tr>
            </tbody>
        </table>
        <div className="flex justify-end">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-sky-700">Start Email Scrape</button>
        </div>
    </form>
</div>
  )
}

export default EmailAutomation
