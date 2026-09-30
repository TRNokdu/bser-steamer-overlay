"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

interface getData {
  tier: string;
  tier_en: string;
  division: string;
  mmr: number;
  over_mmr: number;
  percentage: string;
}

export default function Widget() {
  const [data, setData] = useState<getData>();
  useEffect(() => {
    fetch("http://localhost:8000/data")
      .then((res) => res.json())
      .then((data) => setData(data.data))
      .catch((err) => console.log(err));
    const fetcher = setInterval(() => {
      fetch("http://localhost:8000/data")
        .then((res) => res.json())
        .then((data) => setData(data.data))
        .catch((err) => console.log(err));
    }, 10000);
    return () => {
      clearInterval(fetcher);
    };
  }, []);

  return (
    <div className="bg-transparent p-2 w-125 h-50">
      <div className="bg-black/90 rounded-3xl h-full text-white p-4 flex items-center">
        <Image
          alt="rank"
          src={`/${data?.tier_en}.png`}
          width={115}
          height={50}
        />
        <div className="ml-2 pr-6">
          <span className="text-3xl font-bold">TRNokdu</span>
          <p className="text-2xl text-gray-400">
            {data?.tier} {data?.division} - {data?.over_mmr} RP
          </p>
          <p className="mt-2 text-2xl">
            {data?.mmr} RP{" "}
            <span className="text-2xl text-gray-400">
              ( 상위 {data?.percentage} )
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
