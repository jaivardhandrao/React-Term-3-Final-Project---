 # 🛒 ShopGlobal
 
 **ShopGlobal** is a full-stack, fully responsive e-commerce web application built using Vite and React. It provides users with an intuitive platform to browse top-selling Amazon products, get AI-powered shopping assistance, and manage their shopping cart seamlessly.
 
 🔗 **Live Site**: [https://shopglobal.vercel.app](https://shopglobal.vercel.app)
 
 ---
 
 ## ✨ Features
 
 ### 🛍️ User-Facing Pages
 - **Home**  
   Showcases top deals, featured products, and navigation to various sections of the site.
 
 - **About**  
   Highlights the tech stack and tools used to build the project.
 
 - **Ask AI**  
   An AI-powered assistant (using Gemini API) that answers shopping-related questions. Great for getting quick help or recommendations while browsing.
 
 - **Search**  
   Allows users to search for best-selling products sourced from Amazon and add them directly to their cart.
 
 - **Cart**  
   Displays selected products for purchase. Users can update or remove items and proceed to checkout.
 
 ✅ The site is **fully responsive** and optimized for desktops, tablets, and mobile devices.
 
 ---
 
 ## 🧱 Tech Stack
 
 ### ⚙️ Frontend
 - **React + Vite**: Fast and modern build setup with excellent developer experience.
 - **React Router DOM**: For seamless navigation between pages.
 - **useState & useContext**: Lightweight state management across components.
 - **Tailwind CSS**: Utility-first CSS framework for custom and responsive styling.
 
 ### 🧠 AI & Integrations
 - **Gemini API**: Used for building a smart shopping assistant in the Ask AI page.
 - **PapaParse**: A fast and powerful CSV parser for reading and displaying Amazon product data.
 
 ### ☁️ Deployment
 - **Vercel**: Instant and scalable deployment with custom domain support and CI/CD integration.
 
 ---
 
 ## 📁 Folder Structure
 
 ```
 vite/
 ├── public/             # Static assets
 ├── src/
 │   ├── components/     # Shared reusable components and pages (e.g., Navbar, ProductCard , AskAI Page , Search Page , Your Cart page)
 │   ├── context/        # React Context for cart and auth management
 │   ├── App.jsx         # Main app component with route configuration
 │   └── main.jsx        # Entry point for ReactDOM rendering
 ├── index.html
 └── vite.config.js
 ```
 
 ---
 
 ## 🚀 Getting Started
 
 ### 📦 Prerequisites
 - Node.js (v16 or above)
 - npm or yarn
 
 ### 🛠️ Installation
 
 ```bash
 git clone https://github.com/your-username/shopglobal.git
 cd shopglobal
 npm install
 ```
 
 ### ▶️ Run Locally
 
 ```bash
 npm run dev
 ```
 
 The app will be available at [http://localhost:5173](http://localhost:5173)
 
 ---
 
 ## 🔐 Environment Variables
 
 Create a `.env` file in the root directory and add:
 
 ```
 VITE_GEMINI_API_KEY=your_gemini_api_key_here
 ```
 
 ---
 
 ## 🧪 Testing
 
 Manual testing includes:
 - Cart operations
 - AI assistant response flow
 - Product search and parsing
 - Responsive design checks
 
 ---
 
 ## 📦 Deployment
 
 Deployed on **Vercel**  
 🔗 [https://shopglobal.vercel.app](https://shopglobal.vercel.app)
 
 ---
 
 ## 🙋‍♂️ Author
 
 **Jaivardhan D Rao**  
 Engineering Student at Scaler School Of Technology
 
 ---
 
 ## 📜 License
 
 This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
