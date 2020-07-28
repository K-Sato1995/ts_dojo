import { age, nickName } from "../main";

test("age", () => {
  expect(age).toBe(24);
});

test("nickname", () => {
  expect(nickName).toBe("K-Sato");
});
