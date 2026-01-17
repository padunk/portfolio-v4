import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CardWrapper from "./CardWrapper";

type Project = {
  id: string;
  title: string;
  description: string;
  link: string;
  result: string;
};

type ProjectData = {
  id: string;
  title: string;
  projects: Project[];
};

export default function CustomCard({ columns }: { columns: ProjectData[] }) {
  return (
    <>
      {columns.map((column) => {
        return (
          <Card key={column.id} className="mb-6">
            <CardTitle>
              <CardHeader className="text-primary">
                <CardTitle className="uppercase">{column.title}</CardTitle>
              </CardHeader>
              <CardContent>
                {column.projects.map((project) => {
                  return (
                    <CardWrapper key={column.id} link={project.link}>
                      <Card className="mb-6 min-w-[240px] transition-transform duration-300 hover:scale-105 hover:shadow-md">
                        <CardHeader>
                          <CardTitle className="capitalize">
                            {project.title}
                          </CardTitle>
                          <CardDescription className="capitalize">
                            {project.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="flex flex-col gap-6 text-neutral-400 text-sm">
                          <p className="text-sm">
                            {project.result
                              ? project.result
                              : "Result? what result..."}
                          </p>
                        </CardContent>
                      </Card>
                    </CardWrapper>
                  );
                })}
              </CardContent>
            </CardTitle>
          </Card>
        );
      })}
    </>
  );
}
