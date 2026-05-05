import type { ComponentPropsWithoutRef, ReactNode } from 'react';

type MDXComponents = Record<string, (props: Record<string, unknown>) => ReactNode>;

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    code: (props: ComponentPropsWithoutRef<'code'>) => {
      const { children, className, ...rest } = props;

      // If it's a code block (has className), render as styled pre>code
      if (className) {
        return (
          <pre className="overflow-x-auto rounded bg-onyx border border-glass-border p-4 my-4">
            <code
              {...rest}
              className={`${className} font-mono text-sm text-secondary`}
            >
              {children}
            </code>
          </pre>
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
    pre: (props: ComponentPropsWithoutRef<'pre'>) => {
      return <>{props.children}</>;
    },
    a: (props: ComponentPropsWithoutRef<'a'>) => {
      return (
        <a
          {...props}
          className="text-memory-blue hover:text-neural-purple hover:underline transition-colors"
        />
      );
    },
    h1: (props: ComponentPropsWithoutRef<'h1'>) => {
      return (
        <h1
          {...props}
          className="text-4xl font-bold mb-6 text-gradient mt-8 first:mt-0"
        />
      );
    },
    h2: (props: ComponentPropsWithoutRef<'h2'>) => {
      return (
        <h2
          {...props}
          className="text-3xl font-semibold mb-4 mt-8 text-white"
        />
      );
    },
    h3: (props: ComponentPropsWithoutRef<'h3'>) => {
      return (
        <h3
          {...props}
          className="text-2xl font-semibold mb-3 mt-6 text-white"
        />
      );
    },
    blockquote: (props: ComponentPropsWithoutRef<'blockquote'>) => {
      return (
        <blockquote
          {...props}
          className="border-l-4 border-neural-purple pl-4 py-2 my-4 bg-onyx/50 rounded-r"
        />
      );
    },
    table: (props: ComponentPropsWithoutRef<'table'>) => {
      return (
        <div className="overflow-x-auto my-6">
          <table
            {...props}
            className="w-full border-collapse border border-glass-border clip-md"
          />
        </div>
      );
    },
    th: (props: ComponentPropsWithoutRef<'th'>) => {
      return (
        <th
          {...props}
          className="bg-onyx border border-glass-border px-4 py-2 text-left font-semibold text-neural-purple"
        />
      );
    },
    td: (props: ComponentPropsWithoutRef<'td'>) => {
      return (
        <td
          {...props}
          className="border border-glass-border px-4 py-2 text-secondary"
        />
      );
    },
  };
}


