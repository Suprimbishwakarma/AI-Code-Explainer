import React from "react";
import { useActionState, useState } from "react";
//why useActionState? because it allows you to update state based on the result of a form action.
//introduced in react 19. makes it faster and easier while working with form data.
import { codeExplain } from "../actionstate/index.js";
import Error from "./Error.jsx";
import CodeDetails from "./CodeDetails.jsx";

const Forms = () => {
  const [formState, formAction, isPending] = useActionState(codeExplain, null);
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("Javascript");
  return (
    <div className="w-full max-w-4xl bg-[#00536c] p-6 rounded-2xl shadow-lg">
      <form action={formAction}>
        <label className="block mb-2 font-semibold text-[#eaebed]">
          Language:{" "}
        </label>
        <select
          name="language"
          className="border rounded-lg p-2 w-full mb-4 bg-[#006989] text-[#eaebed]"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="javascript">Javascript</option>
          <option value="go">Go</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
          <option value="rust">Rust</option>
          <option value="typescript">Typescript</option>
        </select>
        <label className="block mb-2 font-semibold text-[#eaebed]">Code:</label>
        <textarea
          name="code"
          placeholder="Paste your code here:"
          className="border rounded-lg w-full p-3 font-mono text-sm bg-transparent min-h-[150px] text-[#eaebed]"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <button
          type="submit"
          disabled={isPending}
          className="mt-4 px-6 py-2 rounded-lg bg-[#011627] text-white font-semibold cursor-pointer transform transition hover:scale-110"
        >
          {isPending ? "Getting there" : "Explain"}
        </button>
      </form>
      {isPending ? (
        <p className="bg-gray-300 my-3 w-64 p-2 rounded-sm">Generating...</p>
      ) : formState?.success ? (
        <CodeDetails details={formState?.data.explanation} />
      ) : (
        formState?.success === false && <Error error={formState?.error} />
      )}
    </div>
  );
};

export default Forms;
