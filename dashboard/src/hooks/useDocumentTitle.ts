import { useEffect } from 'react';

/**
 * Custom hook to set document title dynamically.
 * Automatically appends the Zxkai product name.
 */
export function useDocumentTitle(title: string) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = `${title} | Zxkai`;

    return () => {
      document.title = previousTitle;
    };
  }, [title]);
}
