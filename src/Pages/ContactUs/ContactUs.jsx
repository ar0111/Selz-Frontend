import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_lf2tmgd', 'template_cosj09m', form.current, 'tJL8oiV37682Rs2bq')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
          }, (error) => {
              console.log(error.text);
          });
    };

    return (
        <div className='container mx-auto min-h-min my-10 px-10 md:px-0'>
            <h1 className='text-start text-4xl my-6'>Contact Us</h1>
            <div className='flex gap-x-10 flex-col md:flex-row'>
                <div className='md:basis-1/3 sm:basis-1/4'>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="sm:col-span-3">
                            <label className="text-start block text-sm font-medium leading-6 text-gray-900">Name</label>
                            <div className="mt-2">
                                <input type="text" name="from_name" id="first-name" autoComplete="given-name" className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                            </div>
                        </div>

                        <div className="sm:col-span-3 my-3">
                            <label className="text-start block text-sm font-medium leading-6 text-gray-900">Email</label>
                            <div className="mt-2">
                                <input type="email" name="user_email" id="first-name" autoComplete="given-name" className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                            </div>
                        </div>

                        <div className="sm:col-span-3 my-3">
                            <label className="text-start block text-sm font-medium leading-6 text-gray-900">Subject</label>
                            <div className="mt-2">
                                <input type="text" name="subject" id="first-name" autoComplete="given-name" className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                            </div>
                        </div>

                        <div className="sm:col-span-3 my-3">
                            <label className="text-start block text-sm font-medium leading-6 text-gray-900">Type Your Message</label>
                            <div className="mt-2">
                                <textarea id="about" name="message" rows="4" className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                            </div>
                        </div>

                        <input className="btn btn-info w-full my-3" type="submit" value="Submit" />
                    </form>
                </div>   

                <div className='text-left mt-10 md:mt-10'>
                    <h4 className='font-bold'>Selz's Headquarters</h4>
                    <div className='mt-4'>
                        <p>Applied Technology Council</p>
                        <p>201 Redwood Shores Parkway, Suite 240</p>
                        <p>Redwood City, CA 94065</p>
                        <p>(650) 595-1542</p>
                    </div>
                    
                </div>
            </div>
        </div>
        
    );
};

export default ContactUs;