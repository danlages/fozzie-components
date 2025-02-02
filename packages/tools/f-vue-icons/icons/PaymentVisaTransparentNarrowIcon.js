import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'PaymentVisaTransparentNarrowIcon',
  props: {},
  functional: true,
  render: function render(h, ctx) {
    var attrs = ctx.data.attrs || {};
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1000 324"
      },
      "class": "c-ficon c-ficon--payment-visa-transparent-narrow"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M379.69 5.73 248.76 319.1h-85.41L98.92 69C95 53.61 91.61 48 79.71 41.48 60.29 30.91 28.22 21 0 14.83l1.92-9.1h137.49c17.53 0 33.28 11.7 37.26 32L210.7 219 294.79 5.72h84.9Zm334.67 211.06c.34-82.71-114-87.27-113.21-124.22.24-11.24 10.91-23.2 34.27-26.25 11.58-1.52 43.48-2.68 79.66 14l14.2-66.46C709.84 6.81 684.82 0 653.7 0c-79.87 0-136.08 42.6-136.56 103.59-.51 45.11 40.12 70.29 70.74 85.28 31.49 15.35 42.06 25.21 41.94 38.95-.22 21-25.12 30.3-48.39 30.66-40.61.63-64.18-11-83-19.79l-14.65 68.66c18.92 8.65 53.77 16.27 89.9 16.65 84.89 0 140.42-42.07 140.68-107.21ZM925.27 319.1H1000L934.77 5.73h-69a36.77 36.77 0 0 0-34.39 23L710.15 319.1H795l16.84-46.81h103.67Zm-90.16-111 42.53-117.7 24.48 117.67ZM495.14 5.73 428.32 319.1h-80.8L414.36 5.73Z",
        fill: "#1434cb"
      }
    })]);
  }
};