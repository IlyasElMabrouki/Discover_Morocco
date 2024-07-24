'use client';
import { Input } from 'src/components/ui/input';
import {
  SelectValue,
  SelectTrigger,
  SelectLabel,
  SelectItem,
  SelectGroup,
  SelectContent,
  Select,
} from 'src/components/ui/select';
import { Button } from 'src/components/ui/button';
import { useForm } from 'react-hook-form';
//import { useHistory } from 'react-router-dom';

export function CompanyForm() {
  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm();

  //const history = useHistory();

  const submitHandler = () => {
    // Handle form submission here
    console.log('Form submitted:', getValues());
    //history.push('/company/billing');
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="flex flex-col p-8 space-y-4 bg-white shadow-lg rounded-lg"
      >
        <div className="flex flex-col items-center">
          <label className="mt-2 cursor-pointer">
            <input
              aria-label="Upload profile picture"
              className="hidden"
              type="file"
            />
            <img
              alt="Company logo"
              className="rounded-full"
              height="100"
              src="/vercel.svg"
              style={{
                aspectRatio: '100/100',
                objectFit: 'cover',
              }}
              width="100"
            />
          </label>
          <h2 className="mt-2 text-lg font-semibold">Company Registration</h2>
        </div>
        <div className="flex gap-4">
          <Input
            aria-label="Company name"
            className="border rounded-md p-2 flex-grow"
            placeholder="Company name"
            type="text"
            id="companyName"
            {...register('companyName', {
              required: 'Please enter company name',
            })}
          />
          <Input
            aria-label="Phone number"
            className="border rounded-md p-2 flex-grow"
            placeholder="Phone number"
            type="tel"
            id="phoneNumber"
            {...register('phoneNumber', {
              required: 'Please enter phone number',
            })}
          />
        </div>
        {errors.companyName && (
          <div className="text-red-500">{errors.companyName.message}</div>
        )}
        {errors.phoneNumber && (
          <div className="text-red-500">{errors.phoneNumber.message}</div>
        )}
        <Input
          aria-label="Company email"
          className="border rounded-md p-2"
          placeholder="Company email"
          type="email"
          id="email"
          {...register('email', {
            required: 'Please enter email',
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
              message: 'Please enter valid email',
            },
          })}
        />
        {errors.email && (
          <div className="text-red-500">{errors.email.message}</div>
        )}
        <Select
          id="selectFieldName"
          {...register('selectFieldName', {
            required: 'Please select an industry',
          })}
        >
          <SelectTrigger className="w-full border rounded-md p-2">
            <SelectValue placeholder="Select industry" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Industries</SelectLabel>
              <SelectItem value="tech">Technology</SelectItem>
              <SelectItem value="finance">Finance</SelectItem>
              <SelectItem value="healthcare">Healthcare</SelectItem>
              <SelectItem value="manufacturing">Manufacturing</SelectItem>
              <SelectItem value="education">Education</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        {errors.selectFieldName && (
          <div className="text-red-500">{errors.selectFieldName.message}</div>
        )}
        <Button
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          type="submit"
        >
          Continue
        </Button>
      </form>
    </div>
  );
}
