

import Link from "next/link";
import { Mail, Twitter, Linkedin, Github } from "lucide-react";
import contactData from "../../data/contact/page.json";

export default function ContactPage() {
  const { hero, contactMethods, funFact, backButton } = contactData;

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'mail':
        return <Mail className="w-8 h-8 text-blue-300 mb-2" />;
      case 'twitter':
        return <Twitter className="w-6 h-6 text-blue-300 hover:text-blue-400 transition" />;
      case 'linkedin':
        return <Linkedin className="w-6 h-6 text-blue-300 hover:text-blue-400 transition" />;
      case 'github':
        return <Github className="w-6 h-6 text-blue-300 hover:text-blue-400 transition" />;
      default:
        return null;
    }
  };

  return (
    <main className="flex flex-col items-center justify-center max-w-3xl mx-auto px-4 py-16 text-white min-h-screen">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-600 bg-clip-text text-transparent">
        {hero.title}
      </h1>
      <p className="text-zinc-400 text-center mb-8 text-sm sm:text-base leading-relaxed">
        {hero.description}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
        {contactMethods.map((method: any) => (
          <div key={method.type} className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 hover:border-blue-300 transition-all flex flex-col items-center text-center">
            {method.type === 'email' ? (
              <>
                {getIconComponent(method.icon)}
                <h2 className="text-lg sm:text-xl font-semibold mb-2">{method.title}</h2>
                <Link
                  href={method.link}
                  className="text-gray-400 hover:underline text-sm sm:text-base"
                >
                  {method.text}
                </Link>
              </>
            ) : (
              <>
                <h2 className="text-lg sm:text-xl font-semibold mb-4">{method.title}</h2>
                <div className="flex space-x-6">
                  {method.links.map((link: any) => (
                    <Link key={link.platform} href={link.url} target="_blank">
                      {getIconComponent(link.icon)}
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      <p className="text-zinc-500 mt-12 text-center text-sm sm:text-base leading-relaxed">
        {funFact.text}
      </p>

      <div className="mt-12">
        <Link
          href={backButton.href}
          className="bg-zinc-800 hover:bg-zinc-700 px-6 py-3 rounded-lg transition text-sm sm:text-base"
        >
          {backButton.text}
        </Link>
      </div>
    </main>
  );
}
