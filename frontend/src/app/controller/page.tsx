"use client";

export default function Controller() {
  return (
    <div>
      <div>
        <button
          type="button"
          onClick={() => fetch("/api/refresh")}
          className="bg-amber-200 p-4"
        >
          갱신하기
        </button>
        <button
          type="button"
          onClick={() => {
            const isConfirm = confirm("기준점수를 리셋하시려는게 맞으신가요?");
            isConfirm ? fetch("/api/set-start") : "";
          }}
          className="bg-orange-200 p-4"
        >
          기준점수 설정하기
        </button>
      </div>
      <iframe src="/" title="widget preview" className="w-125 h-50"></iframe>
    </div>
  );
}
