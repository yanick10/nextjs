import { Dialog } from "@headlessui/react"
import { readFileSync } from "fs"

interface Props { open: boolean, onClose: Function }


export const RegisterForm = ({ open, onClose }: Props) => {
    return (
        <>
            <Dialog
                open={open}
                onClose={() => onClose}
                className="fixed inset-0 z-10 overflow-y-auto"
            >
                <div className="flex items-center justify-center min-h-screen">
                    <Dialog.Overlay className="fixed inset-0 bg-black opacity-70" />
                    <div className="relative">
                        <form action="" className="p-10 mx-auto space-y-10 bg-white border rounded-lg shadow-md">
                            {/* <button className="absolute top-0 right-0" onClick={() => onClose}>X</button> */}
                            <div className="space-y-5 text-center">
                                <h1 className="text-3xl font-bold ">
                                    <span className="text-gray-700">Become A</span>
                                    <span className="text-lime-600"> Climate </span>
                                    <span className="text-blue-400"> Hub </span>
                                    <span className="text-gray-700">Member</span>
                                </h1>
                                <p className="">Please provide All Required Details To register your Business with Us</p>
                            </div>
                            <div className="space-y-5">
                                <div className="grid grid-cols-4 gap-x-5">
                                    <label className="">Busineess Owner</label>
                                    <div className="flex col-span-3 space-x-2 ">
                                        <input className="w-full p-2 bg-gray-100 border rounded-none focus:outline-none"></input>
                                        <input className="w-full p-2 bg-gray-100 border rounded-none focus:outline-none"></input>
                                    </div>

                                </div>

                                <div className="grid grid-cols-4 gap-x-5">
                                    <label className="">Username</label>
                                    <div className="flex col-span-3 space-x-2 ">
                                        <input className="w-full p-2 bg-gray-100 border rounded-none focus:outline-none "></input>
                                    </div>
                                </div>
                                <div className="grid grid-cols-4 gap-x-5">
                                    <label className="">Business name</label>
                                    <div className="flex col-span-3 space-x-2 ">
                                        <input className="w-full p-2 bg-gray-100 border rounded-none focus:outline-none "></input>
                                    </div>
                                </div>
                                <div className="grid grid-cols-4 gap-x-5">
                                    <label className="">Contact Number</label>
                                    <div className="flex col-span-3 space-x-2 ">
                                        <input className="w-full p-2 bg-gray-100 border rounded-none focus:outline-none "></input>
                                    </div>
                                </div>
                                <div className="grid grid-cols-4 gap-x-5">
                                    <label className="">Email</label>
                                    <div className="flex col-span-3 space-x-2 ">
                                        <input className="w-full p-2 bg-gray-100 border rounded-none focus:outline-none "></input>
                                    </div>
                                </div>
                                <div className="grid grid-cols-4 gap-x-5">
                                    <label className="">Adsress</label>
                                    <div className="flex col-span-3 space-x-2 ">
                                        <input className="w-full p-2 bg-gray-100 border rounded-none focus:outline-none "></input>
                                    </div>
                                </div>
                                <div className="grid grid-cols-4 gap-x-5">
                                    <label className=""></label>
                                    <div className="flex col-span-3 space-x-2 ">
                                        <select className="w-full p-2 bg-gray-100 border rounded-none focus:outline-none" name="Contry" id=""></select>
                                    </div>
                                </div>

                                <button className="p-2 text-black bg-gray-200 rounded-sm shadow hover:text-white hover:bg-red-600" onClick={() => onClose}>
                                    Fermer
                                </button>



                            </div>
                        </form>
                    </div>
                </div>
            </Dialog>


        </>

    )
}

