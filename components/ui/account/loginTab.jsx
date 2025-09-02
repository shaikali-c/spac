import { useRef } from "react";
import AccountInput from "./input";
import FormSuccess from "./success";
import { UserData } from "@/models/userData";
import { loginUser } from "@/models/loginUser";
import { errors } from "@/constants/errors";

export default function AccountLoginTab() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = () => {
    const _email = emailRef.current.value;
    const _password = passwordRef.current.value;

    if (!_email.includes("@")) return console.log(errors["email"]);
    else if (_password.length < 8) return console.log(errors["password"]);

    const user = new UserData(_email, _password);
    loginUser(user);
  };

  return (
    <section className="flex flex-col gap-5">
      <section className="mt-5 flex flex-col gap-5">
        <AccountInput
          placeholder={"Email Address or Username"}
          ref={emailRef}
        />
        <AccountInput placeholder={"Password"} ref={passwordRef} />
      </section>
      <FormSuccess />
      <button
        className="w-full bg-sky-600 py-3 px-5 rounded-md hover:bg-sky-800 cursor-pointer"
        onClick={handleSubmit}
      >
        Login
      </button>
    </section>
  );
}
