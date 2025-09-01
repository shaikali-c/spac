import AccountInput from "./input";
import FormSuccess from "./success";

export default function AccountLoginTab() {
  return (
    <section className="flex flex-col gap-5">
      <section className="mt-5 flex flex-col gap-5">
        <AccountInput placeholder={"Email Address or Username"} />
        <AccountInput placeholder={"Password"} />
      </section>

      <FormSuccess />
      {/* <FormError errMsg={"Username already taken!"} /> */}
      {/* <div className="text-sm text-neutral-400 flex gap-1 md:items-center">
              <Check size={17} className="mt-0.5 md:mt-0" />
              <p>
                By creating an account you agree to{" "}
                <span className="text-neutral-300 underline">
                  terms & conditions.
                </span>
              </p>
            </div> */}
      <button className="w-full bg-sky-600 py-3 px-5 rounded-md hover:bg-sky-800 cursor-pointer">
        Create
      </button>
    </section>
  );
}
