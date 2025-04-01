import CourseItem from "./CourseItem";

export default function ContactList({ form, setForm }) {
    return (
        <section className="mx-auto w-[90%] lg:w-[900px] mt-8 pb-10">
            <h2 className="font-bold text-[#304ffe] text-xl mb-4">Contacts List</h2>
            <div className="w-full overflow-hidden rounded-lg bg-white" style={{ padding: form.length ? '20px' : '0' }}>
                {
                    form.length
                        ?
                        <div className="flex flex-col gap-5">
                            {
                                form.map(item => {
                                    return (<CourseItem key={item.id} item={item} setForm={setForm} />)
                                })
                            }
                        </div>
                        :
                        <p className="text-center p-6 bg-slate-300 font-semibold text-lg text-slate-800 rounded-lg">No Contact Yet!</p>

                }
            </div>
        </section>
    )
}
