export default function EmployerBubble({text}: {text: string}) {
    return (
        <div className="max-w-[120px] py-[9px] px-[15px] rounded-[7px] employer-bubble">
            <span className="text-xs leading-tight font-normal text-[#404040]">
                {text}
            </span>
        </div>
    )
}