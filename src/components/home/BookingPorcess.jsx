import React from 'react';

const BookingPorcess = () => {
    return (
      <ul className="timeline timeline-vertical md:timeline-horizontal">
        {/* Step 1 */}
        <li>
          <div className="timeline-start timeline-box">Choice your best Hotel</div>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="h-5 w-5"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <hr />
        </li>

        {/* Step 2 */}
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="h-5 w-5"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end timeline-box">Click Details button</div>
          <hr />
        </li>

        {/* Step 3 */}
        <li>
          <hr />
          <div className="timeline-start timeline-box">Select room for your need</div>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="h-5 w-5"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <hr />
        </li>

        {/* Step 4 */}
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="h-5 w-5"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end timeline-box">form complete and confirm</div>
          <hr />
        </li>

        {/* Step 5 */}
        <li>
          <hr />
          <div className="timeline-start timeline-box">Payment for booking</div>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="h-5 w-5"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <hr />
        </li>

        {/* Step 6 */}
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="h-5 w-5"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end timeline-box">Check-in</div>
          <hr />
        </li>

        {/* Step 7 */}
        <li>
          <hr />
          <div className="timeline-start timeline-box">Check-out</div>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="h-5 w-5"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </li>
      </ul>
    );
};

export default BookingPorcess;