'use client'
import { Label } from 'src/components/ui/label';
import { Input } from 'src/components/ui/input';
import { Textarea } from 'src/components/ui/textarea';
import { CardContent, CardFooter, Card } from 'src/components/ui/card';
import { Button } from 'src/components/ui/button';
import { useForm } from 'react-hook-form';
import LocationPicker from 'src/components/locationPicker';

export function EventForm() {
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
    <form className="grid gap-6" onSubmit={handleSubmit(submitHandler)}>
      <Card>
        <CardContent className="space-y-6">
          <div>
            <h2 className="text-xl font-bold">Event Information</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Enter details about your event.
            </p>
          </div>
          <div className="grid gap-2">
            <Label>Event Title</Label>
            <Input
              placeholder="Enter event title"
              type="text"
              id="eventTitle"
              {...register('eventTitle', {
                required: 'Please enter event title',
              })}
            />
            {errors.eventTitle && (
              <div className="text-red-500">{errors.eventTitle.message}</div>
            )}
          </div>
          <div className="grid gap-2">
            <Label>Event Description</Label>
            <Textarea
              placeholder="Describe your event"
              id="eventDescription"
              {...register('eventDescription', {
                required: 'Please enter event description',
              })}
            />
            {errors.eventDescription && (
              <div className="text-red-500">
                {errors.eventDescription.message}
              </div>
            )}
          </div>
          <div className="grid gap-2">
            <Label>Event Start Date</Label>
            <Input
              type="datetime-local"
              id="startDate"
              {...register('startDate', {
                required: 'Please enter start date',
              })}
            />
            {errors.startDate && (
              <div className="text-red-500">{errors.startDate.message}</div>
            )}
          </div>
          <div className="grid gap-2">
            <Label>Event End Date</Label>
            <Input
              type="datetime-local"
              id="endDate"
              {...register('endDate', {
                required: 'Please enter end date',
              })}
            />
            {errors.endDate && (
              <div className="text-red-500">{errors.endDate.message}</div>
            )}
          </div>
          <div>
            <Label>Event Attachments</Label>
            <div className="border-dashed border-2 border-gray-300 rounded-lg w-full p-4 flex items-center justify-center gap-4 text-gray-500 dark:text-gray-400">
              <UploadIcon className="w-6 h-6" htmlFor="fileInput" />
              <span>No attachments added.</span>
            </div>
            <Input
              type="file"
              id="fileInput"
              multiple // Allow multiple files
              className="w-full border rounded-md px-3 py-2 mb-2"
              {...register('fileInput', {
                required: 'Please choose file',
              })}
            />
            {errors.fileInput && (
              <p className="text-red-500">Please select a file</p>
            )}
          </div>
        </CardContent>
        <LocationPicker />
        <CardFooter className="w-full justify-center">
          <Button size="lg" className="mt-4">Save</Button>
        </CardFooter>
      </Card>
    </form>
  );
}

function UploadIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  );
}
