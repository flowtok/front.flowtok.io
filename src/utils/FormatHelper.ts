import i18n from './../i18n';

abstract class FormatBuilder {
  prepareFormat: string | null | undefined | number;

  protected constructor(prepareFormat: string) {
    this.prepareFormat = String(prepareFormat);
  }

  result(): string {
    return String(this.prepareFormat);
  }
}

class MoneyBuilder extends FormatBuilder {
  constructor(prepareStr: number) {
    super(String(prepareStr));
  }

  getString(): MoneyBuilder {
    if (!this.prepareFormat) {
      this.prepareFormat = '';
    } else {
      const val = Number(String(this.prepareFormat).split('.')[0]);
      const rest = String(this.prepareFormat).split('.')[1];
      const preparedRest = rest ? `.${rest}` : '';
      this.prepareFormat = `${val.toLocaleString('ru')}${preparedRest}`;
    }
    return this;
  }

  addCurrency(currency: string): MoneyBuilder {
    this.prepareFormat = `${this.prepareFormat} ${currency}`;
    return this;
  }
}

class DateBuilder extends FormatBuilder {
  constructor(prepareFormat: number) {
    super(String(prepareFormat));
  }

  getDateStatus(): DateBuilder {
    const currentDate = new Date();
    const preparedDate = new Date(Number(this.prepareFormat) * 1000);
    const checkForYear =
      preparedDate.getUTCFullYear() === currentDate.getUTCFullYear();
    const checkForMonth =
      preparedDate.getUTCMonth() === currentDate.getUTCMonth();

    this.prepareFormat = `${DateBuilder.getCorrectDate(
      preparedDate.getUTCDate()
    )}.${DateBuilder.getCorrectDate(
      preparedDate.getUTCMonth() + 1
    )}.${preparedDate.getUTCFullYear()}`;

    if (checkForYear && checkForMonth) {
      if (preparedDate.getUTCDate() === currentDate.getUTCDate()) {
        this.prepareFormat = String(i18n.t('date-status.today'));
      } else if (preparedDate.getUTCDate() === currentDate.getUTCDate() - 1) {
        this.prepareFormat = String(i18n.t('date-status.yesterday'));
      } else if (preparedDate.getUTCDate() === currentDate.getUTCDate() + 1) {
        this.prepareFormat = String(i18n.t('date-status.tomorrow'));
      }
    }

    return this;
  }

  private static getCorrectDate(date: number) {
    if (date.toString().length === 1) return `0${date}`;
    return date;
  }
}

export const formatMoney = (n: number, currency: string) => {
  return new MoneyBuilder(n).getString().addCurrency(currency).result();
};
export const formatNumber = (n: number) => {
  return new MoneyBuilder(n).getString().result();
};
export const formatDate = (n: number) => {
  return new DateBuilder(n).getDateStatus().result();
};

/*For example*/
/* formatMoney(34535432.34).getString().result(); Аналогично использованию formatNumber */
/* formatMoney(34535432.34).getString().addCurrency('₽').result(); Аналогично использованию formatMoney  */
/* formatDate('06-19-21 12:00:17').getDateStatus().result(); Аналогично использованию formatDate */
