import TargetSetModal from './TargetSetModal'

export default function WriterList(props) {
    const writers = JSON.parse(JSON.stringify(props.writers))
    const targetPersons = writers.sort((a,b) =>{
            if (a.priority > b.priority) {
                return -1;
            }
            else
            {
                return 1;
            }
        }
    )
    return (
        <div>
            <div className="flex rounded justify-between items-center bg-gradient-to-br from-green-500 to-blue-900 text-white m-2 lg:m-10 text-2xl">
                <h2 className="p-5">
                    {props.title}
                </h2>
                <TargetSetModal target={targetPersons[0]} />
            </div>
            <h2 className="container mx-auto text-center w-1/2 border-b border-solid border-gray-300 text-black m-10 text-2xl">
                {props.target[0].name}
            </h2>
        </div>
    )
}