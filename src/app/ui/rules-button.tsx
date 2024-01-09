export default function RulesButton({ onClick }: any) {
    return (
        <div className="absolute bottom-0 right-0 p-6">
            <button 
            className="py-1 px-7 border border-white text-white tracking-wider rounded-md"
            onClick={onClick}
            >RULES</button>
        </div>
    )
}