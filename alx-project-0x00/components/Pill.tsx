import { PillProps } from "@/interfaces";

const Pill: React.FC<PillProps> = ({title}) => {
  return (
    <div className=" flex justify-center  items-center bg-[#8b5f00] px-3 w-auto h-[27px] rounded-full">
      <p className=" text-sm ">{title}</p>
    </div>
  )
}

export default Pill;