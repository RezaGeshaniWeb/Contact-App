import { InboxArrowDownIcon, PhoneIcon, TrashIcon } from "@heroicons/react/16/solid";

export default function CourseItem({ item: { name, lastName, email, phone, id }, setForm }) {
    const deleteHandler = id => setForm(prev => prev.filter(p => p.id != id))

    return (
        <div className="w-full bg-slate-300 p-4 flex justify-between items-center rounded-md flex-wrap">
            <div className="flex items-center *:font-semibold *:text-gray-900 w-[25%]">
                <span>{name} {lastName}</span>
            </div>
            <div className="flex items-center gap-1 w-[40%]">
                <span className="w-[35px] h-[35px] rounded-full bg-white *:w-[70%] flex justify-center items-center">
                    <InboxArrowDownIcon className="text-gray-700" />
                </span>&nbsp;
                <span className="font-semibold text-gray-900">{email}</span>
            </div>
            <div className="flex items-center gap-1 w-[30%]">
                <span className="w-[35px] h-[35px] rounded-full bg-white *:w-[70%] flex justify-center items-center">
                    <PhoneIcon className="text-gray-700" />
                </span>&nbsp;
                <span className="font-semibold text-gray-900">{phone}</span>
            </div>
            <div className="w-[5%]">
                <span onClick={() => deleteHandler(id)} className="w-[35px] h-[35px] rounded-full bg-white *:w-[70%] flex justify-center items-center cursor-pointer">
                    <TrashIcon className="text-gray-700 pointer-events-none" />
                </span>
            </div>
        </div>
    )
}
