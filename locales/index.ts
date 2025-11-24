import { lang } from '@/locales/vi';

export type ValidationKey = keyof typeof lang;

interface ValidationMessageParams {
  key?: string;
  attribute?: string;
  format?: string;
  values?: Record<string, string | number>;
}

export const i18n = ({ key, attribute, format, values }: ValidationMessageParams): string => {
  if (!key) return "";
  let message = lang[key as ValidationKey] as string;
  if (!message) return "";

  if (attribute) {
    message = message.replace(':attribute', attribute);
  }
  if (format) {
    message = message.replace(':format', format);
  }

  if (values) {
    Object.keys(values).forEach((placeholder) => {
      message = message.replace(`:${placeholder}`, String(values[placeholder]));
    });
  }

  return message;
};
