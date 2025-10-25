import QuestionMark from "@/Icons/QuestionMark";
import DragIcon from "./DragIcon";


export default function Sidebar() {
  return (
    <div className="w-6 bg-[#363C43] flex flex-col  items-center">
      <QuestionMark/>
      <div className="flex-1 flex items-center">
        <DragIcon/>
      </div>
    </div>
  );
}
