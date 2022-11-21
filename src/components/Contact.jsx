import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [alert, setAlert] = useState({ isShown: false, text: "", style: "" });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const form = useRef();
  const sendEmail = (e) => {
    emailjs
      .sendForm(
        "service_qya75wm",
        "template_y9tw89p",
        form.current,
        "dkkTW8Ico1sMIdVLs"
      )
      .then(
        (result) => {
          setAlert({
            isShown: true,
            text: "Your Message Sent Successfully!",
            style: "success",
          });
        },
        (error) => {
          setAlert({
            isShown: true,
            text: " Message Sent Failed!",
            style: "danger",
          });
        }
      );
    reset();
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact</h2>
          <p>Feel free to contact me at the information given below</p>
        </div>
        <div className="row" data-aos="fade-in">
          <div className="col-lg-5 d-flex align-items-stretch">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>
                  Queens, New York
                </p>
              </div>
              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>awnonbhowmik@outlook.com</p>
              </div>
              <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>+1 (917) 524-6720</p>
              </div>
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193730.13844255864!2d-74.01127537818466!3d40.651193851393906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24369470a592b%3A0x4109d18b6c5c7b05!2sQueens%2C%20NY!5e0!3m2!1sen!2sus!4v1668877127716!5m2!1sen!2sus"
                width="100%"
                height="290 px"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <form
              id="contact-form"
              className="php-email-form"
              ref={form}
              onSubmit={handleSubmit(sendEmail)}
            >
              <div className="row">
                <div className="form-group col-md-6">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    name="user_name"
                    className="form-control"
                    id="name"
                    {...register("user_name", { required: true })}
                  />
                  {errors.user_name && (
                    <small className="text-danger">
                      *User name is required
                    </small>
                  )}
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="user_email"
                    id="email"
                    {...register("user_email", {
                      required: "Email is required",
                      pattern: {
                        value:
                          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: "Please enter a valid email",
                      },
                    })}
                  />
                  {errors.user_email && (
                    <small className="text-danger">
                      *{errors.user_email.message}
                    </small>
                  )}
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  className="form-control"
                  name="message"
                  id="message"
                  rows="10"
                  {...register("message", { required: true })}
                ></textarea>
                {errors.message && (
                  <small className="text-danger">
                    *Message field is required
                  </small>
                )}
              </div>
              <br />
              <div className="text-center">
                <button type="submit" value="Send">
                  Send Message
                </button>
              </div>
              <br />
              {alert.isShown ? (
                <div
                  className={`alert alert-${alert.style} alert-dismissible fade show text-center`}
                  role="alert"
                >
                  <small> {alert.text}</small>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                  ></button>
                </div>
              ) : (
                ""
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
