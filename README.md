# Portfolio API

![GitHub forks](https://img.shields.io/github/forks/zvn7/api-portfolio?style=social)
![GitHub stars](https://img.shields.io/github/stars/zvn7/api-portfolio?style=social)
![GitHub issues](https://img.shields.io/github/issues/zvn7/api-portfolio)
![GitHub license](https://img.shields.io/github/license/zvn7/api-portfolio)
![GitHub package.json version](https://img.shields.io/github/package-json/v/zvn7/api-portfolio)
![Views](https://komarev.com/ghpvc/?username=zvn7&color=blue)
![GitHub top language](https://img.shields.io/github/languages/top/zvn7/api-portfolio)

This is a portfolio API built using Node.js, Express, and MongoDB. It manages projects, articles, experiences, skills, education, and certifications data.

## Features

- **Projects**: Manage your portfolio projects including images and repositories.
- **Articles**: Manage blog articles with features such as content, reading time, images, and tags.
- **Experience**: Track your work experiences.
- **Skills**: Organize and display your skill set.
- **Education**: Keep track of your academic background.
- **Certifications**: Manage your certifications and related information.

## Table of Contents

- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/zvn7/api-portfolio.git
   ```

2. Navigate into the project directory:

   ```bash
   cd your-repo-name
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Set up MongoDB and configure environment variables (see below).

5. Run the server:

   ```bash
   npm run dev
   ```

## Environment Variables

Before running the project, you need to set up the environment variables. Create a `.env` file in the root of your project with the following values:

```bash
PORT=your_port
MONGO_URI=your_mongodb_connection_string
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
```

You can refer to the .env.example file for a list of required environment variables.

# API Endpoints

Here are the key endpoints for the API:

## Projects

- **GET** `/api/v1/projects` - Retrieve all projects
- **POST** `/api/v1/projects` - Create a new project (requires image upload)
- **GET** `/api/v1/projects/:id` - Retrieve a specific project
- **PUT** `/api/v1/projects/:id` - Update a project
- **DELETE** `/api/v1/projects/:id` - Delete a project

## Articles

- **GET** `/api/v1/articles` - Retrieve all articles
- **POST** `/api/v1/articles` - Create a new article (requires image upload)
- **GET** `/api/v1/articles/:id` - Retrieve a specific article
- **PUT** `/api/v1/articles/:id` - Update an article
- **DELETE** `/api/v1/articles/:id` - Delete an article

## Experience

- **GET** `/api/v1/experiences` - Retrieve all experiences
- **POST** `/api/v1/experiences` - Create a new experience
- **GET** `/api/v1/experiences/:id` - Retrieve a specific experience
- **PUT** `/api/v1/experiences/:id` - Update an experience
- **DELETE** `/api/v1/experiences/:id` - Delete an experience

## Skills

- **GET** `/api/v1/skills` - Retrieve all skills
- **POST** `/api/v1/skills` - Create a new skill
- **GET** `/api/v1/skills/:id` - Retrieve a specific skill
- **PUT** `/api/v1/skills/:id` - Update a skill
- **DELETE** `/api/v1/skills/:id` - Delete a skill

## Education

- **GET** `/api/v1/educations` - Retrieve all education entries
- **POST** `/api/v1/educations` - Create a new education entry
- **GET** `/api/v1/educations/:id` - Retrieve a specific education entry
- **PUT** `/api/v1/educations/:id` - Update an education entry
- **DELETE** `/api/v1/educations/:id` - Delete an education entry

## Certifications

- **GET** `/api/v1/certifications` - Retrieve all certifications
- **POST** `/api/v1/certifications` - Create a new certification
- **GET** `/api/v1/certifications/:id` - Retrieve a specific certification
- **PUT** `/api/v1/certifications/:id` - Update a certification
- **DELETE** `/api/v1/certifications/:id` - Delete a certification

## Technologies Used

- **Node.js**: JavaScript runtime
- **Express.js**: Web framework for Node.js
- **MongoDB**: NoSQL database
- **Mongoose**: MongoDB object modeling for Node.js
- **ImageKit**: Image storage and management
- **Multer**: Middleware for handling multipart/form-data, used for uploading images
- **dotenv**: Environment variable management

## License

This project is licensed under the MIT License.

### Penjelasan:

- **Installation**: Langkah-langkah untuk menginstal proyek.
- **Environment Variables**: Menjelaskan variabel environment yang diperlukan untuk menjalankan proyek.
- **API Endpoints**: Rincian endpoint API untuk semua resource (Project, Articles, dll.).
- **Technologies Used**: Teknologi yang digunakan dalam proyek ini.
