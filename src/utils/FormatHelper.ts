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
    return this;
  }
}

export const formatMoney = (n: number) => new MoneyBuilder(n);
export const formatDate = (s: string) => new DateBuilder(s);

/* formatMoney(34535432.34).getString().result(); */
/* formatMoney(34535432.34).getString().addCurrency('₽').result(); */
