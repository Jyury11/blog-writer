export default function WriterList(props) {
    const target = props.writers.sort((a,b) =>{
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
            <h2 className="flex rounded justify-center items-center bg-blue-800 text-white m-10 text-2xl">
                {props.title}
            </h2>
            <h2 className="container mx-auto text-center w-1/2 border-b border-solid border-gray-300 text-black m-10 text-2xl">
                {target[0].name}
            </h2>
        </div>
    )
}