export const getRequiredEnvVar = (name: string) => {
  const value = process.env[name];
  if (!value) {
    throw new Error(`${name} environment variable must be set`);
  }
  return value;
};
