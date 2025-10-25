import Gallery from './gallery';
import Toggle from '../components/Toggle';

import Sidebar from '@/components/Sidebar';

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-#1a1c20 font-sans dark:bg-#1a1c20 ">
      <main className="py-19 flex min-h-screen w-full items-center justify-between  px-16 bg-[#1a1c20] dark:bg-[#1a1c20] sm:items-start ">
        <div className="w-[836px] h-[689px] flex items-center justify-center bg-[#616161]/82 border-[#96BEE7] border-2 rounded-[18.89px]">
          Hello
        </div>

        <div className="h-[730.5px] w-[720px] flex flex-col items-center gap-[20px]  bg-[#1a1c20] ">
          <div className="w-[720px] h-[316px] rounded-[18.89px] bg-[#363C43] flex justify-between  p-4">
            <Sidebar />
            <div className="bg-[#363C43] w-[611px] flex-col justify-between items-center">
              <div>
                <Toggle></Toggle>
              </div>
              <div className="bg-[#363C43] h-[175px] w-full font-jakarta font-weight-400 text-[20px]  my-7 rounded-[23px] text-[#969696]">
                Hello! I’m Dave, your sales rep here from Salesforce. I’ve been
                working at this awesome company for 3 years now.
                <br />
                I was born and
                raised in Albany, NY& have been living in Santa Carla for the
                past 10 years my wife Tiffany and my 4 year old twin daughters-
                Emma and Ella. Both of them are just starting school, so my
                calender is usually blocked between 9-10 AM. This is a...
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="h-16 w-2 bg-gradient-to-b from-[#888989] to-[#4A4E54] rounded-[8px]">

              </div>
            </div>
          </div>
          <div className="bg-[#282828] w-[612px] h-1"></div>

        <div>
            <Gallery></Gallery>
          </div>
        </div>
      </main>
    </div>
  );
}
