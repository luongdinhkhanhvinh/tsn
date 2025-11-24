"use client";

import { Select, SelectItem, SelectValue, SelectTrigger, SelectContent } from "@/components/ui/select";
import { InputGroup, InputGroupTextarea } from "@/components/ui/input-group";
import { FieldGroup, FieldLabel } from "@/components/ui/field";
import { IFormResearchSchema } from "@/schemas/research.schema";
import { formResearchSchema } from "@/schemas/research.schema";
import { genderOptions } from "@/constants/options";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { useForm } from "@tanstack/react-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

export interface IFormResearchProps {
  className?: string;
}

export function FormResearch({ className }: IFormResearchProps) {
  const form = useForm({
    defaultValues: {
      fullName: "",
      nickname: "",
      gender: "",
      day: "",
      month: "",
      year: "",
      checkCompatibility: false,
      partnerName: "",
      partnerDay: "",
      partnerMonth: "",
      partnerYear: "",
      checkPhoneNumbers: false,
      phoneNumbers: "",
    } as IFormResearchSchema,
    validators: {
      onSubmit: formResearchSchema,
    },
    onSubmit: async ({ value }) => {
      toast("You submitted the following values:", {
        description: (
          <pre className="bg-code text-code-foreground mt-2 w-[320px] overflow-x-auto rounded-md p-4">
            <code>{JSON.stringify(value, null, 2)}</code>
          </pre>
        ),
        position: "bottom-right",
        classNames: {
          content: "flex flex-col gap-2",
        },
        style: {
          "--border-radius": "calc(var(--radius)  + 4px)",
        } as React.CSSProperties,
      });
    },
  });

  // State for animation
  const [showCompatibilityFields, setShowCompatibilityFields] = useState(false);
  const [showPhoneFields, setShowPhoneFields] = useState(false);

  return (
    <form
      id="research-form"
      className={cn("space-y-4 text-white", className)}
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
    >
      {/* full name */}
      <FieldGroup>
        <FieldLabel htmlFor="fullName">Họ tên khai sinh</FieldLabel>
        <form.Field name="fullName">
          {(field) => (
            <InputGroup>
              <Input
                id="fullName"
                placeholder="Nhập họ tên khai sinh"
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
              />
            </InputGroup>
          )}
        </form.Field>
      </FieldGroup>

      {/* nickname */}
      <FieldGroup>
        <FieldLabel htmlFor="nickname">Tên thường dùng nếu có (VD: Louis Nguyen,...)</FieldLabel>
        <div className="grid grid-cols-3 gap-x-4">
          <div className="col-span-2">
            <form.Field name="nickname">
              {(field) => (
                <InputGroup>
                  <Input
                    id="nickname"
                    placeholder="Nhập tên thường dùng"
                    value={field.state.value || ""}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                </InputGroup>
              )}
            </form.Field>
          </div>
          <form.Field name="gender">
            {(field) => (
              <InputGroup>
                <Select
                  value={field.state.value || ""}
                  onValueChange={(value) => field.handleChange(value)}
                  defaultValue="male"
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {genderOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </InputGroup>
            )}
          </form.Field>
        </div>
      </FieldGroup>

      {/* birthday */}
      <FieldGroup>
        <FieldLabel>Ngày/tháng/năm sinh dương lịch</FieldLabel>
        <div className="grid grid-cols-3 gap-4">
          <form.Field name="day">
            {(field) => (
              <InputGroup>
                <Input
                  placeholder="Ngày"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
              </InputGroup>
            )}
          </form.Field>
          <form.Field name="month">
            {(field) => (
              <InputGroup>
                <Input
                  placeholder="Tháng"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
              </InputGroup>
            )}
          </form.Field>
          <form.Field name="year">
            {(field) => (
              <InputGroup>
                <Input
                  placeholder="Năm"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
              </InputGroup>
            )}
          </form.Field>
        </div>
      </FieldGroup>

      {/* compatibility */}
      <FieldGroup>
        <form.Field name="checkCompatibility">
          {(field) => (
            <div className="flex items-center gap-2">
              <Checkbox
                id="checkCompatibility"
                checked={field.state.value}
                onCheckedChange={(checked) => {
                  const isChecked = !!checked;
                  field.handleChange(isChecked);
                  setShowCompatibilityFields(isChecked);
                }}
              />
              <FieldLabel htmlFor="checkCompatibility" className="cursor-pointer">Xem tương hợp tình duyên, hôn nhân</FieldLabel>
            </div>
          )}
        </form.Field>
      </FieldGroup>

      {/* partner's birthday */}
      <div 
        className={cn(
          "overflow-hidden transition-all duration-300 space-y-4 ease-in-out",
          showCompatibilityFields ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0',
        )}
      >
        <FieldGroup>
          <form.Field name="partnerName">
            {(subField) => (
              <InputGroup>
                <Input
                  id="partnerName"
                  placeholder="Nhập họ tên người yêu/vợ chồng"
                  value={subField.state.value || ""}
                  onBlur={subField.handleBlur}
                  onChange={(e) => subField.handleChange(e.target.value)}
                />
              </InputGroup>
            )}
          </form.Field>
        </FieldGroup>

        <FieldGroup>
          <div className="grid grid-cols-3 gap-4">
            <form.Field name="partnerDay">
              {(subField) => (
                <InputGroup>
                  <Input
                    placeholder="Ngày"
                    value={subField.state.value || ""}
                    onBlur={subField.handleBlur}
                    onChange={(e) => subField.handleChange(e.target.value)}
                  />
                </InputGroup>
              )}
            </form.Field>
            <form.Field name="partnerMonth">
              {(subField) => (
                <InputGroup>
                  <Input
                    placeholder="Tháng"
                    value={subField.state.value || ""}
                    onBlur={subField.handleBlur}
                    onChange={(e) => subField.handleChange(e.target.value)}
                  />
                </InputGroup>
              )}
            </form.Field>
            <form.Field name="partnerYear">
              {(subField) => (
                <InputGroup>
                  <Input
                    placeholder="Năm"
                    value={subField.state.value || ""}
                    onBlur={subField.handleBlur}
                    onChange={(e) => subField.handleChange(e.target.value)}
                  />
                </InputGroup>
              )}
            </form.Field>
          </div>
        </FieldGroup>
      </div>

      {/* check phone numbers */}
      <FieldGroup>
        <form.Field name="checkPhoneNumbers">
          {(field) => (
            <div className="flex items-center gap-2">
              <Checkbox
                id="checkPhoneNumbers"
                checked={field.state.value}
                onCheckedChange={(checked) => {
                  const isChecked = !!checked;
                  field.handleChange(isChecked);
                  setShowPhoneFields(isChecked);
                }}
              />
              <FieldLabel htmlFor="checkPhoneNumbers" className="cursor-pointer">Xem cả số điện thoại hợp</FieldLabel>
            </div>
          )}
        </form.Field>
      </FieldGroup>

      {/* phone numbers */}
      <div 
        className={cn(
          "overflow-hidden transition-all duration-300 space-y-4 ease-in-out",
          showPhoneFields ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0',
        )}
      >
        <FieldGroup>
          <form.Field name="phoneNumbers">
            {(subField) => (
              <InputGroupTextarea
                id="phoneNumbers"
                placeholder="Nhập 5 số điện thoại, mỗi số trên một dòng"
                value={subField.state.value || ""}
                onBlur={subField.handleBlur}
                onChange={(e) => subField.handleChange(e.target.value)}
                className="min-h-[120px]"
              />
            )}
          </form.Field>
        </FieldGroup>
      </div>

      <Button type="submit" className="w-full h-12 font-bold">
        TRA CỨU NGAY
      </Button>
    </form>
  );
}
