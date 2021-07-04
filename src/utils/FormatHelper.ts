import i18n from './../configs/i18n';

abstract class FormatBuilder {
  prepareFormat: string | null | undefined | number;

  protected constructor(prepareFormat: string) {
    this.prepareFormat = String(prepareFormat);
  }

  result(): string {
    return String(this.prepareFormat);
  }
}

class ValuesBuilder extends FormatBuilder {
  constructor(prepareStr: number) {
    super(String(prepareStr));
  }

  private getParts(value: string): { val: string; rest: string } {
    const val = String(value).split('.')[0];
    const rest = String(value).split('.')[1];
    return { val, rest };
  }

  private getRest(value: number): string {
    let result = '';
    for (let i = 0; i < value; i++) {
      result += '0';
    }
    return result;
  }

  useRest(lengthForCheck: number): ValuesBuilder {
    const { val, rest } = this.getParts(String(this.prepareFormat));
    if (!rest && val.length <= lengthForCheck) {
      this.prepareFormat = `${val}.${this.getRest(lengthForCheck)}`;
    }
    return this;
  }

  getString(): ValuesBuilder {
    if (!this.prepareFormat) {
      this.prepareFormat = '';
    } else {
      const { val, rest } = this.getParts(String(this.prepareFormat));
      const preparedRest = rest ? `.${rest}` : '';
      this.prepareFormat = `${Number(val).toLocaleString('ru')}${preparedRest}`;
    }
    return this;
  }

  addCurrency(currency: string): ValuesBuilder {
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
  return new ValuesBuilder(n)
    .getString()
    .useRest(2)
    .addCurrency(currency)
    .result();
};
export const formatNumber = (n: number) => {
  return new ValuesBuilder(n).getString().useRest(1).result();
};
export const formatDate = (n: number) => {
  return new DateBuilder(n).getDateStatus().result();
};

/*For example*/
/* formatMoney(34535432.34).getString().result(); Аналогично использованию formatNumber */
/* formatMoney(34535432.34).getString().addCurrency('₽').result(); Аналогично использованию formatMoney  */
/* formatDate('06-19-21 12:00:17').getDateStatus().result(); Аналогично использованию formatDate */
