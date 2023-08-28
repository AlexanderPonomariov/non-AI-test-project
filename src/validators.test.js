import { validate } from './validators'

describe('Validation function', () => {
  test('Should meet requirements', () => {
    expect(validate("Abc123!")).toBe(true);
  });

  test('Should\'t be too long', () => {
    expect(validate("Abc123!", 3)).toBe(false);
  });

  test('Should\'t contain excess whitespace characters', () => {
    expect(validate("Abc 123!")).toBe(false);
    expect(validate(" Abc123!")).toBe(false);
    expect(validate("Abc123! ")).toBe(false);
    expect(validate("     ")).toBe(false);
  });

  test('Should\'t contain tabs or newline', () => {
    expect(validate("Abc\t123!")).toBe(false);
    expect(validate("Abc\n123!")).toBe(false);
  });

  test('Should\'t contain special characters not from the list', () => {
    expect(validate("Abc123±")).toBe(false);
    expect(validate("Abc123§")).toBe(false);
  });

  test('Should contain at least one uppercase letter', () => {
    expect(validate("abc123!")).toBe(false);
  });

  test('Should contain at least one lowercase letter', () => {
    expect(validate("ABC123!")).toBe(false);
  });

  test('Should contain at least one digit', () => {
    expect(validate("Abcdefgh!")).toBe(false);
  });

  test('Should contain at least one special character', () => {
    expect(validate("Abc12345")).toBe(false);
  });
});
