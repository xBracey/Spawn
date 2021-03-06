import { IAppSettings } from './AppSettings';

class BantrSettings implements IAppSettings {
  public clientAppId = 'app_id_here'
  public apiRoot = process.env.API_ROOT || 'http://localhost:3000';
  public clientAppName = process.env.CLIENT_APP_NAME;
  public clientAppVersion = process.env.CLIENT_APP_VERSION;
  public faceitApiRoot = 'https://open.faceit.com/data/v4/';
  public faceitApiKey = process.env.FACEIT_API_KEY;
}

export const bantrSettings = new BantrSettings();
