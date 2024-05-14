import React from "react";

const Caselw = () => {
    return(
        <>
            <h2 className="text-[#005082] text-[38px] text-center py-10 px-[10%] font-extrabold w-[75%] mx-auto">Your Offshore Accounting Partner in US, UK, Ireland, Canada & Australia</h2>
            <section className="py-10 px-[10%] flex">
                <div className="text-[#575757] text-[18px] w-2/3 border-r-2 border-borderColor divide-y-[40px] divide-transparent">
                    <p>
                        "Savekar is a leading offshore accounting firm specializing in serving US, UK, Ireland, Canada, and Australian CPA firms and Small & Medium Businesses (SMBs). We offer a comprehensive suite of services designed to streamline your accounting operations, reduce costs, and free up your valuable time to focus on core business activities."
                    </p>
                    
                    {/* 1 Div */}

                    <div className="">
                        <h5 className="text-[20px] font-bold mb-5">Why To Use:</h5>
                        <ul className="divide-y-[10px] divide-transparent">
                            <li> Expertise: Our team boasts extensive knowledge of international accounting standards and best practices.</li>
                            <li> Cost-Effectiveness: Our offshore services offer significant cost savings compared to onshore alternatives.</li>
                            <li> Scalability: We can scale our services to meet your specific needs, whether you're a small business or a large firm.</li>
                            <li>Security: We take data security very seriously and employ robust measures to protect your information.</li>
                            <li>Technology: We leverage the latest accounting technology to ensure efficient and accurate service delivery.</li>
                        </ul>
                    </div>

                    {/* 2 Div */}

                    <div>
                        <h5 className="text-[20px] font-bold mb-5">Mintenance:</h5>
                        <ul className="divide-y-[10px] divide-transparent">
                            <li> Schedule maintenance during off-peak hours, inform users in advance, and backup the website before making changes.</li>
                            <li> Keep WordPress updated, use strong passwords, and limit access.</li>
                            <li> Keep stakeholders informed and establish a reporting channel.</li>
                        </ul>
                    </div>
                
                    {/* 3 Div */}

                    <div>
                        <h5 className="text-[20px] font-bold mb-5">The Challenges:</h5>
                        <ul className="divide-y-[10px] divide-transparent">
                            <li>Theme Customization: Personalize the theme to match your brand with colors, fonts, layouts, and logo.</li>
                            <li>Plugin conflicts leading to site instability.</li>
                            <li> Performance issues due to heavy themes and plugins.</li>
                            <li>Security vulnerabilities and frequent updates.</li>
                        </ul>
                    </div>

                    {/* 3.1 Div */}

                    <div>
                        <h5 className="text-[20px] font-bold mb-5">The Solutions:</h5>
                        <ul className="divide-y-[10px] divide-transparent">
                            <li>Utilize Child Themes: Employ child themes to customize without affecting the parent theme's functionality.</li>
                            <li>Resolve Plugin Conflicts: Identify and deactivate conflicting plugins for stability.</li>
                            <li> Optimize Performance: Streamline themes and plugins to improve website speed.</li>
                            <li>Frequent Updates: Regularly update WordPress, themes, and plugins for security.</li>
                        </ul>
                    </div>

                    {/* 4 Div */}

                    <div>
                        <h5 className="text-[20px] font-bold mb-5">The Approaches:</h5>
                        <ul className="divide-y-[10px] divide-transparent">
                            <li>Set Clear Goals: Define website objectives and target audience to guide development effectively.</li>
                            <li>Choose a Theme: Select a responsive theme that aligns with objectives and offers customization.</li>
                            <li>Optimize Performance: Focus on speed by selecting lightweight themes, optimizing images, and using CDNs.</li>
                            <li>Prioritize UX: Design with intuitive navigation and responsive layout for better user experience.</li>
                            <li>Ensure Security: Implement updates, strong passwords, SSL, and security plugins for protection.</li>
                        </ul>
                    </div>

                </div>
                
                <div className="w-1/3 text-[#575757] text-[18px] px-10">
                    <h3 className="font-bold text-3xl">About</h3>
                    <p>"Savekar is a leading offshore accounting firm specializing in serving US, UK, Ireland, Canada, and Australian CPA firms and Small & Medium Businesses (SMBs). We offer a comprehensive suite of services designed to streamline your accounting operations, reduce costs, and free up your valuable time to focus on core business activities."</p>
                    <div className=" bg-white p-3">
                        <p className="border-y-2 border-borderColor bg-[#F6F6F7]"><span className="font-bold">Company Name :-</span>Savekar</p>
                        <p className="bg-[#FEFEFF]"><span className="font-bold">INDUSTRY :-</span>Accounting</p>
                        <p className="border-y-2 border-borderColor bg-[#F6F6F7]"><span className="font-bold">LOCATION :-</span>Udaipur</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Caselw;