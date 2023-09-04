import Image from "next/image"
import imgGrp from '@/assets/Group 803.png'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const Faqs = () => {
    return (
        <section>
            <article className="flex flex-col py-24 px-6 lg:px-36 gap-8">
                <h1 className="text-3xl lg:text-5xl text-center font-semibold">Frequently Asked Questions</h1>
                <div className="w-full">
                    <Accordion type="single" collapsible className="w-full text-left grid lg:grid-cols-2 gap-8">
                        <AccordionItem value="item-1 border-t border-gray-400">
                            <AccordionTrigger className="hover:no-underline text-xl lg:text-2xl text-left">Who is INGRYD Academy?</AccordionTrigger>
                            <AccordionContent className="text-lg">
                                Answer Here.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-2 border-t border-gray-400">
                            <AccordionTrigger className="hover:no-underline text-xl lg:text-2xl text-left">What are the available learning styles at INGRYD Academy?</AccordionTrigger>
                            <AccordionContent className="text-lg">
                                Answer Here.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-3 border-t border-gray-400">
                            <AccordionTrigger className="hover:no-underline text-xl lg:text-2xl text-left">How do I apply to INGRYD academy&apos;s programs</AccordionTrigger>
                            <AccordionContent className="text-lg">
                                Answer Here.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-4 border-t border-gray-400">
                            <AccordionTrigger className="hover:no-underline text-xl lg:text-2xl text-left">What happens after I complete the program?</AccordionTrigger>
                            <AccordionContent className="text-lg">
                                Answer Here.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-5 border-t border-gray-400">
                            <AccordionTrigger className="hover:no-underline text-xl lg:text-2xl text-left">What are the payment options available for the program?</AccordionTrigger>
                            <AccordionContent className="text-lg">
                                Answer Here.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-6 border-t border-gray-400">
                            <AccordionTrigger className="hover:no-underline text-xl lg:text-2xl text-left">Are there any prerequisites for applying to the programs?</AccordionTrigger>
                            <AccordionContent className="text-lg">
                                Answer Here.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-7 border-t border-gray-400">
                            <AccordionTrigger className="hover:no-underline text-xl lg:text-2xl text-left">What happens if I cannot pay for the training?</AccordionTrigger>
                            <AccordionContent className="text-lg">
                                Answer Here.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-8 border-t border-gray-400">
                            <AccordionTrigger className="hover:no-underline text-xl lg:text-2xl text-left">How can I get more information about a specific program?</AccordionTrigger>
                            <AccordionContent className="text-lg">
                                Answer Here.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-9 border-t border-gray-400">
                            <AccordionTrigger className="hover:no-underline text-xl lg:text-2xl text-left">How does the assessment process work?</AccordionTrigger>
                            <AccordionContent className="text-lg">
                                Answer Here.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-10 border-t border-gray-400">
                            <AccordionTrigger className="hover:no-underline text-xl lg:text-2xl text-left">Can I switch programs after enrollment?</AccordionTrigger>
                            <AccordionContent className="text-lg">
                                Answer Here.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-11 border-t border-gray-400">
                            <AccordionTrigger className="hover:no-underline text-xl lg:text-2xl text-left">What is the duration of the program?</AccordionTrigger>
                            <AccordionContent className="text-lg">
                                Answer Here.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-12 border-t border-gray-400">
                            <AccordionTrigger className="hover:no-underline text-xl lg:text-2xl text-left">Will I receive a certification upon completing the program?</AccordionTrigger>
                            <AccordionContent className="text-lg">
                                Answer Here.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-13 border-t border-gray-400">
                            <AccordionTrigger className="hover:no-underline text-xl lg:text-2xl text-left">What kind of support is available after graduation?</AccordionTrigger>
                            <AccordionContent className="text-lg">
                                Answer Here.
                            </AccordionContent>
                        </AccordionItem>


                        
                    </Accordion>
                </div>
            </article>
        </section>
    )
}

export default Faqs