import * as fromOpenBasemapGallery from './map.actions';

describe('loadOpenBasemapGallerys', () => {
  it('should return an action', () => {
    expect(fromOpenBasemapGallery.loadOpenBasemapGallerys().type).toBe('[OpenBasemapGallery] Load OpenBasemapGallerys');
  });
});
