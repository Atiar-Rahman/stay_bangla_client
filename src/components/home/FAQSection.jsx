import React from 'react';
import SectionTitle from '../SectionTitle';

const FAQSection = () => {
    return (
      <div className='mb-6'> 
        <SectionTitle heading={'Show Frequently Ask Question'}/>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-3">
          {/* Q1 */}
          <div className="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="radio" name="faq-accordion" defaultChecked />
            <div className="collapse-title font-semibold">
              How do I create an account?
            </div>
            <div className="collapse-content text-sm">
              Click the "Sign Up" button in the top right corner and follow the
              registration process.
            </div>
          </div>

          {/* Q2 */}
          <div className="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title font-semibold">
              I forgot my password. What should I do?
            </div>
            <div className="collapse-content text-sm">
              Click on "Forgot Password" on the login page and follow the
              instructions sent to your email.
            </div>
          </div>

          {/* Q3 */}
          <div className="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title font-semibold">
              How do I update my profile information?
            </div>
            <div className="collapse-content text-sm">
              Go to "My Account" settings and select "Edit Profile" to make
              changes.
            </div>
          </div>

          {/* Q4 */}
          <div className="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title font-semibold">
              Can I cancel or modify my booking?
            </div>
            <div className="collapse-content text-sm">
              Yes, bookings can be modified or canceled from the "My Bookings"
              section, subject to hotel policies.
            </div>
          </div>

          {/* Q5 */}
          <div className="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title font-semibold">
              How do I know if my booking is confirmed?
            </div>
            <div className="collapse-content text-sm">
              After completing the booking, you’ll receive a confirmation email
              with all the details.
            </div>
          </div>

          {/* Q6 */}
          <div className="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title font-semibold">
              What payment methods are accepted?
            </div>
            <div className="collapse-content text-sm">
              We accept credit/debit cards, mobile banking, and online payment
              gateways like SSLCommerz.
            </div>
          </div>

          {/* Q7 */}
          <div className="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title font-semibold">
              Do I need to create an account to book a hotel?
            </div>
            <div className="collapse-content text-sm">
              Yes, creating an account helps manage your bookings, payments, and
              exclusive offers.
            </div>
          </div>

          {/* Q8 */}
          <div className="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title font-semibold">
              How can I contact customer support?
            </div>
            <div className="collapse-content text-sm">
              You can reach us via the "Contact Us" page or email
              support@staybangla.com.
            </div>
          </div>

          {/* Q9 */}
          <div className="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title font-semibold">
              Are my payment details secure?
            </div>
            <div className="collapse-content text-sm">
              Absolutely! We use encrypted and secure payment gateways to
              protect your information.
            </div>
          </div>

          {/* Q10 */}
          <div className="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title font-semibold">
              Can I book multiple rooms at once?
            </div>
            <div className="collapse-content text-sm">
              Yes, our system allows you to book multiple rooms in one
              transaction.
            </div>
          </div>
        </div>
      </div>
    );
};

export default FAQSection;