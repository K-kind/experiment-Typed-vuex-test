export default {
  'default': '%sの入力内容にエラーがあります',
  required: '%sは必須です',
  'enum': '%s must be one of %s',
  whitespace: '%sを入力してください',
  date: {
    format: '%s date %s is invalid for format %s',
    parse: '%s date could not be parsed, %s is invalid ',
    invalid: '%s date %s is invalid'
  },
  types: {
    string: '%s is not a %s',
    method: '%s is not a %s (function)',
    array: '%s is not an %s',
    object: '%s is not an %s',
    number: '%s is not a %s',
    date: '%s is not a %s',
    boolean: '%s is not a %s',
    integer: '%s is not an %s',
    float: '%s is not a %s',
    regexp: '%s is not a valid %s',
    email: '無効なメールアドレスです',
    url: '無効なurlです',
    hex: '%s is not a valid %s'
  },
  string: {
    len: '%sは%s文字以内で入力してください',
    min: '%sは%s字以上で入力してください',
    max: '%sは%s字以内で入力してください',
    range: '%sは%sから%s文字で入力してください'
  },
  number: {
    len: '%s must equal %s',
    min: '%s cannot be less than %s',
    max: '%s cannot be greater than %s',
    range: '%s must be between %s and %s'
  },
  array: {
    len: '%s must be exactly %s in length',
    min: '%s cannot be less than %s in length',
    max: '%s cannot be greater than %s in length',
    range: '%s must be between %s and %s in length'
  },
  pattern: {
    mismatch: '%s value %s does not match pattern %s'
  }
}
