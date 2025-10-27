import Gallery from './gallery';
import Toggle from '../components/Toggle';

import Sidebar from '@/components/Sidebar';
import TextBox from './Text';

export default function Home() {
  return (
    <div className="flex  min-h-screen items-center justify-center bg-#1a1c20 font-sans dark:bg-#1a1c20 ">
      <main className="py-19 flex min-h-screen w-full items-center justify-between  px-16 bg-[#1a1c20] dark:bg-[#1a1c20] sm:items-start ">
        <div className="w-[836px] h-[689px] flex items-center justify-center bg-[#616161]/82 border-[#96BEE7] border-2 rounded-[18.89px]">
          Hello
        </div>

        <div className="h-[730.5px] w-[720px] flex flex-col items-center gap-4  bg-[#1a1c20] ">
          <TextBox></TextBox>

        <div>
            <Gallery></Gallery>
          </div>
        </div>
      </main>
    </div>
  );
}
