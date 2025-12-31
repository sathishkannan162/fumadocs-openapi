import { source } from '@/lib/source';
import { DocsLayout } from '@/components/layout/docs';
import { baseOptions } from '@/lib/layout.shared';
import { AISearchPanel } from '@/components/aiSearch';

export default function Layout({ children }: LayoutProps<'/docs'>) {
  return (
    <DocsLayout tree={source.pageTree} {...baseOptions()}>
      <AISearchPanel />
      {children}
    </DocsLayout>
  );
}
