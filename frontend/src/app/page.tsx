import Image from "next/image";

export default function Widget() {
  return (
    <div className="bg-transparent p-2 h-dvh">
      <div className="bg-black/90 rounded-3xl h-full text-white p-4 flex items-center">
        <Image alt="rank" src={"/platinum.png"} width={115} height={50} />
        <div className="ml-2 pr-6">
          <span className="text-3xl font-bold">TRNokdu</span>
          <p className="text-2xl text-gray-400">플래티넘 4</p>
          <p className="mt-2 text-2xl">
            3690 RP{" "}
            <span className="text-gray-300">
              ( <span className="text-red-500">+1000</span> RP )
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
