# Notification Management System with TypeScript and Node.js

## Project Description

This project demonstrates a notification management system using Node.js and TypeScript. It provides a REST API to send notifications (email, SMS, push) immediately or schedule them for specific times. The system can manage notifications for various recipients.

## Features

- **Multi-Channel Notifications**: Send notifications via email, SMS, or push notifications (future support).
- **Notification Scheduling**: Schedule notifications to be sent at specific times.
- **Notification Monitoring**: View the status of sent and scheduled notifications.
- **REST API**: Expose endpoints for sending and scheduling notifications.
- **Dockerized**: The system is containerized for easy deployment and scaling.

## Setup Instructions

### Prerequisites
- **Docker**: To run the application in containers.
- **Node.js**: Version 14 or later.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/the-real-jerry-tan/typescript-notification-management-system.git
   cd typescript-notification-management-system
   ```

2. Build and run the Docker container:
   ```bash
   cd docker
   docker build -t ts-notification-management .
   docker run -p 3000:3000 ts-notification-management
   ```

3. The REST API will be available at [http://localhost:3000](http://localhost:3000).

## Future Enhancements

- **Multi-Channel Support**: Add support for email, SMS, and push notifications.
- **Notification History**: Track past notifications and their outcomes.
- **Retry Mechanism**: Add retry logic for failed notifications.

## Author

This project is maintained by [Jerry Tan](https://github.com/the-real-jerry-tan).

## License

© 2024 Jerry Tan. All Rights Reserved. Unauthorized use or distribution is prohibited.
