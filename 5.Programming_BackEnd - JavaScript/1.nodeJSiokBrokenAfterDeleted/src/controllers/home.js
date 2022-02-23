const { loudFragment, render } = require('../view');

module.exports = {
  home(req, res) {
    loudFragment('home', (fragment) => {
      const html = render(fragment, 'Home');
      res.write(html);
      res.end();
    });
  },
};


