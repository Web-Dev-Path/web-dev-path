import { useForm } from 'react-hook-form';
import { useState } from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import Container from '@/components/containers/Container';
import contactUsFormStyles from '@/styles/Contact.module.scss';
import RevealContentContainer from '@/components/containers/RevealContentContainer';
import SubmitButton from '@/components/buttons/SubmitButton';

export const ContactUsFormSubscribe = () => {
  return (
    <MailchimpSubscribe
      url={process.env.NEXT_PUBLIC_MAILCHIMP_URL}
      render={({ subscribe, status, message }) => {
        return (
          <ContactUsForm
            subscribe={formData=>subscribe(formData)}
            subStatus={status}
            subMessage={message}
          />
        );
      }
      }
    />
  );

};

function ContactUsForm({subscribe, subStatus, subMessage}) {
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
  const [apiError, setApiError] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    isSubmitted,
    formState: { errors }
  } = useForm({
    defaultValues: {
      Name: '',
      Email: '',
      Subject: '',
      Message: ''
    }
  });

  async function onSubmit(data) {
    setIsSubmitSuccess(false);
    setApiError(null);

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.Name,
        email: data.Email,
        subject: data.Subject,
        message: data.Message,
        subscribe: data.Subscribe
      })
    });

    if (res.ok) {
      setIsSubmitSuccess(true);
    } else {
      const jsonRes = await res.json();
      setApiError(`Status Code: ${res.status} - ${jsonRes.message}`);
    }

    // subscribe to the newsletter if checked
    // TODO: might need to move this up a little

    if(data.Subscribe){
      subscribe({EMAIL: data.Email})
    }

    reset();
  }

  console.info('these are errors;', errors);

  return (
    <RevealContentContainer>
      <Container>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className={contactUsFormStyles.contact__form}
        >
          <input
            type='text'
            placeholder='name'
            {...register('Name', {
              required: true,
              minLength: 2,
              maxLength: 80,
              //no white space pattern
              pattern: /[^\s-]/i
            })}
            className={`${contactUsFormStyles.contact__input} ${contactUsFormStyles.contact__name}`}
          />
          <p className={contactUsFormStyles.contact__errorMessage}>
            {errors.Name?.type === 'required'
              ? 'Name is required'
              : errors.Name?.type === 'pattern'
                ? 'No whitespace'
                : errors.Name?.type === 'minLength'
                  ? 'Must be more than 1 character'
                  : undefined}
          </p>
          <input
            type='email'
            placeholder='email'
            {...register('Email', {
              required: true,
              pattern: /^\S+@\S+$/i
            })}
            className={`${contactUsFormStyles.contact__input} ${contactUsFormStyles.contact__email}`}
          />
          <p className={contactUsFormStyles.contact__errorMessage}>
            {errors.Email?.type === 'required' && 'Email is required'}
          </p>
          <input
            type='text'
            placeholder='subject'
            {...register('Subject', {
              required: true,
              minLength: 2,
              pattern: /[^\s-]/i
            })}
            className={`${contactUsFormStyles.contact__input} ${contactUsFormStyles.contact__subject}`}
          />
          <p className={contactUsFormStyles.contact__errorMessage}>
            {errors.Subject?.type === 'required'
              ? 'Subject is required'
              : errors.Subject?.type === 'pattern'
                ? 'No whitespace'
                : errors.Subject?.type === 'minLength'
                  ? 'Must be more than 1 character'
                  : undefined}
          </p>
          <textarea
            {...register('Message', {
              required: true,
              minLength: 2,
              pattern: /[^\s-]/i
            })}
            placeholder='Write your message here'
            className={`${contactUsFormStyles.contact__input} ${contactUsFormStyles.contact__message}`}
          />
          <p className={contactUsFormStyles.contact__errorMessage}>
            {errors.Message?.type === 'required'
              ? 'Message is required'
              : errors.Message?.type === 'pattern'
                ? 'No whitespace'
                : errors.Message?.type === 'minLength'
                  ? 'Must be more than 1 character'
                  : undefined}
          </p>
          <div className={contactUsFormStyles.contact__subscribe}>
            <input
              className={contactUsFormStyles.contact__subscribeInput}
              type='checkbox'
              placeholder='Subscribe to our DevNews!'
              {...register('Subscribe', {})}
            />
            Subscribe to our DevNews!
          </div>
          <SubmitButton label='Submit' disabled={isSubmitted || isSubmitSuccess} />
          {isSubmitSuccess && (
            <p className={contactUsFormStyles.contact__successMessage}>
              Your message was sent successfully. We will be in touch with you as soon as possible.
            </p>
          )}
          {apiError && (
            <p className={contactUsFormStyles.contact__successMessage}>
              Error Submitting Message.<br />
              {apiError}. <br />
              Please contact support at hello@webdevpath.co
            </p>
          )}
          {subStatus && (
            <p className={contactUsFormStyles.contact__successMessage}>
              Newsletter Subscription Status: <br />
              {subStatus}. <br />
            </p>
          )}
          {subMessage && (
            <p className={contactUsFormStyles.contact__successMessage}>
              {subMessage}. <br />
            </p>
          )}
        </form>

      </Container>
    </RevealContentContainer>
  );
}
