"use client";
import { Form as FormLib, FormProps } from "antd";

const Form = (props: FormProps) => {
  // @ts-expect-error: no error
  return <FormLib layout="vertical" requiredMark={false} {...props} />;
};

Form.ErrorList = FormLib.ErrorList;
Form.Item = FormLib.Item;
Form.List = FormLib.List;
Form.Provider = FormLib.Provider;

Form.useForm = FormLib.useForm;
Form.useFormInstance = FormLib.useFormInstance;
Form.useWatch = FormLib.useWatch;

export default Form;
