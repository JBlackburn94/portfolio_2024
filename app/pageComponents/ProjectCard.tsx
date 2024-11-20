import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  tech: string[];
  description: string;
  buttonLinks: {
    github: string;
    live: string;
  };
}

export default function ProjectCard({
  title,
  tech,
  description,
  buttonLinks,
}: ProjectCardProps) {
  return (
    <>
      <Card className="w-[85vw] md:w-[40vw] overflow-hidden">
        <CardHeader>
          <CardTitle className="text-[2rem]">{title}</CardTitle>
          <CardDescription>
            <ul className="flex flex-wrap gap-2">
              {tech.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </CardDescription>
        </CardHeader>
        <CardContent>{description}</CardContent>
        <CardFooter className="flex gap-4">
          <Button asChild size={"lg"}>
            <Link href={buttonLinks.live} target="_blank">
              Site
            </Link>
          </Button>
          <Button asChild size={"lg"}>
            <Link href={buttonLinks.github} target="_blank">
              Code
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
