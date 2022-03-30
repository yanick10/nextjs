
interface PersonProps {
    name: string
    age: number
    sex: string
}
export function Person({ age, name, sex }: PersonProps) {
    return (
        <div className="p-10 m-5 border border-gray-400 rounded-lg shadow-md hover:bg-red-400 hover:text-white ">
            <div className="">{name}</div>
            <div className="">{age}</div>
            <div className="">{sex}</div>
        </div>

    )
}