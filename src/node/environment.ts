export const getEnvironmentVariable = (key: string): string => {
  const value = process.env[key];
  if (value === undefined) {
    throw new Error(`Environment variable is missing: [${key}].`);
  }
  return value;
};
