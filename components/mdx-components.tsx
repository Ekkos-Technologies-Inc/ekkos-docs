import { CodeBlock } from 'fumadocs-ui/components/codeblock';
import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    code: (props) => {
      const { children, className, ...rest } = props;

      // If it's a code block (has className), use CodeBlock
      if (className) {
        return (
          <CodeBlock
            {...rest}
            code={String(children).replace(/\n$/, '')}
            lang={className.replace('language-', '')}
          />
        );
      }

      // Otherwise, it's inline code
      return (
        <code
          {...rest}
          className="px-1.5 py-0.5 rounded bg-onyx border border-glass-border text-neural-purple font-mono text-sm"
        >
          {children}
        </code>
      );
    },
    pre: (props) => {
      // CodeBlock handles its own <pre>, so we shouldn't wrap it
      return <>{props.children}</>;
    },
    a: (props) => {
      return (
        <a
          {...props}
          className="text-memory-blue hover:text-neural-purple hover:underline transition-colors"
        />
      );
    },
    h1: (props) => {
      return (
        <h1
          {...props}
          className="text-4xl font-bold mb-6 text-gradient mt-8 first:mt-0"
        />
      );
    },
    h2: (props) => {
      return (
        <h2
          {...props}
          className="text-3xl font-semibold mb-4 mt-8 text-white"
        />
      );
    },
    h3: (props) => {
      return (
        <h3
          {...props}
          className="text-2xl font-semibold mb-3 mt-6 text-white"
        />
      );
    },
    blockquote: (props) => {
      return (
        <blockquote
          {...props}
          className="border-l-4 border-neural-purple pl-4 py-2 my-4 bg-onyx/50 rounded-r"
        />
      );
    },
    table: (props) => {
      return (
        <div className="overflow-x-auto my-6">
          <table
            {...props}
            className="w-full border-collapse border border-glass-border clip-md"
          />
        </div>
      );
    },
    th: (props) => {
      return (
        <th
          {...props}
          className="bg-onyx border border-glass-border px-4 py-2 text-left font-semibold text-neural-purple"
        />
      );
    },
    td: (props) => {
      return (
        <td
          {...props}
          className="border border-glass-border px-4 py-2 text-secondary"
        />
      );
    },
  };
}


