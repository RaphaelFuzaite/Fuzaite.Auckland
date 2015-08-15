'use strict';

module.exports = {
  App: {
    Title: 'Fuzaite.Auckland | Gerenciador Financeiro de Projetos',
    Description: 'Gerenciamento de finanças de projetos pessoais para a conquista de metas pré-estabelecidas',
    Keywords: 'gerenciamento de finanças, fuzaite',
    googleAnalyticsTrackingID: process.env.GOOGLE_ANALYTICS_TRACKING_ID || 'GOOGLE_ANALYTICS_TRACKING_ID'
  },
  Port: process.env.PORT || 3000,
  TemplateEngine: 'swig',
  SessionSecret: 'Auckland',
  SessionCollection: 'sessions',
  Logo: 'Modules/Base/Img/logo.png',
  favicon: 'Modules/Base/Img/favicon.ico'
};
