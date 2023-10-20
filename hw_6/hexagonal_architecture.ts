// Шестигранная архитектура (Hexagonal Architecture) - это архитектурный подход, который способствует созданию модульных, легко расширяемых и тестируемых приложений. В этой архитектуре уделяется особое внимание разделению бизнес-логики от внешних зависимостей.
// Эта архитектура позволяет легко изменять реализацию хранения или доступа к данным без изменения бизнес-логики в классе User. Это дает возможность легкого тестирования и поддержки в будущем.
// Ключевой принцип этой архитектуры заключается в том, что поток управления идет от внешнего слоя (адаптера) к внутреннему слою (бизнес-логике) и обратно, что обеспечивает изоляцию и улучшает гибкость и тестирования системы.

// Тут пример для управления объектами "Пользователь" в системе.

// Интерфейс реализация порта. Может быть выполнена в отдельном слое (адаптере), который зависит от конкретных технологий и фреймворков для доступа к данным (например, реализация на основе SQL-запросов или ORM).
interface IUserRepository {
  save(user: User): void;
  getById(id: number): User | undefined;
  getByEmail(email: string): User | undefined;
  delete(user: User): void;
}

// Основной объект бизнес-логики "Пользователь". Он содержит приватные свойства для хранения идентификатора, полного имени пользователя, электронной почты и пароля.
/* User также содержит методы для получения данных пользователя:
getId - получение идентификатора
getFullname - получение полного имени
getEmail - получение электронной почты
save - сохранение пользователя
delete - удаление пользователя
exists - проверка существования пользователя по электронной почте и паролю
*/
class User {
  private id: number;
  private fullname: string;
  private email: string;
  private password: string;

  constructor(fullname: string, email: string, password: string) {
    this.id = 0;
    this.fullname = fullname;
    this.email = email;
    this.password = password;
  }

  public getId(): number {
    return this.id;
  }

  public getFullname(): string {
    return this.fullname;
  }

  public getEmail(): string {
    return this.email;
  }

  public save(userRepository: IUserRepository): void {
    userRepository.save(this);
  }

  public delete(userRepository: IUserRepository): void {
    userRepository.delete(this);
  }

  public static exists(email: string, password: string, userRepository: IUserRepository): boolean {
    const user = userRepository.getByEmail(email);
    if (user && user.password === password) {
      return true;
    }
    return false;
  }
}

export { User, IUserRepository };
