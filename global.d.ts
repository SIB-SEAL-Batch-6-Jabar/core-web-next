import en from "./messages/en.json";

type Messages = typeof en;
type TestMessage = typeof en.test;

declare global {
  // Use type safe message keys with `next-intl`
  interface IntlMessages extends Messages {}

  interface TestMessages extends TestMessage {}
}
