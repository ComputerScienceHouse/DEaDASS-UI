import { createUserManager } from 'redux-oidc'

const userManagerConfig = {
  client_id: 'deadass',
  redirect_uri: `${window.location.protocol}//${window.location.hostname}${window.location.port ? `:${window.location.port}` : ''}/callback`,
  response_type: 'token id_token',
  scope: 'openid profile',
  authority: 'https://sso.csh.rit.edu/auth/realms/csh',
  silent_redirect_uri: `${window.location.protocol}//${window.location.hostname}${window.location.port ? `:${window.location.port}` : ''}/silent_renew.html`,
  automaticSilentRenew: true,
  filterProtocolClaims: true,
  loadUserInfo: true
}

const userManager = createUserManager(userManagerConfig)

export default userManager
