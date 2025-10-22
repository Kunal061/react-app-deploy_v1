// Portfolio storage - static data only
// No backend storage needed for this portfolio website
// All data is defined in shared/schema.ts

export interface IStorage {
  // Add storage methods here if needed in the future
}

export class MemStorage implements IStorage {
  constructor() {
    // No storage needed for static portfolio
  }
}

export const storage = new MemStorage();
