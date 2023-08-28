const HAS_AT_LEAST_ONE_DIGIT = '(?=.*\\d)';
const HAS_AT_LEAST_ONE_LOWERCASE_LETTER = '(?=.*[a-z])';
const HAS_AT_LEAST_ONE_UPPERCASE_LETTER = '(?=.*[A-Z])';
const HAS_AT_LEAST_ONE_SPECIAL_CHARACTER = '(?=.*[!\\"#$%&\'()*+,-./:;<=>?@[\\\\\\]^_`{|}~])';
const HAS_MAX_LENGTH = '(?=^.{0,_maxLength_}$)'
const DOESNT_HAVE_SPACES_TABS_NEW_LINES = '(?=^\\S*$)'

export const validate = (string, maxLength) => {
  const regExp = HAS_AT_LEAST_ONE_DIGIT
    + HAS_AT_LEAST_ONE_LOWERCASE_LETTER
    + HAS_AT_LEAST_ONE_UPPERCASE_LETTER
    + HAS_AT_LEAST_ONE_SPECIAL_CHARACTER
    + HAS_MAX_LENGTH.replace('_maxLength_', maxLength)
    + DOESNT_HAVE_SPACES_TABS_NEW_LINES;

  return new RegExp(regExp).test(string);
}
