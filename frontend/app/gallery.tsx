
import Sidebar from '@/components/Sidebar';
import LeftIcon from '@/Icons/LeftIcon';
import PlusIcon from '@/Icons/PlusIcon';
import RightIcon from '@/Icons/RightIcon';
import Image from 'next/image';

export default function Gallery() {
  return (
    <div className="flex my-1.5 flex-col gap-y-4 items-center justify-between">
      <div className="w-[720px] h-[330px] rounded-[18.89px] bg-[#363C43] flex justify-between  p-4">
        <Sidebar />

        <div className="bg-[#363C43] w-[611px] flex-col justify-between items-center">
          <div className="h-[62px] bg-[#363C43]  items-center flex justify-between w-[614px] rounded-[23px] p-1.5 ">
            <div className="bg-[#111111] w-[149px] h-[62px] rounded-2xl flex items-center justify-center  font-medium text-[20px]">
              Gallery
            </div>

            <div className="w-[270px] flex items-center justify-between ">
              <span
                id="AddImageButton"
                className="w-[131.32px] h-[46px] text-sm font-bold tracking-wider text-slate-300
          bg-gradient-to-br from-[#414650] to-[#3f454c]
          shadow-[8px_8px_16px_#1e2025,_-8px_-8px_16px_#3a3e49]
          transition-all duration-150 ease-in-out
          active:shadow-[inset_4px_4px_8px_#1e2025,_inset_-4px_-4px_8px_#3a3e49]
          active:text-slate-400  rounded-3xl flex items-center justify-center cursor-pointer "
              >
                <PlusIcon />
                ADD IMAGE
              </span>
              <span className="flex w-[100px] bg-linear-30 from-[#171717]/20 to-[#96BEE7]/5 rounded-2xl shadow-2xl justify-between">
                <span
                  id="lefticongradient"
                  className="flex w-[45px] h-[45px] justify-center items-center bg-gradient-to-tl shadow-xl/40 shadow-black from-[#161718] to-[#303439] rounded-full hover:shadow-inner  cursor-pointer"
                >
                  <LeftIcon />
                </span>

                <span className="flex w-[45px] h-[45px] justify-center items-center bg-gradient-to-tl shadow-xl/40 shadow-black from-[#161718] to-[#303439] rounded-full hover:shadow-inner  cursor-pointer">
                  <RightIcon />
                </span>
              </span>
            </div>
          </div>
          <div className="flex w-[611px]  h-[175px]  gap-5 my-9 rounded-[23px]">
            <div className="relative h-[179px] w-[190px] overflow-hidden rounded-lg origin-bottom-left shadow-black hover:shadow-2xl transition-all duration-300 ease-in-out hover:scale-110 hover:-rotate-2">
              <Image
                src="/image.jpg"
                alt="image"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-300 ease-in-out"
              />
            </div>
            <div className="relative h-[179px] w-[190px] overflow-hidden rounded-lg origin-bottom-left transition-all shadow-black hover:shadow-2xl duration-300 ease-in-out hover:scale-110 hover:-rotate-2">
              <Image
                src="/image.jpg"
                alt="image"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-300 ease-in-out"
              />
            </div>
            <div className="relative h-[179px] w-[190px] shadow-black hover:shadow-2xl overflow-hidden rounded-lg origin-bottom-left transition-all duration-300 ease-in-out hover:scale-110 hover:-rotate-2">
              <Image
                src="/image.jpg"
                alt="image"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-300 ease-in-out"
              />
            </div>

          </div>
        </div>
        <div className="bg-[#363C43] w-4"></div>
      </div>

      <div className=" bg-linear-to-b from-[#282828] to-[#F8F8F8]/15 w-[612px] rounded-2xl shadow-black shadow-md h-1"></div>
    </div>
  );
}
