import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import blog_data from "./blog_data";

const Blog = () => {
  return (
    <div>
      <Navbar />

      <div className="max-w-screen-xl px-4 py-8 mx-auto">
        <div className="grid my-8 lg:my-16 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">
          {/* show blog data where 4 questions and answers and show blog page */}
          {blog_data &&
            blog_data.map(({id, question, answer}) => (
              <figure
                key={id}
                className="flex flex-col items-center justify-center p-8  bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
                <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {question}
                  </h3>
                  <p className="my-4">{answer}</p>
                </blockquote>
              </figure>
            ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
