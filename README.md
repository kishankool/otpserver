# OTP Generation and SMS Sending API

The OTP Generation and SMS Sending API is a simple service that generates a one-time password (OTP) and sends it to a specified phone number via Twilio's trial SMS service. This API is designed to be easy to use and integrate into your applications to enable secure authentication and verification processes.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Endpoint](#endpoint)
  - [Request](#request)
  - [Response](#response)
- [Error Handling](#error-handling)
- [Rate Limiting](#rate-limiting)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

To use this API, you need the following:

- Internet connection to make API requests.
- An understanding of JSON data format.

### Installation

No installation is required as this API is hosted on a remote server. You can start using the API by making HTTP requests as described in the next section.

## Usage

### Endpoint

The base URL for the API is: `http://otpserver-5k5n.onrender.com/api/sendOTP`

### Request

To generate an OTP and send it via SMS, make a `POST` request to the following endpoint:

```
POST /generate-otp
```

The request should include a JSON object containing the `phoneNumber` with the country code (e.g., "+1" for the United States):

```json
{
  "phoneNumber": "+1234567890"
}
```

### Response

The API will respond with a JSON object containing the following fields:

- `status`: A boolean indicating whether the OTP was successfully generated and sent.
- `otp`: The generated one-time password (numeric code).
- `msg`: A message providing additional information about the response status.

Example response:

```json
{
  "status": true,
  "otp": "682951",
  "msg": "OTP successfully sent via SMS."
}
```

## Error Handling

In case of errors, the API will respond with an appropriate HTTP status code and an error message in the response body.

Example error response:

```json
{
  "status": false,
  "msg": "Invalid phone number format."
}
```

## Rate Limiting

To prevent abuse, the API enforces rate limiting. You can make a maximum of `N` requests per minute. If you exceed the rate limit, you will receive a `429 Too Many Requests` response.

## Contributing

Contributions to this API are welcome! If you find any issues or want to improve the code, feel free to submit a pull request.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

---

Feel free to contact us at kishanmishra389@gmail.com if you have any questions or need assistance using the API. We hope you find this API helpful for adding OTP functionality and SMS verification to your applications!
