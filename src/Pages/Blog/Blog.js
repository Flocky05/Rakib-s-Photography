import React, { useState } from "react";
import useChangeTitle from "../../hooks/changeTitle";
import BlogPart2 from "./BlogPart2";

const Item = ({ title, children }) => {
  useChangeTitle("Blog");
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border rounded shadow-sm">
      <button
        type="button"
        aria-label="Open item"
        title="Open item"
        className="flex items-center justify-between w-full p-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-lg font-medium">{title}</p>
        <div className="flex items-center justify-center w-8 h-8 border rounded-full">
          <svg
            viewBox="0 0 24 24"
            className={`w-3 text-gray-600 transition-transform duration-200 ${
              isOpen ? "transform rotate-180" : ""
            }`}
          >
            <polyline
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              points="2,7 12,17 22,7"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div className="p-4 pt-0">
          <p className="text-gray-700">{children}</p>
        </div>
      )}
    </div>
  );
};
const FAQ = () => {
  return (
    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div class="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div class="flex flex-col mb-16 sm:text-center">
          <a href="/" class="mb-6 sm:mx-auto">
            <div class="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50"></div>
          </a>
          <div class="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">
            <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              <span class="relative inline-block">
                <span class="relative">Some</span>
              </span>{" "}
              Questions and Answers about us
            </h2>
          </div>
        </div>
        <div class="space-y-4">
          <Item title="Difference between SQL and NoSQL">
            SQL databases are relational, NoSQL databases are non-relational.SQL
            databases use structured query language and have a predefined
            schema. NoSQL databases have dynamic schemas for unstructured
            data.SQL databases are vertically scalable, while NoSQL databases
            are horizontally scalable.SQL databases are table-based, while NoSQL
            databases are document, key-value, graph, or wide-column stores.SQL
            databases are better for multi-row transactions, while NoSQL is
            better for unstructured data like documents or JSON.Example of SQL
            databases: MySQL, PostgreSQL, Oracle, MS-SQL Server etc.Example of
            NoSQL databases: MongoDB, GraphQL, HBase, Neo4j, Cassandra etc
          </Item>
          <Item title="What is JWT, and how does it work?">
            JWT, or JSON Web Token, is an open standard used to share security
            information between two parties — a client and a server. Each JWT
            contains encoded JSON objects, including a set of claims. JWTs are
            signed using a cryptographic algorithm to ensure that the claims
            cannot be altered after the token is issued.Basically the identity
            provider(IdP) generates a JWT certifying user identity and Resource
            server decodes and verifies the authenticity of the token using
            secret salt / public key.User sign-in using username and password or
            google/facebook.Authentication server verifies the credentials and
            issues a jwt signed using either a secret salt or a private
            key.User's Client uses the JWT to access protected resources by
            passing the JWT in HTTP Authorization header.Resource server then
            verifies the authenticity of the token using the secret salt/ public
            key.
          </Item>
          <Item title="What is the difference between javascript and NodeJS?">
            The react private route component renders child components (
            children ) if the user is logged in. If not logged in the user is
            redirected to the /login page with the return url passed in the
            location state property.
          </Item>
          <Item title="What is Node? How does Node work?">
            Javascript is a Scripting language. It is mostly abbreviated as JS.
            It can be said that Javascript is the updated version of the ECMA
            script. Javascript is a high-level programming language that uses
            the concept of Oops but it is based on prototype inheritance.NodeJS
            is a cross-platform and opensource Javascript runtime environment
            that allows the javascript to be run on the server-side. Nodejs
            allows Javascript code to run outside the browser. Nodejs comes with
            a lot of modules and mostly used in web development.Javascript can
            only be run in the browsers.We can run Javascript outside the
            browser with the help of NodeJS.Javascript is capable enough to add
            HTML and play with the DOM. Nodejs does not have capability to add
            HTML tags.Some of the javascript frameworks are RamdaJS, TypedJS,
            etc. Some of the javascript frameworks are RamdaJS, TypedJS, etc.
          </Item>
          <Item title="How does NodeJS handle multiple requests at the same time?">
            NodeJS server uses an EventQueue, which queues incoming client
            requests and an EventLoop which is an infinite loop that receives
            requests and processes them. This EventLoop is single threaded and
            acts as a listener for the EventQueue which processes incoming
            requests based on FIFO policy.When a new request comes in, NodeJS
            checks if it requires any blocking IO operations, if not, the
            EventLoop processes it and sends the response back to the client
            directly. If yes, then the request is forwarded to the thread
            manager, which then based on an algorithm, picks up an idle thread
            from the pool and lets it process the request. After completion of
            the request processing operation, the thread, returns the response
            back to the EventLoop which is then forwarded to the client. Thus,
            even if an incoming request needs blocking IO, the thread pool
            allows it to run asynchronously in the background without blocking
            the EventLoop and it gives a seamless experience of NodeJS handling
            multiple incoming requests concurrently without any persistent
            delays or bottlenecks.
          </Item>
        </div>
      </div>
      <BlogPart2></BlogPart2>
    </div>
  );
};

export default FAQ;
