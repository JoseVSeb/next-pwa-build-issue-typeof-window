/**
 * FIXME: `typeof window` being compiled to `object` at build time.
 * however, the code runs in service worker, `typeof window` should be `undefined`.
 */
console.log("typeof window:", typeof window)