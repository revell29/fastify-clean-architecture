import AuthPlugin from '~/infrastructure/plugins/auth.plugin'
import App from '~/infrastructure/webserver/server'
import AuthRoute from '~/interface/routes/auth.route'

export const app = new App({
  plugins: [AuthPlugin],
  routes: [AuthRoute],
})

app.listen()
