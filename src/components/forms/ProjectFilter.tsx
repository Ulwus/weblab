import type { Category, SortField, SortOrder } from '../../../types/project';
import Button from '../Button';

interface ProjectFilterProps {
  search: string;
  onSearchChange: (value: string) => void;
  category: Category | 'all';
  onCategoryChange: (value: Category | 'all') => void;
  sortField: SortField;
  onSortFieldChange: (value: SortField) => void;
  sortOrder: SortOrder;
  onSortOrderChange: (value: SortOrder) => void;
  resultCount: number;
  totalCount: number;
}

const categories: { value: Category | 'all'; label: string }[] = [
  { value: 'all', label: 'Tümü' },
  { value: 'frontend', label: 'Frontend' },
  { value: 'fullstack', label: 'Full Stack' },
  { value: 'backend', label: 'Backend' },
];

export default function ProjectFilter({
  search,
  onSearchChange,
  category,
  onCategoryChange,
  sortField,
  onSortFieldChange,
  sortOrder,
  onSortOrderChange,
  resultCount,
  totalCount,
}: ProjectFilterProps) {
  return (
    <div className="flex flex-col gap-4 mb-10">
      <div>
        <label htmlFor="project-search" className="block font-semibold mb-2 text-slate-600 dark:text-gray-300">
          Proje Ara
        </label>
        <input
          id="project-search"
          type="text"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Başlık, açıklama veya teknoloji ara..."
          className="w-full px-4 py-3 rounded-2xl bg-surface dark:bg-gray-800
            border border-black/5 dark:border-white/10 text-gray-900 dark:text-gray-100
            shadow-neo-in dark:shadow-inner focus:outline-none"
        />
      </div>

      <div className="flex flex-col lg:flex-row lg:items-center gap-4 justify-between">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Kategori filtresi">
          {categories.map((cat) => {
            const isActive = category === cat.value;
            return (
              <Button
                key={cat.value}
                variant={isActive ? 'primary' : 'ghost'}
                size="sm"
                onClick={() => onCategoryChange(cat.value)}
                aria-pressed={isActive}
              >
                {cat.label}
              </Button>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <select
            value={sortField}
            onChange={(e) => onSortFieldChange(e.target.value as SortField)}
            className="px-4 py-3 rounded-2xl bg-surface dark:bg-gray-800
              border border-black/5 dark:border-white/10 text-gray-900 dark:text-gray-100
              shadow-neo-in dark:shadow-inner focus:outline-none"
            aria-label="Sıralama alanı"
          >
            <option value="year">Yıl</option>
            <option value="title">Başlık</option>
          </select>

          <Button
            variant="secondary"
            size="sm"
            onClick={() => onSortOrderChange(sortOrder === 'asc' ? 'desc' : 'asc')}
            aria-label="Sıralama yönünü değiştir"
          >
            {sortOrder === 'asc' ? 'A-Z' : 'Z-A'}
          </Button>
        </div>
      </div>

      <p className="text-sm text-slate-600 dark:text-gray-400">
        {resultCount} / {totalCount} proje gösteriliyor
      </p>
    </div>
  );
}

