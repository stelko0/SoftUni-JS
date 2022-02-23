import { html } from '../../node_modules/lit-html/lit-html.js';
import { login } from '../api/data.js';

let loginTemplate = (onSubmit) => html`
  <div class="row space-top">
    <div class="col-md-12 centerText">
      <h1>Login User</h1>
      <p>Please fill all fields.</p>
    </div>
  </div>
  <form @submit=${onSubmit}>
    <div class="row space-top center">
      <div class="col-md-4 flex">
        <div class="form-group">
          <label class="form-control-label" for="email">Email</label>
          <input class="form-control" id="email" type="text" name="email" />
        </div>
        <div class="form-group">
          <label class="form-control-label" for="password">Password</label>
          <input
            class="form-control"
            id="password"
            type="password"
            name="password"
          />
        </div>
        <input type="submit" class="btn btn-primary login" value="Login" />
      </div>
    </div>
  </form>
`;

export async function loginPage(ctx) {
  ctx.render(loginTemplate(onSubmit));

  async function onSubmit(event) {
    event.preventDefault();
    let form = new FormData(event.target);
    let email = form.get('email').trim();
    let password = form.get('password').trim();

    await login(email, password);

    ctx.setUserNav();
    ctx.page.redirect('/');
  }
}
