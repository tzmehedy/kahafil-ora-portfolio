import React from 'react';

const experiences = [
    { company: "Goinnovior Limited", role: "Founder & Managing Director", duration: "2016-Present" },
    { company: "360D Soul Limited", role: "Founder & Managing Director", duration: "2023-Present" },
    { company: "CodeInnovior", role: "Founder & Managing Director", duration: "2020-Present" },
    { company: "Skylark Soft Limited", role: "Head of Businesses", duration: "2022-2024" },
    { company: "Impress Group", role: "Head of Information Technology Operations.", duration: "2018-2022" },
    { company: "Next IT Ltd.", role: "Founder & Managing Director", duration: "2016-2018" },
    { company: "MASCO Group", role: "Head of Information Technology Department.", duration: "2010-2016" },
];

const Experience = () => {
    return (
        // Section container with adjusted padding, background, and font family
        <section className="px-16 py-20 bg-white text-gray-800 font-sans">
            {/* Heading for the experience section */}
            <h2 className="text-5xl font-normal mb-16 text-gray-900 tracking-tight">
                experience<span className="text-purple-600">.</span>
            </h2>

            {/* New div for the "full line" that spans the entire content width */}
            {/* It's positioned after the heading, and its border-b acts as the separator */}
            <div className="border-b border-gray-300 mb-8"></div> {/* mb-8 for spacing below the line */}

            {/* Main content grid: now a 2-column layout for md screens and above */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                {/* Left column for the descriptive paragraph */}
                <div className="col-span-1 max-w-sm"> {/* Added max-w-sm to narrow the paragraph width as seen in the image */}
                    <p className="text-lg text-gray-600 leading-relaxed"> {/* Adjusted line height */}
                        I’ve worked with companies and clients, both in agency settings. I enjoy collaborating with clients who appreciate the importance of good design.
                    </p>
                </div>

                {/* Right column for the list of experiences */}
                <div className="col-span-1"> {/* Adjusted to col-span-1 to fit the new 2-column parent grid */}
                    {/* Container for the experience list, now without border-t, as the new div above handles it */}
                    {/* Kept border-b for the bottom of the list and divide-y for internal lines */}
                    <div className="border-b border-gray-300 divide-y divide-gray-300">
                        {experiences.map((exp, idx) => (
                            // Each experience item uses a grid for precise column alignment
                            <div key={idx} className="grid grid-cols-3 py-4 items-center"> {/* py-4 for vertical spacing per row */}
                                {/* Company name - first column */}
                                <div className="col-span-1">
                                    <h4 className="text-base font-normal text-gray-800">{exp.company}</h4> {/* Adjusted font size and weight */}
                                </div>
                                {/* Role - second column */}
                                <div className="col-span-1">
                                    <p className="text-base text-gray-600">{exp.role}</p> {/* Adjusted font size */}
                                </div>
                                {/* Duration - third column, right-aligned */}
                                <div className="col-span-1 text-right">
                                    <span className="text-base text-gray-500">{exp.duration}</span> {/* Adjusted font size */}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
