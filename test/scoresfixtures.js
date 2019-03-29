describe('bbc sport test 2', () => {
    it('scores and fixtures', () => {
      browser.url('https://www.test.bbc.co.uk/sport/football/scores-fixtures')
      browser.execute(() => document.getElementById("bbcprivacy").style.display = "none");
      browser.execute(() => document.getElementById("orb-header").style.display = "none")
      browser.execute(() => document.getElementById("orb-footer").style.display = "none")
      const scoreBox = $("input#downshift-0-input");
      scoreBox.setValue('Liverpool');
    browser.saveAndDiffScreenshot('scoresandfixtures');
  });
  });
  