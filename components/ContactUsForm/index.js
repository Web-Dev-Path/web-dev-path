import { useForm } from 'react-hook-form';
import { useRef } from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import ReCAPTCHA from 'react-google-recaptcha';
import Container from '@/components/containers/Container';
import RevealContentContainer from '@/components/containers/RevealContentContainer';
import SubmitButton from '@/components/buttons/SubmitButton';
import S from './styles';

export const ContactUsFormSubscribe = ({ setMsg }) => {
  return (
    <MailchimpSubscribe
      url={process.env.NEXT_PUBLIC_MAILCHIMP_URL}
      render={({ subscribe, status, message }) => {
        console.info(`MailChimp (contact form): ${status} - ${message}`);
        return (
          <>
            <ContactUsForm
              subscribe={formData => subscribe(formData)}
              setResponseMessage={setMsg}
            />
            {status === 'error' && (
              <S.ResponseOnErrorMsg>
                {`Newsletter subscription error: ${message}`}
              </S.ResponseOnErrorMsg>
            )}
          </>
        );
      }}
    />
  );
};

function ContactUsForm({ subscribe, setResponseMessage }) {
  const contactReCaptchaRef = useRef();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      Name: '',
      Email: '',
      Subject: '',
      Message: '',
    },
  });

  async function onSubmit(data) {
    setResponseMessage(['Submitting...']);

    contactReCaptchaRef.current.reset();
    const gReCaptchaToken = await contactReCaptchaRef.current.executeAsync();

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.Name,
        email: data.Email,
        subject: data.Subject,
        message: data.Message,
        subscribe: data.Subscribe,
        gReCaptchaToken,
      }),
    });

    if (res.ok) {
      setResponseMessage([
        'Your message was sent successfully. We will be in touch with you as soon as possible.',
      ]);
    } else {
      const jsonRes = await res.json();
      setResponseMessage([
        'Error Submitting Message',
        `Status Code: ${res.status} - ${jsonRes.message}`,
        'Please contact support at hello@webdevpath.co',
      ]);
    }

    if (data.Subscribe) {
      subscribe({ EMAIL: data.Email });
    }
    reset();
  }

  return (
    <RevealContentContainer>
      <Container>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <S.Input
            type='text'
            placeholder='name'
            {...register('Name', {
              required: true,
              minLength: 2,
              maxLength: 80,
              //no white space pattern
              pattern: /[^\s-]/i,
            })}
          />
          <S.ErrorMsg>
            {errors.Name?.type === 'required'
              ? 'Name is required'
              : errors.Name?.type === 'pattern'
              ? 'No whitespace'
              : errors.Name?.type === 'minLength'
              ? 'Must be more than 1 character'
              : undefined}
          </S.ErrorMsg>
          <S.Input
            type='email'
            placeholder='email'
            {...register('Email', {
              required: true,
              pattern: /^\S+@\S+$/i,
            })}
          />
          <S.ErrorMsg>
            {errors.Email?.type === 'required' && 'Email is required'}
          </S.ErrorMsg>
          <S.Input
            type='text'
            placeholder='subject'
            {...register('Subject', {
              required: true,
              minLength: 2,
              pattern: /[^\s-]/i,
            })}
          />
          <S.ErrorMsg>
            {errors.Subject?.type === 'required'
              ? 'Subject is required'
              : errors.Subject?.type === 'pattern'
              ? 'No whitespace'
              : errors.Subject?.type === 'minLength'
              ? 'Must be more than 1 character'
              : undefined}
          </S.ErrorMsg>
          <S.TextArea
            {...register('Message', {
              required: true,
              minLength: 2,
              pattern: /[^\s-]/i,
            })}
            placeholder='Write your message here'
          />
          <S.ErrorMsg>
            {errors.Message?.type === 'required'
              ? 'Message is required'
              : errors.Message?.type === 'pattern'
              ? 'No whitespace'
              : errors.Message?.type === 'minLength'
              ? 'Must be more than 1 character'
              : undefined}
          </S.ErrorMsg>
          <S.SubscribeWrapper>
            <S.SubscribeInput
              type='checkbox'
              placeholder='Subscribe to our DevNews!'
              {...register('Subscribe', {})}
            />
            Subscribe to our DevNews!
          </S.SubscribeWrapper>
          <SubmitButton label='Submit' disabled={isSubmitting} />

          <ReCAPTCHA
            ref={contactReCaptchaRef}
            size='invisible'
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
          />
        </S.Form>
      </Container>
    </RevealContentContainer>
  );
}
