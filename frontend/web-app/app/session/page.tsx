import { auth } from "@/auth";
import Heading from "../components/Heading";
import AuthTest from "./AuthTest";

export default async function Session() {
  const session = await auth();

  return (
    <div className="max-w-4xl mx-auto px-4">
      <Heading title="Session dashboard" />

      <div className="bg-blue-200 border-2 border-blue-500 p-4">
        <h3 className="text-lg">Session data</h3>
        <pre className="whitespace-pre-wrap break-all">
          {JSON.stringify(session, null, 2)}
        </pre>
      </div>

      <div className="mt-4">
        <AuthTest />
      </div>
    </div>
  );
}
