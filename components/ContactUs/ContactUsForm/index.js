import { useForm } from 'react-hook-form';
import Container from '@/components/containers/Container';
import RevealContentContainer from '@/components/containers/RevealContentContainer';
import { SubmitButton } from '@/components/buttons/SubmitButton';
import styles from './ContactUsForm.module.scss';

function ContactUsForm({ subject, setResponseMessage, getReCaptchaToken }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      Name: '',
      Email: '',
      Subject: subject || '',
      Message: '',
    },
  });

  async function onSubmit(data) {
    const gReCaptchaToken = await getReCaptchaToken();

    if (!gReCaptchaToken) {
      setResponseMessage(['Please, refresh your screen and try it again.']);
      return;
    }
    setResponseMessage(['Submitting...']);
    const res = await fetch('/api/validateReCaptcha', {
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
    reset();
  }

  return (
    <RevealContentContainer>
      <Container>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <input
            className={styles.input}
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
          <p className={styles['error-msg']}>
            {errors.Name?.type === 'required'
              ? 'Name is required'
              : errors.Name?.type === 'pattern'
                ? 'No whitespace'
                : errors.Name?.type === 'minLength'
                  ? 'Must be more than 1 character'
                  : undefined}
          </p>
          <input
            className={styles.input}
            type='email'
            placeholder='email'
            {...register('Email', {
              required: true,
              pattern: /^\S+@\S+$/i,
            })}
          />
          <p className={styles['error-msg']}>
            {errors.Email?.type === 'required' && 'Email is required'}
          </p>
          <input
            className={styles.input}
            type='text'
            placeholder='subject'
            {...register('Subject', {
              required: true,
              minLength: 2,
              pattern: /[^\s-]/i,
            })}
          />
          <p className={styles['error-msg']}>
            {errors.Subject?.type === 'required'
              ? 'Subject is required'
              : errors.Subject?.type === 'pattern'
                ? 'No whitespace'
                : errors.Subject?.type === 'minLength'
                  ? 'Must be more than 1 character'
                  : undefined}
          </p>
          <textarea
            className={styles.textarea}
            {...register('Message', {
              required: true,
              minLength: 2,
              pattern: /[^\s-]/i,
            })}
            placeholder='Write your message here'
          />
          <p className={styles['error-msg']}>
            {errors.Message?.type === 'required'
              ? 'Message is required'
              : errors.Message?.type === 'pattern'
                ? 'No whitespace'
                : errors.Message?.type === 'minLength'
                  ? 'Must be more than 1 character'
                  : undefined}
          </p>
          <label className={styles['subscribe-wrapper']}>
            <input
              className={styles['subscribe-input']}
              type='checkbox'
              placeholder='Subscribe to our DevNews!'
              {...register('Subscribe', {})}
            />
            Subscribe to our DevNews!
          </label>
          <SubmitButton label='Submit' disabled={isSubmitting} />
        </form>
      </Container>
    </RevealContentContainer>
  );
}

export default ContactUsForm;
