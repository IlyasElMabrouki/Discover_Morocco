import { useForm } from 'react-hook-form';

const Form = () => {
  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm();

  const submitHandler = () => {
    // Handle form submission here
    console.log('Form submitted:', getValues());
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="flex justify-center items-center flex-col z-10"
    >
      <input
        type="text"
        id="companyName"
        placeholder="Company Name"
        className="w-full border rounded-md px-3 py-2 mb-2"
        {...register('companyName', {
          required: 'Please enter company name',
        })}
      />
      {errors.companyName && (
        <div className="text-red-500">{errors.companyName.message}</div>
      )}
      <input
        type="tel"
        id="phoneNumber"
        placeholder="Phone Number"
        className="w-full border rounded-md px-3 py-2 mb-2"
        {...register('phoneNumber', {
          required: 'Please enter phone number',
        })}
      />
      {errors.phoneNumber && (
        <div className="text-red-500">{errors.phoneNumber.message}</div>
      )}
      <input
        type="email"
        id="email"
        placeholder="Email"
        className="w-full border rounded-md px-3 py-2 mb-2"
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
      <label
        htmlFor="fileInput"
        className="cursor-pointer border border-black font-bold py-2 px-4 rounded inline-block"
      >
        Choose File
      </label>
      <input
        type="file"
        id="fileInput"
        multiple // Allow multiple files
        className="w-full border rounded-md px-3 py-2 mb-2 hidden"
        {...register('fileInput', {
          required: 'Please choose file',
        })}
      />
      {errors.fileInput && <p className="text-red-500">Please select a file</p>}
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
