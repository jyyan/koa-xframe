const canBe = ['DENY', 'SAMEORIGIN'];

const xFrame = (value = 'DENY') => {
  if (!~canBe.indexOf(value)) {
    throw new Error(`X-Frame-Options value '${value}' is not allowed. Expected 'DENY' or 'SAMEORIGIN'`);
  }

  return async (ctx, next) => {
    await next();
    // headers only necessary for HTML pages
    const {type} = ctx;
    if (type && ~type.indexOf('text/html')) {
      ctx.response.set('X-Frame-Options', value);
    }
  }
}

export default xFrame;
