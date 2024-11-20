import {
  SiGreensock,
  SiJavascript,
  SiTailwindcss,
  SiTypescript,
  SiPython,
  SiMysql,
  SiFirebase,
  SiGit,
  SiVercel,
} from "react-icons/si";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import { RiNextjsFill, RiReactjsFill } from "react-icons/ri";
import { FaAws } from "react-icons/fa";

const skillsFrontend = [
  {
    id: 1,
    title: "Next.Js",
    icon: <RiNextjsFill className="text-[2.5rem]" />,
  },
  {
    id: 2,
    title: "React",
    icon: <RiReactjsFill className="text-[2.5rem]" />,
  },
  {
    id: 3,
    title: "Typescript",
    icon: <SiTypescript className="text-[2.5rem]" />,
  },
  {
    id: 4,
    title: "JavaScript",
    icon: <SiJavascript className="text-[2.5rem]" />,
  },
  {
    id: 5,
    title: "TailwindCSS",
    icon: <SiTailwindcss className="text-[2.5rem]" />,
  },
  {
    id: 6,
    title: "GSAP",
    icon: <SiGreensock className="text-[2.5rem]" />,
  },
];

const skillsBackend = [
  {
    id: 1,
    title: "Python",
    icon: <SiPython className="text-[2.5rem]" />,
  },
  {
    id: 2,
    title: "MySQL",
    icon: <SiMysql className="text-[2.5rem]" />,
  },
  {
    id: 3,
    title: "Firebase",
    icon: <SiFirebase className="text-[2.5rem]" />,
  },
  {
    id: 4,
    title: "Git",
    icon: <SiGit className="text-[2.5rem]" />,
  },
  {
    id: 5,
    title: "AWS",
    icon: <FaAws className="text-[2.5rem]" />,
  },
  {
    id: 6,
    title: "Vercel",
    icon: <SiVercel className="text-[2.5rem]" />,
  },
];

export default function TechStackCard() {
  return (
    <div>
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account">Frontend</TabsTrigger>
          <TabsTrigger value="password">Backend</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle className="text-[2.986rem]">Frontend</CardTitle>
              <CardDescription>
                Here are the current tools I&apos;m using for frontend
                development.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <ul className="flex flex-col gap-5">
                  {skillsFrontend.map((skill) => (
                    <span key={skill.id} className="flex items-center gap-2">
                      {skill.icon}
                      <li>{skill.title}</li>
                    </span>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="password">
          <Card>
            <CardHeader>
              <CardTitle className="text-[2.986rem]">Backend</CardTitle>
              <CardDescription>
                Here are the tools I&apos;m currently using for backend
                development, hosting and version control.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <ul className="flex flex-col gap-5">
                  {skillsBackend.map((skill) => (
                    <span key={skill.id} className="flex items-center gap-2">
                      {skill.icon}
                      <li>{skill.title}</li>
                    </span>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
