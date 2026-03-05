import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { workshopPhotos } from '@/lib/data';

describe('local image assets', () => {
  test('all workshop photos resolve to files in public/', () => {
    for (const photo of workshopPhotos) {
      expect(photo.src.startsWith('/images/workshop/')).toBe(true);
      expect(existsSync(join(process.cwd(), 'public', photo.src.replace(/^\//, '')))).toBe(true);
    }
  });
});
