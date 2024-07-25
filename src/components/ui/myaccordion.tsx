"use client";

import { useState } from "react";

export default function MyAccordion() {
  const [activeIndex, setActiveIndex] = useState(-1);

  return (
    <div className="space-y-4">
      <Panel
        title="About"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        <p>hogehogehogehoge</p>
      </Panel>
      <Panel
        title="History"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        <p>historyryryryryryry</p>
      </Panel>
    </div>
  );
}

function Panel({
  title,
  children,
  isActive,
  onShow,
}: {
  title: string;
  children: React.ReactNode;
  isActive: boolean;
  onShow: () => void;
}) {
  return (
    <div>
      <h1 className="text-lg font-bold">{title}</h1>
      {isActive ? (
        <>{children}</>
      ) : (
        <button onClick={onShow} className="text-accent-foreground opacity-50">
          Show
        </button>
      )}
    </div>
  );
}
