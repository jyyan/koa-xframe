const canBe = ['DENY', 'SAMEORIGIN'];

const xFrame = (value = 'DENY') => {
  if (! (~canBe.indexOf(value) || ~value.indexOf('ALLOW-FROM'))) {
    throw new Error('X-Frame-Options value \'' + value + '\' is not allowed. Expected \'DENY\' or \'SAMEORIGIN\' or \'ALLOW-FROM uri\'');
  }

  return async (ctx, next) => {
    await next();
    // headers necessary for HTML pages & All Assets
    ctx.response.set('X-Frame-Options', value);
  }
}

export default xFrame;
