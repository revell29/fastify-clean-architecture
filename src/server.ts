import App from './app'
import AuthRoute from '~/interface/routes/auth.route'
import AuthPlugin from '~/plugins/auth.plugin'

export const app = new App({
  plugins: [AuthPlugin],
  routes: [AuthRoute],
})

app.listen()
