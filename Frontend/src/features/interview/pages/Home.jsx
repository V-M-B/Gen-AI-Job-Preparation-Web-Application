import React from 'react'

const Home = () => {
    return (
        <main>
            <div className="left">
                <textarea name="jobDescription" id="" placeholder='Enter the Job Description'></textarea>

                <div className="right">
                    <label htmlFor="resume">
                        Upload Resume
                    </label>
                    <input type="file" name="resume" accept=".pdf">
                    </input>
                </div>
            </div>
        </main>
    )
}

export default Home