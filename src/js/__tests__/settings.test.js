import SettingsUser from "../setting";

describe('Calss SettingsUser', () => {
  let settingUser;

  beforeEach(() => {
    settingUser = new SettingsUser;
    consolErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {})
  });

  afterEach(() => {
    consolErrorSpy.mockRestore();
  });

  test('checking for non-existent setting name', () => {
    const name = 'volume';
    const value = 'normal'
    settingUser.set(name, value);

    expect(consolErrorSpy).toHaveBeenCalledWith(`Настройка ${name} не существует`);
  });

  test('checking for a non-existent setting value', () => {
    const name = 'music';
    const value = 'hardbass'
    settingUser.set(name, value);

    expect(consolErrorSpy).toHaveBeenCalledWith(`Значение ${value} для настройки ${name} не существует`);
  });

  test('checking that settings changes are saved', () => {
    const name = 'music';
    const value = 'pop'
    settingUser.set(name, value);

    const userSetting = settingUser.getSettings();
    const getSettings = new Map([
      ['theme', 'dark'],
      ['music', 'pop'],
      ['difficulty', 'easy'],
    ])

    expect(Array.from(userSetting)).toEqual(Array.from(getSettings));
  })
})