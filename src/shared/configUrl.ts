interface IConfig {
  // mock development
  mockApiServer: string;
  // dev api
  apiServer: string;
}

const config: IConfig = {
  // mock json-server
  mockApiServer: 'http://localhost:3004',
  // development
  apiServer: 'http://localhost:3000/api/master',
};

if (process.env.REACT_APP_STAGE === 'production') {
  config.apiServer = '/api/master';
}

if (process.env.REACT_APP_STAGE === 'staging') {
  config.apiServer = '/api/master';
  //config.apiServer = 'http://13.127.238.198:9000/api';
}

export default config;
