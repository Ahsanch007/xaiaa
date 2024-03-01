import React from 'react';

const ContactComponent = () => {
  return (
    <div className='container mx-auto px-[20px] py-[60px]'>
      <div className="text-center">
        <h2 className='poppins-semi-bold text-[36px] md:text-[48px] text-[#323335] mb-[20px]'>
          Contact
        </h2>
        <p className='text-[18px] roboto-regular text-[#323335] pb-3'>
          Stay connected with us! Fill out our contact form to reach our team quickly and easily. <br /> Whether you have questions, feedback, or inquiries, we&apos;re here to assist you. Simply provide <br /> your details and message, and we&apos;ll get back to you promptly. Let&apos;s start a conversation <br /> today!
        </p>
        <p className='text-[18px] roboto-regular text-[#323335] py-4'>
          E-mail us at <span className='cursor-pointer underline'>info@xaia.nu</span>
        </p>
        <p className='text-[18px] roboto-regular text-[#323335] py-4'>
          Xaia Custom Peptides
          <br />
          Stenströmsgatan 7B
          <br />
          41656 Göteborg
          <br />
          Sweden
        </p>
      </div>
    </div>
  );
}

export default ContactComponent;
