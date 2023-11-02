"use client"
import { useState } from "react"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


const Faqs = () => {
    const [open, setOpen] = useState(false)

    return (
        <section className=" mx-auto">
            <article id="faq" className="flex flex-col py-24 px-6 lg:px-36 gap-8">
                <h1 className="text-xl lg:text-5xl text-center font-semibold">Frequently Asked Questions</h1>
                
                    
                    <Accordion type="single" collapsible className="w-1/2 mx-auto text-left flex flex-wrap gap-6 justify-between">
                        <AccordionItem value="item-2" className="border-gray-300 w-full">
                            <AccordionTrigger className="hover:no-underline text-sm font-semibold lg:text-2xl text-left">How do I apply to INGRYD Academy's programs?
                            </AccordionTrigger>
                            <AccordionContent className="text-xs lg:text-lg">
                                Applying to our programs is easy. Start by “Signing up”, once completed. Enroll in any of
                                our courses you're interested in. Follow the prompts to complete your application.

                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-3" className="border-gray-300 w-full">
                            <AccordionTrigger className="hover:no-underline text-sm font-semibold lg:text-2xl text-left">What are the payment options available for the programs?</AccordionTrigger>
                            <AccordionContent className="text-xs lg:text-lg">
                                <p>We offer different payment options:</p>
                                <ul>
                                    <li>
                                        - One-time Payment: Pay the full program fee upfront
                                    </li>
                                    <li>
                                        - Payment on installment: Pay the program fee in multiple installments.

                                    </li>

                                </ul>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-5" className="border-gray-300 w-full">
                                <AccordionTrigger className="hover:no-underline text-sm font-semibold lg:text-2xl text-left">How does the assessment process work?</AccordionTrigger>
                                <AccordionContent className="text-xs lg:text-lg">
                                    Before enrolling in a course, all applicants are required to take an assessment related to
                                    their selected program. This helps us understand your current knowledge level and tailor
                                    the program to your needs. The assessment is designed to evaluate your familiarity with
                                    the course content
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-5" className="border-gray-300 w-full">
                                <AccordionTrigger className="hover:no-underline text-sm font-semibold lg:text-2xl text-left">What is the duration of a program?
                                </AccordionTrigger>
                                <AccordionContent className="text-xs lg:text-lg">
                                    Our programs run for a total of 6 months. The first 3 months consist of intensive training,
                                    and 3 months of hands-on experience with our industry partners, allowing you to apply
                                    what you've learned in real-world scenarios.

                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-9" className="border-gray-300 w-full">
                                <AccordionTrigger className="hover:no-underline text-sm font-semibold lg:text-2xl text-left">What kind of support is available after graduation?</AccordionTrigger>
                                <AccordionContent className="text-xs lg:text-lg">
                                    We offer ongoing support even after graduation. This includes access to our alumni
                                    network, mentorship, career counseling, and updates on industry trends. We are
                                    committed to helping you achieve your career goals.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-5" className="border-gray-300 w-full">
                                <AccordionTrigger className="hover:no-underline text-sm font-semibold lg:text-2xl text-left">What happens after I complete the program?
                                </AccordionTrigger>
                                <AccordionContent className="text-xs lg:text-lg">

                                    Upon successful completion of the program, you'll receive a certification that demonstrates
                                    your proficiency in your chosen IT field. Additionally, we place graduates in our partner
                                    companies you’ll receive hands on experience to apply all that was learnt during training.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-8" className="border-gray-300 w-full">
                                <AccordionTrigger className="hover:no-underline text-sm font-semibold lg:text-2xl text-left">Will I receive a certification upon completing the program?</AccordionTrigger>
                                <AccordionContent className="text-xs lg:text-lg">
                                    Yes, upon successful completion of the program requirements, you will receive a
                                    comprehensive certification from INGRYD Academy. This certification showcases your
                                    proficiency and skills in the selected program.

                                </AccordionContent>
                            </AccordionItem>

                            {/* <AccordionItem value="item-1" className="border-gray-300 w-full">
                                <AccordionTrigger className="hover:no-underline text-sm font-semibold lg:text-2xl text-left">Who is INGRYD Academy?</AccordionTrigger>
                                <AccordionContent className="text-xs lg:text-lg">
                                    INGRYD Academy is a specialized training institution that offers comprehensive programs
                                    in various IT skills, including product management, DevOps, React, Cybersecurity, Python,
                                    Java, NodeJS, Linux, and IT solution sales. Our goal is to equip individuals with the
                                    necessary knowledge and skills to excel in the rapidly evolving IT industry
                                </AccordionContent>
                            </AccordionItem>




                           

                           
                            
                            <AccordionItem value="item-5" className="border-gray-300 w-full">
                                <AccordionTrigger className="hover:no-underline text-sm font-semibold lg:text-2xl text-left">What are the available learning styles at INGRYD Academy?
                                </AccordionTrigger>
                                <AccordionContent className="text-xs lg:text-lg">
                                    <p>We offer two learning styles to accommodate diverse needs:</p>
                                    <ul>
                                        <li>
                                            <b>Hybrid Learning:</b> This style combines in-classroom and virtual classes. It includes 2 days
                                            of in-class lectures and 2 days of virtual classes per week, providing a balanced and
                                            interactive learning experience.

                                        </li>
                                        <li>
                                            <b>Fully Virtual Learning:</b> We also offer a remote experience for selected courses. You'll have
                                            access to all lectures and resources online, allowing flexibility while still benefiting from
                                            our comprehensive curriculum

                                        </li>

                                    </ul>

                                </AccordionContent>
                            </AccordionItem>
                           
                        </Accordion>

                    </li>
                    <li className={`${open ? "block" : "hidden"} lg:block lg:basis-1/2`}>
                        <Accordion type="single" collapsible className="w-full text-left flex flex-wrap gap-6 justify-between">
                            <AccordionItem value="item-6" className="border-gray-300 w-full">
                                <AccordionTrigger className="hover:no-underline text-sm font-semibold lg:text-2xl text-left">Are there any prerequisites for applying to the programs?</AccordionTrigger>
                                <AccordionContent className="text-xs lg:text-lg">
                                    <p>The prerequisites for joining the INGRYD Academy vary depending on the program.
                                        However, the following are standard requirements to join the INGRYD Academy.</p>
                                    <ul>
                                        <li>
                                            - Must be between the age of 18 - 35
                                        </li>
                                        <li>
                                            - Must be a graduate in computer sciences, business, and related courses.

                                        </li>
                                        <li>
                                            - Has completed youth service or currently serving (with some exceptions)

                                        </li>
                                        <li>
                                            - Be available for training for the entire duration of the training.

                                        </li>
                                        <li>
                                            - Must be willing to wait a three-month period after training for job placements

                                        </li>
                                        <li>
                                            - Must be willing to sign a post-dated cheque with full training fee.

                                        </li>
                                        <li>
                                            - Must be willing to attend the additional job fitness training and mentorship

                                        </li>
                                        <li>
                                            - Be of proven integrity, with sensitivity to confidentiality requirements.

                                        </li>
                                        <li>
                                            - Be a team player and self-motivated.

                                        </li>
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-5" className="border-gray-300 w-full">
                                <AccordionTrigger className="hover:no-underline text-sm font-semibold lg:text-2xl text-left">How can I get more information about a specific program?
                                </AccordionTrigger>
                                <AccordionContent className="text-xs lg:text-lg">

                                    To learn more about a particular program, visit our website's "Courses" section. Each
                                    program has a dedicated page with detailed information about its curriculum, price, and
                                    learning outcomes.
                                </AccordionContent>
                            </AccordionItem>




                            <AccordionItem value="item-7" className="border-gray-300 w-full">
                                <AccordionTrigger className="hover:no-underline text-sm font-semibold lg:text-2xl text-left">Can I switch programs after enrollment?</AccordionTrigger>
                                <AccordionContent className="text-xs lg:text-lg">
                                    While we encourage you to choose a program that aligns with your goals, we understand
                                    that circumstances may change. If you wish to switch programs, please contact our
                                    admissions team, and they will assist you with the necessary steps.
                                </AccordionContent>
                            </AccordionItem>

                            
                           

                            <AccordionItem value="item-10" className="border-gray-300 w-full">
                                <AccordionTrigger className="hover:no-underline text-sm font-semibold lg:text-2xl text-left">Are the hands-on-experience collaborative or individual?</AccordionTrigger>
                                <AccordionContent className="text-xs lg:text-lg">
                                    Our hands-on-experience encourage collaboration. During your industry experience, you’ll
                                    have the opportunity to work in teams, to solve challenges, share insights, and learn from
                                    each other's experiences.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-11" className="border-gray-300 w-full">
                                <AccordionTrigger className="hover:no-underline text-sm font-semibold lg:text-2xl text-left">What types of industry partners do you collaborate with for hands-on
                                    experience?</AccordionTrigger>
                                <AccordionContent className="text-xs lg:text-lg">
                                    Our industry partners encompass a diverse range of organizations, from startups to
                                    established enterprises. This ensures that you gain exposure to different work
                                    environments and real-world projects relevant to your specialization.
                                </AccordionContent>
                            </AccordionItem> */}


                        </Accordion>
{/*                     
                    <p className="cursor-pointer text-primary font-semibold ml-auto lg:hidden" onClick={() => setOpen(true)}>see more</p> */}
          

            </article>
        </section>
    )
}

export default Faqs