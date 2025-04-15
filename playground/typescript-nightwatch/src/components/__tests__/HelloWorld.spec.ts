describe('Hello World', function () {
  before((browser) => {
    browser.init()
  })

  it('renders properly', async function () {
    browser.expect.element('h1').text.to.contain('Hello Nightwatch')
  })

  after((browser) => browser.end())
})
