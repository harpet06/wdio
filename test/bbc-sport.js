describe('bbc sport test 1', () => {
  it('takes a screenshot of a page', () => {
    browser.url('https://www.test.bbc.co.uk/sport/weightlifting/')
    browser.execute(() => document.getElementById("bbcprivacy").style.display = "none");
    browser.execute(() => document.getElementById("orb-header").style.display = "none")
    browser.execute(() => document.getElementById("orb-footer").style.display = "none")
    browser.saveAndDiffScreenshot('sport test image');
});
});
