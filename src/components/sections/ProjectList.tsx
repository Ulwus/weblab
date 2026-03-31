import { useEffect, useMemo, useState } from 'react';
import type { Category, Project, SortField, SortOrder } from '../../types/project';
import Alert from '../Alert';
import { fetchProjects } from '../../services/projectService';
import { applyFilters } from '../../utils/projectHelpers';
import ProjectFilter from '../forms/ProjectFilter';
import ProjectCard from './ProjectCard';

export default function ProjectList() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<Category | 'all'>('all');
  const [sortField, setSortField] = useState<SortField>('year');
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [retryKey, setRetryKey] = useState(0);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        setError(null);

        const data = await fetchProjects();
        setProjects(data);
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : 'Bilinmeyen hata oluştu');
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [retryKey]);

  const filtered = useMemo(
    () =>
      applyFilters(projects, search, category, sortField, sortOrder),
    [projects, search, category, sortField, sortOrder],
  );

  return (
    <section id="projects" className="mt-20 scroll-mt-28 px-4 pb-6">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-[2.25rem] font-extrabold tracking-[-0.025em]
            flex items-center gap-4 text-gray-900 dark:text-white mb-8"
        >
          <span className="block w-3.5 h-3.5 rounded-full bg-gradient-to-br from-primary to-accent shrink-0" />
          Projelerim
        </h2>

        {error && (
          <div className="mb-6">
            <Alert variant="error" title="Hata">
              {error}
            </Alert>
            <div className="mt-4">
              <button
                type="button"
                onClick={() => setRetryKey((k) => k + 1)}
                className="no-underline font-bold text-primary hover:text-primary-strong"
              >
                Tekrar dene
              </button>
            </div>
          </div>
        )}

        {loading && (
          <div className="flex justify-center py-12">
            <div
              className="animate-spin rounded-full h-10 w-10 border-b-2
                border-primary shadow-neo-in"
            />
          </div>
        )}

        {!loading && !error && (
          <>
            <ProjectFilter
              search={search}
              onSearchChange={setSearch}
              category={category}
              onCategoryChange={setCategory}
              sortField={sortField}
              onSortFieldChange={setSortField}
              sortOrder={sortOrder}
              onSortOrderChange={setSortOrder}
              resultCount={filtered.length}
              totalCount={projects.length}
            />

            {filtered.length === 0 ? (
              <p className="text-center text-slate-600 dark:text-gray-400 py-10">
                Eşleşen proje bulunamadı.
              </p>
            ) : (
              <div
                className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] lg:grid-cols-3
                  gap-8"
              >
                {filtered.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}

