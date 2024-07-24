import { EventForm } from '../../../components/component/event-form';
import { Header } from '../../../components/component/header';

export default function EventData({ params : { title } }) {
  return (
    <>
      <Header />
      <EventForm />
    </>
  );
}
