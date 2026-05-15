const stripTrailingSlashes = (value: string) => value.replace(/\/+$/, '');

export const API_BASE_URL = stripTrailingSlashes(import.meta.env.VITE_API_BASE_URL ?? '');
