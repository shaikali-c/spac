import { useRef, useState } from "react";
import AccountInput from "./input";
import FormSuccess from "./success";
import { UserData } from "@/models/userData";
import { loginUser } from "@/models/loginUser";
import { errors } from "@/constants/errors";
import FormError from "./formError";
import { LoaderCircle } from "lucide-react";

export default function AccountLoginTab() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    const _email = emailRef.current.value;
    const _password = passwordRef.current.value;

    if (_email.length < 3) return setErr(errors["user404"]);
    else if (_password.length < 8) return setErr(errors["password"]);
    else setErr(false);

    const user = new UserData(_email, _password);
    setLoading(true);
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
      {!err ? <FormSuccess /> : <FormError errMsg={err} />}
      <button
        className="w-full bg-sky-600 py-3 px-5 rounded-md hover:bg-sky-800 cursor-pointer flex items-center gap-1 justify-center"
        onClick={handleSubmit}
      >
        {loading && <LoaderCircle className="animate-spin" size={22} />}
        {loading ? "Logging in" : "Login"}
      </button>
    </section>
  );
}
