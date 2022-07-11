module.exports = (locale = "en-US", currency = "USD", style = "currency") => {
    return new Intl.NumberFormat(locale, {
      style,
      currency
    });
  }