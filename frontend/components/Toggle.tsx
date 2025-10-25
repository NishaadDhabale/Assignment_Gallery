export default function Toggle() {
  return (
    <div className="h-[62px] bg-[#000000]  flex justify-between w-[611px] rounded-[23px] p-2 ">
      <div className="bg-[#171717] w-[195px] rounded-2xl flex items-center justify-center">
        left
      </div>
      <div className="bg-[#000000] rounded-2xl w-[195px] h-[49px] flex items-center justify-center">
        center
      </div>
      <div className="bg-[#000000] flex justify-center items-center rounded-2xl w-[195px] h-[49px] ">
        right
      </div>
    </div>
  );
}
