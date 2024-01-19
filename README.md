# Frontend assessment - number8 - Diego Herrera

## Description

This project utilizes Next.js 14 and leverages the "app router" for routing. I integrate additional functionalities such as "reset filters" and a "modal with saved stock", among others.

## GitHub Repository

The implementation followed a branching strategy using the nomenclature "FS-XX" (Frontend Assessment). The commit history is fully available on the GitHub repository.

**Repository link**: [Frontend Assessment Repo](https://github.com/diegodevdan/ft-assessment-n8-dh)

## Hosting

Although Docker is within my skill set, for this project, the application is hosted on Digital Ocean.

**Live Application**: [Digital Ocean App](https://squid-app-ghmm3.ondigitalocean.app/)

## Development Notes

I'm confident that all the test points have been achieved. Feel free to put the application through its paces. The filter and contact form functionalities are operational.

The `.env` files contain the API base URL. The last commit includes code formatting with Prettier. The project's folder architecture is modular, facilitating the reuse of components or TypeScript interfaces.

`BASE_API='https://s3.us-west-2.amazonaws.com/cdn.number8.com/LA/listings.json'`

Different problem-solving approaches were employed, including the child-parent pattern and global state management with Redux. Scenarios involving data fetching and posting have been handled.

The filter is reseted when doesn't match any stock. 

## Technologies/Libraries

- **Next.js**: A React framework for production.
- **TypeScript**: A strongly typed programming language that builds on JavaScript.
- **Mantine**: A React component library.
- **Tailwind CSS**: A utility-first CSS framework.
- **Prettier**: An opinionated code formatter.
- **useForm**: A hook used for handling forms in React.
- **Yup**: Although I prefer manual validations, Yup is used for object schema validation.
- **Redux Toolkit**: A toolset for efficient Redux development.
- **Axios**: A promise-based HTTP client for the browser and Node.js.

## Final Thoughts

Overall, this was an engaging assessment. Thank you for the opportunity, and I look forward to any feedback.

---
