describe('home', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });
  
  it('should have a list of beers', async () => {
    await expect(element(by.id('BeerList'))).toBeVisible();
  });

  it('should go to detail on beer touch', async () => {
    await element(by.id('BeerListItem')).atIndex(0).tap();
    await expect(element(by.id('DetailBackground'))).toBeVisible();
  });

  it('should show all beers', async () => {
    await waitFor(element(by.label('Lindemans Kriek'))).toExist().whileElement(by.id('BeerList')).scroll(50, 'down');
    await expect(element(by.label('Lindemans Kriek'))).toExist();
  });
});
