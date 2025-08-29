import {
    Briefcase,
    Users,
    Code,
    BookOpen,
    Rocket,
    GraduationCap,
  } from "lucide-react";
  import Link from "next/link";
  import workData from "@/data/work/page.json";

  export default function Work() {
    const { hero, timeline, additionalExperience, backButton } = workData;

    const getIconComponent = (iconName: string) => {
      switch (iconName) {
        case 'briefcase':
          return <Briefcase className="w-6 h-6 text-blue-300" />;
        case 'users':
          return <Users className="w-6 h-6 text-blue-300" />;
        case 'code':
          return <Code className="w-6 h-6 text-blue-300" />;
        default:
          return <Briefcase className="w-6 h-6 text-blue-300" />;
      }
    };

    const getIconTypeComponent = (iconType: string) => {
      switch (iconType) {
        case 'rocket':
          return <Rocket className="w-6 h-6 text-blue-300" />;
        case 'book':
          return <BookOpen className="w-6 h-6 text-blue-300" />;
        case 'graduation':
          return <GraduationCap className="w-6 h-6 text-blue-300" />;
        default:
          return <Rocket className="w-6 h-6 text-blue-300" />;
      }
    };

    return (
      <main className="text-white max-w-5xl mx-auto px-4 py-8">
        <div className="mb-16">
          <h1 className="text-3xl lg:text-4xl font-bold mb-8 bg-gradient-to-r from-white to-gray-600 bg-clip-text text-transparent">
            {hero.title}
          </h1>

          <div className="relative border-l border-zinc-700 sm:ml-4 ml-2">
            {timeline.map((item: any, index: number) => (
              <div key={index} className="mb-12 relative sm:pl-8 pl-4">
                <div className="absolute sm:w-4 sm:h-4 w-3 h-3 bg-blue-300 rounded-full sm:-left-[9px] -left-[6px] top-1" />
                <div className="flex items-center gap-4 mb-4">
                  {getIconComponent(item.icon)}
                  <h2 className="text-xl lg:text-2xl font-bold">{item.company}</h2>
                </div>
                <div className="bg-zinc-800 rounded-xl p-6 mb-4 leading-relaxed">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-md lg:text-xl font-semibold">{item.position}</h3>
                      <p className="text-zinc-400 text-sm lg:text-md">
                        {item.location} | {item.duration}
                      </p>
                    </div>
                    {getIconTypeComponent(item.iconType)}
                  </div>
                  <ul className="list-disc pl-6 space-y-3 text-zinc-300 text-sm lg:text-md">
                    {item.responsibilities.map((responsibility: string, index: number) => (
                      <li key={index}>{responsibility}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 mb-12">
            <h2 className="text-xl lg:text-2xl font-bold mb-4">
              {additionalExperience.title}
            </h2>
            <div className="space-y-6">
              {additionalExperience.items.map((item: any) => (
                <div key={item.company} className="bg-zinc-800 rounded-xl p-6 leading-relaxed">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-md lg:text-xl font-semibold">
                        {item.company}
                      </h3>
                      <p className="text-zinc-400 text-sm lg:text-md">
                        {item.position} | {item.location} | {item.duration}
                      </p>
                    </div>
                  </div>
                  <ul className="list-disc pl-6 space-y-3 text-zinc-300 text-sm lg:text-md">
                    {item.responsibilities.map((responsibility: string, index: number) => (
                      <li key={index}>{responsibility}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center mb-12">
            <Link
              href={backButton.href}
              className="bg-zinc-800 hover:bg-zinc-700 px-8 py-3 rounded-lg transition"
            >
              {backButton.text}
            </Link>
          </div>
        </div>
      </main>
    );
  }