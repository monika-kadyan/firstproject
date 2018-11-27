describe('Matchers', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
   });

  it('should match elements by (accesibility) label', async () => {
    await expect(element(by.text('Hello World!'))).toBeVisible();
  });
});
