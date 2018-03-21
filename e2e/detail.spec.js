describe('Detail', () => {
    beforeEach(async () => {
        await device.reloadReactNative();
        await element(by.id('BeerListItem')).atIndex(0).tap();
    });

    it('should have a background', async () => {
        await expect(element(by.id('DetailBackground'))).toBeVisible();
    });

    it('should have a title and subtitle', async () => {
        await expect(element(by.id('DetailTitle'))).toBeVisible();
        await expect(element(by.id('DetailSubTitle'))).toBeVisible();
    });

    it('should return to home on return button click', async () => {
        await element(by.traits(['button']).and(by.label('Home'))).tap();
        await expect(element(by.id('BeerList'))).toBeVisible();
    });
});
  