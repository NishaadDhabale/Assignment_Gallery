import Sidebar from '@/components/Sidebar';
import LeftIcon from '@/Icons/LeftIcon';
import PlusIcon from '@/Icons/PlusIcon';
import RightIcon from '@/Icons/RightIcon';
import Image from 'next/image';

export default function Gallery() {
  return (
    <div className="flex flex-col gap-y-5 items-center justify-between">
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
                className="w-[131.32px] h-[46px] bg-gradient-to-b from-[#6F787C] to-[#303439] rounded-3xl flex items-center justify-center"
              >
                <PlusIcon />
                Add Image
              </span>
              <span className="flex w-[100px] justify-between">
                <span
                  id="lefticongradient"
                  className="flex w-[45px] h-[45px] justify-center items-center bg-gradient-to-tl  from-[#161718] to-[#303439] rounded-full"
                >
                  <LeftIcon />
                </span>

                <span className="flex w-[45px] h-[45px] justify-center items-center bg-gradient-to-tl  from-[#161718] to-[#303439] rounded-full">
                  <RightIcon />
                </span>
              </span>
            </div>
          </div>
          <div className=" h-[175px] w-full  flex gap-5 my-9 rounded-[23px] ">
            <div className="relative w-[190px] h-[179px] overflow-hidden rounded-lg ">
              <Image
                src="/image.jpg"
                alt="image"
                fill
                className="rounded-2xl"
              />
            </div>
            <div className="relative w-[190px] h-[179px] overflow-hidden rounded-lg ">
              <Image
                src="/image.jpg"
                alt="image"
                fill
                className="rounded-2xl"
              />
            </div>
            <div className="relative w-[190px] h-[179px] overflow-hidden rounded-lg ">
              <Image
                src="/image.jpg"
                alt="image"
                fill
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
        <div className="bg-[#363C43] w-4"></div>
      </div>

      <div className="bg-[#282828] w-[612px] h-1"></div>
    </div>
  );
}
