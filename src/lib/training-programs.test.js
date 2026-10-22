import { describe, expect, test } from "bun:test";
import { educationalPrograms } from "./training-programs";

describe("independent educational programs", () => {
  test("fundamentals has 12 modules and 12 two-hour sessions totaling 24 hours", () => {
    const program = educationalPrograms[0];
    expect(program?.modules.length).toBe(12);
    expect(program?.sessions).toBe(12);
    expect(program?.sessionHours).toBe(2);
    expect(program?.hours).toBe(24);
    expect((program?.sessions ?? 0) * (program?.sessionHours ?? 0)).toBe(24);
  });
  test("workshops has four modules and four three-hour workshops totaling 12 hours", () => {
    const program = educationalPrograms[1];
    expect(program?.modules.length).toBe(4);
    expect(program?.sessions).toBe(4);
    expect(program?.sessionHours).toBe(3);
    expect(program?.hours).toBe(12);
    expect((program?.sessions ?? 0) * (program?.sessionHours ?? 0)).toBe(12);
  });
  test("workshops dedicate 75 to 80 percent to practice", () => {
    expect(educationalPrograms[1]?.practicalPercent).toEqual([75, 80]);
  });
  test("neither program contains commercial pricing data", () => {
    for (const program of educationalPrograms) {
      expect(Object.keys(program)).not.toContain("price");
      expect(JSON.stringify(program)).not.toMatch(/₾|VAT|10[ ,]?000|6[ ,]?000|ღირებულება:/i);
    }
  });
});