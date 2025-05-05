/**
 * Check if the current environment is development
 * @returns true if the current environment is development
 */
export const isDevelopment = (): boolean => {
  return process.env.NODE_ENV === 'development';
};

/**
 * Get the base URL for the current environment
 * @returns The base URL for the current environment
 */
export const getBaseUrl = (): string => {
  return isDevelopment() 
    ? 'http://localhost:3000' 
    : 'https://jkappliances.ca';
}; 