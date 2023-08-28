const HAS_AT_LEAST_ONE_DIGIT = '(?=.*\\d)';
const HAS_AT_LEAST_ONE_LOWERCASE_LETTER = '(?=.*[a-z])';
const HAS_AT_LEAST_ONE_UPPERCASE_LETTER = '(?=.*[A-Z])';
const HAS_AT_LEAST_ONE_SPECIAL_CHARACTER = '(?=.*[!\\"#$%&\'()*+,-./:;<=>?@[\\\\\\]^_`{|}~])';
const HAS_MAX_LENGTH = '(?=^.{0,_maxLength_}$)'
const DOESNT_HAVE_SPACES_TABS_NEW_LINES = '(?=^\\S*$)'

// TODO: I'd place every RegExp into separate function in order to have possibility to check every condition separately
export const validate = (string, maxLength = 50) => {
  const regExp = HAS_AT_LEAST_ONE_DIGIT
    + HAS_AT_LEAST_ONE_LOWERCASE_LETTER
    + HAS_AT_LEAST_ONE_UPPERCASE_LETTER
    + HAS_AT_LEAST_ONE_SPECIAL_CHARACTER
    + HAS_MAX_LENGTH.replace('_maxLength_', maxLength)
    + DOESNT_HAVE_SPACES_TABS_NEW_LINES;

  return new RegExp(regExp).test(string);
}
