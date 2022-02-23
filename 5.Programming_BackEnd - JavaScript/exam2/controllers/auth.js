const router = require('express').Router();
const { isGuest, isUser } = require('../middleware/guards');
const { register, login } = require('../services/user');
const mapErrors = require('../utils/mappers');

router.get('/register', isGuest(), (req, res) => {
  res.render('register');
});

router.post('/register', isGuest(), async (req, res) => {
  try {
    if (req.body.password.trim() == '') {
      throw new Error('Password is required');
    } else if (req.body.password != req.body.repeatPassword) {
      throw new Error('Password don`t match');
    }

    const user = await register(
      req.body.email,
      req.body.password,
      req.body.gender
    );
    req.session.user = user;
    res.redirect('/');
  } catch (error) {
    const errors = mapErrors(error);
    // data = {
    //   email: req.body.email,
    // };
    res.render('register', {
      data: { email: req.body.email, gender: req.body.gender },
      errors,
    });
  }
});
router.get('/login', isGuest(), (req, res) => {
  res.render('login');
});
router.post('/login', isGuest(), async (req, res) => {
  try {
    const user = await login(req.body.email, req.body.password);
    req.session.user = user;
    res.redirect('/');
  } catch (err) {
    console.error(err);
    const errors = mapErrors(err);
    res.render('login', { data: { email: req.body.email }, errors });
  }
});

router.get('/logout', isUser(), (req, res) => {
  delete req.session.user;
  res.redirect('/');
});

module.exports = router;
