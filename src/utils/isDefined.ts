export const isDefined = <T>(value: T | null | undefined): value is T =>
  value !== null && value !== undefined;

export const isUndefined = (value: unknown): value is null | undefined =>
  value === null || value === undefined;
