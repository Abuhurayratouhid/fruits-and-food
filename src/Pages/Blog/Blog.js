import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='text-center text-4xl font-bold my-8'>blogs</h1>
            {/* blog one  */}
            <div className="card  bg-base-200 shadow-xl mt-3 text-center">
                <div className="card-body text-center">
                    <h2 className="text-2xl text-center">Difference between SQL and NoSQL</h2>
                    <p>SQL databases are table-based on the other hand NoSQL databases are either key-value pairs, document-based, graph databases or wide-column stores. <br /> This makes relational SQL databases a better option for applications that require multi-row transactions such as <br /> an accounting system or for legacy systems that were built for a relational structure. </p>
                    
                </div>
            </div>
            {/* blog two  */}
            <div className="card  bg-base-200 shadow-xl mt-3 text-center">
                <div className="card-body text-center">
                    <h2 className="text-2xl text-center">What is JWT, and how does it work?</h2>
                    <p>What is JWT JSON Web Token? JSON Web Token JWT is an open standard <br /> RFC 7519 for securely transmitting information between parties as JSON object. <br /> It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP).</p>
                    
                </div>
            </div>
            {/* blog three  */}
            <div className="card  bg-base-200 shadow-xl mt-3 text-center">
                <div className="card-body text-center">
                    <h2 className="text-2xl text-center">What is the difference between javascript and NodeJS?</h2>
                    <p>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. <br /> on the other hand node js is <br /> an interpreter or execution environment for the JavaScript programming language.</p>
                    
                </div>
            </div>
            {/* blog fours  */}
            <div className="card  bg-base-200 shadow-xl mt-3 text-center">
                <div className="card-body text-center">
                    <h2 className="text-2xl text-center">How does NodeJS handle multiple requests at the same time?</h2>
                    <p>NodeJS receives multiple client requests and places them into EventQueue. <br /> NodeJS is built with the concept of event-driven architecture. <br /> NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
                    
                </div>
            </div>
            
            
            
        </div>
    );
};

export default Blog;