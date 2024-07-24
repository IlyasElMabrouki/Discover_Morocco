import { PaymentCards } from '../../../components/component/payment-cards';

export default function BillingPage() {
  const isEnabled = false;
  return (
    <>
      {!isEnabled && (
        <>
          <PaymentCards />
        </>
      )}
    </>
  );
}
