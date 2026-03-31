import type { Project } from '../../types/project';
import Card from '../Card';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="w-full">
      <Card
        variant="elevated"
        title={project.title}
        image={project.image}
        imageAlt={`${project.title} ekran görüntüsü`}
      >
        <div className="flex flex-col gap-3">
          {project.featured && (
            <span
              className="inline-flex w-fit px-3 py-1 rounded-full text-xs font-bold
                bg-yellow-100 text-amber-900 border border-black/5 dark:border-white/10"
            >
              Öne Çıkan
            </span>
          )}

          <p className="leading-relaxed text-slate-600 dark:text-gray-300">{project.description}</p>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-full text-xs font-bold text-primary
                  bg-surface dark:bg-gray-800 shadow-neo-in dark:shadow-inner
                  border border-black/5 dark:border-white/10"
              >
                {t}
              </span>
            ))}
          </div>

          <p className="text-sm text-slate-500 dark:text-gray-400">
            {project.year} · {project.category}
          </p>
        </div>
      </Card>
    </article>
  );
}

