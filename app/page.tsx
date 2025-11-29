"use client";

import Form from '@rjsf/react-bootstrap';
import { RJSFSchema } from '@rjsf/utils';
import validator from '@rjsf/validator-ajv8';
const schema: RJSFSchema = {
  title: 'Todo',
  type: 'object',
  required: ['title'],
  properties: {
    title: { type: 'string', title: 'Title', default: 'A new task' },
    done: { type: 'boolean', title: 'Done?', default: false },
  },
};

const log = (type: string) => console.log.bind(console, type);

export default function Home() {
  return (
    <Form
      schema={schema}
      validator={validator}
      onChange={log('changed')}
      onSubmit={log('submitted')}
      onError={log('errors')}
    />
  );
}
