import Sidebar from "@/components/Sidebar";
import Toggle from "@/components/Toggle";

export default function TextBox(){
return(


<>
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
          <div className="bg-[#282828] w-[612px] shadow-black shadow-md rounded-2xl h-1"></div>



</>

)
}