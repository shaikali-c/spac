"use client";

import AccountCreateTab from "@/components/ui/account/createTab";
import AccountHeader from "@/components/ui/account/header";
import AccountLoginTab from "@/components/ui/account/loginTab";
import TabBtn from "@/components/ui/account/tabBtn";
import { useState } from "react";

const tabs = [
  {
    heading: "Let's get started!",
    desc: "Make an account, find friends, and talk about space.",
    action: "Create",
  },
  {
    heading: "Bon retour!",
    desc: "Log in to pick up right where you left off.",
    action: "Login",
  },
];

export default function AccountCreate() {
  const [step, setStep] = useState("Create");
  return (
    <section className="min-h-screen flex items-center justify-center flex-col w-screen transition-all">
      <div className="w-[calc(100%-40px)] max-w-140 bg-neutral-900 rounded-2xl overflow-hidden">
        <header className="grid grid-cols-2">
          {tabs.map((elem) => {
            return (
              <TabBtn
                text={elem.action}
                action={elem.action}
                setStep={setStep}
                active={step === elem.action}
                key={elem.action}
              />
            );
          })}
        </header>
        <section className="p-5 md:p-8 flex flex-col gap-1">
          {step === "Create" ? (
            <>
              <AccountHeader data={tabs[0]} />
              <AccountCreateTab />
            </>
          ) : (
            <>
              <AccountHeader data={tabs[1]} />
              <AccountLoginTab />
            </>
          )}
        </section>
      </div>
    </section>
  );
}
