export const environment = {
  production: false,
  hmr: false,
  application: {
    name: 'Themes',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44368',
    clientId: 'Themes_ConsoleTestApp',
    dummyClientSecret: '1q2w3e*',
    scope: 'Themes',
    showDebugInformation: true,
    oidc: false,
    requireHttps: true,
  },
  apis: {
    default: {
      url: 'https://localhost:44354',
    },
  },
  localization: {
    defaultResourceName: 'Themes',
  },
};
