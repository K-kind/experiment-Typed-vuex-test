import Vue from 'vue'
import myLibrary from '@k-kind/my-library'
import '@k-kind/my-library/theme/index.css'
// import Element from 'element-ui'
import messagesJa from '~/messages-ja'

import AsyncValidator from 'async-validator'

function deepMerge(target, source) {
  for (const s in source) {
    const value = source[s];
    if (typeof value === 'object' && typeof target[s] === 'object') {
      target[s] = {
        ...target[s],
        ...value,
      };
    } else {
      target[s] = value;
    }
  }
  return target;
}
// AsyncValidator.messages({
//   types: {
//     email: '無効だ'
//   }
// })
// AsyncValidator.messages.types.email = '無効だ'
deepMerge(AsyncValidator.messages, messagesJa)

// console.log(AsyncValidator.messages)
// console.log(AsyncValidator)
// AsyncValidator.messages.required = '%sを入力してください'
// import messages from 'async-validator/lib/messages'
// var Schema = require('async-validate')
//   , messages = require('async-validate/messages')
//   , descriptor = {
//       type: 'object',
//       fields: {
//         name: {
//           type: 'string',
//           required: true
//         }
//       }
//     }
//   , source = {}
//   , schema;

// require('async-validate/plugin/all');

// // change default message in place
// messages.required = '%s is a required field';

// schema = new Schema(descriptor);
// schema.validate(source, function(err, res) {
//   console.dir(res.errors);
// });

Vue.use(myLibrary)
// Vue.use(Element)
