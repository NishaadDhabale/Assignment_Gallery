import Gallery from './gallery';
import TextBox from './Text';

export default function Home() {
  return (

    <div className="flex min-h-screen items-center justify-center bg-[#1a1c20] font-sans ">

      <main className="flex w-full items-start justify-between px-16 bg-[#1a1c20] dark:bg-[#1a1c20]">
        <div className="w-[836px] h-[689px] flex items-center justify-center bg-[#616161]/82 border-[#96BEE7] border-2 rounded-[18.89px]">
          Nishaad Dhabale
        </div>

        <div className="h-[730.5px] w-[720px] flex flex-col items-center gap-4 bg-[#1a1c20]">
          <TextBox />
          <div>
            <Gallery />
          </div>
        </div>
      </main>
    </div>
  );
}