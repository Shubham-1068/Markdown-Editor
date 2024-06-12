import React from 'react'
import './style.css'

function About() {
  return (
    <>
        <div className="about">
            <header className='aboutHeader'>
            About Our Markdown Editor
            </header>

            <p className='aboutContent'>
                <h2>
                Welcome to our Markdown Editor app!
                </h2>

                <hr />

                <h2>
                What is Markdown?
                </h2>

                <p>Markdown is a lightweight markup language with plain-text formatting syntax. It allows you to write using an easy-to-read, easy-to-write plain text format, then convert it to structurally valid HTML.</p>

                <hr/>

                <h2>Why Use Our Markdown Editor?</h2>

                <p>
                Our Markdown Editor provides a clean, distraction-free interface for writing and formatting your documents. Whether you're a seasoned Markdown user or just getting started, our app is designed to make the writing process efficient and enjoyable.
                </p>

                <hr />

                <h2>
                Get Started Today!
                </h2>

                <p>
                Download our app now and start writing beautiful, well-formatted documents with ease. Whether you're jotting down notes, drafting blog posts, or writing code documentation, our Markdown Editor has you covered.
                </p>
            </p>
        </div>
    </>
  )
}

export default About
