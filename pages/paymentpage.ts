/*

Module 3
Payment Module

Flow

Booking

↓

Payment Page

↓

Card Number

↓

Expiry

↓

CVV

↓

Pay

↓

Booking Success

Test Cases

Valid Card

Invalid Card

Expired Card

Wrong CVV

Empty Card Number

Assertions

await expect(successMessage)
.toHaveText("Payment Successful")

*/