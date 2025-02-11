import { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function PaymentSummary() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6">
      <div className="bg-yellow-100 text-yellow-700 p-3 rounded-md flex justify-between">
        <span>Payment Pending</span>
        <span className="text-sm">Payment deadline: 24 hours</span>
      </div>
      <div className="mt-4">
        <h2 className="text-lg font-semibold">Your Reservation Details</h2>
        <p className="text-sm text-gray-500">Booking Reference: HR123456</p>
      </div>
      <div className="mt-4 border-t pt-4">
        <h3 className="font-semibold">Luxury Resort & Spa</h3>
        <p className="text-gray-500 text-sm">Dubai, UAE</p>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
        <div>
          <p className="font-medium">Check-in</p>
          <p className="text-gray-500">10 Feb 2025</p>
        </div>
        <div>
          <p className="font-medium">Check-out</p>
          <p className="text-gray-500">17 Feb 2025</p>
        </div>
        <div>
          <p className="font-medium">Guests</p>
          <p className="text-gray-500">2 Adults</p>
        </div>
        <div>
          <p className="font-medium">Room Type</p>
          <p className="text-gray-500">Deluxe Ocean View</p>
        </div>
      </div>
      <div className="mt-4 border-t pt-4 text-sm">
        <h3 className="font-semibold">Amenities</h3>
        <p className="text-gray-500">
          Free Wi-Fi, Breakfast Included, Gym Access
        </p>
      </div>
      <div className="mt-4 border-t pt-4 text-sm">
        <h3 className="font-semibold">Price Breakdown</h3>
        <div className="flex justify-between">
          <span>Room rate (7 nights)</span>
          <span>$1200</span>
        </div>
        <div className="flex justify-between">
          <span>Taxes</span>
          <span>$150</span>
        </div>
        <div className="flex justify-between">
          <span>Fees</span>
          <span>$50</span>
        </div>
        <div className="flex justify-between font-bold border-t pt-2">
          <span>Total Amount</span>
          <span>$1400</span>
        </div>
      </div>
      <button
        onClick={() => setIsOpen(true)}
        className="mt-6 w-full text-white btn btn-primary py-2 rounded-md "
      >
        Complete Payment
      </button>
      <p className="text-xs text-gray-500 text-center mt-2">
        Secure payment powered by Stripe
      </p>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setIsOpen(false)}
        >
          <div className="fixed inset-0 bg-black bg-opacity-25 flex items-center justify-center">
            <Dialog.Panel className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
              <FaCheckCircle className="w-12 h-12 text-green-500 mx-auto" />
              <Dialog.Title className="text-lg font-semibold mt-2">
                Payment Successful
              </Dialog.Title>
              <p className="text-sm text-gray-500 mt-1">
                Your reservation is confirmed.
              </p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
              >
                Close
              </button>
            </Dialog.Panel>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
