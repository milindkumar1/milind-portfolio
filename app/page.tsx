import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        Hi! I'm Milind &#128075;
      </h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          A software engineer and student studying Computer Science and Physics at the University of Illinois at Urbana-Champaign.
        </p>
      </div>
    </section>
  );
}
