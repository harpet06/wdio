describe('bbc sport test 1', () => {
  it('takes a screenshot of a page', () => {
    browser.url('https://www.test.bbc.co.uk/sport/weightlifting/')
    browser.saveAndDiffScreenshot('sport test image');
    expect('../reports/blah').toBeFalsy; 
});
});
