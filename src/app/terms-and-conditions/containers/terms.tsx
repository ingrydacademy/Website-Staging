import React from 'react'

const Terms = () => {
    return (
        <section className='flex flex-col gap-5 lg:gap-10 px-10 lg:px-20 py-5 lg:py-10'>

            <p className='text-sm lg:text-xl'>Effective Date: February 1st 2023</p>

            <div className='flex flex-col gap-3 lg:gap-5'>
                <h1 className='lg:text-3xl font-semibold'>Acceptance of Terms and Conditions</h1>
                <p className='text-sm lg:text-xl'>By using the services provided by INGRYD Academy, (hereafter referred to as INGRYD), including but not limited to accessing our website, signing up, or enrolling for our services, you agree to comply with and be bound by these Terms and Conditions. If you do not agree with these Terms and Conditions, please do not use our services.</p>
            </div>

            <div className='flex flex-col gap-3 lg:gap-5'>
                <h1 className='lg:text-3xl font-semibold'>Privacy and Data Usage</h1>
                <p className='text-sm lg:text-xl'>INGRYD values your privacy. Please review our Privacy Policy, which details how we collect, use, and protect your personal information. By using our services, you consent to the practices described in our Privacy Policy.</p>
            </div>

            <div className='flex flex-col gap-3 lg:gap-5'>
                <h1 className='lg:text-3xl font-semibold'>User Registration</h1>
                <p className='text-sm lg:text-xl'>
                    a. To access certain features of our services, you may be required to create an account. You agree to provide accurate and current information when registering and to update your information as necessary to maintain its accuracy.
                    <br />
                    <br />
                    b. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account.
                </p>
            </div>

            <div className='flex flex-col gap-3 lg:gap-5'>
                <h1 className='lg:text-3xl font-semibold'>Use of Services</h1>
                <p className='text-sm lg:text-xl'>
                    a. You agree to use our services for lawful purposes only and in compliance with all applicable laws and regulations.
                    <br />
                    <br />
                    b. You may not use our services to engage in any activity that may harm, disrupt, or interfere with our services, other users, or our business operations.
                    <br />
                    <br />
                    c. You may not attempt to gain unauthorized access to any part of our services, accounts, computer systems, or networks.
                </p>
            </div>

            <div className='flex flex-col gap-3 lg:gap-5'>
                <h1 className='lg:text-3xl font-semibold'>User Content</h1>
                <p className='text-sm lg:text-xl'>
                    a. Users may submit content, including text, images, videos, and other materials, to our services. By submitting content, you grant INGRYD a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, distribute, and display the content for the purpose of providing and promoting our services.
                    <br />
                    <br />
                    b. You are solely responsible for the content you submit, and it must not violate the rights of others or any applicable laws. We reserve the right to remove or reject any content that we believe, in our sole discretion, violates these Terms and Conditions.
                </p>
            </div>

            <div className='flex flex-col gap-3 lg:gap-5'>
                <h1 className='lg:text-3xl font-semibold'>Intellectual Property</h1>
                <p className='text-sm lg:text-xl'>
                    a. All content on our website and services, including but not limited to text, graphics, logos, images, software, and any other materials, is the property of INGRYD or its licensors and is protected by copyright, trademark, and other intellectual property laws.
                    <br />
                    <br />
                    b. You may not reproduce, distribute, modify, or create derivative works from our content without our express written consent.
                </p>
            </div>

            <div className='flex flex-col gap-3 lg:gap-5'>
                <h1 className='lg:text-3xl font-semibold'>Termination of Services</h1>
                <p className='text-sm lg:text-xl'>
                    INGRYD reserves the right to suspend or terminate your access to our services, in whole or in part, at our discretion, with or without notice, for any reason, including but not limited to a violation of these Terms and Conditions.
                </p>
            </div>

            <div className='flex flex-col gap-3 lg:gap-5'>
                <h1 className='lg:text-3xl font-semibold'>Disclaimer of Warranties</h1>
                <p className='text-sm lg:text-xl'>
                    INGRYD provides its services "as is" and makes no warranties, express or implied, regarding the accuracy, reliability, or availability of our services. Your use of our services is at your own risk.
                </p>
            </div>

            <div className='flex flex-col gap-3 lg:gap-5'>
                <h1 className='lg:text-3xl font-semibold'>Limitation of Liability</h1>
                <p className='text-sm lg:text-xl'>
                    INGRYD and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use of our services.
                </p>
            </div>

            <div className='flex flex-col gap-3 lg:gap-5'>
                <h1 className='lg:text-3xl font-semibold'>Governing Law</h1>
                <p className='text-sm lg:text-xl'>
                    These Terms and Conditions shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria.
                </p>
            </div>

            <div className='flex flex-col gap-3 lg:gap-5'>
                <h1 className='lg:text-3xl font-semibold'>Changes to Terms and Conditions</h1>
                <p className='text-sm lg:text-xl'>
                    INGRYD Academy reserves the right to update or modify these Terms and Conditions at any time. We will post the revised Terms and Conditions on our website with an updated effective date. Your continued use of our services after any such changes constitutes your acceptance of the updated Terms and Conditions.
                </p>
            </div>

            <div className='flex flex-col gap-3 lg:gap-5'>
                <h1 className='lg:text-3xl font-semibold'>Contact Us</h1>
                <p className='text-sm lg:text-xl'>
                    If you have any questions or concerns regarding these Terms and Conditions, please contact us at <span className='underline underline-offset-4'><a href="mailto:support@ingrydacademy.com">support@ingrydacademy.com.</a></span>
                </p>
            </div>

            <p className='text-sm lg:text-xl'>
                By using our services, you acknowledge that you have read, understood, and agreed to these Terms and Conditions.
            </p>

        </section>
    )
}

export default Terms