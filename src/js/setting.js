export default class SettingsUser {
  constructor () {
    this.defaultSettings = new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
    ]);

    this.userSetting = new Map();
  }

  set(name, value) {
    if(!this.defaultSettings.has(name)) {
      console.error(`Настройка ${name} не существует`);
      return;
    }

    const validValyes = {
      theme: ['dark', 'light', 'gray'],
      music: ['trance', 'pop', 'rock', 'chillout', 'off'],
      difficulty: ['easy', 'normal', 'hard', 'nightmare'],
    }

    if(!validValyes[name].includes(value)) {
      console.error(`Значение ${value} для настройки ${name} не существует`);
      return;    
    }

    this.userSetting.set(name, value);
  }

  getSettings() {
    return new Map([...this.defaultSettings, ...this.userSetting]);
  }
}

const user = new SettingsUser;

user.set('bobik', 'light');
user.set('difficulty', 'hard')
console.log(user.getSettings());