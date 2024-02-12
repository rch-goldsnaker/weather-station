"use client";
import { startTransition, useTransition } from "react";
import { Icons } from "../icons";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { createSetting, readSetting } from "@/components/modals/actions";
import { toast } from "../ui/use-toast";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const FormSchema = z.object({
  entityType: z.string({
    required_error: "entityType is required",
    invalid_type_error: "entityType must be a string",
  }),
  entityId: z.string({
    required_error: "entityId is required",
    invalid_type_error: "entityId must be a string",
  }),
  keys: z.string({
    invalid_type_error: "keys must be a string",
  }),
  useStrictDataTypes: z.string({
    invalid_type_error: "keys must be a string",
  }),
});

export const SettingForm = () => {
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      keys: "",
      useStrictDataTypes: "false",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    startTransition(async () => {
      const result = await createSetting(data);
      const { error } = result;

      if (error?.message) {
        console.log(error.message);
        toast({
          variant: "destructive",
          title: "You submitted the following values:",
          description: (
            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
              <code className="text-white">{error.message}</code>
            </pre>
          ),
        });
      } else {
        console.log("succes");
        toast({
          title: "You submitted the following values:",
          description: (
            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
              <code className="text-white">Successfully Login</code>
            </pre>
          ),
        });
      }
    });
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <FormField
          control={form.control}
          name="entityType"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex justify-start">EntityType*</FormLabel>
              <FormControl>
                <Input
                  className="border-blue-950"
                  placeholder="DEVICE"
                  {...field}
                  type="string"
                  onChange={field.onChange}
                />
              </FormControl>
              <FormDescription>
                A string value representing the entity type. For example,
                'DEVICE'
              </FormDescription>
              <FormMessage className="flex justify-start" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="entityId"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex justify-start">EntityId*</FormLabel>
              <FormControl>
                <Input
                  className="border-blue-950"
                  placeholder="784f394c-42b6-435a-983c-b7beff2784f9"
                  {...field}
                  type="string"
                  onChange={field.onChange}
                />
              </FormControl>
              <FormDescription>
                A string value representing the entity id. For example,
                '784f394c-42b6-435a-983c-b7beff2784f9'
              </FormDescription>
              <FormMessage className="flex justify-start" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="keys"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex justify-start">Keys</FormLabel>
              <FormControl>
                <Input
                  className="border-blue-950"
                  placeholder="temperature,humidity"
                  {...field}
                  type="string"
                  onChange={field.onChange}
                />
              </FormControl>
              <FormDescription>
                A string value representing the comma-separated list of
                telemetry keys. If keys are not selected, the result will return
                all latest timeseries. For example, 'temperature,humidity'.
              </FormDescription>
              <FormMessage className="flex justify-start" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="useStrictDataTypes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>UseStrictDataTypes</FormLabel>
              <Select onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="enables" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="true">enables</SelectItem>
                  <SelectItem value="false">disables</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                Enables/disables conversion of telemetry values to strings.
                Conversion is enabled by default. Set parameter to 'true' in
                order to disable the conversion.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full flex gap-2">
          Edit
          <Icons.spinner
            className={cn("animate-spin", { hidden: !isPending })}
          />
        </Button>
      </form>
    </Form>
  );
};
