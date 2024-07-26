import { cn } from "@/lib/utils";
import Status from "@/components/Status";

export default function Equipment({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col rounded-t-lg bg-neutral-900", className)}>
      <div className="mx-4 my-2 flex items-center text-center">
        <h2>装備</h2>
      </div>
      <div className="flex flex-col bg-neutral-800 px-4 py-2">
        <div>
          <p className="text-sm text-muted-foreground">発動中のセット効果</p>
        </div>
        <div className="mx-4 grid max-w-screen-lg grid-cols-3 rounded-t-lg bg-neutral-800 ">
          <div className="mt-2 flex flex-col rounded-lg bg-neutral-850 p-2 col-span-2 border-t border-l border-neutral-600">
            <h2 className="text-sm font-bold">
              &gt; ウッドペッカー・エレクトロ 4/4
            </h2>
            <p className="ml-4 mt-2 text-[8pt] font-light">
              『通常攻撃』、『回避反撃』または『強化特殊スキル』が敵に命中し、なおかつ会心が出た時、それぞれ装備者にバフ効果を1重与える。
            </p>
          </div>
          <Status className="col-span-1 mx-4 my-2 col-span-1" />
        </div>
      </div>
    </div>
  );
}
