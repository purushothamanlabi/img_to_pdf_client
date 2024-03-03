import './App.css';
import React, { useState } from 'react';
const App = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert('Please select an image first.');
      return;
    }

    const formData = new FormData();
    formData.append('image', selectedFile);

    try {
      const response = await fetch('https://img-to-pdf-server.onrender.com/upload', {
        method: 'POST',
        body: formData,
      });

      
    if (response.ok) {
      const data = await response.json();
      alert('Image uploaded successfully!');

      console.log(data);
      const downloadLink = document.createElement('a');
      downloadLink.href = `https://img-to-pdf-server.onrender.com${data.pdfLink}`;
      
      // Ensure a unique name for the downloaded file
      downloadLink.download = 'downloaded_file.pdf';
  
      // Simulate a click on the anchor to trigger the download
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    } else {
      alert('Failed to upload image.');
    }
  } catch (error) {
    console.error('Error uploading image:', error);
  }
  };

  
  return (
    <>
    <div class="bg-white">
  <header class="bg-[#bd1e59] p-4 text-white">
    <div class="container mx-auto flex items-center justify-between">
      <h1 class="text-3xl font-bold">I ❤️ PDF</h1>
      <nav class="hidden md:flex items-center space-x-8">
        <a class="text-white hover:text-gray-300" href="#">
          Merge PDF
        </a>
        <a class="text-white hover:text-gray-300" href="#">
          Split PDF
        </a>
        <a class="text-white hover:text-gray-300" href="#">
          Compress PDF
        </a>
        <div class="relative">
          <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 relative z-10 text-white bg-transparent hover:bg-white hover:text-[#bd1e59] px-4 py-2 rounded-md">
            Convert PDF{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="ml-2"
            >
              <path d="m6 9 6 6 6-6"></path>
            </svg>
          </button>
          <div class="absolute z-0 right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 hidden">
            <a class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" href="#">
              Option 1
            </a>
            <a class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" href="#">
              Option 2
            </a>
          </div>
        </div>
        <div class="relative">
          <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 relative z-10 text-white bg-transparent hover:bg-white hover:text-[#bd1e59] px-4 py-2 rounded-md">
            All PDF Tools{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="ml-2"
            >
              <path d="m6 9 6 6 6-6"></path>
            </svg>
          </button>
          <div class="absolute z-0 right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 hidden">
            <a class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" href="#">
              Tool 1
            </a>
            <a class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" href="#">
              Tool 2
            </a>
          </div>
        </div>
      </nav>
      <div class="flex items-center">
        <a class="text-white hover:text-gray-300 mr-4" href="#">
          Login
        </a>
        <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 bg-white text-[#bd1e59] hover:bg-gray-100 px-4 py-2 rounded-md">
          Sign up
        </button>
      </div>
      <button class="md:hidden text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="w-6 h-6"
        >
          <line x1="4" x2="20" y1="12" y2="12"></line>
          <line x1="4" x2="20" y1="6" y2="6"></line>
          <line x1="4" x2="20" y1="18" y2="18"></line>
        </svg>
      </button>
    </div>
  </header>
  <main class="container mx-auto my-12 px-4">
    <section class="text-center">
      <h2 class="text-5xl font-bold mb-4">IMG to PDF</h2>
      <p class="text-xl mb-8">Convert JPG images to PDF in seconds. Easily adjust orientation and margins.</p>
      <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 bg-[#bd1e59] text-white px-6 py-3 rounded-md mb-4">
      <input type="file" onChange={handleFileChange} />
      </button>
      <div class="flex justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="text-[#bd1e59] w-8 h-8 mr-2"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          <polyline points="17 8 12 3 7 8"></polyline>
          <line x1="12" x2="12" y1="3" y2="15"></line>
        </svg>
        <span class="text-lg">or drop JPG images here</span>
      </div>
      <button onClick={handleUpload} class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 bg-[#bd1e59] text-white px-6 py-3 rounded-md mb-4">
         Submits
      </button>
    </section>
  </main>
  <footer class="bg-gray-100 p-4 text-center">
    <p>© Purushothaman</p>
  </footer>
</div>
    </>
  );
};

export default App;
