import { useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { BookingContext } from "../context/BookingContext";

export default function BookingSummary() {
  const [isOpen, setIsOpen] = useState(false);
  const [taxes, setTaxes] = useState(0);

  const { bookingId } = useParams();

  const navigate = useNavigate();

  const { bookedRoomInfo, rooms, checkIn, checkOut } =
    useContext(BookingContext);

  const TAX_RATE = 0.1; // 10% tax rate

  useEffect(() => {
    if (bookedRoomInfo?.price) {
      setTaxes(bookedRoomInfo.price * rooms * TAX_RATE);
    }
  }, [bookedRoomInfo]);

  const paymentMutation = useMutation({
    mutationFn: (bookingId) =>
      fetch(`/api/api/payments/${bookingId}/payment-initiate`, {})
        .then((response) => response.json())
        .catch((error) => error),

    onSuccess: (data) => {},
  });

  const handlePayment = () => {
    paymentMutation.mutate(bookingId);

    if (paymentMutation.isSuccess) {
      navigate(paymentMutation.data?.check_);
      
    }
  };

  return (
    <div className="w-full bg-room bg-cover bg-center py-20">
      <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6">
        <div className="bg-yellow-100 text-yellow-700 p-3 rounded-md flex justify-between">
          <span>Payment Pending</span>
          <span className="text-sm">Payment deadline: 24 hours</span>
        </div>
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Your Reservation Details</h2>
          <p className="text-sm text-gray-500">
            Booking Reference: {bookingId}
          </p>
        </div>
        <div className="mt-4 border-t pt-4">
          <h3 className="font-semibold">{bookedRoomInfo?.title}</h3>
          <p className="text-gray-500 text-sm">
            {bookedRoomInfo?.description?.root?.children[0]?.children[0]?.text}
          </p>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="font-medium">Check-in</p>
            <p className="text-gray-500">{checkIn}</p>
          </div>
          <div>
            <p className="font-medium">Check-out</p>
            <p className="text-gray-500">{checkOut}</p>
          </div>
          <div>
            <p className="font-medium">Guests</p>
            <p className="text-gray-500">{bookedRoomInfo?.maxPerson}</p>
          </div>
          <div>
            <p className="font-medium">Room Type</p>
            <p className="text-gray-500">{bookedRoomInfo?.title}</p>
          </div>
        </div>
        <div className="mt-4 border-t pt-4 text-sm">
          <h3 className="font-semibold">Amenities</h3>
          <p className="text-gray-500">
            {bookedRoomInfo?.facilities?.map((v) => v.name).join(", ")}
          </p>
        </div>
        <div className="mt-4 border-t pt-4 text-sm">
          <h3 className="font-semibold">Price Breakdown</h3>
          <div className="flex justify-between">
            <span>Room rate (7 nights)</span>
            <span>${bookedRoomInfo?.price}</span>
          </div>
          <div className="flex justify-between">
            <span>Taxes</span>
            <span>${taxes.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Fees</span>
            <span>${bookedRoomInfo?.rooms * bookedRoomInfo?.price}</span>
          </div>
          <div className="flex justify-between font-bold border-t pt-2">
            <span>Total Amount</span>
            <span>
              $
              {(bookedRoomInfo?.price + taxes + bookedRoomInfo?.fees).toFixed(
                2
              )}
            </span>
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
    </div>
  );
}
