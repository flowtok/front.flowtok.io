enum DateStatuses {
  today = 'Сегодня',
  yesterday = 'Вчера',
  tomorrow = 'Завтра',
}

abstract class FormatBuilder {
  prepareStr: string | null | undefined;

  protected constructor(prepareStr: string) {
    this.prepareStr = prepareStr;
  }

  result(): string {
    return this.prepareStr ?? '';
  }
}

class MoneyBuilder extends FormatBuilder {
  constructor(prepareStr: number) {
    super(String(prepareStr));
  }

  getString(): MoneyBuilder {
    if (!this.prepareStr) {
      this.prepareStr = '';
    } else {
      const val = Number(this.prepareStr.split('.')[0]);
      const rest = this.prepareStr.split('.')[1];
      this.prepareStr = `${val.toLocaleString('ru')}.${rest}`;
    }
    return this;
  }

  addCurrency(currency: string): MoneyBuilder {
    this.prepareStr = `${this.prepareStr}${currency}`;
    return this;
  }
}

class DateBuilder extends FormatBuilder {
  constructor(prepareStr: string) {
    super(prepareStr);
  }

  getDateStatus(): DateBuilder {
    const currentDate = new Date();
    const preparedDate = new Date(this.prepareStr?.toString() ?? '');
    const checkForYear =
      preparedDate.getUTCFullYear() === currentDate.getUTCFullYear();
    const checkForMonth =
      preparedDate.getUTCMonth() === currentDate.getUTCMonth();

    if (checkForYear && checkForMonth) {
      if (preparedDate.getUTCDate() === currentDate.getUTCDate()) {
        this.prepareStr = DateStatuses.today;
      } else if (preparedDate.getUTCDate() === currentDate.getUTCDate() - 1) {
        this.prepareStr = DateStatuses.yesterday;
      } else if (preparedDate.getUTCDate() === currentDate.getUTCDate() + 1) {
        this.prepareStr = DateStatuses.tomorrow;
      }
    }

    return this;
  }
}

export const formatMoney = (n: number) => new MoneyBuilder(n);
export const formatDate = (s: string) => new DateBuilder(s);

/*For example*/
/* formatMoney(34535432.34).getString().result(); */
/* formatMoney(34535432.34).getString().addCurrency('₽').result(); */
/* formatDate('06-19-21 12:00:17').getDateStatus().result(); */
