import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mbjwoqdn");

  if (state.succeeded) {
    return (
      <>
        <p>Message sent!</p>
      </>
    );
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1 col-md-6 col-md-offset-3 contact-form">
            <input id="name" type="textarea" name="name" className="form-control" placeholder="Name" required />
          </div>
          <div className="col-xs-10 col-xs-offset-1 col-md-6 contact-form">
            <input id="email" type="email" name="email" className="form-control" placeholder="Email" required />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>
        </div>

        <div className="row">
          <div className="col-xs-10 col-xs-offset-1 col-md-12 contact-form">
            <input type="text" name="subject" className="form-control" placeholder="Subject" required />
          </div>
        </div>

        <div className="row">
          <div className="col-xs-10 col-xs-offset-1 col-md-12 contact-form">
            <textarea name="message" className="form-control" rows={4} placeholder="Message" required />
          </div>
        </div>


        {/* <label htmlFor="email">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
        /> */}
        {/* <textarea
          id="message"
          name="message"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        /> */}
        <div className ="center-button-wrapper">
          <button type="submit" disabled={state.submitting} className="btn btn-primary btn-lg custom-button">
            Send Message
          </button>
        </div>
      </form>


      <form action="https://formspree.io/f/mbjwoqdn" method="POST">
        {/* <div className="row">
          <div className="col-xs-10 col-xs-offset-1 col-md-6 col-md-offset-3 contact-form">
            <input type="textarea" name="name" className="form-control" placeholder="Name" required />
          </div>
          <div className="col-xs-10 col-xs-offset-1 col-md-6 contact-form">
            <input type="email" name="email" className="form-control" placeholder="Email" required />
          </div>
        </div> */}
        {/* <div className="row">
          <div className="col-xs-10 col-xs-offset-1 col-md-12 contact-form">
            <input type="text" name="subject" className="form-control" placeholder="Subject" required />
          </div>
        </div> */}
        {/* <div className="row">
          <div className="col-xs-10 col-xs-offset-1 col-md-12 contact-form">
            <textarea name="message" className="form-control" rows={4} placeholder="Message" required></textarea>
          </div>
        </div> */}
        <input type="text" name="_gotcha" style={{"display": "none"}} />
        {/* <div className ="center-button-wrapper">
          <button type ="submit" className ="btn btn-primary btn-lg custom-button">Send Message</button>
        </div> */}
        <input type ="hidden" name="_next" value="https://amverni.github.io"/>
      </form>

      <div className="row">
        <div className="col-xs-12 col-md-12">
          <p id="send-message-disclaimer"><em>
            After hitting send message, if you get a page telling you that this form needs activation, don't worry, I'll still get your message. This happens because the form gets deactivated after a period of time of not being used. Oddly enough my website is not most people's preferred method of contacting me, but don't let that stop you!
          </em></p>
        </div>
      </div>
    </>
  );
}
