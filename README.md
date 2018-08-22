# Coles-Frontend-Proxy

My Front End Capstone project for HRLA22. This is my proxy server which mimics Ebays product page. Each person on our team made their own microservice is altogether through this proxy server.

Each microservice will no longer render as they were being hosted on AWS instances which have since been turned off.

My Micro-Service: https://github.com/cmichaelsd/Seller-Info-Component

### Technologies Used:

- Express
- Docker

### How To Deploy

- Dockerize this project
- Push to DockerHub
- SCP docker-compose to your hosted instance
- Run "docker-compose up -d"
- This proxy server should be hosted on your instance at port 3000
